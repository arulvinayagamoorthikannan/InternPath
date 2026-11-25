// Supabase Edge Function: admin-only reachability check for an internship's application link.
// Deploy: supabase functions deploy check-link
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4';
const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };
const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { ...cors, 'Content-Type': 'application/json' } });
// Basic SSRF guard (blocks localhost/private ranges by hostname; not a full defence against DNS tricks).
const PRIVATE = /^(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.|0\.|\[|.*\.(local|internal)$)/i;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  const sb = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: req.headers.get('Authorization') ?? '' } } });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return json({ error: 'Not signed in' }, 401);
  const { data: admin } = await sb.from('admins').select('user_id').eq('user_id', user.id).maybeSingle();
  if (!admin) return json({ error: 'Admins only' }, 403);

  let url: URL;
  try { url = new URL((await req.json()).url); } catch { return json({ ok: false, error: 'Invalid URL' }, 400); }
  if (url.protocol !== 'https:' || PRIVATE.test(url.hostname)) return json({ ok: false, error: 'Only public https URLs are allowed' }, 400);

  const tryFetch = (method: string) => fetch(url, { method, redirect: 'follow', signal: AbortSignal.timeout(8000), headers: { 'User-Agent': 'InternPathLinkChecker/1.0' } });
  try {
    let r = await tryFetch('HEAD');
    if (r.status === 405 || r.status === 501) r = await tryFetch('GET');
    // 401/403/429 mean the site answered but blocks bots, so the page exists.
    return json({ ok: r.status < 400 || [401, 403, 429].includes(r.status), status: r.status });
  } catch (e) { return json({ ok: false, error: String(e) }); }
});

# InternPath (HTML/CSS/JS + Supabase)
1. Create a project at supabase.com. SQL Editor → paste and run `supabase/schema.sql` (tables and RLS policies), then run `supabase/migrations/004_degree_aware_internship_catalog.sql` and `supabase/migrations/005_verified_companies_only.sql`. The catalogue intentionally starts empty rather than publishing fictional or unverified listings.
2. Project Settings → API: copy the URL and anon key into `js/config.js`.
   If the schema was already run, apply `supabase/migrations/003_api_role_grants.sql` in the SQL Editor to grant the API roles the table privileges used by the app, then apply migrations `004` and `005`. Migration `005` hides and expires the old placeholder-company seed listings.
3. Authentication → Providers → Email. For quick testing, turn off "Confirm email" (otherwise users must click an emailed link). Add your local and deployed `pages/account/reset-password.html` URLs to Authentication → URL Configuration → Redirect URLs.
4. Run `python -m http.server` in this folder and open http://localhost:8000. The welcome page is the site entry point; Sign In and Create Account open the dedicated authentication pages.
5. Sign up in the app, then make yourself admin in the SQL Editor:
   `insert into admins(user_id) select id from auth.users where email='you@example.com';`
6. In Admin → Companies, add companies using their official HTTPS websites and verify their identity before approving them. Mark sources trusted only after review. Add internships only with a trusted company, source, and official opportunity URL; check the URL and verify the listing before it becomes visible to students.
Security: the anon key is public by design; protection comes from Row Level Security in schema.sql. Never put the service_role key in this code.
7. Link checker (admin button "Check link"): install the Supabase CLI, then `supabase link --project-ref <ref>` and `supabase functions deploy check-link`. If you ran an older schema, also run `supabase/migrations/002_link_check.sql`.
Still needed for production: email templates and hosting (Netlify/Vercel/GitHub Pages).

The internship catalogue includes clearly identified fictional practice listings, stored in the frontend practice catalogue rather than Supabase. They are not verified openings; practice application exercises are not sent to employers.

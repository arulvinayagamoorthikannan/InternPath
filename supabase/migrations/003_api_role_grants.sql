-- Apply to projects where schema.sql was already run without API role grants.
grant usage on schema public to anon, authenticated;
grant select on domains, companies, sources, internships to anon, authenticated;
grant insert, update, delete on domains, companies, sources, internships to authenticated;
grant select, insert, update on profiles to authenticated;
grant select on admins to authenticated;
grant select, insert, update, delete on saved_internships to authenticated;
grant select, insert, update on applications to authenticated;
grant select, insert, delete on roadmap_progress to authenticated;
grant usage, select on all sequences in schema public to authenticated;

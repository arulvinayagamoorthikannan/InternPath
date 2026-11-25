-- Add explicit degree requirements without adding unverified sample opportunities.
alter table internships add column if not exists degrees text[] not null default '{ANY}';

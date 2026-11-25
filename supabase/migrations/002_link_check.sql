-- Only needed if you already ran an older schema.sql
alter table internships add column if not exists link_ok boolean;
alter table internships add column if not exists link_checked_at timestamptz;

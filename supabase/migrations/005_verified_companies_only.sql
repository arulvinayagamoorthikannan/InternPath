-- Company approval is separate from checking an individual internship.
alter table companies add column if not exists verified boolean not null default false;

-- Revoke the starter catalogue entries that used reserved placeholder domains.
update companies set verified=false
where site is null
 or site ~* '^https://(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2[0-9]|3[01])\.|169\.254\.|0\.|\[)'
 or site ~* '\.(local|internal)(/|$)'
 or site ~* '(^|//)(localhost|[^/]*\.(example|invalid|test|localhost))(:[0-9]+)?(/|$)'
 or site ~* '(^|//)([^/]+\.)?example\.(com|net|org)(:[0-9]+)?(/|$)';

update sources set trusted=false
where name in ('Official Company Career Page','Recognized Internship Platform','Government Portal','Unverified Referral');

update internships set admin_verified=false,link_ok=null,link_checked_at=null,expired=true
where company_id in (
 select id from companies
 where site is null
  or site ~* '^https://(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2[0-9]|3[01])\.|169\.254\.|0\.|\[)'
  or site ~* '\.(local|internal)(/|$)'
  or site ~* '(^|//)(localhost|[^/]*\.(example|invalid|test|localhost))(:[0-9]+)?(/|$)'
  or site ~* '(^|//)([^/]+\.)?example\.(com|net|org)(:[0-9]+)?(/|$)'
);

drop policy if exists "read" on companies;
drop policy if exists "read verified companies" on companies;
create policy "read verified companies" on companies for select using(is_admin() or (
 verified and site is not null and site ~* '^https://'
 and site !~* '^https://(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2[0-9]|3[01])\.|169\.254\.|0\.|\[)'
 and site !~* '\.(local|internal)(/|$)'
 and site !~* '(^|//)(localhost|[^/]*\.(example|invalid|test|localhost))(:[0-9]+)?(/|$)'
 and site !~* '(^|//)([^/]+\.)?example\.(com|net|org)(:[0-9]+)?(/|$)'
));
drop policy if exists "read" on internships;
drop policy if exists "read verified opportunities" on internships;
create policy "read verified opportunities" on internships for select using(is_admin() or (
 admin_verified and link_ok is true and not expired and deadline>=current_date
 and exists(select 1 from companies c where c.id=internships.company_id and c.verified
  and c.site is not null and c.site ~* '^https://'
  and c.site !~* '^https://(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2[0-9]|3[01])\.|169\.254\.|0\.|\[)'
  and c.site !~* '\.(local|internal)(/|$)'
  and c.site !~* '(^|//)(localhost|[^/]*\.(example|invalid|test|localhost))(:[0-9]+)?(/|$)'
  and c.site !~* '(^|//)([^/]+\.)?example\.(com|net|org)(:[0-9]+)?(/|$)')
 and exists(select 1 from sources s where s.id=internships.source_id and s.trusted)
));

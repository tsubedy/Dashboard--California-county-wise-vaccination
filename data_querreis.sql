-- Some querries
-- countywise population data querry
create view population as
SELECT f.county, p.population
FROM county_fips f
join county_pop p
on f.fips = p.fips;

-- tests data querry
create view tests as
SELECT area as county, sum(total_tests) as tests, sum(positive_tests) as positive 
from county_tests_data 
group by area;

-- cases data querry
create view cases as
SELECT area as county, sum(cases) as cases, sum(deaths) as deaths 
from county_cases_data 
group by area;

-- vaccine data querry
create view vac as
SELECT county, sum(fully_vaccinated) as full, sum(partially_vaccinated) as partial 
FROM county_vac_data
GROUP BY county;

-- combined data by county
create view county_wise_combined_data as
select p.county, p.population, t.tests, t.positive, c.cases, c.deaths, v.total_full, v.total_partial
from population p
join tests t 
on p.county = t.county
join cases c
on p.county = c.county
join vac v
on p.county = v.county;

-- select counties with high population density
create view high_pop_density as
SELECT f.county, p.population
FROM county_fips f
join county_pop p
on f.fips = p.fips
where p.density>=1000;

-- high density counties combined data
select a.*
from county_wise_combined_data a
join high_pop_density h
on a.county = h.county;



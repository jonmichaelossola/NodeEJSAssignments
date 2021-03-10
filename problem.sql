CREATE TABLE people (
	id serial PRIMARY KEY,
	first_name varchar,
	last_name varchar,
	birthday Date
);

CREATE TABLE family (
	parentOne int references people(id),
	parentTwo int references people(id),
	child int references people(id)
);
\echo 'You are about to delete the lifetracker database'
\prompt 'Return for yes or ctrl-c to cancel > ' res

-- delete lifetracker database and create new database
DROP DATABASE lifetracker;
CREATE DATABASE lifetracker;

-- connect to lifetracker db
\c lifetracker

-- run schema script
\i lifetracker-schema.sql

\echo 'You are about to delete the lifetracker_test database'
\prompt 'Return for yes or ctrl-c to cancel > ' res

-- delete lifetracker-test database and create new database
DROP DATABASE lifetracker_test;
CREATE DATABASE lifetracker_test;

-- connect to lifetracker-test
\c lifetracker_test

-- run schema scriptf
\i lifetracker-schema.sql;


CREATE DATABASE DRIFT_DB;

CREATE TABLE rivers
(
    river_id SERIAL PRIMARY KEY,
    state VARCHAR(24),
    river VARCHAR(24),
    watershed VARCHAR(24),
    geoTag VARCHAR(24),
    usgsId VARCHAR(24)
);
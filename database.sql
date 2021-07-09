-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
React Shopping List

CREATE TABLE shopping_list (
    "id" serial PRIMARY KEY,
    "name" varchar(80),
    "quantity" DECIMAL(p,s),
    "unit" varchar(20),
    "purchased" boolean default 'false'
)

INSERT INTO shopping_list ("name", "quantity", "unit", "purchased")
VALUES ('milk', '1', 'gallon'),
('eggs', '1', 'dozen'),
('beef', '1', 'pound');
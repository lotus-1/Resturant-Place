BEGIN;

DROP TABLE IF EXISTS restaurant CASCADE;
DROP TABLE IF EXISTS customers CASCADE;

CREATE TABLE restaurant (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NOT NULL,
  business owner VARCHAR NOT NULL,
  type of resturant VARCHAR NOT NULL
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first name VARCHAR(30) NOT NULL,
  last name VARCHAR(30) NOT NULL,
  working VARCHAR(30) NOT NULL,
  location VARCHAR(30) NOT NULL
);


INSERT INTO restaurant (name, location, business owner, type of resturant) VALUES
('Lospago', 'Osfia', 'Feras', 'Italian');
INSERT INTO resturant (name, location, business owner, type of resturant) VALUES
('Steak wood', 'The Golan Heights', 'Yosef', 'Meat');
INSERT INTO resturant (name, location, business owner, type of resturant) VALUES
('Dream Nemo', 'Haifa', 'David', 'seafood & sushi');


INSERT INTO customers (name, first name, last name, working, location) VALUES
('Adriana', 'Zev', 'Fashion Designer', 'Kiryate Shmone');
INSERT INTO customers (name, first name, last name, working, location) VALUES
('Noam', 'Levi', 'Programmer', 'Krayot');

COMMIT;

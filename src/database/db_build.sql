BEGIN;

DROP TABLE IF EXISTS restaurant CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS rating CASCADE;

CREATE TABLE restaurant (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NOT NULL,
  business_owner VARCHAR NOT NULL,
  type_of_resturant VARCHAR NOT NULL
  -- id INTEGER REFERENCES customers(
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  working VARCHAR(30) NOT NULL,
  location VARCHAR(30) NOT NULL,
  restaurant_id REFERENCES restaurant(id)
);

CREATE TABLE rating (
  rating_id SERIAL PRIMARY KEY,
  rate INTEGER NOT NULL CHECK (rate BETWEEN 0 AND 10),
  restaurant_id REFERENCES restaurant(id),
  customers_id REFERENCES customers(id)
);



INSERT INTO restaurant (name, location, business_owner, type_of_resturant) VALUES
('Lospago', 'Osfia', 'Feras', 'Italian');
INSERT INTO restaurant (name, location, business_owner, type_of_resturant) VALUES
('Steak wood', 'The Golan Heights', 'Yosef', 'Meat');
INSERT INTO restaurant (name, location, business_owner, type_of_resturant) VALUES
('Dream Nemo', 'Haifa', 'David', 'seafood & sushi');


INSERT INTO customers (first_name, last_name, working, location) VALUES
('Adriana', 'Zev', 'Fashion Designer', 'Kiryate Shmone');
INSERT INTO customers (first_name, last_name, working, location) VALUES
('Noam', 'Levi', 'Programmer', 'Krayot');

COMMIT;

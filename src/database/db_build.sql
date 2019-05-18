BEGIN;

DROP TABLE IF EXISTS restaurant CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS rating CASCADE;

CREATE TABLE restaurant (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NOT NULL,
  business_owner VARCHAR NOT NULL,
  type_of_restaurant VARCHAR NOT NULL
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  working VARCHAR(30) NOT NULL,
  location VARCHAR(30) NOT NULL,
  restaurant_id INTEGER REFERENCES restaurant(id)
);

CREATE TABLE rating (
  rating_id SERIAL PRIMARY KEY,
  rate INTEGER NOT NULL CHECK (rate BETWEEN 0 AND 10),
  restaurant_id  INTEGER REFERENCES restaurant(id),
  customers_id INTEGER REFERENCES customers(id)
);



INSERT INTO restaurant (name, location, business_owner, type_of_restaurant) VALUES
('Lospago', 'Osfia', 'Walaa', 'Italian');
INSERT INTO restaurant (name, location, business_owner, type_of_restaurant) VALUES
('Steak wood', 'The Golan Heights', 'Yosef', 'Meat');
INSERT INTO restaurant (name, location, business_owner, type_of_restaurant) VALUES
('Dream Nemo', 'Haifa', 'David', 'seafood & sushi');


INSERT INTO customers (first_name, last_name, working, location) VALUES
('Fares', 'Halaby', 'Director of a gas station', 'Daliat El Carmel');
INSERT INTO customers (first_name, last_name, working, location) VALUES
('Adriana', 'Gel', 'Fashion Designer', 'Kiryate Shmone');
INSERT INTO customers (first_name, last_name, working, location) VALUES
('Noam', 'Levi', 'Programmer', 'Krayot');

COMMIT;

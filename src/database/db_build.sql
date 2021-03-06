BEGIN;

DROP TABLE IF EXISTS restaurant CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS rating CASCADE;
DROP TABLE IF EXISTS users;

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
  customers_id INTEGER REFERENCES restaurant(id)
);

CREATE TABLE rating (
  rating_id SERIAL PRIMARY KEY,
  rate INTEGER NOT NULL CHECK (rate BETWEEN 0 AND 10),
  restaurant_id  INTEGER REFERENCES restaurant(id),
  customers_id INTEGER REFERENCES customers(id)
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
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
('Adriana', 'Levi', 'Fashion Designer', 'Kiryate Shmone');
INSERT INTO customers (first_name, last_name, working, location) VALUES
('Noam', 'Gel', 'Programmer', 'Krayot');


INSERT INTO users (email, password) VALUES ('saeedsara142@gmail.com', 756598);
INSERT INTO users (email, password) VALUES ('amanhalabyar7@gmail.com', 123456);


COMMIT;

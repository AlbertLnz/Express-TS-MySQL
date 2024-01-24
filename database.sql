CREATE DATABASE IF NOT EXISTS hpshop;
USE hpshop;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(50) UNIQUE,
    description VARCHAR(255),
    price DECIMAL(10, 2)
);

INSERT INTO products (code, description, price) VALUES ('P001', 'Lightsaber (Anakin Skywalker)', 199.99);
INSERT INTO products (code, description, price) VALUES ('P002', 'Millennium Falcon Model Kit', 79.99);
INSERT INTO products (code, description, price) VALUES ('P003', 'Stormtrooper Helmet Replica', 149.99);
INSERT INTO products (code, description, price) VALUES ('P004', 'Jedi Robe', 59.99);
INSERT INTO products (code, description, price) VALUES ('P005', 'R2-D2 Interactive Droid', 129.99);
INSERT INTO products (code, description, price) VALUES ('P006', 'Chewbacca Plush Toy', 24.99);
INSERT INTO products (code, description, price) VALUES ('P007', 'Death Star LEGO Set', 199.99);
INSERT INTO products (code, description, price) VALUES ('P008', 'Yoda Backpack', 39.99);
INSERT INTO products (code, description, price) VALUES ('P009', 'Star Wars Poster Collection', 14.99);
INSERT INTO products (code, description, price) VALUES ('P010', 'Darth Vader Mug', 9.99);

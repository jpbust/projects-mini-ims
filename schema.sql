\c other;

DROP DATABASE IF EXISTS ims;
CREATE DATABASE ims;

\c ims;


  CREATE TABLE product(
    id SERIAL UNIQUE,
    UPC VARCHAR(50),
    ASIN VARCHAR(50),
    product_name VARCHAR(150),
    image_url VARCHAR(1000),
    class VARCHAR(250),
    company VARCHAR(250),
    cost numeric,
    amazon_price numeric,
    PRIMARY KEY (id)
  );

INSERT INTO product
  (upc,
  product_name,
  company,
  cost)
VALUES
  ('014633376258','Nintendo Switch: Fifa 21','Electronic Arts', 20);



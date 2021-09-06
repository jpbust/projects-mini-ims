\c other;

DROP DATABASE IF EXISTS ims;
CREATE DATABASE ims;

\c ims;


DROP TABLE product;


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
    qty integer,
    PRIMARY KEY (id)
  );


  CREATE TABLE inventoryTrack(
    id SERIAL UNIQUE,
    product_id INT,
    in_or_out boolean,
    qty integer,
    id SERIAL UNIQUE,
    FOREIGN KEY (product_id) REFERENCES product(id)
  );




INSERT INTO product
  (upc,
  product_name,
  company,
  cost,
  qty)
VALUES
  ('014633376258','Nintendo Switch: Fifa 21','Electronic Arts', 20, 3);


INSERT INTO product
  (upc,
  product_name,
  company,
  cost,
  qty)
VALUES
  ('024631276258','Nintendo Switch: Mario Kart','Nintendo', 50, 5);


INSERT INTO product
  (upc,
  image_url,
  product_name,
  company,
  cost,
  qty)
VALUES
  ('047875884366','https://i5.walmartimages.com/dfw/6e29e393-7580/k2-_d84103a8-f97c-4002-9382-61348d1f07e5.v1.jpg','PC: Call of Duty','Publisher', 50, 3);



--
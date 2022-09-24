CREATE TABLE Product(
    id SERIAL PRIMARY KEY,
    pName varchar(100) not null, 
    price decimal(10,2) not null, 
    category varchar(100)
);
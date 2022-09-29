CREATE TABLE Product(
    id SERIAL PRIMARY KEY,
    pname varchar(100) not null, 
    price decimal(10,2) not null, 
    category varchar(100)
);
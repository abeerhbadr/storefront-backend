CREATE TABLE StoreOrder(
    id SERIAL PRIMARY KEY, 
    userId integer not null, 
    orderStatus varchar(50) not null default 'active'
);
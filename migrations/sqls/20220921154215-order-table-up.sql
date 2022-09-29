CREATE TABLE StoreOrder(
    id SERIAL PRIMARY KEY, 
    userid integer not null, 
    ostatus varchar(50) not null default 'active'
);
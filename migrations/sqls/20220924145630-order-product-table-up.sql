CREATE TABLE OrderProduct(
    orderid integer not null references StoreOrder(id),
    productid integer not null references product(id),
    productqty integer not null
);
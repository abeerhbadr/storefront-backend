CREATE TABLE OrderProduct(
    orderId integer not null references StoreOrder(id),
    productId integer not null references product(id),
    productQty integer not null
);
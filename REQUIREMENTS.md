# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
```
[GET] /store/products
```
- Show
```
[GET] /store/products/:id
```
- Create [token required]
```
[POST] /store/products
```
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
```
[GET] /store/users
```
- Show [token required]
```
[GET] /store/users/:id
```
- Create N[token required]
```
[POST] /store/users
```

#### Orders
- Current Order by user (args: user id)[token required]
```
[GET] /store/orders/active
```
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## Database Schema
#### Product table
```
id SERIAL PRIMARY KEY,
pName varchar(100) not null, 
price decimal(10,2) not null, 
category varchar(100)
```

#### Person table
```
id serial primary key, 
firstName varchar(100) not null,
lastName varchar(100) not null, 
password_ varchar(100) not null
```
#### Order table
```
id SERIAL PRIMARY KEY, 
userId integer not null, 
 orderStatus varchar(50) not null default 'active'
```

#### OrderProduct table
```
orderId integer not null references StoreOrder(id),
productId integer not null references product(id),
productQty integer not null
```
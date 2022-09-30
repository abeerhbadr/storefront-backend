# Storefront Backend Project
### To run the project

### Install the dependincies
```
npm install
```

### Create databases and user
```
CREATE DATABASE storefront;
CREATE DATABASE storefront_test;
CREATE USER udacityuser WITH SUPERUSER PASSWORD 'password123';

\c storefront
GRANT ALL PRIVILIDGES ON DATABASE storefront TO udacityuser;
\c storefront_test
GRANT ALL PRIVILIDGES ON DATABASE storefront_test TO udacityuser;
```

### Add .env file and add the following
```
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=storefront
POSTGRES_TEST_DB=storefront_test
POSTGRES_USER=udacityuser
POSTGRES_PASSWORD=password123
ENV=dev
BCRYPT_PASSWORD=my-secret-password
SALT_ROUNDS=10
TOKEN_SECRET=SECRET
```
### Ports
```
express port: 3000
database port: 5432
```

### Add/remove tables to dev database
```
db-migrate up
dg-migrate down
```

### npm-run Scripts

- `eslint` `npm run lint`
- `prettier` `npm run prettier`
- `test` `npm run test`
- `production` `npm run start`
- `build` `npm run build`

### Project Structure and Project Tree

Some Description of the folders
- `spec` Jasmine Configuration
- `controllers` API Handlers
- `middlewares` Token verification
- `routes` API Routers
- `models` Models methods
- `database` Database connection

```
+---assets
|   \---images
+---spec
|   \---support    
\---src
    |   server.ts
    |
    +---models
    |   \---tests   
    +---database
    +---controllers    
    +---middleware
    +---routes
    |   \---api        
    +---tests                
  ```
  

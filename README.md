# Storefront Backend Project
### To run the project

### Install the dependincies
```
npm i
```

### Add .env file and add the following, add your user name and password
```
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=storefront
POSTGRES_TEST_DB=storefront_test
POSTGRES_USER=
POSTGRES_PASSWORD=
ENV=test
BCRYPT_PASSWORD=my-secret-password
SALT_ROUNDS=10
TOKEN_SECRET=bero123
```

### Create databases
```
create database storefront 
create database storefront_test
```

### Add/remove tables to dev database
```
db-migrate up
dg-migrate down
```

### Add/remove tables to test database
```
db-migrate --env test up && db-migrate up
db-migrate --env test down"
```

### npm-run Scripts

- `eslint` `npm run lint`
- `prettier` `npm run prettier`
- `test` `npm run testt`
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
    +---database
    +---controllers    
    +---middleware
    +---routes
    |   \---api
    |           
    +---tests                
  ```
  

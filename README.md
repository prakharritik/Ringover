
# E-Commerce

Made for Ringover full stack intern assignment.

## API Reference

#### Get User Data

```http
  GET /api/auth
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `string` | JWT token in form of request header. |

#### Login User

```http
  POST /api/auth/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | Email|
| `password`      | `string` | Password |


#### Register User

```http
  POST /api/users/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | Name |
| `email`      | `string` | Email|
| `password`      | `string` | Password |

#### Get all products

```http
  GET /api/product/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `filter`      | `object` | Filter Object on basis of which objects are filtered.|

#### Get product with id

```http
  GET /api/product/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `:id`      | `number` | ID of the product to be fetched.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`jwtSecret` - jwt secret phrase

`dbname`- Database name

`dbuser`- Database username

`dbpass`- Database password

`dbhost`- Database host



## Run Locally

Clone the project

```bash
  git clone https://github.com/prakharritik/Ringover.git
```

Go to the project directory

```bash
  cd Ringover
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


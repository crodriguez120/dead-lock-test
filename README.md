````md
# Deadlock Solutions Technical Test

Technical test project developed with Node.js and Express.

## Technologies Used

- Node.js
- Express
- JavaScript
- Nodemon

## Project Structure

```txt
src/
│
├── controllers/
├── services/
├── routes/
├── data/
└── app.js
````

The project follows a simple layered structure separating:

* Controllers
* Business logic
* Routes
* In-memory data storage

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

## Run the Project

Development mode:

```bash
npm run dev
```

The API will run on:

```txt
http://localhost:3000
```

---

# API Endpoints

## Customers

### Create Customer

POST `/api/customers`

Request body:

```json
{
  "name": "Carlos Rodriguez",
  "email": "carlos@gmail.com",
  "phone": "8090000000"
}
```

---

### Get Customers

GET `/api/customers`

---

# Orders

### Create Order

POST `/api/orders`

Request body:

```json
{
  "customerId": 1,
  "items": [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 2
    }
  ]
}
```

---

### Get Orders

GET `/api/orders`

---

### Get Order By Id

GET `/api/orders/:orderId`

---

### Update Order Item Quantity

PATCH `/api/orders/:orderId/items/:productId`

Request body:

```json
{
  "quantity": 3
}
```

---

### Remove Order Item

DELETE `/api/orders/:orderId/items/:productId`

---

# Invoices

### Generate Invoice

POST `/api/invoices/:orderId`

---

# Notes

* Data is currently stored in memory for simplicity and development speed.
* Restarting the server resets all data.
* The project focuses on API structure, REST semantics, business logic and code organization.

```
```

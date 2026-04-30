# Simple CRUD App

A lightweight and beginner-friendly Node.js REST API application for managing products with MongoDB. This project demonstrates fundamental CRUD (Create, Read, Update, Delete) operations using Express.js, Mongoose, and MongoDB.

## 🚀 Features

- **Create** - Add new products to the database
- **Read** - Fetch all products or retrieve a specific product by ID
- **Update** - Modify existing product information
- **Delete** - Remove products from the database
- **Data Validation** - Built-in schema validation for product data
- **Error Handling** - Comprehensive error handling with HTTP status codes
- **RESTful API** - Follows REST conventions for API design

## 📁 Project Structure

```
Simple_CRUD_App/
├── index.js                    # Application entry point & server configuration
├── package.json                # Project metadata & dependencies
├── controller/
│   └── product.controller.js   # Business logic for product operations
├── models/
│   └── product.model.js        # MongoDB schema & data model definition
└── routes/
    └── product.route.js        # API endpoint definitions & routing
```

## 🛠️ Prerequisites

Before running this application, ensure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** - Either:
  - Local MongoDB installation, OR
  - MongoDB Atlas (cloud database)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SumaiyaMunas123/Simple_CRUD_App.git
   cd Simple_CRUD_App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB connection**
   - Update the MongoDB connection string in `index.js` if needed
   - Default connection assumes local MongoDB running on `mongodb://localhost:27017`

4. **Start the server**
   ```bash
   npm run serve    # Run once
   npm run dev      # Run with auto-restart on file changes (development)
   ```

   The server will start on `http://localhost:3000`

## 📚 API Endpoints

All product endpoints are prefixed with `/api/products`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a product by ID |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product |

## 💾 Product Data Model

Each product document contains the following fields:

```json
{
  "name": "String (required)",
  "quantity": "Number (required, default: 0)",
  "price": "Number (required, default: 0)",
  "image": "String (optional)",
  "createdAt": "Timestamp (auto-generated)",
  "updatedAt": "Timestamp (auto-generated)"
}
```

### Validation Rules:
- **name** - Must be provided (required field)
- **quantity** - Defaults to 0 if not provided
- **price** - Defaults to 0 if not provided
- **image** - Optional field for product image URL
- **createdAt & updatedAt** - Automatically managed by MongoDB

## 🔧 Usage Examples

### Using cURL

**Get all products:**
```bash
curl http://localhost:3000/api/products
```

**Get product by ID:**
```bash
curl http://localhost:3000/api/products/65a1b2c3d4e5f6g7h8i9j0k1
```

**Create a new product:**
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "quantity": 10,
    "price": 999.99,
    "image": "https://example.com/laptop.jpg"
  }'
```

**Update a product:**
```bash
curl -X PUT http://localhost:3000/api/products/65a1b2c3d4e5f6g7h8i9j0k1 \
  -H "Content-Type: application/json" \
  -d '{
    "quantity": 15,
    "price": 899.99
  }'
```

**Delete a product:**
```bash
curl -X DELETE http://localhost:3000/api/products/65a1b2c3d4e5f6g7h8i9j0k1
```

### Using Postman or Insomnia

1. Import the API endpoints into your REST client
2. Set request method and URL from the table above
3. For POST/PUT requests, add JSON payload in the request body
4. Set `Content-Type: application/json` in headers

## 📜 Available Scripts

```bash
npm run serve   # Start the server (production mode)
npm run dev     # Start with nodemon (auto-restart on changes - development mode)
npm test        # Run tests (not configured yet)
```

## 🧠 Technology Stack

- **Express.js** (v5.2.1) - Web framework for Node.js
- **MongoDB** (v7.1.1) - NoSQL database
- **Mongoose** (v9.4.1) - MongoDB ODM (Object Data Modeling)
- **Nodemon** (v3.1.14) - Development tool for auto-restart

## 📝 Key Concepts Explained

### Middleware
- `express.json()` - Parses incoming JSON request bodies
- `express.urlencoded()` - Parses URL-encoded request bodies

### Controllers
- Handle the business logic for each API operation
- Interact with the database through the Product model
- Return appropriate HTTP status codes and responses

### Models
- Define the schema structure for products in MongoDB
- Implement validation rules and default values
- Provide methods for database operations (CRUD)

### Routes
- Define the API endpoints and map them to controller functions
- Handle different HTTP methods (GET, POST, PUT, DELETE)
- Organized in a separate file for maintainability

## 🚧 Architecture Pattern

This project follows the **MVC (Model-View-Controller)** architectural pattern:

```
Request → Routes → Controllers → Models → Database
Response ← Routes ← Controllers ← Models ← Database
```

## 🐛 Known Issues & Future Improvements

- [ ] Add MongoDB connection error handling
- [ ] Implement environment variables (.env file)
- [ ] Add request validation middleware
- [ ] Add authentication & authorization
- [ ] Add unit tests with Jest
- [ ] Add API documentation with Swagger/OpenAPI
- [ ] Add pagination for product listing
- [ ] Add input sanitization for security

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📄 License

This project is licensed under the ISC License - see [package.json](package.json) for details.

## 👤 Author

SumaiyaMunas123

---

**Happy Coding! 🎉** If you have any questions or encounter issues, feel free to open an issue in the repository.

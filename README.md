# 📚 My-Library App

---

## 🚀 Live URL

Visit the live application: [My-Library](https://my-library-henna-seven.vercel.app/)

---

## 💡 About the Project

<small>
This project is a Library Management API built with <strong>Express</strong>, <strong>TypeScript</strong>, and <strong>MongoDB</strong> using Mongoose.  
It allows managing books and borrow records with proper validation, error handling, and structured API endpoints.
</small>

---

## ✨ Features

- **CRUD Operations:**
  - Create, update, delete, and fetch books
  - Make borrow requests and fetch borrow summaries

- **Public API:**
  - Open access API for browsing books with filtering, sorting, and limiting

- **Filter, Sort, Limit:**
  - Filter books by genre
  - Sort books in ascending or descending order
  - Limit books number to show

- **Validation and Error Handling:**
  - Robust validation for input likes create books, borrow books
  - Friendly error response for invalid inputs

---

## 🛠 Technology Used

- **Backend**: Node js, Express js
- **Database**: MongoDB, Mongoose
- **Others**: Typescript for type safety and better developer experience

---

## ⚙ Setup and Installation

Follow these steps to setup the application on your local machine:

**Prerequisites:**

- Node.js (v16+)
- MongoDB (local or cloud database)
- npm (comes with Node.js)

**Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AH-Ratul/Assignment_3
   cd Assignment_3

2. **Install dependecies**:

   ```bash
   npm install

3. **Create a .env file in the root directory: Add the following:**

   ```bash
   PORT=5100
   MONGO_URI=your-mongodb-connection-string
   NODE_ENV=development

4. **Run the application:**

   ```bash
   npm run dev

5. **Access the API locally:**

   ```bash
   http://localhost:5100/api

---

## 📋 API Documentation

**Base URL:**

```bash
https://my-library-henna-seven.vercel.app/
```
---

## EndPoints

## Book Management

### 1. Create Book

  - **Endpoints:** ``` /api/books/ ```
  - **Description:** Create book by providing details
  - **Request Body:**
     
     ```
     {
       "title": "The Theory of Everything",
        "author": "Stephen Hawking",
        "genre": "SCIENCE",
        "isbn": "9780553380163",
        "description": "An overview of cosmology and black holes.",
        "copies": 5,
        "available": true
      }
     
    - **Response:** Success
      
      ```
        {
          "success": true,
          "message": "Book Created Successfully",
          "data": {
              "title": "string",
              "author": "string",
              "genre": "string",
              "isbn": "string",
              "description": "string",
              "copies": number,
              "available": boolean,
              "_id": "string",
              "createdAt": "date",
              "updatedAt": "date",
            }
          }
      ```

      - **Response:** Failure
        ```
        {
          "success": false,
          "statusCode": 400,
          "message": "Validation error",
          "err": { object }
        }

---

### 2. Get ALl Books

  - **EndPoints:**  ``` /api/books/ ```
    
  - **Query Parameters:**
      - ```Filter```: Filter books by genre
      - ```SortBy```: Sort by creation date
      - ```Sort```: Define the sorting values. Accepts values ```asc``` or ```desc```
      - ```Limit```: Define the limit number
    
  **Example Request URL:**
  
  ```/api/books?filter=NON-FICTION&sortBy=createdAt&sort=desc&limit=5```
     
  **Response:** Success

  ```
    "success": true,
    "message": "Book retrieve successfully",
    "data": [ array of objects ]
  ```






# E-Commerce API

This is an e-commerce API built with Express, TypeScript, and MongoDB using Mongoose. The API includes functionality for managing products and orders.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/en/download/) (which includes npm)
- You have a MongoDB instance running locally or remotely. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution.
- You have installed [Git](https://git-scm.com/downloads) for version control

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. 1.  Clone the repo
    
    ```
    git clone <https://github.com/riaz9191/B3A3>
    
    ```
    
    1. Navigate to the project directory
    
    ```
    cd .\B3A3\
    
    ```
    
    1. Install NPM packages
    
    ```
    npm install
    
    ```
    
    ### Configuration
    
    1. Create a `.env` file in the root directory of the project and add your MongoDB connection string:
        
        ```
        MONGO_URI=mongodb://localhost:27017/ecommerce
        PORT=7000
        ----or----
        NODE_ENV = development
        PORT = 7000
        DB_URL = mongodb+srv://<name>:<pass>@cluster0.3onslcg.mongodb.net/Product-Order?retryWrites=true&w=majority&appName=Cluster0
        
        ```
        
        Replace the MongoDB URI with your actual MongoDB connection string.
        
        ### Running the Application
        
        1. 1. Compile the TypeScript code
            
            ```
            npm run build
            
            ```
            
            2. Start the server
            
            ```
            npm run start:prod
            ----or----
            npm run start:dev
            
            ```
            
            ### Endpoints
            
            - **Products**
                - `GET /api/products` - Retrieve all products
                - `GET /api/products/:productId` - Retrieve a specific product by ID
                - `POST /api/products` - Create a new product
                - `PUT /api/products/:productId` - Update a product by ID
                - `DELETE /api/products/:productId` - Delete a product by ID
                - `GET /api/products?searchTerm=<term>` - Search products
            - **Orders**
                - `GET /api/orders` - Retrieve all orders
                - `GET /api/orders?email=<email>` - Retrieve orders by email
                - `POST /api/orders` - Create a new order
                
                ### Deployment
                
                To deploy this project using Vercel, use the following configuration in your `vercel.json` file:
                
                ```json
                {
                  "version": 2,
                  "builds": [
                    {
                      "src": "dist/server.js",
                      "use": "@vercel/now"
                    }
                  ],
                  "routes": [
                    {
                      "src": "/(.*)",
                      "dest": "dist/server.js"
                    }
                  ]
                }
                
                ```
                
                1. Ensure your project is built and ready for deployment:
                    
                    ```
                    npm run build
                    
                    ```
                    
                2. Deploy using Vercel CLI (make sure you have Vercel CLI installed and configured):
                    
                    ```
                    vercel --prod
                    
                    ```
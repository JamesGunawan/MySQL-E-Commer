#ecomtest README
##Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js: You need to have Node.js installed to run this project. You can download it from nodejs.org.

NPM: NPM (Node Package Manager) is included with Node.js installation. However, on macOS, you might need to check if NPM is installed separately. You can do this by running the following command in your terminal:

```bash
npm -v
```
If you see a version number, NPM is installed. If not, make sure to install Node.js again.

MySQL: You need to have a MySQL database set up. If you don't have MySQL installed, you can download MySQL Workbench to create a connection to your database.

## Installation
Once you have the prerequisites, follow these steps to set up the project:

Clone the Repository: Clone this repository to your local machine.

Install Dependencies: Navigate to the project directory and run the following command to install the required packages:

```bash
npm install sequelize mysql2 dotenv
```
Create a .env File: In the root of the project directory, create a file named .env and add the following configuration:

```makefile
DB_NAME=yourDBname
DB_USER=yourUser
DB_PASSWORD=yourPass
DB_HOST=localhost
DB_DIALECT=mysql
DB_PORT=3306
```
Make sure to replace `yourDBname`, `yourUser`, `yourPass`, and `yourPort` with your actual database name, username, password, and port.

## Example Tables
You can also find SQL examples of the Sequelize forms in the `example_tables` folder. This folder contains SQL scripts that demonstrate how the tables are structured and can be useful for reference.

## Testing the Connection
After setting up the .env file, you can test the connection to your database:

Open your terminal and run the following command:

```bash
node testconnection.js
```
If the connection is successful, you will see a message indicating that the database connection has been established successfully.

If the connection is successful, the next step is to create the necessary tables. Run the following command:

```bash
node createtables.js
```
Once the script has finished running, you should see a message indicating that all tables have been created successfully.

Refresh MySQL Workbench: Open MySQL Workbench and refresh to see the newly created tables.

## Troubleshooting
If you encounter any issues, please check your database connection settings in the .env file and ensure that MySQL is running.

# Common Issues:

* Database connection refused: Check if MySQL is running and if the port is correct.
* Unable to create tables: Check if the database connection is successful and if the .env file is configured correctly.

##Conclusion
You are now set up and ready to use the ecomtest application!

# Shopping Cart App

## About
An e-commerce shopping cart app with a MongoDB backend. 
Built with Node/Express, React, MongoDB.

## Setup

1. Install [Node.js](https://nodejs.org/en/download/package-manager/) if you haven't already
2. Clone this repository
3. `cd` into the downloaded directory
4. `cd` into client and run `npm install` from the command line to install all dependencies
5. `cd` into server and run `npm install` from the command line to install all dependencies

## DataBase Setup

1. Create mongoDB account - https://account.mongodb.com/account/register
2. Create AWS cluster
3. Go to `collections` and create a new database (shopping_cart) for example with two collections `products` and `cartitems`. Note: If you are going to work in pairs create two databases (for example team1_shopping and team2_shopping) and each database should have two collections `products` and `cartitems`.
4. Under Security tab, click Database Access, and on the right `add new database user`. After you enter username and password, click `add user` at the bottom right corner.
5. Under Security tab, click Network Access, and whitelist your IP address.
6. Once your cluster is created, under Clusters tab, click connect and copy the connection string which will look something like this `mongodb+srv://test123:<password>@cluster0-zamyu.mongodb.net/test?retryWrites=true&w=majority`. Instead of `test123` there will be your username, and you will need to replace `<password>` with your password and `test` with the database name.
7. Finally, inside your project folder, `cd` into server, create new file `.env` and enter `DB=<paste the string from above here>`. It will look similar to this `DB=mongodb+srv://test123:mypass@cluster0-zamyu.mongodb.net/shopping_cart?retryWrites=true&w=majority`.

## Running the app

While in the server directory, run `npm run dev` to start the live server. The live server will watch for changes to files in the `src` directory and reload the page when they're changed.

## Viewing Static Version of the App

While developing the app, you can take a look at the static pages that you'll eventually convert into a dynamic application. To do so, visit `http://localhost:5001/ui` in the browser. You are also encouraged to read and reuse the markup, classes and ids used in these static files in your components. They're located in the `/server/public/ui` folder.

## DOCS

You can find documentation in the `docs` folder in `api.md` file.
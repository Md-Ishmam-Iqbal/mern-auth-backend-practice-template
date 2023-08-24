# mern-auth-boilerplate

This is my mern-auth frontend template for backend practice

You can find the original project [here](https://github.com/Md-Ishmam-Iqbal/mern-auth-practice)

I followed this [tutorial](https://youtu.be/R4AhvYORZRY) to make the app. You can use that for reference as well.

## Get the server up and running

### Clone this repo

1. Open command line
2. Navigate to your desired directory
3. Run the following commands :
   - `git clone git@github.com:Md-Ishmam-Iqbal/mern-auth-backend-practice-template.git mern-auth`
   - `cd mern-auth`
4. Install dependencies for the frontend:
   - `cd frontend`
   - `npm install`

### Run the frontend server

1. Navigate back to root directory
2. Run the command: `npm run client`

Or Run the command `npm run dev` from frontend directory

Both does exactly the same thing

## File structure

You will notice there is a package.json in the root directory. This will house all the dependencies for the backend app. Meaning `npm install dependency` for this project should be run while you are in the root directory.
The frontend app should run without any issues. I used redux in the frontend for the api calls so someone who is unfamiliar with redux might not be able to navigate with what's going on. Thus, I am providing all the routes I used.

## Routes

The following are the routes I used. If you want the frontend to work seamlessly, ensure that you're using these routes.

#### POST: `http://localhost:8000/api/users/auth`

#### POST: `http://localhost:8000/api/users`

#### POST: `http://localhost:8000/api/users/logout`

#### PUT: `http://localhost:8000/api/users/profile`

#### GET: `http://localhost:8000/api/users/profile`

## Main functionalities and guidelines

- Authentication with 3 main variables: email, name and password (You should be able to access these in the api by deconstructing the req.body like so: `const { email, name, password } = req.body`)
- A jwt cookie (`res.cookie`) needs to be sent for both login and register
- The logout route must delete the jwt cookie
- All the requests must send a response(res.json) in the format `{ id ,name, email }`

- You will need to setup your own database (preferably MongoDB) with appropriate model. Here is a [link](https://github.com/Md-Ishmam-Iqbal/mern-auth-practice/tree/main/backend/models) to my models. You can also refer back to the tutorial linked earlier.

_Bonus_: Add a blacklist collection in your database which inputs tokens into the database whenever a user logs out. And there should be a middleware which checks for the blacklisted tokens. If the current token matches the blacklisted token, the user will not be allowed to login and will be unable to navigate to the protected routes.

# Login_passportAuth
This repo contain auth for **only login**. It does not contain user registration.
#
To get started, clone this repo or download it and run this command in the console. 
```
npm install
```
After the packages are installed, node_modules folder will be created in your folder.
## Setting up MongoDB
Start mongodb and create a database with username and password as entries in collection. Change the endpoint in */config/database.js* pointing to your database. If mongo is running on local machine, then database endpoint will be:
```
database:'mongodb://localhost:27017/yourdbname'
```
Now, the mongodb is set up.
#
Next, run the following command.
```
node app
```
or
```
npm start
```
Following messages can be seen in the console.
##### Server running on port 8080
##### Connected to mongodb
#
Open browser and got to *http://localhost:8080/login* and enter username and password to enter homepage. If username or password is wrong, you will be redirected to same page with a flash message.
#

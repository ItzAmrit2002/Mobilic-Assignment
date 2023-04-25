The project has been hosted at Render
URL-https://mobilicfrontend.onrender.com/
URL for server-https://mernappbackend-w7a2.onrender.com/api/first

The backend sever contains 5 api routes created using NodeJs and ExpressJs. The database used is MongoDB. The database is hosted on MongoDB Atlas. The database contains 1 collection - samples. The samples collection contains the data provided for the assignment which has been exported to MongoDB Atlas using 'mongoimport'. The server is hosted on Render.

The 5 api routes:

1. /api/first - GET request to get data from the database which contains Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. /api/second - GET request to get data from the database which contains Male Users which have phone price greater than 10,000.
3. /api/third - GET request to get data from the database which contains Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. /api/fourth - GET request to get data from the database which contains Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. /api/fifth - GET request to get data from the database which contains the data of top 10 cities which have the highest number of users and their average income.

CORS have been used to allow cross origin requests.

The frontend has been created using ReactJs. The frontend is hosted on Render. The frontend has been designed in a simplistic way using Material UI (MUI).
A dropdown menu is provided to let the user choose the API to be called and the resultant data is displayed in a Table format using MUI. The data is fetched from the server using Axios.

NOTE-The api calls maybe slow as the server is hosted on Render and the database is hosted on MongoDB Atlas. The server and database are hosted on free plans.

Developed and designed by Amritendu Mohan Roy
Email-amritenduroy70@gmail.com 
Phone-8420308668

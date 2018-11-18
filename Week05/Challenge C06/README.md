# Challenge C06

### Instructions

#### Setting up the project:

1. Start the MongoDB shell.

2. Install the dependencies by:

   ```bash
   npm install
   ```

3. To fill the database with dummy users and books, run the command:

   ```bash
   npm run fill
   ```

   Some information in the books are real and other part is fake, generated randomly (quantity, borrowed, city, digital).

4. Start the API:

   ```bash
   npm start
   ```


#### Using the API:

The API have 6 endpoints:

```bash
Non-Authenticated

// Create a new user
	POST: /auth/register
// Login an user
	POST :/auth/login

Authenticated: Bearer token
// Get all books
	GET: /books
// Get book by id
	GET: /books/:id
// Lend a book
	POST: /books/:id/lend
// show all lent books by user
	GET: /user/mybooks

NOTE: All POST requests must be sent using x-www-form-urlencoded.
```

##### Create a user ( POST: /auth/register ):

To create an user we need to send in the body of the request: fullname, username, email and the password:

![Register](./Images-for-Readme/Register.JPG)

If everything is ok we will receive the data about the user:

```json
{
    "role": "User",
    "_id": "5bf09cd6d151dc1e2c4a355f",
    "fullname": "Eduardo Garcia",
    "username": "Lugamo",
    "email": "lugamo@jobsity.com",
    "created": "2018-11-17T22:57:26.372Z",
    "id": "e5ac382c-b009-40f8-beb5-734bca025de2",
    "__v": 0
}
```

##### Login an user ( POST: /auth/login )

To login we need to send in the body of the request the email and the password of the user, you can use one of the test users or the recently created.

| User 1                                           | User 2                                           |
| ------------------------------------------------ | ------------------------------------------------ |
| email: user-1@jobsity.com<br />password: pass001 | email: user-2@jobsity.com<br />password: pass002 |

![Login](./Images-for-Readme/Login.JPG)

if everything is ok we will receive a token, which is necessary for the authorized requests.

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Z2Ftb0Bqb2JzaXR5LmNvbSIsInVzZXJuYW1lIjoiTHVnYW1vIiwiaWQiOiJlNWFjMzgyYy1iMDA5LTQwZjgtYmViNS03MzRiY2EwMjVkZTIiLCJpYXQiOjE1NDI0OTY1MTB9.g-GNVcLAjTSYKJTWZv6H7l5JWI7q22puEAj-QMPDLNU"
}
```

##### Get all books ( GET: /books)

To use this endpoint we need to send the token, to filter the data we can use Querys but this one are limited to search by (city, digital, isbn).

![Login](./Images-for-Readme/Token.JPG)

If everything is ok we will receive a json data of the books (this endpoint don't show all the data related to the books).

##### Get book by ID ( GET: /books/:id)

To use this endpoint we need to send the token, this endpoint will show all the data related to the book.

![Login](./Images-for-Readme/BookbyID.JPG)

##### Lend a book ( POST: /books/:id/lend )

The users can lend books, there are two categories of books:

- Digital books: No limit of copies, can be lend with no restrictions.
- NOT Digital books: Limited copies, they can be lend only when there is availability.

The users just can be borrow one copy for book.

![Login](./Images-for-Readme/Lend.JPG)

If everything is ok, you could receive one of the following messages:

```json
// book lent
{
    "message": "book added to your collection!!"
}
// You alredy have this book
{
    "message": "This book is alredy yours"
}
// no available copies
{
    "message": "No more copies of this book to lend"
}
```

##### Show all books by user ( GET: /user/mybooks )

Show all the books borrowed by the user:

![Login](./Images-for-Readme/Userlend.JPG)

If everything is ok will show the list or books.

```json
[
    {
        "bookTitle": "Redeployment",
        "lendDate": "2018-11-17T23:40:38.141Z"
    }
]
```

If the user don't have any book:

```json
{ 
    message: 'No borrowed book yet' 
}
```




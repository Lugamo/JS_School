# Challenge C10

**Real time integration**

- Add web socket integration in your frontend application

- Add support in the backend app for use websockets
- Build a real time visual feedback when a book is reserved and emit to all clients the book availability 
- Add reactive programming to your interfaces to make more fuid design and response in actions
- Push all your changes into the github repo

### Instructions

1. Run MongoDB shell.

2. Open the folder "server" in this challenge and install the API.

   ```bash
   npm install
   ```

3. Start the API.

   ```bash
   npm start
   ``
   ```
4. In another bash open the project "Challenge_C10" and install the dependencies.

   ```bash
   npm install
   ```

5. Then run the Project.

   ```bash
   npm start
   ```

   Project: http://localhost:3000/

   API:  http://localhost:3001/



   You can use one of the following users:

| User 1                                                       | User 2                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| email: [user-1@jobsity.com](mailto:user-1@jobsity.com) password: pass001 | email: [user-2@jobsity.com](mailto:user-2@jobsity.com) password: pass002 |

The new features added to the project are:

- Log Out button.

- WebSocket implementation for loaned books.

  ![image1](./Readme_Images/image1.png)

  When an user loan the book, the info about that book in another client is automatically update.

  ![image2](./Readme_Images/image2.png)

- Ajax petitions with RxJS.
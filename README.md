# Strapi application

This application is built with Strapi and is using socket.io library for instant communication between the client and server. It contains the backend logic for `starpi-chat-ui` [repo](https://github.com/strapi-blog/strapi-chat-ui).

This application is deployed on Heroku. Here is the [link](https://strapi-chat.purnimagupta.com) for you to play around.

## Prerequites to run this app:

- Install Nodejs
- Install MongoDB
- Fork and clone the repo `git clone git@github.com:strapi-blog/strapi-chat-ui.git`. Follow  [these steps](https://github.com/strapi-blog/strapi-chat-ui/) to run the server.
- Fork and clone the repo `git clone git@github.com:strapi-blog/strapi-chat-backend.git`
- Install dependencies by running `npm install`
- ##### If MongoDB is running locally:

    - Create an `.env` file and create `DATABASE_URI` variable with mongodb url. 
    
    ```DATABASE_URI=mongodb://localhost:27017/strapi-socket-backend```

    - Go to `/config/database.js` file, change ssl to `false`
    - Start the strapi server `npm start`

- ##### If MongoDB is running on Cloud:

    - Follow this [tutorial](https://strapi.io/documentation/developer-docs/latest/guides/databases.html#mongodb-installation) to create your mongodb atlas account and create your first collection.

    - Change your `DATABASE_URI` url which mongodb atlas provides inside `.env` file
    - Change `ssl` value to **true**
    - Run your server `npm start`

If you have any questions/suggestions, reach out to me on my email **purnimaguptapccs@gmail.com**




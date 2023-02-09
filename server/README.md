# Recycle Mates Server

## How To Run

1. Download and start mongoDB
   1. [Download instructions](../README.md##Runtime-Requirements)
   2. To run on a brew install, `brew services run mongodb-community`
      1. Change `run` to `start` if you want it to always run on boot
   3. Ensure it is running with the MongoDB Shell by running `mongosh` in a terminal
      1. Exit `mongosh` in your terminal by hitting `ctrl+c` twice
      2. The second line should include a connection URL such as `mongodb://127.0.0.1:27017`, you can connect using MongoDB Compass with this URL
2. Install project dependencies
   1. `cd` into this directory
   2. `npm i`
3. Run the server
   1. `npm run start` (or `npm start`) - testing runtime, automatically tries to update on save
   2. `node server.js` - bare node runtime

If needed:
Edit the `.env` file to set the mongoDB URL
eg: `MONGODB_CONNECTION_URL="mongodb://localhost:27017/RecycleMates"`

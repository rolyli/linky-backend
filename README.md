# linky-backend

This is an open source Instagram/Reddit clone comprising of micro-services:

- [linky-ui](https://github.com/rolyli/linky-ui): The UI service implemented in React
- [linky-backend](https://github.com/rolyli/linky-backend): Backend implemented in NodeJS + Express (this repository)

Additionally,
- [linky-bot](https://github.com/rolyli/linky-bot): Discord bot implemented with Discord.js that saves image links from Discord channels to persistent storage, to be consumed by linky-frontend.

Postman collection for the API is available in the root folder of the project.

## Prerequisites

- MongoDB Atlas database keys
- Heroku

## Build and run Linky

To run a local instance of Linky

1) `git clone --recurse-submodules https://github.com/rolyli/linky-backend`
2) Supply MongoDB connection details within `/env`
3) `cd linky-ui && npm run build && cd .. && heroku local`

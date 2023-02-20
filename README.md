# RecycleMates

Jr Design Implementation

## Authors

* Andrew VanNus
* Avnee Naik
* G
* Jenny Liu
* May Everest
* Nathan Haileyesus

## Runtime Requirements

Highly recommend installing [Homebrew](https://brew.sh/) for MacOS. The links below assume you use brew.

* [Node.js, npm](https://formulae.brew.sh/formula/node)
* [MongoDB 6](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) (for backend only)

## Development Recommendations

* General
  * [VSCode](https://formulae.brew.sh/cask/visual-studio-code)
    * [VSCode Extension: ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - finds issues with syntax, logic, and unifies code style for the project
    * [VSCode Extension: Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Can automatically format messy code. Before committing, make sure it doesn't change parts of code you don't want to change!
    * [Set up `code`](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) - open VSCode in a terminal with the `code <dir>` command, i.e. `code .`, `code server`, `code ~/GT/JID-2327-RecycleMates`
* Back End
  * [MongoDB Compass](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) - a GUI tool to view and edit a MongoDB database
  * [Postman](https://formulae.brew.sh/cask/postman) - a GUI tool to send RESTful API calls

[License under GPLv3](LICENSE)

## Release Notes

### Version 0.2.0

#### New Features

* Created initial UI Customer and Driver home pages

#### Bug Fixes

* Fixed button overflow on home screens for certain resolutions
* Ensured emails and passwords must match before moving from register screen to register info screen



### Known Bugs

* Home screen buttons may overflow on certain other resolutions
* There's no way to scroll on the home screen when additional information gets added

---

### Version 0.1.0

#### New Features

* Initialized project!
* Created RESTful server with MongoDB
* Created API calls for the following:
  * Creating a user
  * Modifying a user's account
  * Deleting a user
  * Fetching a user's information
* Created UI pages with ReactNative and Expo
  * Landing page
  * Login page
  * Registration page
  * Registration information page
  * Home page (stub)
  * Active Pikcups Page
  * Choose Account Types Pages




#### Bug Fixes

* Fixed sizing issue for logo on Landing page for IOS 
* Fixed text alignment issue on Landing page

### Known Bugs

* Emails aren't ensured to match
* Passwords aren't ensured to match
* You can go "back" from logging in

---

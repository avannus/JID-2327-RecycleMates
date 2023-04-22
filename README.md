# RecycleMates

Jr Design Implementation

## Authors

* Andrew VanNus
* Avnee Naik
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

### Version 0.4.0

#### New Features

* Revamp UI design for Customer and Driver Home Pages
* Update terminology in Home Pages to increase user clarity
* Create UI pages with ReactNative and Expo
  * Driver - Current Pickup
  * Driver - Request Schedule Changes
  * Driver - View Current Schedule
* Include status changes for pickups (Not Begun/In Progress/Complete)
* Include popup message for drivers when confirming the cancellation of their current pickup
* Include popup message for drivers when requesting a schedule change

#### Bug Fixes

* Back button disappears after user logs in!
* User cannot swipe left to go back after logging in
* Fix button routes on driver home screen to redirect to correct pages
* Fix crash on Android when user navigates to Customer - Choose Schedule Frequency page

#### Known Bugs

* Existing crashes on Android related to text
* Driver can revert pickup status
* User can log in without successful credentials
* User does not have a way to log out

---

### Version 0.3.0

#### New Features

* Create User on registration
* Create API for logging in
* Create API to see if account exists
* Create UI pages with ReactNative and Expo
  * Customer - Describe Materials
  * Customer - Choose Schedule Frequency
  * Customer - Box Request
  * Customer - Active pickups
  * Customer - Confirm pickup
  * Driver - Active pickups
  * Driver - Preview routes
  * Forgot Password
* Add drop-down menu to Customer - Choose Schedule Frequency page

#### Bug Fixes

* Fixed button overflow on home screens for certain resolutions
* User can no longer move to Register Information screen with blank input

#### Known Bugs

* Multiple crashes on Android related to text
* Back button still appears after logging in
* User can log in without successful credentials

---

### Version 0.2.0

#### New Features

* Refreshed UI Theme
* Customer Home Page
* Driver Home Page
* Active Pickups Page
* Choose Account Types Page
* Account editing page
* Hashed and Salted Password Storage
* Rewrite of Backend Schema to allow Account Types

#### Bug Fixes

* Fixed button overflow on home screens for certain resolutions
* Ensured emails and passwords must match before moving from register screen to register info screen
* Data from previous screens is propagated on account registration

#### Known Bugs

* Home screen buttons may overflow on certain other resolutions
* There's no way to scroll on the home screen when additional information gets added
* Back button still appears after logging in

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

#### Bug Fixes

* Fixed sizing issue for logo on Landing page for IOS 
* Fixed text alignment issue on Landing page

#### Known Bugs

* Emails aren't ensured to match
* Passwords aren't ensured to match
* You can go "back" from logging in

---

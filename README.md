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

## Install Guide

### Prerequisites

Before you begin, you must have Node.js installed on your computer. To check if you have Node.js installed, open your terminal and run the command: `node -v`

If you get an error message, download Node.js from the official website at https://nodejs.org/en.

You will also need to download the Expo Go app to view the app. Alternatively, you can view the app using Xcode.

### Running the App

1. Clone the repository to your computer by opening the terminal and entering:
  
  `git clone https://github.com/avannus/JID-2327-RecycleMates.git`

  `cd JID-2327-RecycleMates`

2. Install dependencies by running the following command in your terminal:
  
  `cd client`

  `npm i` or `npm install`

3. Run the app using Expo. In your terminal, run:

  `npm start`

  This will start the app and open a browser window with a QR code. You can then:

  - Scan the QR code with a phone on the same network and the Expo app will launch the app
  - Use the left and right arrow keys in the terminal window to select an emulator or device to launch the app on.

  That's it! The app should now be up and running.

## Release Notes

### Version 1.0.0

#### New Features

* Create UI pages with ReactNative and Expo
  * User Settings
  * FAQ
* Include functionality for a customer cancelling a pickup and having it update on their home screen accordingly
* Add confirmation button to Box Request page
* Include map for driver in current pickups
  * Use Google Maps SDK
  * Include search for addresses using Google Places API
* Include status change for driver when they cancel a pickup
* Include thank you message for drivers when they complete all their pickups for a day
* Update driver schedule accordingly when they complete a pickup/complete all their pickups

#### Bug Fixes

* Fix crashes related to text on Android
* Fix render error when trying to register with empty text fields
* Driver can no longer revert pickup status
* Customer can no longer confirm an unselected pickup frequency
* User can log out successfully and is redirected to the Landing page
* Popup on Forgot Password page disappears after pressing close

#### Known Bugs

* User can log in without successful credentials
* Driver schedule may not update accordingly if driver uses the back button after marking a pickup as complete

---

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

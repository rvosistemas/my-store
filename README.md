Children's Login Project
========================

This project is a web application developed in Angular that allows children to log in by selecting 3 icons from a list.

Requirements
------------

Before starting the project, make sure you have the following installed:

-   Node.js (version 16 or higher)
-   npm (Node Package Manager)
-   Angular CLI (version 12 or higher)
-   Fontawesome (version 5 or higher)
-   Sweetalert2 (version 11 or higher)

Steps to Get Started
--------------------

Follow the steps below to start the project:

1.  Clone this repository to your local machine:

bash

`git clone https://github.com/rvosistemas/my-store.git`

1.  Navigate to the project directory:

bash

`cd my-store`

1.  Install the dependencies:

`npm install`

1.  Start the application in development mode:

sql

`npm start`

1.  Open your web browser and go to `http://localhost:4200` to see the application in action.

Dependencies
------------

The project uses the following dependencies:

-   Angular (version X) - The web development framework used to build the application.
-   fontawesome (version X) - The icon library used to display the icons in the login interface.

Project Structure
-----------------

css

`my-store/  

  ├── src/ 
  │   ├── app/
  │   │   ├── login/
  │   │   │   ├── login.component.ts
  │   │   │   ├── login.component.html
  │   │   │   └── login.component.scss
  │   │   ├── app.component.ts
  │   │   ├── app.component.html
  │   │   └── app.component.scss
  │   ├── assets/
  │   ├── index.html
  │   └── ...
  ├── angular.json
  ├── package.json
  ├── tsconfig.json
  └── ...`

The `src` folder contains the application files, and the main component is `login.component`, which handles displaying the login interface and processing icon selections.

Customization
-------------

If you want to customize the list of available icons, you can modify the `icons` variable in the `login.component.ts` file to include or exclude the icons you desire.

Run component tests
-------
`ng test --include=**/login.component.spec.ts`

License
-------

This project is distributed under the MIT License. For more details, check the `LICENSE` file in this repository.

# Holidaze - Booking site for study project
![holidaze-homepage](https://github.com/Gronnfrosk/project-exam-2/assets/91615712/21e7d316-6119-4f7e-ad42-e7caf9efff13)
(Image shows homepage on phone and desktop view.)

## Project Overview
Holidaze is a modern front-end accommodation booking application developed for a newly launched site. This project serves as a practical example for educational purposes. It offers a dual-interface for both customers and venue managers. Customers can book holidays, view venues, and manage their bookings. Venue managers can register, manage venues, and oversee bookings. Please note that Holidaze is a hypothetical entity and is solely for use in this project assignment.

### Key Features
- View a list of venues.
- Search for specific venues.
- View venue details and available dates.
- Register and login with a stud.noroff.no email.
  1. **Customer-Facing Features**
     - Register and view bookings (upcoming, total, and previous bookings).
     - Update user profile avatar.
  2. **Venue-Manager-Facing Features**
     - Venue management (create, update, delete).
     - View bookings on venue.
     - Update user profile avatar.

## Built With
- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com)
- [SASS/SCSS](https://sass-lang.com/)
- [Prettier](https://prettier.io/)
- [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- [yup](https://www.npmjs.com/package/yup)

## Getting Started
1. Clone the repo: git clone https://github.com/Gronnfrosk/project-exam-2.git
2. Make your own .env file that has the REACT_APP_API_URL set to the correct API.
3. Run `npm install` to install all dependencies.
4. Write `npm run start` to start the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You can format code with the extension of Prettier or type `npm run format`.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Live server
For viewing project in your local browser, you can use Live Server extension in VS Code or CLI commands:

1. Run ```npm i live-server``` to install all dependencies.
2. Write ```npx live-server``` Open [http://localhost:3000](http://localhost:3000) to view project in your browser.

### API
The API used is: [https://api.noroff.dev/api/v1/holidaze/](https://api.noroff.dev/api/v1/holidaze/)

## Acknowledgments
- Noroff School

## Known Bugs
- If the price from the API is extremely long, it messes up the list sorting on the homepage.



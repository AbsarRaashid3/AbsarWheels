# AbsarWheels
AbsarWheels is a high-end car trading web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides an intuitive platform for users to buy and sell cars efficiently, featuring advanced search, secure payments, and a user-friendly dashboard.

## Features
✅ Advanced Search Filters – Find cars based on make, model, year, price, and other criteria.
✅ Secure Payment Processing – Integrated Stripe API ensures smooth and safe transactions.
✅ User Dashboard – Manage listings, track transactions, and update profiles effortlessly.
✅ Proxy Setup – The frontend and backend run simultaneously for seamless development.
✅ Responsive Design – Fully optimized for desktops, tablets, and mobile devices.
✅ Real-Time Notifications – Get instant updates on inquiries, offers, and transaction statuses.

## Installation
### 1️⃣ Clone the Repository
git clone https://github.com/AbsarRaashid3/AbsarWheels.git
cd AbsarWheels

### 2️⃣ Install Dependencies (Frontend & Backend)
npm install && cd backend && npm install

### 3️⃣ Set Up Environment Variables
Create a .env file in the backend folder and add the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYMENT_GATEWAY_KEY=your_stripe_key

### 4️⃣ Start the Application
Since the frontend and backend are set up to run simultaneously via a proxy, simply run:
npm run dev

## Usage
Create an Account – Sign up using email or social media login.
List a Car – Upload details, images, and set pricing via your dashboard.
Search for Cars – Use filters to find cars that match your criteria.
Make a Purchase – Contact sellers directly and proceed with payment securely.

## Folder Structure

AbsarWheels/
│── backend/        # Node.js/Express.js backend
│   ├── models/     # MongoDB database models
│   ├── routes/     # API endpoints
│   ├── controllers/# Business logic
│   ├── config/     # Environment settings
│   ├── server.js   # Main server file
│── frontend/       # React.js frontend
│   ├── src/        # Main frontend source code
│   ├── components/ # Reusable UI components
│   ├── pages/      # App pages
│   ├── redux/      # State management
│   ├── App.js      # Main React file
│── package.json    # Dependencies & scripts
│── README.md       # Project documentation


# Technologies Used

## Frontend
🔹 React.js
🔹 Redux
🔹 React Router
🔹 Axios
## Backend
🔹 Node.js
🔹 Express.js
🔹 MongoDB (Mongoose)
🔹 JWT Authentication
## Others
🔹 Stripe API (Payments)
🔹 Cloudinary (Image Uploads)
🔹 Proxy Setup for Concurrent Development







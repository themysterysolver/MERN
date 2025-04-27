## E-COMMERCE IN GROCERY
---
##### MINIMUM REQUIRMEENTS
- Nav bar
- Home page
- Footer
- FAQ
- About us
- Privacy policy
- Signin,login,forget password
- Terms and condition
---
#### What is e-commerce?
- An `e-commerce` website is a website where people can *buy and sell* **products or services** over the internet.
- "E-commerce" stands for electronic commerce.
- It usually has ***features*** like product listings, shopping cart, online payment, and order tracking.
```
A normal shop → but online.
```
---
### Example
- [Amazon Fresh](https://www.amazon.in/s?k=amazon%27+fresh&crid=G0Q1AFS601HY&sprefix=%2Caps%2C196&ref=nb_sb_ss_recent_1_0_recent)
- [Walmart Grocery](https://www.walmart.com/cp/food/976759)
- [BigBasket](https://www.bigbasket.com/)
- [Blinkit (formerly Grofers)](https://blinkit.com/cn/milk/cid/14/922?utm_source=google&utm_medium=cpc&utm_campaign=21439030315&utm_content=169426454132&utm_term=blinkit%20grocery&gad_source=1&gbraid=0AAAAADfkql7sGMvDjJQviO-6zwPlWL636&gclid=Cj0KCQjwzYLABhD4ARIsALySuCTIdygs49Gld00SneNnT2UDXshLRQR1c9lqOh7zxlMVq_sd4617_bcaApmzEALw_wcB)
---
#### FEATURES AND USE CASES
- Nav bar
    - Sigin/login
    - Account info
    - Orders
    - Cart
    - serach by product
    - sort by features
- Main content(cards)
    - price
    - name
    - basic info
    - onclick more info
        - return to home page
- Footer
    - About us
    - FAQ
    - Privacy and policy
- Login and signin
    - sigin via google
    - username and password
---
##### ORDER OF IMPLEMENTATION
1. Login and sigin
2. Nav bar and home page📌
3. Footer
---
### RECAP AND WORKING IN VITE AND REACT
- This helps in creating vite project
```
npm create vite @latest
```
- We can run this using
```
npm run dev
```
### overall project structure📁
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signin.jsx
│   ├── ForgotPassword.jsx
│   ├── FAQ.jsx
│   ├── AboutUs.jsx
│   ├── PrivacyPolicy.jsx
│   ├── TermsConditions.jsx
│   ├── Cart.jsx
│   ├── Orders.jsx
├── utils/
│   └── localStorageUtils.js
├── App.jsx
├── main.jsx
└── index.css

```
- Actual work flow
```
[ index.html ]
   ↓
< script src="src/main.jsx" >
   ↓
[ main.jsx ] → [ App.jsx ] → [ Components ]

```
- **component** is a reusable blcok of code,it can be a function looks like a ***tag***
- `jsx`=>***js XML*** it's like HTML inside js
- React renders only the necessary part traditional web dev.
- **rafce** from ES7 to *create content*
- App.jsx
```jsx []
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```
- useNavigate
```
const nav=useNavigate();
  let move=()=>{
    nav('/form');
  }

```
- To use ***bootstrap***
```
npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
```
---
#### THE WORKING
- To get the dir structure without that node
> `tree -I "<>"` to fetch tree
##### FIREBASE
- [link](https://console.firebase.google.com/)
  - Add project
- It is a paltform that provides a ***backend services****
- No sql db
- authentication
- cloud storage and function
- hosting
>Firebase = Backend as a Service (BaaS)

- `Project settings → Project Overview → "Web App" → copy config.`
- Install firebase CLI
`npm install -g firebase-tools`
- Deploy to firebase Hosting
```
firebase login
firebase init
firebase deploy
```
---
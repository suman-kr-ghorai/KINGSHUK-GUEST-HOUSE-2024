import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Layout from "./Components/Layout.jsx";
import RoomContainer from "./Components/RoomContainer.jsx";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import BookingSection from "../src/Components/BookingSection.jsx";
import "./assets/Styles.css";
// import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route path="" element={<BookingSection />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="room" element={<RoomContainer/>} />
      <Route path="services" element={<Services/>} />
      <Route path="gallery" element={<Gallery/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

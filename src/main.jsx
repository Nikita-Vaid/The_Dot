import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactPixel from "react-facebook-pixel"
import App from './App.jsx'

const options = {
  autoConfig: true, // Automatically configure Pixel events
  debug: false, // Enable this for debugging
};
ReactPixel.init("1763812177701624", null, options); // Replace YOUR_PIXEL_ID with your actual Pixel ID
ReactPixel.pageView();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
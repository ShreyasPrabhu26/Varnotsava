import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

//TODO Remove below!
import Gallery from "./components/Gallery"
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route index path="/" element={<Home />} /> */}
          {/* <Route index path="/" element={<Events />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

//TODO Remove below!
import Carousel from "./components/Carousel";
import CarouseItem from "./components/CarouseItem";


export default function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route index path="/" element={<Home />} /> */}
          <Route index path="/" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
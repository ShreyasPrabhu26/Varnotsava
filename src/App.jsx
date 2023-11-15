import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

//TODO Remove below!
import Carousel from "./components/Carousel";
import CarouseItem from "./components/CarouseItem";
import Gallery from "./components/gallery";
import Event from "./components/EVENT/Event";
import Test from "./components/Test"


export default function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route index path="/" element={<Home />} /> */}
          <Route index path="/" element={<Event />} />
          {/* <Route index path="/" element={<Test />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

//TODO Remove below!
import Test from "./components/Test"
import Event from "./components/EVENT/Event"


export default function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route index path="/" element={<Home />} /> */}
          {/* <Route index path="/" element={<Event />} /> */}
          <Route index path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
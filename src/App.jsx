import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";


export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
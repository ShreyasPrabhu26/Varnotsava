import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";


export default function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<p>Home</p>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
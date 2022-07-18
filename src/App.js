import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { About, Home, LocationPage, Page404 } from "./pages";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/location/:id" element={<LocationPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;

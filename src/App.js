import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/localtion/:id" element={<Location/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

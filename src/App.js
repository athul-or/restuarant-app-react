import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Viewrest from "./components/Viewrest";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Home />
            </>
          }
        />
        <Route path="/viewrest/:id" element={<Viewrest />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

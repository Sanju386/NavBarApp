import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Profile from "./routes/Profile";
import MenuList from "./routes/MenuList";
import Des from "./routes/Des";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/projects" element={<Projects/>}/> */}
        <Route path="/projects" element={<Projects/>}>
         <Route index element={<MenuList/>} />
         <Route path=":id" element={<Des/>}/>
        </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;

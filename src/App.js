import About from "./Components/About";
import Count from "./Components/Count";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Event from "./Components/Event";
import Menu from "./Components/Menu/Menu";
import Table from "./Components/Table/Table";
import Team from "./Components/Team/Team";
import Blog from "./Components/blog/Blog";
import Footer from "./Components/Footer/Footer";
import Copywright from "./Components/Copywright";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./Components/Home";

function App (){
return(
    <BrowserRouter>
  <div className="overflow-x-hidden overflow-y-hidden">
    <Navbar/>
    <Routes>
   <Route path="/" element={<Home/>}></Route> 
   <Route path="/about" element={<About/>}></Route> 
   <Route path="/services" element={<Services/>}></Route> 
   <Route path="/event" element={<Event/>}></Route> 
   <Route path="/menu" element={<Menu/>}></Route> 
   <Route path="/team" element={<Team/>}></Route> 
   <Route path="/table" element={<Table/>}/>
   </Routes>
   <Footer/>
   <Copywright/>
  </div>
   </BrowserRouter>
)
}


export default App;

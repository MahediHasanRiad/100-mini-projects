import About from "../Pages/about"
import Contact from "../Pages/contact"
import { LI, A, StyledLink } from "../Style/list"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function PageList() {
  return (
    // <div>
    //   <ul>
    //     <LI><A href="/">Home</A></LI>
    //     <LI><A href="/about">About</A></LI>
    //     <LI><A href="/contact">Contact us</A></LI>
    //   </ul>
    // </div>
    <BrowserRouter style={{ marginTop: '2rem' }}>
      <ul>
        <LI> <StyledLink to='/'>Home</StyledLink></LI>
        <LI> <StyledLink to='/about'>About</StyledLink></LI>
        <LI> <StyledLink to='/contact'>Contact us</StyledLink></LI>
      </ul>

      <Routes>
        <Route path="/" element={''}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageList;

// // import About from "./components/About";
// // import LandingPage from "./pages/LandingPage";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Service from "./pages/Services";

// const App = () => {
//   return (
//     <main className="relative min-h-screen bg-black text-white">
      
//       <Navbar />
      
//       <Footer/>
//     </main>
//   );
// };

// export default App;


import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;

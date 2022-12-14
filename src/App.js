import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Component
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Page
import Home from './Page/Home';
import About from './Page/About';
import Blog from './Page/Blog';
import Services from './Page/Services';
import Contact from './Page/Contact';
import Chat from "./Page/Chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="chat" element={<Chat />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

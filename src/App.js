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

// Admin Page
import Login from "./Page/Admin/Login";
import AdminHome from "./Page/Admin/Home";
import Paket from "./Page/Admin/Paket";

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
            <Route path="admin">
              <Route index element={<AdminHome />} />
              <Route path="login" element={<Login />} />
              <Route path="paket" element={<Paket />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

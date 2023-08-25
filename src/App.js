import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/frame";
import Frame1 from "./pages/frame2";
import Frame2 from "./pages/frame1";
import Frame3 from "./pages/frame3";
import Frame4 from "./pages/frame4";
import AddFile from "./pages/add-file";
import About from "./pages/about";
import Home from "./pages/home";
import Input from "./pages/input";
import Frame5 from "./pages/frame5";
import Frame6 from "./pages/frame6";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4":
        title = "";
        metaDescription = "";
        break;
      case "/frame-5":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/add-file":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/input":
        title = "";
        metaDescription = "";
        break;
      case "/frame-7":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame />} />
      <Route path="/frame-4" element={<Frame1 />} />
      <Route path="/frame-5" element={<Frame2 />} />
      <Route path="/frame-2" element={<Frame3 />} />
      <Route path="/frame-6" element={<Frame4 />} />
      <Route path="/add-file" element={<AddFile />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/input" element={<Input />} />
      <Route path="/frame-7" element={<Frame5 />} />
      <Route path="/frame-1" element={<Frame6 />} />
    </Routes>
  );
}
export default App;

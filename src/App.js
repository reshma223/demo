import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import home from "./pages/Home";
import signup from "./pages/signup";
import login from "./pages/login";
import contact from "./pages/contact";
import petition from "./pages/petition";
import insurance from "./pages/insurance";
import govSupport from "./pages/govSupport";
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
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/petition":
        title = "";
        metaDescription = "";
        break;
      case "/insurance":
        title = "";
        metaDescription = "";
        break;
      case "/govsupport":
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
      <Route path="/" element={<home />} />
      <Route path="/signup" element={<signup />} />
      <Route path="/login" element={<login />} />
      <Route path="/contact" element={<contact />} />
      <Route path="/petition" element={<petition />} />
      <Route path="/insurance" element={<insurance />} />
      <Route path="/govSupport" element={<govSupport />} />
    </Routes>
  );
}
export default App;

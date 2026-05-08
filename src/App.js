import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CallButton from "./components/CallButton";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

const supportedLangs = ["ka", "en", "ru", "uk", "tr"];

function LangWrapper({ children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = window.location.pathname;
    const lang = path.split("/")[1];
    if (supportedLangs.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  return children;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <LangWrapper>
          <Navbar />
          <main>
            <Routes>
              {/* Redirect root to Georgian */}
              <Route path="/" element={<Navigate to="/ka" replace />} />

              {/* Language routes */}
              {supportedLangs.map((lang) => (
                <>
                  <Route key={lang} path={`/${lang}`} element={<Home />} />
                  <Route
                    key={lang + "-services"}
                    path={`/${lang}/services`}
                    element={<Services />}
                  />
                  <Route
                    key={lang + "-about"}
                    path={`/${lang}/about`}
                    element={<About />}
                  />
                  <Route
                    key={lang + "-contact"}
                    path={`/${lang}/contact`}
                    element={<Contact />}
                  />
                </>
              ))}

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/ka" replace />} />
            </Routes>
          </main>
          <Footer />
          <CallButton />
        </LangWrapper>
      </Router>
    </HelmetProvider>
  );
}

export default App;

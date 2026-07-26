import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            <Cursor />
            <ScrollProgress />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      </BrowserRouter>
    </HelmetProvider>
  );
}

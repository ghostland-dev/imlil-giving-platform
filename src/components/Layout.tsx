import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const [language, setLanguage] = useState<"fr" | "ar">("fr");

  return (
    <div className={`min-h-screen flex flex-col ${language === "ar" ? "rtl" : "ltr"}`}>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="flex-1">
        <Outlet context={{ language }} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Layout;

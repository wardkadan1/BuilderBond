import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "./../components/Footer"; // Ensure this path is correct
import { useEffect, useState } from "react";

export function RootLayout({
  onScrollToHomeMain,
  onScrollToAbout,
  onScrollContactUs,
}) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeEl = document.getElementById("home");
      const aboutEl = document.getElementById("about");
      const contactEl = document.getElementById("contact");

      if (!homeEl || !aboutEl || !contactEl) return;

      const isInView = (el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        );
      };

      let newActiveSection = "home";

      if (isInView(contactEl)) {
        newActiveSection = "contact";
      } else if (isInView(aboutEl)) {
        newActiveSection = "about";
      } else if (isInView(homeEl)) {
        newActiveSection = "home";
      }

      if (activeSection !== newActiveSection) {
        setActiveSection(newActiveSection);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div>
      <NavBar
        onScrollToHomeMain={onScrollToHomeMain}
        onScrollToAbout={onScrollToAbout}
        onScrollContactUs={onScrollContactUs}
        activeSection={activeSection}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

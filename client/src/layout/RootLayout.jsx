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

      if (!homeEl || !aboutEl || !contactEl) {
        return;
      }

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const activationOffset = 100;

      const homeTop = homeEl.getBoundingClientRect().top;
      const aboutTop = aboutEl.getBoundingClientRect().top;
      const contactTop = contactEl.getBoundingClientRect().top;

      let newActiveSection = "home";

      const nearPageBottom = scrollY + windowHeight >= docHeight - 5;

      if (
        nearPageBottom &&
        contactEl.getBoundingClientRect().top < windowHeight &&
        contactEl.getBoundingClientRect().bottom > 0
      ) {
        newActiveSection = "contact";
      } else if (contactTop <= activationOffset) {
        newActiveSection = "contact";
      } else if (aboutTop <= activationOffset) {
        newActiveSection = "about";
      } else if (homeTop <= activationOffset) {
        newActiveSection = "home";
      } else {
        newActiveSection = "home";
      }

      if (activeSection !== newActiveSection) {
        setActiveSection(newActiveSection);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

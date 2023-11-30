"use client";
import { useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

import _ from "../styles/home.module.scss";
import { useGlobalProvider } from "@/sdk";

const BackToTopButton = () => {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  // const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    // const handleScroll = () => {
    //   if (window.scrollY <= -50) {
    //     return setShowBackToTopBtn(true);
    //   }
    //   setShowBackToTopBtn(false);
    // };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Set visibility based on the scroll direction
      setShowBackToTopBtn(
        currentScrollPos < prevScrollPos && currentScrollPos > 50
      );
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const {
    mobileMenuStore: { isMobileMenuOpen },
  } = useGlobalProvider();

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!isMobileMenuOpen ? (
        <button
          className={_.btt}
          onClick={handleScroll}
          style={{
            display: showBackToTopBtn ? "grid" : "none",
          }}
        >
          <BsChevronUp />
        </button>
      ) : null}
    </>
  );
};

export default BackToTopButton;

"use client";
import { useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

import _ from "../styles/home.module.scss";

const BackTopButton = () => {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        return setShowBackToTopBtn(true);
      }
      setShowBackToTopBtn(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={_.btt}
      onClick={handleScroll}
      style={{
        display: showBackToTopBtn ? "grid" : "none",
      }}
    >
      <BsChevronUp />
    </button>
  );
};

export default BackTopButton;

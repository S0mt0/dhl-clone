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

  return (
    <a
      href={"#"}
      className={_.btt}
      style={{
        display: showBackToTopBtn ? "grid" : "none",
      }}
    >
      <BsChevronUp />
    </a>
  );
};

export default BackTopButton;

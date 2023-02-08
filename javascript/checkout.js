// JavaScript Document

//Selecting Page number using querySelector
const pages = document.querySelectorAll(".page");
    const translateAmount = 100; 
    let translate = 0;

//Slide to next division within the same page when button onclick
    slide = (direction) => {

      direction === "next" ? translate -= translateAmount : translate += translateAmount;
//Sliding of next division
      pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
    }
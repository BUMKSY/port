/*GSAP 애니메이션*/

/* Header */

/*
gsap.set(".header__inner", {
  background: "##F1EDE8",
});

gsap.to(".header__inner", {
  background: "#2B2B2B",
  duration: 0.3,
  scrollTrigger: {
    trigger: "#about",
    start: ".about_inner",
    end: "bottom",
    invalidateOnRefresh: true,
    toggleActions: "restart reset restart reset",
    markers: true,
  },
});
*/

gsap.set(".header__inner a", {
  color: "#2B2B2B",
});

gsap.to(".header__inner a", {
  color: "#fff",
  duration: 0.3,
  scrollTrigger: {
    trigger: "#about",
    start: ".about_inner",
    end: "bottom",
    invalidateOnRefresh: true,
    toggleActions: "restart reset restart reset",
  },
});

/* Visual */

document.querySelectorAll(".splitText").forEach((desc) => {
  let splitText = desc.innerText;
  let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
  splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
  desc.innerHTML = splitWrap;
  desc.setAttribute("aria-label", splitText);
});

gsap.set(".header__inner", {
  opacity: 0,
});

gsap.to(".header__inner", {
  opacity: 1,
  duration: 2.8,
  delay: 2.8,
});

gsap.to(".visual_line1", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.1,
});
gsap.to(".visual_line2", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.2,
});
gsap.to(".visual_line3", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.3,
});
gsap.to(".visual_line4", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.4,
});
gsap.to(".visual_line5", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.5,
});
gsap.to(".visual_line6", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.6,
});
gsap.to(".visual_line7", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.7,
});

gsap.to(".visual_line_box ul li", {
  duration: 1.5,
  ease: "back.inOut",
  marginTop: "0.6vw",
  delay: 2.8,
});

gsap.to(".visual_inner h2 span", {
  duration: 2,
  y: 0,
  stagger: 0.04,
  ease: "expo",
  delay: 2.8,
});

gsap.to(".visual_line7 span", {
  duration: 2,
  x: 0,
  opacity: 1,
  ease: "expo",
  delay: 2.8,
});

gsap.to("#visual_dimension", {
  y: 0,
  opacity: 1,
  duration: 3,
  ease: "expo",
  delay: 3.8,
});

/*About */

gsap.set("#about", {
  duration: 0.3,
  background: "##F1EDE8",
  color: "#2B2B2B",
});

gsap.to("#about", {
  duration: 0.3,
  background: "#2B2B2B",
  color: "#fff",
  scrollTrigger: {
    trigger: "#about",
    start: ".about_text:nth-of-type(1)",
    end: ".about_text:nth-of-type(3)",
    pin: true,
    invalidateOnRefresh: true,
    toggleActions: "restart none reset none",
  },
});

/* Website */

gsap.set(".website_box li", {
  y: 150,
  opacity: 0,
});

gsap.to(".website_box li", {
  y: 0,
  opacity: 1,
  duration: 1.3,
  stagger: 0.08,
  scrollTrigger: {
    trigger: "#website",
    start: "top top",
    end: "bottom 10%",
    toggleActions: "restart none none none",
  },
});

/* Javascript */

gsap.set(".project", { zIndex: (i, target, targets) => targets.length - i });

// Project stack FX
let projects = gsap.utils.toArray(".project");
// let projectImages = gsap.utils.toArray('.project .project-container__inner');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#javascript",
    start: () => "top top",
    end: () => "" + (projects.length - 1) * window.innerHeight,
    scrub: 0.8,
    pin: true,
    invalidateOnRefresh: true,
  },
});

projects.forEach((project, i) => {
  if (i !== projects.length - 1) {
    tl.to(project, {
      xPercent: -92 + (projects.length - 1),
      ease: "none",
      stagger: 0.5,
      scrub: 0.8,
    });
  }
});

/* Slogan */

gsap.to(".slogan_line_box ul li", {
  duration: 1.6,
  marginTop: "0.6vw",
  ease: "back.inOut",
  scrollTrigger: {
    trigger: ".slogan_inner h2",
    end: "bottom top",
    toggleActions: "restart none none none",
  },
});

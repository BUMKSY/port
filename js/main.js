/*GSAP 애니메이션*/

/* Visual */

document.querySelectorAll(".splitText").forEach((desc) => {
  let splitText = desc.innerText;
  let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
  splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
  desc.innerHTML = splitWrap;
  desc.setAttribute("aria-label", splitText);
});

gsap.to(".visual_line1", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.2,
});
gsap.to(".visual_line2", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.3,
});
gsap.to(".visual_line3", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.4,
});
gsap.to(".visual_line4", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.5,
});
gsap.to(".visual_line5", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.6,
});
gsap.to(".visual_line6", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.7,
});
gsap.to(".visual_line7", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.8,
});

gsap.to(".visual_line_box ul li", {
  duration: 1.5,
  ease: "back.inOut",
  marginTop: "0.8vw",
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

/* Javascript */

gsap.registerPlugin(ScrollTrigger);
let SECTIONS = gsap.utils.toArray(".slide");

gsap.to(SECTIONS, {
  xPercent: -100 * (SECTIONS.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#javascript",
    end: () => "+=" + document.querySelector("#javascript").offsetWidth,
    pin: true,
    scrub: 1,
    snap: 1 / (SECTIONS.length - 1),
  },
});

/* Website */

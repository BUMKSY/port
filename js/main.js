/*GSAP 애니메이션*/

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
  duration: 3,
  delay: 3,
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

// Today header handling
// keep at bottom
ScrollTrigger.create({
  trigger: ".sticky-today",
  start: "top bottom-=150",
  endTrigger: ".today-content",
  end: "bottom bottom-=75",
  pin: true,
  pinSpacing: false,
});

// keep at top
ScrollTrigger.create({
  trigger: ".sticky-today",
  start: "top top+=75",
  endTrigger: "html",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false,
});

// Tomorrow header handling
// keep at bottom
ScrollTrigger.create({
  trigger: ".sticky-tomorrow",
  start: "top bottom-=75",
  endTrigger: ".tomorrow-content",
  end: "bottom bottom-=75",
  pin: true,
  pinSpacing: false,
});

// keep at top
ScrollTrigger.create({
  trigger: ".sticky-tomorrow",
  start: "top top+=150",
  endTrigger: "html",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false,
});

/* Website */

gsap.set(".website_box li", {
  y: 170,
  opacity: 0,
});

gsap.to(".website_box li", {
  y: 0,
  opacity: 1,
  duration: 1.3,
  stagger: 0.08,
  scrollTrigger: {
    trigger: "#website",
    start: "top 50%",
    end: "bottom 10%",
    toggleActions: "restart none reverse none",
  },
});

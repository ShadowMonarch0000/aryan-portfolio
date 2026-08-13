import {
  animate,
  createTimeline,
  stagger,
} from "animejs";


// =========================
// MAGNETIC BUTTON
// =========================

function magneticButton() {
  const button = document.querySelector(".hero-button");

  if (!button) return;

  button.addEventListener("mousemove", (event) => {
    const rect = button.getBoundingClientRect();

    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    animate(button, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 300,
      ease: "outExpo",
    });
  });

  button.addEventListener("mouseleave", () => {
    animate(button, {
      x: 0,
      y: 0,
      duration: 700,
      ease: "outElastic(1, .5)",
    });
  });
}


// =========================
// HERO ANIMATION
// =========================

export function heroAnimation() {

  const timeline = createTimeline({
    defaults: {
      ease: "outExpo",
    },
  });

  timeline

    .add(".hero-small", {
      y: [30, 0],
      opacity: [0, 1],
      duration: 700,
    })

    .add(
      ".letter",
      {
        y: ["100%", "0%"],
        opacity: [0, 1],
        duration: 1000,
        delay: stagger(80),
      },
      "-=300"
    )

    .add(
      ".hero-description",
      {
        y: [30, 0],
        opacity: [0, 1],
        duration: 700,
      },
      "-=500"
    )

    .add(
      ".hero-button",
      {
        y: [30, 0],
        opacity: [0, 1],
        duration: 700,
      },
      "-=400"
    );


  // =========================
  // FLOATING SHAPES
  // =========================

  animate(".shape-one", {
    y: [-20, 20],
    alternate: true,
    loop: true,
    duration: 3000,
    ease: "inOutSine",
  });

  animate(".shape-two", {
    x: [-30, 30],
    y: [-20, 20],
    alternate: true,
    loop: true,
    duration: 2500,
    ease: "inOutSine",
  });


  // =========================
  // LETTER MOUSE EFFECT
  // =========================

  const letters = document.querySelectorAll(".letter");

  const handleMouseMove = (event) => {

    letters.forEach((letter) => {

      const rect = letter.getBoundingClientRect();

      const letterX = rect.left + rect.width / 2;
      const letterY = rect.top + rect.height / 2;

      const distanceX = event.clientX - letterX;
      const distanceY = event.clientY - letterY;

      const distance = Math.sqrt(
        distanceX * distanceX +
        distanceY * distanceY
      );

      if (distance < 180) {

        const strength = (180 - distance) / 180;

        animate(letter, {
          x: -distanceX * strength * 0.25,
          y: -distanceY * strength * 0.25,
          rotate: distanceX * 0.03,
          duration: 400,
          ease: "outExpo",
        });

      } else {

        animate(letter, {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 700,
          ease: "outExpo",
        });

      }

    });

  };

  document.addEventListener("mousemove", handleMouseMove);


  // =========================
  // MAGNETIC BUTTON
  // =========================

  magneticButton();


  // =========================
// ABOUT ANIMATION
// =========================

let aboutVisible = false;

const animateAbout = () => {
  const about = document.querySelector(".about");

  if (!about) return;

  const rect = about.getBoundingClientRect();

  const triggerPoint = window.innerHeight * 0.75;

  // About enters viewport
  if (rect.top < triggerPoint && rect.bottom > 0) {

    if (!aboutVisible) {
      aboutVisible = true;

      animate(".about-title", {
        y: [100, 0],
        opacity: [0, 1],
        duration: 1200,
        ease: "outExpo",
      });

      animate(".about-text", {
        y: [60, 0],
        opacity: [0, 1],
        delay: stagger(200),
        duration: 900,
        ease: "outExpo",
      });
    }

  } else {

    // About left viewport
    aboutVisible = false;

    // Reset elements so they can animate again
    animate(".about-title", {
      y: 100,
      opacity: 0,
      duration: 300,
    });

    animate(".about-text", {
      y: 60,
      opacity: 0,
      duration: 300,
    });
  }
};


  // Normal scrolling
  window.addEventListener("scroll", animateAbout);

// =========================
// SKILLS ANIMATION
// =========================

let skillsVisible = false;

const animateSkills = () => {

  const skills = document.querySelector(".skills");

  if (!skills) return;

  const rect = skills.getBoundingClientRect();

  const triggerPoint = window.innerHeight * 0.75;

  if (
    rect.top < triggerPoint &&
    rect.bottom > 0
  ) {

    if (!skillsVisible) {

      skillsVisible = true;

      animate(".skills-title", {
        y: [100, 0],
        opacity: [0, 1],
        duration: 1200,
        ease: "outExpo",
      });

      animate(".skill-item", {
        y: [50, 0],
        opacity: [0, 1],
        delay: stagger(100),
        duration: 800,
        ease: "outExpo",
      });

    }

  } else {

    skillsVisible = false;

    animate(".skills-title", {
      y: 100,
      opacity: 0,
      duration: 300,
    });

    animate(".skill-item", {
      y: 50,
      opacity: 0,
      duration: 300,
    });

  }
};

window.addEventListener(
  "scroll",
  animateSkills
);

animateSkills();


  // =========================
  // NAVBAR ABOUT CLICK
  // =========================

  const aboutLink = document.querySelector(
    'a[href="#about"]'
  );

  if (aboutLink) {

    aboutLink.addEventListener("click", (event) => {

      event.preventDefault();

      const about = document.querySelector("#about");

      if (!about) return;

      about.scrollIntoView({
        behavior: "smooth",
      });

      // Wait for smooth scrolling to reach About
      setTimeout(() => {
        animateAbout();
      }, 600);

    });

  }


  // Check current position
  animateAbout();


  // =========================
  // CLEANUP
  // =========================

  return () => {

    document.removeEventListener(
      "mousemove",
      handleMouseMove
    );

    window.removeEventListener(
      "scroll",
      animateAbout
    );

    window.removeEventListener(
      "scroll",
      animateSkills
    );

  };
}
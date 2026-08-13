import {
  animate,
  createTimeline,
  stagger,
} from "animejs";


// =====================================================
// HERO ANIMATION
// =====================================================

export function heroAnimation() {

  // ===================================================
  // HERO TIMELINE
  // ===================================================

  const timeline = createTimeline({
    defaults: {
      ease: "outExpo",
    },
  });


  timeline

    // HELLO I'M
    .add(".hero-small", {
      y: [30, 0],
      opacity: [0, 1],
      duration: 700,
    })


    // NAME LETTERS
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


    // DESCRIPTION
    .add(
      ".hero-description",
      {
        y: [30, 0],
        opacity: [0, 1],
        duration: 700,
      },
      "-=500"
    )


    // BUTTON
    .add(
      ".hero-button",
      {
        y: [30, 0],
        opacity: [0, 1],
        duration: 700,
      },
      "-=400"
    );


  // ===================================================
  // FLOATING SHAPE ONE
  // ===================================================

  animate(".shape-one", {

    y: [-20, 20],

    alternate: true,

    loop: true,

    duration: 3000,

    ease: "inOutSine",

  });


  // ===================================================
  // FLOATING SHAPE TWO
  // ===================================================

  animate(".shape-two", {

    x: [-30, 30],

    y: [-20, 20],

    alternate: true,

    loop: true,

    duration: 2500,

    ease: "inOutSine",

  });


  // ===================================================
  // CURSOR
  // ===================================================

  const cursor =
    document.querySelector(".cursor-circle");


  if (!cursor) {
    return () => {};
  }


  // ===================================================
  // CURSOR FOLLOW
  // ===================================================

  const handleMouseMove = (event) => {

    animate(cursor, {

      left: event.clientX,

      top: event.clientY,

      duration: 400,

      ease: "outExpo",

    });

  };


  document.addEventListener(
    "mousemove",
    handleMouseMove
  );


  // ===================================================
  // INTERACTIVE ELEMENTS
  // ===================================================

  const interactiveElements =
    document.querySelectorAll(
      "a, button, .project-item, .skill-item"
    );


  // ---------------------------------------------------
  // CURSOR ENTER
  // ---------------------------------------------------

  const handleMouseEnter = () => {

    animate(cursor, {

      width: 100,

      height: 100,

      duration: 400,

      ease: "outExpo",

    });

  };


  // ---------------------------------------------------
  // CURSOR LEAVE
  // ---------------------------------------------------

  const handleMouseLeave = () => {

    animate(cursor, {

      width: 20,

      height: 20,

      duration: 400,

      ease: "outExpo",

    });

  };


  interactiveElements.forEach((element) => {

    element.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    element.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

  });


  // ===================================================
  // LETTER MOUSE EFFECT
  // ===================================================

  const letters =
    document.querySelectorAll(".letter");


  const handleLetterMouseMove = (event) => {

    letters.forEach((letter) => {

      const rect =
        letter.getBoundingClientRect();


      const letterX =
        rect.left +
        rect.width / 2;


      const letterY =
        rect.top +
        rect.height / 2;


      const distanceX =
        event.clientX -
        letterX;


      const distanceY =
        event.clientY -
        letterY;


      const distance =
        Math.sqrt(
          distanceX * distanceX +
          distanceY * distanceY
        );


      if (distance < 180) {

        const strength =
          (180 - distance) / 180;


        animate(letter, {

          x:
            -distanceX *
            strength *
            0.25,

          y:
            -distanceY *
            strength *
            0.25,

          rotate:
            distanceX * 0.03,

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


  document.addEventListener(
    "mousemove",
    handleLetterMouseMove
  );


  // ===================================================
  // MAGNETIC BUTTON
  // ===================================================

  const button =
    document.querySelector(".hero-button");


  const handleButtonMove = (event) => {

    if (!button) return;


    const rect =
      button.getBoundingClientRect();


    const x =
      event.clientX -
      (rect.left + rect.width / 2);


    const y =
      event.clientY -
      (rect.top + rect.height / 2);


    animate(button, {

      x: x * 0.25,

      y: y * 0.25,

      duration: 300,

      ease: "outExpo",

    });

  };


  const handleButtonLeave = () => {

    if (!button) return;


    animate(button, {

      x: 0,

      y: 0,

      duration: 700,

      ease: "outElastic(1, .5)",

    });

  };


  if (button) {

    button.addEventListener(
      "mousemove",
      handleButtonMove
    );

    button.addEventListener(
      "mouseleave",
      handleButtonLeave
    );

  }


  // ===================================================
  // NAVBAR SCROLL
  // ===================================================

  const navbar =
    document.querySelector(".navbar");


  const handleNavbarScroll = () => {

    if (!navbar) return;


    if (window.scrollY > 50) {

      navbar.classList.add(
        "navbar-scrolled"
      );

    } else {

      navbar.classList.remove(
        "navbar-scrolled"
      );

    }

  };


  window.addEventListener(
    "scroll",
    handleNavbarScroll
  );


  handleNavbarScroll();


  // ===================================================
  // ABOUT
  // ===================================================

  let aboutVisible = false;


  const animateAbout = () => {

    const about =
      document.querySelector(".about");


    if (!about) return;


    const rect =
      about.getBoundingClientRect();


    const triggerPoint =
      window.innerHeight * 0.75;


    if (
      rect.top < triggerPoint &&
      rect.bottom > 0
    ) {

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

      aboutVisible = false;


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


  window.addEventListener(
    "scroll",
    animateAbout
  );


  animateAbout();


  // ===================================================
  // SKILLS
  // ===================================================

  let skillsVisible = false;


  const animateSkills = () => {

    const skills =
      document.querySelector(".skills");


    if (!skills) return;


    const rect =
      skills.getBoundingClientRect();


    const triggerPoint =
      window.innerHeight * 0.75;


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


  // ===================================================
  // PROJECTS
  // ===================================================

  let projectsVisible = false;


  const animateProjects = () => {

    const projects =
      document.querySelector(".projects");


    if (!projects) return;


    const rect =
      projects.getBoundingClientRect();


    const triggerPoint =
      window.innerHeight * 0.75;


    if (
      rect.top < triggerPoint &&
      rect.bottom > 0
    ) {

      if (!projectsVisible) {

        projectsVisible = true;


        animate(".projects-title", {

          y: [100, 0],

          opacity: [0, 1],

          duration: 1200,

          ease: "outExpo",

        });


        animate(".project-item", {

          y: [60, 0],

          opacity: [0, 1],

          delay: stagger(150),

          duration: 900,

          ease: "outExpo",

        });

      }

    } else {

      projectsVisible = false;


      animate(".projects-title", {

        y: 100,

        opacity: 0,

        duration: 300,

      });


      animate(".project-item", {

        y: 60,

        opacity: 0,

        duration: 300,

      });

    }

  };


  window.addEventListener(
    "scroll",
    animateProjects
  );


  animateProjects();


  // ===================================================
  // CONTACT
  // ===================================================

  let contactVisible = false;


  const animateContact = () => {

    const contact =
      document.querySelector(".contact");


    if (!contact) return;


    const rect =
      contact.getBoundingClientRect();


    const triggerPoint =
      window.innerHeight * 0.75;


    if (
      rect.top < triggerPoint &&
      rect.bottom > 0
    ) {

      if (!contactVisible) {

        contactVisible = true;


        animate(".contact-title", {

          y: [100, 0],

          opacity: [0, 1],

          duration: 1200,

          ease: "outExpo",

        });


        animate(".contact-text", {

          y: [50, 0],

          opacity: [0, 1],

          duration: 900,

          ease: "outExpo",

        });


        animate(".contact-email", {

          y: [40, 0],

          opacity: [0, 1],

          duration: 700,

          ease: "outExpo",

        });

      }

    } else {

      contactVisible = false;


      animate(".contact-title", {

        y: 100,

        opacity: 0,

        duration: 300,

      });


      animate(".contact-text", {

        y: 50,

        opacity: 0,

        duration: 300,

      });


      animate(".contact-email", {

        y: 40,

        opacity: 0,

        duration: 300,

      });

    }

  };


  window.addEventListener(
    "scroll",
    animateContact
  );


  animateContact();


  // ===================================================
  // CLEANUP
  // ===================================================

  return () => {

    document.removeEventListener(
      "mousemove",
      handleMouseMove
    );


    document.removeEventListener(
      "mousemove",
      handleLetterMouseMove
    );


    window.removeEventListener(
      "scroll",
      handleNavbarScroll
    );


    window.removeEventListener(
      "scroll",
      animateAbout
    );


    window.removeEventListener(
      "scroll",
      animateSkills
    );


    window.removeEventListener(
      "scroll",
      animateProjects
    );


    window.removeEventListener(
      "scroll",
      animateContact
    );


    interactiveElements.forEach((element) => {

      element.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      element.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

    });


    if (button) {

      button.removeEventListener(
        "mousemove",
        handleButtonMove
      );

      button.removeEventListener(
        "mouseleave",
        handleButtonLeave
      );

    }

  };

}
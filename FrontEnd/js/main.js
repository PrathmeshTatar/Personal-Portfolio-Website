                                                                                            const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navlinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



async function loadProfile() {
  try {
    const res = await fetch("https://personal-portfolio-website-lqum.onrender.com/api/profile");
    const data = await res.json();

    document.getElementById("profile-name").textContent = data.name;
    document.getElementById("profile-title").textContent = data.title;
    const aboutContainer = document.getElementById("profile-about");
    aboutContainer.innerHTML = "";

    data.about.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    aboutContainer.appendChild(p);
    });


    const tagline = document.getElementById("profile-tagline");
    tagline.textContent = "Passionate about building scalable web applications.";

    const skillsGrid = document.getElementById("skillsGrid");
    skillsGrid.innerHTML = "";

    data.skills.forEach(skill => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.innerHTML = `<h3>${skill}</h3>`;
      skillsGrid.appendChild(card);
    });

  } catch (error) {
    console.error("Failed to load profile");
  }
}

loadProfile();






const phoneElement = document.querySelector(".copy-phone");
const copyMsg = document.getElementById("copyMsg");

if (phoneElement) {
  phoneElement.addEventListener("click", () => {
    const phone = phoneElement.getAttribute("data-phone");

    navigator.clipboard.writeText(phone).then(() => {
      copyMsg.textContent = "Phone number copied!";
      setTimeout(() => {
        copyMsg.textContent = "";
      }, 2000);
    });
  });
}



const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});




const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
const submitBtn = document.getElementById("submitBtn");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const data = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch("https://personal-portfolio-website-lqum.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        formMsg.textContent = "Message sent successfully!";
        contactForm.reset();
      } else {
        formMsg.textContent = result.message || "Something went wrong";
      }
    } catch (error) {
      formMsg.textContent = "Server error. Please try again later.";
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  });
}




async function loadExperience() {
  try {
    const res = await fetch("https://personal-portfolio-website-lqum.onrender.com/api/experience");
    const data = await res.json();

    const container = document.getElementById("experienceGrid");
    container.innerHTML = "";

    data.forEach(exp => {
      const card = document.createElement("div");
      card.className = "exp-card";

      let pointsHTML = "";
      exp.points.forEach(point => {
        pointsHTML += `<li>${point}</li>`;
      });

      card.innerHTML = `
        <h3>${exp.role}</h3>
        <span>${exp.company} · ${exp.duration}</span>
        <ul>${pointsHTML}</ul>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Failed to load experience");
  }
}

loadExperience();




const projectsGrid = document.getElementById("projectsGrid");

async function loadProjects() {
  try {
    const response = await fetch("https://personal-portfolio-website-lqum.onrender.com/api/projects");
    const projects = await response.json();

    projectsGrid.innerHTML = "";

    projects.forEach(project => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <span>Tech: ${project.techStack.join(", ")}</span>
        <div class="project-links">
          ${project.githubLink ? `<a href="${project.githubLink}" target="_blank">GitHub</a>` : ""}
          ${project.liveLink ? `<a href="${project.liveLink}" target="_blank">Live</a>` : ""}
        </div>
      `;

      projectsGrid.appendChild(card);
    });
  } catch (error) {
    projectsGrid.innerHTML = "<p>Failed to load projects.</p>";
  }
}

if (projectsGrid) {
  loadProjects();
}



async function loadEducation() {
  try {
    const res = await fetch("https://personal-portfolio-website-lqum.onrender.com/api/education");
    const data = await res.json();

    const container = document.getElementById("educationGrid");
    container.innerHTML = "";

    data.forEach(edu => {
      const card = document.createElement("div");
      card.className = "edu-card";

      let detailsHTML = "";
      edu.details.forEach(detail => {
        detailsHTML += `<li>${detail}</li>`;
      });

      card.innerHTML = `
        <h3>${edu.degree}</h3>
        <span>${edu.institution}</span>
        <p>${edu.duration}</p>
        <ul>${detailsHTML}</ul>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Failed to load education");
  }
}

loadEducation();

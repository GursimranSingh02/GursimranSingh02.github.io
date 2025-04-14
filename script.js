// Nav Bar
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});





// Typing effect in Home Page
document.addEventListener("DOMContentLoaded", function () {
    const words = ["Machine Learning", "Deep Learning", "Artificial Intelligence", "Data Analytics"];
    const typed = document.getElementById("typed");
  
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function typeEffect() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typed.textContent = currentWord.substring(0, charIndex--);
      } else {
        typed.textContent = currentWord.substring(0, charIndex++);
      }
  
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000); // pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
  
      const speed = isDeleting ? 50 : 100;
      setTimeout(typeEffect, speed);
    }
  
    typeEffect();
  });
  
  


// Certificate 
const certificates = [
    {
        image: "Assets/Certificates/IIT_Bombay_CPP.png",
        info: "IIT Bombay Spoken Tutorial C++ Training, May 2023",
        link: "https://drive.google.com/file/d/1U08lr1_X4w7Q2wl3VwpdG8-xTa1eJPKm/view?usp=drive_link"
    },
    {
        image: "Assets/Certificates/IIT Bombay Java.png",
        info: "IIT Bombay Spoken Tutorial Java Training, Sep 2024",
        link: "https://drive.google.com/file/d/1a3jEsYe3C2nHq-H4rDDGHxKT4pQ61jII/view?usp=drivesdk"
    },
    {
        image: "Assets/Certificates/Devtown CPP DSA.png",
        info: "DevTown C++ and DSA Bootcamp, Aug 2023",
        link: "https://www.cert.devtown.in/verify/Zw4Y7y"
    },
    {
        image: "Assets/Certificates/Devtown Frontend.png",
        info: "DevTown Frontend Development Bootcamp, Sep 2023",
        link: "https://www.cert.devtown.in/verify/Zw4Y7y"
    },
    {
        image: "Assets/Certificates/Devtown Backend.png",
        info: "DevTown Backend Development Bootcamp, Sep 2023",
        link: "https://www.cert.devtown.in/verify/2sMk14"
    },
    {
        image: "Assets/Certificates/Devtown Python AI.png",
        info: "DevTown Python and AI Bootcamp, Oct 2023",
        link: "https://www.cert.devtown.in/verify/2129wR"
    },
    {
        image: "Assets/Certificates/Devtown Deep Learning.png",
        info: "DevTown Deep Learning Bootcamp, Feb 2024",
        link: "https://www.cert.devtown.in/verify/2tbakJ"
    },
    {
        image: "Assets/Certificates/Thapar AI DS.png",
        info: "6 Weeks of Data Science Training at Thapar Polytecnic College, Patiala, Aug 2023",
        link: "https://drive.google.com/file/d/1a3jEsYe3C2nHq-H4rDDGHxKT4pQ61jII/view?usp=drivesdk"
    },
    {
        image: "Assets/Certificates/Guvi ChatGPT.png",
        info: "ChatGPT for Everyone by GUVI Geek Networks, Mar 2024",
        link: "https://www.guvi.in/certificate?id=155Vdh798H5y04g170"
    },
    {
        image: "Assets/Certificates/NxtWave AI.png",
        info: "AI for Students by Nxtwave, Oct 2023",
        link: "https://drive.google.com/file/d/1TpTZcv4uHPq5k3_sf0lSFthIAfcPDsuf/view"
    },
    {
        image: "Assets/Certificates/Coursera ML.jpeg",
        info: "Machine Learning Specialization by Coursera, Dec 2024",
        link: "https://images.template.net/385966/Certificate-Template-edit-online.png"
    }
];

let currentIndex = 0;
const imgElement = document.getElementById("certificateImage");
const infoElement = document.getElementById("certificateInfo");
const linkElement = document.getElementById("certificateLink");

function updateCertificate(index) {
    const cert = certificates[index];
    imgElement.src = cert.image;
    infoElement.textContent = cert.info;
    linkElement.href = cert.link;
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    updateCertificate(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % certificates.length;
    updateCertificate(currentIndex);
});

// Auto change every 2.5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % certificates.length;
    updateCertificate(currentIndex);
}, 2500);

// Initialize
updateCertificate(currentIndex);


// Footer Year
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
  });
  

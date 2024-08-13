const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

const testimonialsData = [
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess.",
  },
  {
    name: "Iida Niskanen",
    position: "Data Engineer",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills.",
  },
  {
    name: "Renee Sims",
    position: "Cloud Engineer",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder.",
  },
  {
    name: "Sasha Ho",
    position: "PhD Student",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills.",
  },
  {
    name: "Veeti Seppanen",
    position: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevate your skills.",
  },
];

function generateTestimonials() {
  const carousel = document.querySelector(".testimonial-carousel");

  testimonialsData.forEach((testimonial, index) => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.classList.add("testimonial");
    if (index === 0) testimonialDiv.classList.add("active");

    testimonialDiv.innerHTML = `
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <p>${testimonial.text}</p>
                <img class="testimonial-photo" src="${testimonial.photo}" alt="${testimonial.name}" width="250px" height="auto">
                <h2>${testimonial.name}</h2>
                <p>${testimonial.position}</p>
            `;

    carousel.appendChild(testimonialDiv);
  });
}

function handleCarousel() {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;
  let intervalId;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      if (i === index) {
        testimonial.classList.add("active");
      }
    });
  }

  function startCarousel() {
    intervalId = setInterval(function () {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }, 3000);
  }

  function resetCarouselInterval() {
    clearInterval(intervalId);
    startCarousel();
  }

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
    resetCarouselInterval();
  });

  prevButton.addEventListener("click", function () {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
    resetCarouselInterval();
  });

  showTestimonial(currentIndex);
  startCarousel();
}

document.addEventListener("DOMContentLoaded", function () {
  generateTestimonials();
  handleCarousel();
});

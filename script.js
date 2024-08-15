const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;


   
async function fetchTestimonials() {
  try {
      const response = await fetch('./testimonials.json'); 
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching testimonials data:', error);
      return [];
  }
}


function generateCarouselItems(testimonials) {
  const carouselItemsContainer = document.getElementById('carousel-items');

  testimonials.forEach((testimonial, index) => {
     
      const testimonialDiv = document.createElement('div');
      testimonialDiv.classList.add('duration-700', 'ease-in-out');
      if (index === 0) testimonialDiv.classList.add('active');
      testimonialDiv.setAttribute('data-carousel-item', index === 0 ? 'active' : '');

     
      testimonialDiv.innerHTML = `
          <div class="text-center p-8">
              <img class="mx-auto mb-4 rounded-full" src="${testimonial.photo}" alt="${testimonial.name}" width="100" height="100">
              <h3 class="text-lg font-bold">${testimonial.name}</h3>
              <p class="text-sm text-gray-500">${testimonial.position}</p>
              <p class="mt-4 text-base">${testimonial.text}</p>
          </div>
      `;

   
      carouselItemsContainer.appendChild(testimonialDiv);
  });
}


document.addEventListener('DOMContentLoaded', async function () {
  const testimonials = await fetchTestimonials();  
  generateCarouselItems(testimonials);            
  handleCarousel();                              
});


function handleCarousel() {
  const items = document.querySelectorAll('[data-carousel-item]');
  const prevButton = document.querySelector('[data-carousel-prev]');
  const nextButton = document.querySelector('[data-carousel-next]');
  let currentIndex = 0;

  function showItem(index) {
      items.forEach((item, i) => {
          item.classList.toggle('hidden', i !== index);
          item.classList.toggle('block', i === index);
      });
  }

  nextButton.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
  });

  prevButton.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
  });

 
  showItem(currentIndex);
}





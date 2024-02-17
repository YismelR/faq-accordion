// Event Handlers

const accordions = document.querySelectorAll('.accordion');


// For Loop
// for (let i =0; i < accordions.length; i++) {
//     const accordion = accordions[i];
//     const toggle = accordion.querySelector('.toggle');
    
//     const paragraph = accordion.querySelector('.answers');
//     const image = accordion.querySelector('.toggle-icon');

//     toggle.addEventListener('click', () => {
//       paragraph.classList.toggle('hidden');
//       const isClosed = paragraph.classList.contains('hidden');

//       image.src = isClosed ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
//     })
// }

// forEach HOF
accordions.forEach((accordion) => {
    const toggle = accordion.querySelector('.toggle');
    
    const paragraph = accordion.querySelector('.answers');
    const image = accordion.querySelector('.toggle-icon');

    toggle.addEventListener('click', () => {
      paragraph.classList.toggle('hidden');
      const isClosed = paragraph.classList.contains('hidden');

      image.src = isClosed ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
    })
})

// An iterator

// for (let accordion of accordions) {
//     const toggle = accordion.querySelector('.toggle');
    
//     const paragraph = accordion.querySelector('.answers');
//     const image = accordion.querySelector('.toggle-icon');

//     toggle.addEventListener('click', () => {
//       paragraph.classList.toggle('hidden');
//       const isClosed = paragraph.classList.contains('hidden');

//       image.src = isClosed ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
//     })
// }
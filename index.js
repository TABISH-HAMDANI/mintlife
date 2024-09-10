// Function to handle intersection of elements
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadein');
            // Don't unobserve the element so that the animation can be triggered again
        }
    });
}


// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

// Select elements to observe
const elements = document.querySelectorAll('.animatedFadeInUp');
elements.forEach(element => observer.observe(element));




// Function to handle intersection of elements for class 'fade-in'
function handleIntersectionFadeInUp(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // Don't unobserve the element so that the animation can be triggered again
        }
    });
}

// Create an Intersection Observer for elements with class 'fade-in'
const observerFadeInUp = new IntersectionObserver(handleIntersectionFadeInUp, { threshold: 0.2 });

// Select elements with class 'fade-in' to observe
const elementsFadeInUp = document.querySelectorAll('.fade-in');
elementsFadeInUp.forEach(element => observerFadeInUp.observe(element));




// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('toggle-btn');
//     const mainContent = document.querySelector('.main-content');

//     toggleButton.addEventListener('click', () => {
//         mainContent.classList.toggle('hide');
//     });
// });


function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const sections = document.querySelectorAll('.sectionToHide');
    sidebar.style.display = 'flex';

    sections.forEach(section => {
        section.style.display = 'none'; // Hide each section
    });
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const sections = document.querySelectorAll('.sectionToHide');

    sidebar.style.display = 'none';
    sections.forEach(section => {
        section.style.display = 'block'; // Hide each section
    });
}


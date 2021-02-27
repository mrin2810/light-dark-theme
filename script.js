const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function switchTheme(event) {
    let theme = 'light';
    if(!event.target.checked){
        textBox.style.backgroundColor = 'rgb(0 0 0 /70%)';
        nav.style.backgroundColor = 'rgb(255 255 255 /70%)';
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    } else {
        theme = 'dark';
        nav.style.backgroundColor = 'rgb(0 0 0 /70%)';
        textBox.style.backgroundColor = 'rgb(255 255 255 /70%)';
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    }
    toggleIcon.children[0].textContent = `${theme} Mode`;
    image1.src = `img/undraw_proud_coder_${theme}.svg`;
    image2.src = `img/undraw_feeling_proud_${theme}.svg`;
    image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
    document.documentElement.setAttribute('data-theme', theme);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const btn = document.querySelector(".form_btn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function(event) {
        event.preventDefault(); 
        modal.style.display = "block"; 
    }

    span.onclick = function() {
        modal.style.display = "none"; 
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; 
        }
    }
});


function toggleText(event, button) {
    event.preventDefault();
    const textElement = button.querySelector('.btn_favorite-text');
    if (textElement.innerText === 'Свободен') {
        textElement.innerText = 'Занят';
    } else {
        textElement.innerText = 'Свободен';
    }
}



function toggleImage(event, button) {
    event.preventDefault(); 
    const images = button.querySelectorAll('.notice');
    let currentImageIndex = Array.from(images).findIndex(img => img.style.display !== 'none');
    if (currentImageIndex !== -1) {
        images[currentImageIndex].style.display = 'none';
    }

    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

const svgButton = document.getElementById('svgButton');

svgButton.addEventListener('click', (event)=>{
    event.preventDefault();
    const path = svgButton.querySelector('path');
    const color =  path.getAttribute('fill');

    const newColor = color === "#EE3F44" ? '#f4f4f4' :'#EE3F44';
    path.setAttribute('fill', newColor);
})

function changeText(event, button) {
    event.preventDefault();
    const textElement = button.querySelector('.text_btn');
    if (textElement.innerText === 'В работе') {
        textElement.innerText = 'Занят';
    } else {
        textElement.innerText = 'В работе';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn_btn');
    let currentIndex = 0;
    buttons[currentIndex].classList.add('active');
    function updateActiveButton() {
        buttons.forEach((button, index) => {
            button.classList.remove('active'); 
            if (index === currentIndex) {
                button.classList.add('active'); 
            }
        });
        buttons[currentIndex].focus(); 
    }


    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % buttons.length; 
            updateActiveButton();
            event.preventDefault(); 
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + buttons.length) % buttons.length; 
            updateActiveButton();
            event.preventDefault(); 
        } else if (event.key === 'Enter') {
            buttons[currentIndex].click(); 
        }
    });
});
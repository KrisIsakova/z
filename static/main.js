let currentIndex = 0;
const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'];
const imgElement = document.querySelector('#portfolio-image');
const descriptionBox = document.querySelector('#description-box');
const closeDescription = document.querySelector('#close-description');

function showImage(index) {
    imgElement.src = `/static/img/${images[index]}`;
}

document.querySelector('#prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

document.querySelector('#next').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});

document.querySelector('#description').addEventListener('click', () => {
    descriptionBox.classList.remove('hidden');
});

closeDescription.addEventListener('click', () => {
    descriptionBox.classList.add('hidden');
});

showImage(currentIndex);

//для вспывающего окна

document.getElementById("open-form").addEventListener("click", function() {
    document.getElementById("email-dialog").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("close-dialog").addEventListener("click", function() {
    document.getElementById("email-dialog").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});


document.getElementById('submit-contact').addEventListener('click', () => {
    const contactData = document.getElementById('contact-input').value;

    fetch('/submit_contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ contact: contactData })
    })
    .then(response => {
        if (response.ok) {
            alert('Контактные данные отправлены!');
            document.getElementById('email-dialog').style.display = 'none';
        } else {
            alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
    });
});



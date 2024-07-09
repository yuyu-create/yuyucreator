document.addEventListener('DOMContentLoaded', function () {
    const cars = [
        {
            name: '1967 Ford Mustang',
            image: 'https://via.placeholder.com/300x200.png?text=1967+Ford+Mustang',
            description: 'A classic American muscle car with a powerful V8 engine.'
        },
        {
            name: '1955 Chevrolet Bel Air',
            image: 'https://via.placeholder.com/300x200.png?text=1955+Chevrolet+Bel+Air',
            description: 'A beautifully restored classic with a vintage charm.'
        },
        {
            name: '1970 Dodge Charger',
            image: 'https://via.placeholder.com/300x200.png?text=1970+Dodge+Charger',
            description: 'A legendary muscle car known for its performance and style.'
        }
    ];

    const carList = document.getElementById('car-list');

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');

        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>${car.description}</p>
        `;

        carList.appendChild(carItem);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! We have received your message: "${message}" We will contact you at ${email}.`);
    });
});

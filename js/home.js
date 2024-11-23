function switchTab(tabId) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected content section
    document.getElementById(tabId).classList.add('active');

    // Add active class to clicked tab
    event.target.classList.add('active');
}

function checkPrice() {
    const origin = document.getElementById('originCity').value;
    const destination = document.getElementById('destinationCity').value;
    const date = document.getElementById('departureDate').value;

    if (origin && destination && date) {
        // In a real application, this would come from an API
        const price = Math.floor(Math.random() * (2000000 - 500000) + 500000);
        
        document.getElementById('route').textContent = `${origin} - ${destination}`;
        document.getElementById('date').textContent = date;
        document.getElementById('price').textContent = `Rp ${price.toLocaleString()}`;
        
        document.getElementById('priceDetails').classList.add('show');
    } else {
        alert('Mohon lengkapi semua field');
    }
}
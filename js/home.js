function switchTab(tabId) {
    document.querySelectorAll('.hero').forEach(hero => {
        hero.classList.remove('hero4');
        hero.classList.remove('hero3');
        hero.classList.remove('hero2');
    });
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
function subrs(tabId) {
    
    // Hide all content sections
    document.querySelectorAll('.subs-content').forEach(section => {
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

function rates2(event, tabId) {
    event.preventDefault();  // Prevent form submission
    const from = document.getElementById('origin').value;
    const to = document.getElementById('destination').value;
    const dates = document.getElementById('date').value;
    const ship = document.getElementById('vehicle').value;


    if (from && to && dates && ship) {
        
        document.getElementById('from').textContent = from;
        document.getElementById('dates').textContent = dates;
        document.getElementById('to').textContent = to;
        document.getElementById('ship').textContent = ship;
        document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
        document.getElementById(tabId).classList.add('active');
        document.querySelectorAll('.hero').forEach(hero => {
            hero.classList.remove('hero4');
            hero.classList.remove('hero3');
        hero.classList.add('hero2');
    });
    } else {
        document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
        document.getElementById(tabId).classList.add('active');
        document.querySelectorAll('.hero').forEach(hero => {
            hero.classList.remove('hero4');
            hero.classList.remove('hero3');
        hero.classList.add('hero2');
    });
    }
}
function rates3(event, tabId) {
    event.preventDefault();  // Prevent form submission
        document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
        document.getElementById(tabId).classList.add('active');
        document.querySelectorAll('.hero').forEach(hero => {
        hero.classList.remove('hero4');
        hero.classList.remove('hero2');
        hero.classList.add('hero3');

    });
}
function rates4(event, tabId) {
    event.preventDefault();  // Prevent form submission
        document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
        document.getElementById(tabId).classList.add('active');
        document.querySelectorAll('.hero').forEach(hero => {
        hero.classList.remove('hero3');
        hero.classList.remove('hero2');
        hero.classList.add('hero4');

    });
}
function checkTrack() {
    const resi = document.getElementById('res').value;
    document.getElementById('resi').textContent = resi;
    document.getElementById('tracks').classList.add('show');
    document.querySelectorAll('.hero').forEach(hero => {
        hero.classList.remove('hero4');
        hero.classList.remove('hero2');
        hero.classList.add('hero3');

    });
}
function switchTab(tabId) {
    // Hide all content sections
    document.querySelectorAll('.container').forEach(section => {
        section.classList.remove('active');
    });
    // Show selected content section
    document.getElementById(tabId).classList.add('active');
}

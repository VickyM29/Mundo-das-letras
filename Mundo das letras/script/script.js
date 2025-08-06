const toggleBtn = document.getElementById('toggle-dark');
    const body = document.body;

    function setDarkMode(enabled) {
        if (enabled) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    }
    window.onload = function() {
        const dark = localStorage.getItem('darkMode') === 'true';
        setDarkMode(dark);
    };

    toggleBtn.addEventListener('click', function() {
        setDarkMode(!body.classList.contains('dark-mode'));
    });
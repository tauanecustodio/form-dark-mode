const mode = document.getElementById('modeIcon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login-form');

    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark');
    } else {
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        form.classList.remove('dark');
    }
});
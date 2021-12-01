//create and append button
let button = document.createElement('button');
button.id = 'button';
button.innerHTML = 'Dark Mode';
document.querySelector('.jv-nav-lvl1').appendChild(button);

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.toggle('dark-mode');
    button.innerHTML = 'Light Mode';
}
    
// button on click append link
button.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
        button.innerHTML = 'Light Mode';
    } else {
        localStorage.removeItem('dark-mode');
        button.innerHTML = 'Dark Mode';
    }
    
});



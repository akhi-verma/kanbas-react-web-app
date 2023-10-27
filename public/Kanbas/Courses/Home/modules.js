const toggleButton = document.querySelector('.navbar-toggler');
const column1 = document.getElementById('kanbas-navigation');


document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.getElementById('kanbas-navigation').classList.toggle('d-none');
});

const toggleButton2 = document.querySelector('.breadcrumb');
const column2 = document.getElementById('course-navigation');


document.querySelector('.breadcrumb').addEventListener('click', function () {
    document.getElementById('course-navigation').classList.toggle('d-none');
});

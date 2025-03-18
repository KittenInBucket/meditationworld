// Слайдшоу

// Переменная для хранения текущего индекса слайда
let slideIndex = 0;

// Запуск функции showSlides для автоматического переключения слайдов
showSlides();

// Функция для автоматического переключения слайдов
function showSlides() {
    // Получаем все элементы с классом "mySlides" (слайды)
    let slides = document.getElementsByClassName("mySlides");

    // Скрываем все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Увеличиваем индекс слайда на 1
    slideIndex++;

    // Если индекс слайда превышает количество слайдов, сбрасываем его на 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Показываем текущий слайд (индекс slideIndex - 1, так как массивы начинаются с 0)
    slides[slideIndex - 1].style.display = "block";

    // Устанавливаем таймер для вызова этой же функции через 5 секунд (5000 миллисекунд)
    setTimeout(showSlides, 5000); // Меняем слайд каждые 5 секунд
}

// Функция для ручного переключения слайдов (вперед или назад)
function plusSlides(n) {
    // Изменяем индекс слайда на n (n может быть положительным или отрицательным)
    slideIndex += n;

    // Получаем все элементы с классом "mySlides" (слайды)
    let slides = document.getElementsByClassName("mySlides");

    // Если индекс слайда превышает количество слайдов, сбрасываем его на 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Если индекс слайда меньше 1, устанавливаем его на последний слайд
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // Скрываем все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Показываем текущий слайд (индекс slideIndex - 1, так как массивы начинаются с 0)
    slides[slideIndex - 1].style.display = "block";
}
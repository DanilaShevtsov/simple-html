document.addEventListener('DOMContentLoaded', function() {
    // Функция для отображения приветственного сообщения
    document.getElementById('clickableDiv').addEventListener('click', function() {
        alert('Привет! Добро пожаловать в мир каршеринга!');
    });

    // Функция для изменения размера изображения
    document.getElementById('carImage').addEventListener('click', function() {
        const img = this;
        // Проверяем текущий размер изображения
        if (img.style.transform === 'scale(2)') {
            img.style.transform = 'scale(1)'; // Уменьшаем до оригинального размера
        } else {
            img.style.transform = 'scale(2)'; // Увеличиваем в 2 раза
        }
        img.style.transition = 'transform 0.3s ease'; // Плавный переход
    });
});
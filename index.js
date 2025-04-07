onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 10);
};





document.addEventListener("DOMContentLoaded", function() {
    const fireworksContainer = document.querySelector('.fireworks');

    function createFirework(x, y) {
        // Создаем основной фейерверк
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.width = '60px'; // Увеличенный размер
        firework.style.height = '60px';
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        firework.style.animation = 'explosion 1s forwards';

        fireworksContainer.appendChild(firework);

        // Создаем эффект искр
        for (let i = 0; i < 15; i++) {
            const spark = document.createElement('div');
            const size = Math.random() * 10 + 5; // Размер искры
            spark.classList.add('firework');
            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            spark.style.position = 'absolute';
            spark.style.left = `${x}px`;
            spark.style.top = `${y}px`;
            spark.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            spark.style.borderRadius = '50%';
            spark.style.opacity = '0';
            spark.style.animation = `spark 0.5s forwards`;
            spark.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px)`; // Случайное направление

            fireworksContainer.appendChild(spark);

            // Удаление элемента после анимации
            spark.addEventListener('animationend', () => {
                spark.remove();
            });
        }

        // Удаление основного фейерверка после анимации
        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }

    // Интервал создания фейерверков
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.5); // Салюты появляются в верхней половине экрана
        createFirework(x, y);
    }, 1000); // Создавать новый фейерверк каждые 1000 мс
});
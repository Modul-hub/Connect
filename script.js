// Находим все кнопки меню и блоки с контентом
const navBtns = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Функция переключения
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Удаляем класс "active" у всех кнопок и вкладок
        navBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(t => t.classList.remove('active'));

        // Добавляем класс "active" нажатой кнопке
        btn.classList.add('active');

        // Получаем ID нужной вкладки из атрибута data-tab
        const activeTab = document.getElementById(btn.dataset.tab);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    });
});

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

            document.querySelectorAll('.proxy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.getAttribute('data-url');

    // Открываем через временную ссылку — так браузер сразу
    // передаёт tg:// в Telegram и не «зависает» в загрузке
    const link = document.createElement('a');
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
});
            

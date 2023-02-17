// // Получаем все элементы img на странице
// const images = document.getElementsByTagName("img");

// // Проходимся по каждому изображению
// for (let i = 0; i < images.length; i++) {
//   const image = images[i];

//   // Проверяем, содержит ли путь к изображению нужную папку
//   if (image.src.includes("assets/img/icons/tabler-icons-2.4.0")) {
//     // Добавляем к изображению класс "icon-tabler"
//     image.classList.add("icon-tabler");
//   }
// }


// Получаем все элементы img на странице
const images = document.getElementsByTagName("img");

// Проходимся по каждому изображению
// for (let i = 0; i < images.length; i++) {
//   const image = images[i];

//   // Проверяем, содержит ли путь к изображению нужную папку
//   if (image.src.includes("assets/img/icons/tabler-icons-2.4.0")) {
//     // Создаем новый элемент SVG
//     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
//     // Копируем все атрибуты img в новый SVG-элемент
//     Array.from(image.attributes).forEach((attr) => {
//       svg.setAttribute(attr.name, attr.value);
//     });
    
//     // Создаем новый элемент use, который будет ссылаться на исходный SVG-файл
//     const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
//     use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", image.src);
    
//     // Добавляем элемент use в SVG-элемент
//     svg.appendChild(use);
    
//     // Заменяем исходный элемент img на новый элемент SVG
//     image.parentNode.replaceChild(svg, image);
    
//     // Добавляем к SVG-элементу класс "icon-tabler"
//     // svg.classList.add("icon-tabler");
//   }
// }

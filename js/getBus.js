// Добавление css файла в IFRAME
window.onload = () => {
  // создаём новый тег "script" для JSONP
  let jsonpScript = document.createElement("script");
  jsonpScript.src = "../css/frame.css?callback=loadCss";
  document.body.appendChild(jsonpScript);
}

// создаем функцию, которая будет вызвана после загрузки JSONP-скрипта  
function loadCss(response) {
  // создаём новый тег "style" и заполняем его содержимым полученным из JSONP
  let iframeStyle = document.createElement("style");
  iframeStyle.innerHTML = response.css;

  // вставляем стили в [1] - индекс iframe
  frames[1].document.head.appendChild(iframeStyle);
}

// const url = 'https://businfo82.ru/wap/online/?mr_id=574&rl_racetype=65';

// fetch(url, { mode: 'no-cors'})
//   .then(response => response.text())
//   .then(data => {
//     const parser = new DOMParser();
//     const htmlDocument = parser.parseFromString(data, "text/html");
//     const table = htmlDocument.getElementsByTagName("table")[0];
//     const rows = table.rows;

//     const busTable = document.getElementById("bus-table");
//     for (let i = 1; i < rows.length; i++) {
//       const columns = rows[i].cells;
//       const time = columns[0].textContent;
//       const number = columns[1].textContent;
//       const direction = columns[2].textContent;
//       const route = columns[3].textContent;
//       const location = columns[4].textContent;

//       const row = busTable.insertRow();
//       row.insertCell().textContent = time;
//       row.insertCell().textContent = number;
//       row.insertCell().textContent = direction;
//       row.insertCell().textContent = route;
//       row.insertCell().textContent = location;
//     }
//   })
//   .catch(error => console.error(error));

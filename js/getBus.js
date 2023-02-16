document.getElementById('FrameOnline').addEventListener('click', function(){
  document.querySelector('.button1').contentWindow.location.reload(true);
  
})
var items = document.getElementsByClassName('FrameOnline');
const ButtonReload = document.getElementById('UpdateButton')
ButtonReload.onclick = function(){
for (el of items){
	el.src = el.src;
}
window.location.reload();
};
console.log('Ширина экрана вашего браузера ' + window.innerWidth + ' px');



const TableWork = document.getElementById('FrameWork');
const TableWeek = document.getElementById('FrameWeek');
const TableOnline = document.getElementById('FrameOnline');
const BtnWork = document.getElementById('btnradio1');
const BtnWeek = document.getElementById('btnradio2');
const BtnOnline = document.getElementById('btnradio3');
const BtnGrp = document.getElementById('btn-group');

if (window.innerWidth < 1399) {
 

  BtnWork.onclick = function(){
    TableOnline.classList.add("hidden");
    TableWeek.classList.add("hidden");
    TableWork.classList.remove("hidden");
  };

  BtnWeek.onclick = function(){
    TableWork.classList.add("hidden");
    TableWeek.classList.remove("hidden");
    TableOnline.classList.add("hidden");
  };

  BtnOnline.onclick = function(){
    TableWork.classList.add("hidden");
    TableWeek.classList.add("hidden");
    TableOnline.classList.remove("hidden");
  };
}

else {
  TableWeek.classList.remove("hidden");
  TableOnline.classList.remove("hidden");
  TableWork.classList.remove("hidden");
  BtnGrp.classList.add("hidden");
}




// const url = 'http://businfo82.ru/wap/rasp/?rd=1677272400&mr_id=574&rl_racetype=65&st_id=25&rc_kkp=B';
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const tableSelector = 'table';

// fetch(proxyUrl + url)
//   .then(response => response.text())
//   .then(data => {
//     const parser = new DOMParser();
//     const htmlDoc = parser.parseFromString(data, 'text/html');
//     const table = htmlDoc.querySelector(tableSelector);
//     const rows = table.querySelectorAll('tr');
//     rows.forEach(row => {
//       const cells = row.querySelectorAll('td');
//       cells.forEach(cell => {
//         cell.style.color = 'red';
//       });
//     });
//   })
//   .catch(error => console.log(error));

  // const iframe = document.getElementById("myIframe");
  // const iframeWindow = iframe.contentWindow;

  // iframe.addEventListener("load", function() {
  //   const iframeBody = iframeWindow.document.body;
  //   const allElements = iframeBody.getElementsByTagName("*");

  //   for(let i = 0; i < allElements.length; i++) {
  //     allElements[i].style.color = "red";
  //   }
  // });



// Добавление css файла в IFRAME
// function changeTableTextColor(data) {
//   var iframe = document.getElementById('myIframe');
//   var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
//   var table = innerDoc.getElementsByTagName('table');
//   var rows = table.getElementsByTagName('tr');
//   for (var i = 0; i < rows.length; i++) {
//     var cells = rows[i].getElementsByTagName('td');
//     for (var j = 0; j < cells.length; j++) {
//       cells[j].style.color = 'red';
//     }
//   }
// }

// var script = document.createElement('script');
// script.src = 'http://businfo82.ru/wap/rasp/?rd=1677272400&mr_id=574&rl_racetype=65&st_id=25&rc_kkp=B?callback=changeTableTextColor';
// document.body.appendChild(script);

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

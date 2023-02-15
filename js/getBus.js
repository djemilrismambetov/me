const url = 'https://businfo82.ru/wap/online/?srv_id=2&uniqueid=1576';

fetch(url,{ mode: 'no-cors'})
  .then(response => response.text())
  .then(html => {
    const $ = cheerio.load(html);

    // Ищем таблицу с данными
    const table = $('table').eq(0);

    // Ищем все строки таблицы, кроме заголовка
    const rows = table.find('tr').slice(1);

    // Проходимся по всем строкам и получаем данные
    const data = rows.map((i, row) => {
      const columns = $(row).find('td');
      return {
        time: $(columns[0]).text(),
        number: $(columns[1]).text(),
        direction: $(columns[2]).text(),
        route: $(columns[3]).text(),
        location: $(columns[4]).text(),
      };
    }).get();

    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

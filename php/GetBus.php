<?php
// Подключаем библиотеку
require_once('simple_html_dom.php');

// URL-адрес страницы для парсинга
$url = 'https://businfo82.ru/wap/online/?srv_id=2&uniqueid=1576';

// Создаем объект для работы с HTML
$html = new simple_html_dom();

// Загружаем страницу
$html->load_file($url);

// Извлекаем информацию о движении автобусов
$bus_table = $html->find('table', 0);
$bus_data = array();

foreach ($bus_table->find('tr') as $row) {
    $bus_row = array();
    foreach ($row->find('td') as $cell) {
        $bus_row[] = $cell->plaintext;
    }
    $bus_data[] = $bus_row;
}

// Выводим информацию на экран
foreach ($bus_data as $bus) {
    echo "Автобус №{$bus[0]}: {$bus[1]} - {$bus[2]}\n";
}
?>

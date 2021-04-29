<h1>Задание 8 по СИАОДу</h1>

<div><strong>Цель:</strong> получить практический опыт по применению алгоритмов поиска в таблицах данных</div>
<div><strong>Задание:</strong> разработать и реализовать алгоритмы поиска записей с заданным ключом в таблице с применением различных алгоритмов. Т.е. выполнить два задания и оформить по ним отчёты в соостветствии с требованиями, представленными в этом документе</div>
<div><em>Вариант выбирается по правилу: остаток от деления номера студента в списке группы на 16 + 1</em></div>


<h2>Задание 1</h2>
<p>Разработать программу поиска записи по ключу в таблице записей с применением двух алгоритмов линейного поиска</p>

<ol>
  <li>Таблица содержит записи, структура которых определена вариантом. Ключи уникальны в пределах таблицы;</li>
  <li>Разработать функцию линейного поиска (метод грубой силы);</li>
  <li>Разработать функцию линейного поиска с барьером;</li>
  <li>Провести практическую оценку времени выполнения алгоритмов на таблицах с объёмом 100, 1000, 10000 записей;</li>
  <li>Составить таблицу с указанием: времени выполнения алгоритма, его фактическую и теоретическую вычислительную сложность;</li>
  <li>Сделать выводы об эффективности алгоритмов.</li>
</ol>


<h2>Задание 2</h2>
<p>Разработать программу поиска записи по ключу в таблице записей с применением алгоритмов, определённых в задании варианта</p>

<ol>
  <li>Таблица содержит записи, структура которых определена вариантом. Ключи уникальны в пределах таблицы;</li>
  <li>Разработать алгоритм поиска, определённый в варианте. Реализовать алгоритм функцией;</li>
  <li>Провести практическую оценку времени выполнения алгоритмов на таблицах объёмом 100, 1000, 10000 записей на случайно заполненных таблицах (худший случай). На таблицах с лучшим временем и средним;</li>
  <li>Составить таблицу с указанием: времени выполнения алгоритма, его фактическую и теоретическую вычислительную сложность.</li>
</ol>


<h2>Форма отчёта</h2>

<h3>Отчёт по заданию 1</h3>
<ol>
  <li>Постановка задачи;</li>
  <li>Описание подхода к решению и алгоритмов. Определить структуру записи таблицы. Определить размер одной записи в байтах</li>
  <li>Коды функций, реализующих алгоритмы. Для функций указать предусловие и постусловие;</li>
  <li>Представить таблицу с указанием: времени выполнения каждого алгоритма, его фактическую и теоретическую вычислительную сложность;</li>
  <li>Изобразить на одной координатной плоскости графики зависимости времени выполнения каждого алгоритма от объёма обрабатываемых данных. Представить графически функцию, определяющую асимптотический порядок роста;</li>
  <li>Привести выводы об эффективности алгоритмов линейного поиска.</li>
</ol>


<h4>Сводная таблица результатов</h4>
<table>
  <thead>
    <tr>
      <th>n</th>
      <th>T(n)</th>
      <th>Tт=f(C+M)</th>
      <th>Tп=Cф+Мф</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>100</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>1000</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>10000</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>100000</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>


<h3>Отчёт по заданию 2</h3>
<ol>
  <li>Постановка задачи;</li>
  <li>Алгоритм. Приведите алгоритм линейного поиска записи с ключом в таблице на псевдокоде;</li>
  <li>Код функции поиска. Указать предусловие и постусловие. Включить код функции в код программы задания 1;</li>
  <li>Представить таблицу с указанием: времени выполнения алгоритма, его фактическую и теоретическую вычислительную сложность;</li>
  <li>Изобразить графически зависимость времени выполнения алгоритма от объёма обрабатываемых данных. Представить графически функцию, определяющую асимптотический порядок роста;</li>
  <li>Привести выводы об эффективности рассматриваемого алгоритма поиска;</li>
  <li>Привести результаты сравнительного анализа алгоритмов линейного поиска и алгоритма варианта.</li>
</ol>


<h2>Варианты</h2>
<table>
  <thead>
    <tr>
      <th>№</th>
      <th>Алгоритмы поиска</th>
      <th>Структура записи файла (ключ - подчёркнутое поле)</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Фибоначчи поиск</td>
      <td>Владельцы автомобилей: <span style="text-decoration: underline">номер машины</span>, марка, сведения о владельце</td>
    </tr>
  </tbody>
</table>

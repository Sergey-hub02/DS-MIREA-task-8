import { cloneDeep } from "lodash";
import TableRow from "./TableRow/TableRow";

/**
 * Выполняет простой линейный поиск значения value в "таблице" table
 * @param table         "таблица", в которой происходит поиск
 * @param value         значение, которое нужно найти
 */
export const linearSearch = (table: Array<TableRow>, value: string): TableRow | undefined => {
  if (table.length === 0) {   // если массив пустой, то искать нечего
    return undefined;
  }

  return table.find((val: TableRow) => val.number === value);
}


/**
 * Выполняет линейный поиск с барьером
 * @param table         "таблица", в которой происходит поиск
 * @param value         значение, которое нужно найти
 */
export const barrierSearch = (table: Array<TableRow>, value: string): TableRow | undefined => {
  const length: number = table.length;

  if (length === 0) {   // если массив пустой, то искать нечего
    return undefined;
  }

  let last: TableRow = cloneDeep(table[length - 1]);   // запоминаем последний элемент
  let index: number = 0;

  table[length - 1].number = value;    // гарантирует, что ключ найдётся
  for (; table[index].number !== value; ++index);

  table[length - 1] = last;       // восстанавливаем последний элемент

  if (index < length - 1 || last.number === value) {
    return table[index];
  }

  return undefined;
}

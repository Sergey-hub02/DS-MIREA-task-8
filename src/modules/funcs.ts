import TableRow from "./TableRow/TableRow";

/**
 * Выполняет простой линейный поиск значения value в "таблице" table
 * @param table         "таблица", в которой происходит поиск
 * @param value         значение, которое нужно найти
 */
export const linearSearch = (table: Array<TableRow>, value: string): TableRow | undefined => {
  return table.find((val: TableRow) => val.number === value);
}

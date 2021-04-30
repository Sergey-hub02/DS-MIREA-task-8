import { cloneDeep } from "lodash";

/**
 * Возвращает случайное целое число в интервале [min, max)
 * @param min         минимальное возможное значение
 * @param max         максимальное возможное значение
 * @returns           рандомное целое число
 */
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
}


/**
 * Возвращает случайно сгенерированный массив длины length, содержащий целые числа в интервале [min, max)
 * @param length        кол-во элементов в массиве
 * @param min           минимальное возможное значение
 * @param max           максимальное возможное значение
 * @returns             рандомный массив
 */
export const generateArray = (length: number, min: number, max: number): Array<number> => {
  let array: Array<number> = new Array(length);

  for (let i: number = 0; i < length; ++i) {
    array[i] = getRandomNumber(min, max);
  }

  return array;
}


/**
 * Выполняет простой линейный поиск значения value в "таблице" table
 * @param table         "таблица", в которой происходит поиск
 * @param value         значение, которое нужно найти
 */
export const linearSearch = (table: Array<number>, value: number): number | undefined => {
  if (table.length === 0) {   // если массив пустой, то искать нечего
    return undefined;
  }

  for (let i: number = 0; i < table.length; ++i) {
    if (table[i] === value) {
      return i;
    }
  }

  return undefined;
}


/**
 * Выполняет линейный поиск с барьером
 * @param table         "таблица", в которой происходит поиск
 * @param value         значение, которое нужно найти
 */
export const barrierSearch = (table: Array<number>, value: number): number | undefined => {
  const length: number = table.length;

  if (length === 0) {   // если массив пустой, то искать нечего
    return undefined;
  }

  let last: number = cloneDeep(table[length - 1]);   // запоминаем последний элемент
  let index: number = 0;

  table[length - 1] = value;    // гарантирует, что ключ найдётся
  for (; table[index] !== value; ++index);

  table[length - 1] = last;       // восстанавливаем последний элемент

  if (index < length - 1 || last === value) {
    return index;
  }

  return undefined;
}

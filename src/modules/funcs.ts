import { cloneDeep } from "lodash";

/**
 * Выполняет операцию целочисленного деления value1 на value2
 * @param value1        делимое
 * @param value2        делитель
 * @returns             целочисленное частное
 */
const div = (value1: number, value2: number): number => {
  return (value1 - value1 % value2) / value2;
}

/**
 * Выполняет слияние для подмассивов array[low...middle], array[middle+1...high]
 * @param array         слияемые подмассивы
 * @param low           левая граница слияния
 * @param middle        средняя граница слияния
 * @param high          правая граница слияния
 */
const merge = (array: Array<number>, low: number, middle: number, high: number): void => {
  let i: number = low;
  let j: number = middle + 1;

  let extraArray: Array<number> = Array.from(array);

  for (let k: number = low; k <= high; ++k) {
    if (i > middle) {   // элементы из левой части закончились
      array[k] = extraArray[j++];
      continue;
    }

    if (j > high) {    // элементы из правой части закончились
      array[k] = extraArray[i++];
      continue;
    }

    if (extraArray[j] < extraArray[i]) {    // текущий ключ из правой половины меньше ключа из левой
      array[k] = extraArray[j++];
      continue;
    }

    // текущий ключ из левой половины меньше ключа из правой
    array[k] = extraArray[i++];
  }
}

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
 * Выполняет сортировку слиянием для заданного массива array
 * @param array         соритруемый массив
 * @param low           левая граница сортировки
 * @param high          правая граница сортировки
 */
export const mergeSort = (array: Array<number>, low: number, high: number): void => {
  if (high <= low) {
    return;
  }

  const middle: number = low + div(high - low, 2);

  mergeSort(array, low, middle);
  mergeSort(array, middle + 1, high);

  merge(array, low, middle, high);
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


/**
 * Выполняет Фибоначчи поиск в заданном массиве array
 * @param array         массив, в котором происходит поиск
 * @param value         элемент, который нужно найти
 */
export const fibonacciSearch = (array: Array<number>, value: number): number | undefined => {
  const length: number = array.length;

  let fib1: number = 0;
  let fib2: number = 1;
  let fib: number = fib1 + fib2;

  while (fib < length) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib1 + fib2;
  }

  let offset: number = -1;

  while (fib > 1) {
    let i: number = Math.min(offset + fib2, length - 1);

    if (array[i] < value) {
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;

      offset = i;
    }
    else if (array[i] > value) {
      fib = fib2;
      fib1 -= fib2;
      fib2 = fib - fib1;
    }
    else {
      return i;
    }
  }

  if (fib1 === 1 && array[offset + 1] === value) {
    return offset + 1;
  }

  return undefined;
}

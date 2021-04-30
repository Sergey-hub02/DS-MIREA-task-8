import * as fs from "fs";

import { generateArray, barrierSearch, getRandomNumber } from "./modules/funcs";
import { _INPUT_FILE_NAME_, _PATH_TO_INPUT_FILE_ } from "./constants";


// Подобие стандартного потока ввода
const STDIN: string = fs.readFileSync(_PATH_TO_INPUT_FILE_ + _INPUT_FILE_NAME_, "utf-8");


/**
 * Основная функция
 */
const main = async (): Promise<void> => {
  const arrayLength: number = +STDIN.split("\n")[0];
  const [arrayMinValue, arrayMaxValue] = STDIN.split("\n")[1].split(" ").map((item: string) => +item);
  
  const randomTarget: number = getRandomNumber(arrayMinValue, arrayMaxValue);

  let array: Array<number> = generateArray(arrayLength, arrayMinValue, arrayMaxValue);

  const searchResult: number | undefined = barrierSearch(array, randomTarget);

  if (searchResult === undefined) {
    console.log(`-------------------------------------`);
    console.log(`[RESULT]: Ключа ${randomTarget} не существует в таблице!`);
    console.log(`-------------------------------------`);
    return;
  }

  console.log(`-------------------------------------`);
  console.log(`[RESULT]: Ключу ${randomTarget} соответсвует индекс ${searchResult}`);
  console.log(`-------------------------------------`);
}


// Вызов основной функции с отловом ошибок
main()
  .catch((err: Error) => {
    console.log(`[ERROR]: ${err.message}`);
  });

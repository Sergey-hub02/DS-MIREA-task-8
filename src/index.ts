import * as fs from "fs";

import TableRow from "./modules/TableRow/TableRow";
import { linearSearch } from "./modules/funcs";
import { _INPUT_FILE_NAME_, _PATH_TO_INPUT_FILE_, _KEY_FILE_NAME_ } from "./constants";


// Подобие стандартного потока ввода
const STDIN: string = fs.readFileSync(_PATH_TO_INPUT_FILE_ + _INPUT_FILE_NAME_, "utf-8");
const KEY: string = fs.readFileSync(_PATH_TO_INPUT_FILE_ + _KEY_FILE_NAME_, "utf-8");


/**
 * Основная функция
 */
const main = async (): Promise<void> => {
  // Создание таблицы, в которой будет происходить поиск
  const table: Array<TableRow> = STDIN.split("\n\n").map((info: string) => {
    const [carNumber, carBrand, ownerInfo] = info.split("\n");
    return new TableRow(carNumber, carBrand, ownerInfo);
  });

  const searchResult: TableRow | undefined = linearSearch(table, KEY);

  if (searchResult === undefined) {
    console.log("------------------------------");
    console.log(`[RESULT]: Ключа ${KEY} в таблице не существует!`);
    console.log("------------------------------");
    return;
  }

  console.log(`[RESULT]: Ключу ${KEY} соответсвует запись:`);

  console.log("------------------------------");
  console.log(searchResult.toString());
  console.log("------------------------------");
}


// Вызов основной функции с отловом ошибок
main()
  .catch((err: Error) => {
    console.log(`[ERROR]: ${err.message}`);
  });

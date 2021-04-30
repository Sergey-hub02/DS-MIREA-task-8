/**
 * Класс, представляющий запись в таблице
 */
class TableRow {
  private _number: string;
  private _brand: string;
  private _owner: string;


  /**
   * Создаёт объект, являющийся записью в таблице
   * @param number        номер машины
   * @param brand         марка машины
   * @param owner         информация о владельце
   */
  public constructor(number: string, brand: string, owner: string) {
    this._number = number;
    this._brand = brand;
    this._owner = owner;
  }


  /**
   * Геттер для поля _number
   */
  public get number(): string {
    return this._number;
  }


  /**
   * Сеттер для поля _number
   * @param number        новое значение номера машины
   */
  public set number(number: string) {
    this._number = number;
  }


  /**
   * Геттер для поля _brand
   */
  public get brand(): string {
    return this._brand;
  }


  /**
   * Сеттер для поля _brand
   * @param brand         новое значение марки машины
   */
  public set brand(brand: string) {
    this._brand = brand;
  }


  /**
   * Геттер для поля _owner
   */
  public get owner(): string {
    return this._owner;
  }


  /**
   * Сеттер для поля _owner
   * @param owner         новое значение для информации о владельце машины
   */
  public set owner(owner: string) {
    this._owner = owner;
  }


  /**
   * Возвращает строковое представление записи в таблице
   */
  public toString(): string {
    return `Номер машины: ${this._number}\nМарка машины: ${this._brand}\nИнформация о владельце: ${this._owner}`;
  }
}


export default TableRow;

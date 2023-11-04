import { ERROR_MESSAGE } from "../src/constants/messages.js";
import { REGEX } from "../src/constants/regex.js";

class Money {
  #amount = 0;

  constructor(amount) {
    Money.#testPositiveIntRegex(amount);
    this.#amount = Money.#parse(amount);
  }

  getAmount() {
    return this.#amount;
  }

  static #testPositiveIntRegex(value) {
    if (!REGEX.onlyPositiveInt.test(value)) {
      throw new Error(ERROR_MESSAGE.notPostiveInt);
    }
  }

  static #parse(value) {
    return parseInt(value, 10);
  }
}

export default Money;

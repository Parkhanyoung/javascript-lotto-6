import { Console } from "@woowacourse/mission-utils";
import { INPUT_QUERY } from "../constants/messages.js";

const InputView = {
  async readInput(query) {
    return await Console.readLineAsync(query);
  },

  async readLottoMoney() {
    return await this.readInput(INPUT_QUERY.lottoMoney);
  },
};

export { InputView };

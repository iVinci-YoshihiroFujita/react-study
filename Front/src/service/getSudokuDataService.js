import { URL, config } from '../const/URL';
import Status from '../const/ResponseStatus';
import MSG from '../const/Messages';

const tmplt = {
  message: '',
  data: null,
};

/**
 * 数独ゲームの初期データを取得する。
 * メッセージが設定されていた場合はエラー
 * @returns {
 *  message: エラーメッセージ
 *  data: 数独ゲームのデータ
 * }
 */
const getSudokuDataService = async() => {
  try {
    const config = config();
    const response = await fetch(URL, config);
    const { status, message, data } = response;
    if (status === Status.FAIL) {
      return {
        ...tmplt,
        message: `${MSG.FAILED_TO_GET_DATA_WITH_MSG}${message}`,
      }
    }
    return {
      ...tmplt,
      data,
    }
  } catch (e) {
    console.log('Error: e');
    return {
      ...tmplt,
      message: MSG.FAILED_TO_GET_DATA_SOMETHING_WRONG,
    };
  }
  
};

export default getSudokuDataService;

import {
  config,
  URL_SUDOKU_GAME,
} from '../const/URL';
import Status from '../const/ResponseStatus';
import MSG from '../const/Messages';

const tmplt = {
  message: '',
  data: null,
}

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
    const conf = config();
    const response = await fetch(URL_SUDOKU_GAME, conf)
      .then(res => res.json());
    const { status, message, data } = response;
    if (status === Status.FAIL) {
      return {
        ...tmplt,
        message: `${MSG.FAILED_TO_GET_DATA_WITH_MSG}${message}`,
      }
    }

    // APIから取得した数独の生データをいい感じに加工する
    // 質問：
    // 元々はコンポーネント側で書いていた処理ですが、APIのレスポンスが持つデータ構造を扱うロジックをコンポーネントから
    // 切り離したいなと思ってデータ取得のサービスに書きました。
    // コンポーネント側を触るときはAPI側のデータ構造とか興味・関心がないな、目につかない方がスッキリするな、という考えです。
    // みなさんはどう思いますか？
    const _blocks = [[], [], [], [], [], [], [], [], []];
    for (let i = 0; i < data.length / 3; i += 1) {
      const rawdatas = data.slice(i * 3, (i + 1) * 3).split('');
      const datas = rawdatas.map(d => {
        const isNumberData = Number.isFinite(parseInt(d, 10));
        return {
          value: isNumberData ? d : '',
          fixed: isNumberData,
        }
      });
      const idx = Math.floor(i / 9) * 3 + (i % 3);
      _blocks[idx].push(...datas);
    }
    return {
      ...tmplt,
      data: _blocks,
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

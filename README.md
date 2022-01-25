# react-study
Reactのお勉強用リポジトリ。  
簡単なゲームをテーマにReact + AWSをメインに取り扱います。  

## memo
- ローカルでの動かし方（適当なバージョンのNode.jsがインストール済みであることが前提）
  ```ShellScript
  cd ./Front && npm i
  cd ../Stub && json-server --watch ./stub_def.json --port 9999
  cd ../Front && npm run dev
  ```
- i-VinciのTechblogでブログ記事として上げています。何回かに分けて書いているのですが、もう少しシリーズっぽくまとまったらこっちにリンクを記載しようと思います。
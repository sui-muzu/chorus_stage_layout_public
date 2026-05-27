/**
 * 合唱ステージ配置メーカー 公開版
 *
 * この版では、名簿・保存済み配置・名前入力データを運営側の
 * スプレッドシートには保存しません。
 * - 名簿: Web画面への貼り付け / CSV・TSVファイル読み込み
 * - 保存: 利用者ブラウザの localStorage / 配置ファイル(.choruslayout)
 * - 名前後入れ: CSV出力 → 利用者側で編集 → CSV読み込み
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('合唱ステージ配置メーカー')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

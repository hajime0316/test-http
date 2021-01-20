function doGet(e) {
  // シート情報を取得
  let sheet = SpreadsheetApp.getActiveSheet();
  console.log(sheet.getName());

  // 最終行の行番号を取得
  const last_row = sheet.getLastRow();
  const last_column = sheet.getLastColumn();
  console.log(last_row);
  console.log(last_column);

  let output_string;
  if (e === undefined || e.parameter.hospitalName == undefined) {
    // 空の文字列を返す
    output_string = '';
  }
  else {
    // timeStampの次のデータを返す
    // 次のデータがない場合はEOFを返す
    // 値が有効でない場合は空の文字列を返す
    output_string = '';
    for (let i = last_row; i >= 2; i--) {
      if (e.parameter.hospitalName === sheet.getRange(i, 2).getValue()) {
        let output_array = sheet.getRange(i, 1, 1, last_column).getValues()[0];
        // 日付を直感的にわかりやすい形に変換
        output_array[0] = output_array[0].toLocaleString();
        output_string = output_array.join();
      }
    }
  }

  // 返す文字列の確認
  console.log(output_string);

  // responseの生成
  // output_arrayをCSV形式で送信
  var out = ContentService.createTextOutput();
  out.setMimeType(ContentService.MimeType.CSV);
  out.setContent(output_string);
  return out;
}

// 各GoogleスプレッドシートにアクセスするためのURL

async function main() {
  const $hospitalButton = document.getElementById('hospital-buttons').getElementsByTagName('button');

  for (let i = 0; i < $hospitalButton.length; i++) {
    $hospitalButton[i].addEventListener('click', async (e) => {
      let $showResponse = document.getElementById('show-response');
      $showResponse.textContent = '通信中...';

      // Googleスプレッドシートから病院のデータを取ってくる
      const data = await getHospitalData('life_line_supply', e.target.textContent);

      // 取得したデータを表示
      $showResponse.textContent = '[' + data.join() + '] を受信しました';
    });
  }

  const $submitButton = document.getElementById('submit-button');

  $submitButton.addEventListener('click', async () => {
    let $showResponse = document.getElementById('show-response');
    const hospitalName = document.getElementsByTagName('input')[0].value;
    const spreadSheetName = document.getElementsByTagName('input')[1].value;

    $showResponse.textContent = '通信中...';

    // Googleスプレッドシートから病院のデータを取ってくる
    const data = await getHospitalData(spreadSheetName, hospitalName);

    // 取得したデータを表示
    $showResponse.textContent = (data !== null)
      ? '[' + data.join() + '] を受信しました'
      : '有効なデータが取得できませんでした';
  })
}

main();

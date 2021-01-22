// 各GoogleスプレッドシートにアクセスするためのURL
const urlWardDanger = 'https://script.google.com/macros/s/AKfycbxB-Iu7Vr8jXVA9O067KBdXzIEP83bMMkmYUz1nvpTvvcYpNy5vKXnZ/exec';
const urlLifeLineSupply = 'https://script.google.com/macros/s/AKfycbwPjAfL5rU5BSa50HIOeXA6WX0qXXkDQN3N13eZD1RJvq8a-eNmray3vA/exec';
const urlPatientMedicalExamination = 'https://script.google.com/macros/s/AKfycby2vLhNtz7uOZHDbnAs0OPwrCGdyMSO-tMml3MiLor6FSNK-b6Ppdha/exec';
const urlStaffNumber = 'https://script.google.com/macros/s/AKfycbzAHB2JNiJjGrePNxE0mkXJV3staxbllC75drSCZdwZHu-PPbnU3uiK/exec';
const urlOther = 'https://script.google.com/macros/s/AKfycbzd_yM_eB0T7_-fQFEla2EuoefCD1P7dXNmjzEeqZp1xFQ2L-qEXWcs/exec';

async function main() {
  const $hospitalButton = document.getElementById('hospital-buttons').getElementsByTagName('button');

  for (let i = 0; i < $hospitalButton.length; i++) {
    $hospitalButton[i].addEventListener('click', async (e) => {
      let $showResponse = document.getElementById('show-response');
      $showResponse.textContent = '通信中...';

      // Googleスプレッドシートから病院のデータを取ってくる
      const data = await getHospitalData(urlLifeLineSupply, e.target.textContent);

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

    const spreadSheetUrls = {
      ward_danger: urlWardDanger,
      life_line_supply: urlLifeLineSupply,
      patient_medical_examination: urlPatientMedicalExamination,
      staff_number: urlStaffNumber,
      other: urlOther,
    }

    // Googleスプレッドシートから病院のデータを取ってくる
    const data = await getHospitalData(spreadSheetUrls[spreadSheetName], hospitalName);

    // 取得したデータを表示
    $showResponse.textContent = '[' + data.join() + '] を受信しました';
  })
}

main();

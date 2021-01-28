/**
 * @brief  Googleスプレッドシートから病院のデータを取得する
 * @param  sheetName スプレッドシート名（'ward_danger', 'life_line_supply' etc）
 * @param  hospitalName 病院名
 * @return 指定した病院の最新のデータが格納された配列
 */
async function getHospitalData(sheetName = '', hospitalName = '') {
  const sheetUrls = {
    ward_danger: 'https://script.google.com/macros/s/AKfycbxB-Iu7Vr8jXVA9O067KBdXzIEP83bMMkmYUz1nvpTvvcYpNy5vKXnZ/exec',
    life_line_supply: 'https://script.google.com/macros/s/AKfycbwPjAfL5rU5BSa50HIOeXA6WX0qXXkDQN3N13eZD1RJvq8a-eNmray3vA/exec',
    patient_medical_examination: 'https://script.google.com/macros/s/AKfycby2vLhNtz7uOZHDbnAs0OPwrCGdyMSO-tMml3MiLor6FSNK-b6Ppdha/exec',
    staff_number: 'https://script.google.com/macros/s/AKfycbzAHB2JNiJjGrePNxE0mkXJV3staxbllC75drSCZdwZHu-PPbnU3uiK/exec',
    other: 'https://script.google.com/macros/s/AKfycbzd_yM_eB0T7_-fQFEla2EuoefCD1P7dXNmjzEeqZp1xFQ2L-qEXWcs/exec',
  }

  const response = await fetch(sheetUrls[sheetName] + '?hospitalName=' + hospitalName, {
    method: 'GET',
  })
  return (await response.text()).split(',');
}

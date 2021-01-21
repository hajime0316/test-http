/**
 * @brief  Googleスプレッドシートから病院のデータを取得する
 * @param  url Googleスプレッドシート (GASアプリ) へのURL
 * @param  hospitalName 病院名
 * @return 指定した病院の最新のデータが格納された配列
 */
async function getHospitalData(url = '', hospitalName = '') {
  const response = await fetch(url + '?hospitalName=' + hospitalName, {
    method: 'GET',
  })
  return (await response.text()).split(',');
}

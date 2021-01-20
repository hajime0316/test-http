async function getHospitalData(url = '', hospitalName = '') {
  const response = await fetch(url + '?hospitalName=' + hospitalName, {
    method: 'GET',
  })
  return (await response.text()).split(',');
}

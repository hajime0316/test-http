const urlLifeLineSupply = 'https://script.google.com/macros/s/AKfycbwPjAfL5rU5BSa50HIOeXA6WX0qXXkDQN3N13eZD1RJvq8a-eNmray3vA/exec'

async function main() {
  const $button = document.getElementsByTagName('button');

  for (let i = 0; i < $button.length; i++) {
    $button[i].addEventListener('click', async (e) => {
      let $showResponse = document.getElementById('show-response');
      $showResponse.textContent = '通信中...';
      const data = await getHospitalData(urlLifeLineSupply, e.target.textContent);
      $showResponse.textContent = '[' + data.join() + '] を受信しました';
    });
  }
}

main();

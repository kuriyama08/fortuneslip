const drawButton = document.getElementById("draw");
const userNameInput = document.getElementById("user-name");
const displayArea = document.getElementById("display-area");
const fortuneslips = [
  'image/greatLuck.png',
  'image/middleLuck.png',
  'image/smallLuck.png',
  'image/goodLuck.png',
  'image/uncertainLuck.png',
  'image/badLuck.png',
  'image/worseLuck.png'
];

function drawFortuneslip(){
  let r = Math.floor(Math.random() * fortuneslips.length);
  return fortuneslips[r];
};

drawButton.onclick = function click(){
  const userName = userNameInput.value;
  if (userName.length === 0) {
    return;
  }
  displayArea.innerText = '';

  //HTMLに表示する要素
const h3 = document.createElement('h3');
h3.innerText = `${userName}さんの今日の運勢は...？？`
displayArea.appendChild(h3);

const img = document.createElement('img');
let imgPath = drawFortuneslip();
img.setAttribute('src',imgPath);
displayArea.appendChild(img);
};

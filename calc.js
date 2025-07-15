const selectSender = document.getElementById('select-sender')
const flagSender = document.getElementById('flag-sender')
const selectReceiver = document.getElementById('select-receiver');
const flagReceiver = document.getElementById('flag-receiver');

function updateFlag(selectElement, imgElement) {
    const country = selectElement.value;
    imgElement.src = `flags/${country}.png`
}
selectSender.onchange = () => {
    updateFlag(selectSender, flagSender);
};
selectReceiver.onchange = () => {
    updateFlag(selectReceiver, flagReceiver);
};

const btn = document.querySelector('button')
const card = document.querySelector('.request')

function sendRequest(){
    card.innerHTML =  `<p style="color: white; text-align: center; font-weight: bold; padding: 50px;">Ваш запрос принят!</p>
    <p style="text-align:center; font-size:15px; font-weight:100;">Мы свяжемся с вами по указанному способу связи в ближайшее время либо вы можете перейти сразук диалогу с нашей поддержкой.</p>
    `;
}

btn.onclick=()=>{
    sendRequest()
}

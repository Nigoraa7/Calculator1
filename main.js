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

function sendRequest() {
    card.innerHTML = `
      <div style="
        padding: 40px 20px;
        text-align: center;
        color: white;
        font-family: sans-serif;
      ">
        <img src="Tick Square.svg" alt="Галочка" style="width: 60px; height: 60px; margin-bottom: 20px;" />
        <h2 style="font-size: 20px; margin-bottom: 10px; font-weight:100px;">Ваш запрос принят!</h2>
        <p style="color: white; font-size: 15px; font-weight: 300; margin-bottom: 30px;">
          Мы свяжемся с вами по указанному способу связи в ближайшее время<br>
          либо вы можете перейти сразу к диалогу с нашей поддержкой.
        </p>
        <button style="
          background-color: transparent;
          border: 2px solid white;
          color: white;
          padding: 10px 25px;
          border-radius: 50px;
          font-size: 14px;
          cursor: pointer;
        ">СВЯЗАТЬСЯ С ПОДДЕРЖКОЙ</button>
      </div>
    `;
  }
  

btn.onclick=()=>{
    sendRequest()
}

function setupCustomSelect(wrapperId, selectId, flagId) {
    const wrapper = document.getElementById(wrapperId);
    const selected = wrapper.querySelector('.selected-option');
    const optionsContainer = wrapper.querySelector('.options');
    const hiddenSelect = document.getElementById(selectId);
    const flag = document.getElementById(flagId);

    selected.addEventListener('click', () => {
        optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
    });

    wrapper.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            const label = option.querySelector('span').innerText;
            const imgSrc = option.querySelector('img').src;

         
            selected.querySelector('span').innerText = label;
            const img = selected.querySelector('img');
            img.src = imgSrc;
            img.style.display = 'inline-block';
            
            optionsContainer.style.display = 'none';

           
            hiddenSelect.value = value;
            hiddenSelect.dispatchEvent(new Event('change'));

         
            flag.src = imgSrc;
        });
    });

    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
            optionsContainer.style.display = 'none';
        }
    });
}

setupCustomSelect('sender-dropdown', 'select-sender', 'flag-sender');
setupCustomSelect('receiver-dropdown', 'select-receiver', 'flag-receiver');

function setupCurrencyDropdown(wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    const selected = wrapper.querySelector('.selected-option');
    const optionsContainer = wrapper.querySelector('.options');

    selected.addEventListener('click', () => {
        optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
    });

    wrapper.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            selected.querySelector('span').innerText = option.innerText;
            optionsContainer.style.display = 'none';
        });
    });

    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
            optionsContainer.style.display = 'none';
        }
    });
}

setupCurrencyDropdown('currency-dropdown-from');
setupCurrencyDropdown('currency-dropdown-to');


document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector('.contact-method-dropdown');
    const selected = dropdown.querySelector('.selected-option span');
    const optionsContainer = dropdown.querySelector('.options');
    const options = dropdown.querySelectorAll('.option');
    const hiddenInput = document.getElementById('contact-method');
  
    dropdown.querySelector('.selected-option').addEventListener('click', (e) => {
      e.stopPropagation(); 
      const isOpen = optionsContainer.style.display === 'block';
      document.querySelectorAll('.custom-dropdown .options').forEach(opt => opt.style.display = 'none');
      optionsContainer.style.display = isOpen ? 'none' : 'block';
    });
  
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation(); 
        selected.textContent = option.textContent;
        hiddenInput.value = option.textContent;
        optionsContainer.style.display = 'none';
      });
    });
  
    document.addEventListener('click', () => {
      optionsContainer.style.display = 'none';
    });
  });
  


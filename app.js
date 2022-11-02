const mainEl = document.querySelector('.main');

const passwordEl = document.createElement('input') // создаем input
passwordEl.classList.add('password'); // добавляем class инпуту
passwordEl.setAttribute('placeholder', 'Сгенерировать пароль'); // добавляем placeholder 
passwordEl.addEventListener('keypress', (e) => {
    e.preventDefault(); // сбрасываем стандартное поведение при нажатии на input
});
passwordEl.addEventListener('focus', (e) => {
    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passwordEl.value);
    alert("Текст скопирован!");
});

const copyBtn = document.createElement('button'); // создаем кнопку скопировать
copyBtn.classList.add('password-button'); //делаем класс для кнопки скопировать: "button"
copyBtn.innerText = 'Скопировать';
copyBtn.addEventListener('click', (e) => {

  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(passwordEl.value);
});

const generateBtn = document.createElement('button');
generateBtn.classList.add('password-button');
generateBtn.innerText = 'Сгенерировать';
generateBtn.addEventListener('click', (e) => {
    let password = generatePassword(15);
    passwordEl.value = password;
});

function generatePassword(passwordLength) { // алгоритм генерации пароля
    const numberChars = "0123456789";
    const upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowerChars = "qwertyuiopasdfghjklzxcvbnm";
    const downsymbolChars = "}~#*>>!$\?_+.\~";
    const symbolChars = "!@#$%^&*()_+=";
    const allChars = numberChars + upperChars + lowerChars + symbolChars + downsymbolChars;

    let randomString = '';

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomNumber];
    }

    return randomString;
}

mainEl.appendChild(passwordEl); // добавляем в main: input из переменной "passwordEl"
mainEl.appendChild(copyBtn); // добавляем в main: кнопку скопировать
mainEl.appendChild(generateBtn);
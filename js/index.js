//Elementos DOM
const lenghEL = document.getElementById('length');
const includeLowerEl = document.getElementById('includeLower');
const includeUpperEl = document.getElementById('includeUpper');
const includeNumebersEl = document.getElementById('includeNumbers');
const includeSymbolsEl = document.getElementById('includeSymbols');
const generateBtn = document.getElementById('generateBtn');
const passwordOutput = document.getElementById('passwordOutput');

//Caracteres Posibles
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numerChart = '0123456789';
const symbolChart = '!@$%^&*()_+"?><{}|'

//Generar Contraseya 
generateBtn.addEventListener('click', () => {
    const lengh= +lenghEL.value;
    const includeLower = includeLowerEl.checked;
    const includeUpper = includeUpperEl.checked;
    const includeNumber = includeNumebersEl.checked;
    const includeSymbol = includeSymbolsEl.checked;

    passwordOutput.value = generadorPassword(lengh, includeLower, includeUpper, includeNumber, includeSymbol)
});


//Funcion para generar la contraseya
function generadorPassword(lengh, includeLower, includeUpper, includeNumber, includeSymbol) {
    let chars = "";
    let password = '';

    if (includeLower) chars += lowerChars;
    if (includeUpper) chars += upperChars;
    if (includeNumber) chars += numerChart;
    if (includeSymbol) chars += symbolChart;

    for (let i = 0; i < lengh; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));


    }
    return password;

};
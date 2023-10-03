let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        
        if (buttonText === '=') {
            try {
                string = eval(string);
            } catch (error) {
                string = "Error";
            }
        } else if (buttonText === 'C') {
            string = "";
        } else if (buttonText === '±') {
            string = string.startsWith('-') ? string.slice(1) : '-' + string;
        } else if (buttonText === '%') {
            string = string / 100;
        } else if (buttonText === '.') {
            if (!string.includes('.')) {
                string += buttonText;
            }
        } else {
            string += buttonText;
        }
        
        document.querySelector('input').value = string;
    });
});

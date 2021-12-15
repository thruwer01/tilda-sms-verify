window.onload = () => {
    const cartNode = document.querySelector('.t706__orderform ');
    const codeNodeInput = cartNode.querySelector('div[data-input-lid="1639566191810"]');
    const btnSumbit = cartNode.querySelector('.t-form__submit');
    
    let phoneValue = null;

    if (codeNodeInput) {
        
        codeNodeInput.style.display = 'none';
        btnSumbit.style.dispaly = 'none';
        const codeInputNode = codeNodeInput.querySelector('input');
        
        btnSumbit.onclick = (event) => {
            event.preventDefault();
            console.log(event.cancelable)
            phoneValue = cartNode.querySelector('input.js-phonemask-result.js-tilda-rule').value;
            if (phoneValue.length < 18) {
                return false;
            }
            
            console.log('number length confirm', codeNodeInput)

            if (codeInputNode.value.length < 6) {
                codeNodeInput.style.display = 'block';
                return false;
            }

            if (codeInputNode.value.length == 6) {
                console.log('alls good')
            }

        }

    }
}
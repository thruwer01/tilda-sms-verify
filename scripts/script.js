window.onload = () => {
    const cartNode = document.querySelector('#form392283626');
    const codeNodeInput = cartNode.querySelector('div[data-input-lid="1639587608494"]');
    const btnSumbit = cartNode.querySelector('.t-form__submit');
    let codeValue = null;
    let phoneValue = null;

    if (codeNodeInput) {
        
        codeNodeInput.style.display = 'none';
        btnSumbit.style.display = 'none';

        const codeInputNode = codeNodeInput.querySelector('input');
        
        const ourBtnSubmit = document.createElement('div');
        ourBtnSubmit.className = "t-form__submit";
        ourBtnSubmit.innerHTML = '<button type="button" class="t-submit" style="color:#ffffff;background-color:#000000;">Оформить заказ</button>';
        cartNode.appendChild(ourBtnSubmit);

        let i = 0;
        
        ourBtnSubmit.onclick = () => {
            phoneValue = cartNode.querySelector('input.js-phonemask-result.js-tilda-rule').value;
            if (phoneValue.length < 18) {
                return false;
            }

            if (codeInputNode.value.length < 6) {
                codeNodeInput.style.display = 'block';
                codeInputNode.focus();
                if (i === 0) {
                    $.ajax({
                        method: "POST",
                        url: "https://u1551675.cp.regruhosting.ru/api/v1/send_message/",
                        data: {
                            "phone_number": phoneValue
                        },
                        success: (data) => {
                            codeValue = data.code;
                            console.log(codeValue);
                            let ourButtonSubmit = ourBtnSubmit.querySelector('button');
                            ourButtonSubmit.innerText = 'Проверить код';
                        }
                    });
                }
                i++;
                return false;
            }

            window.addEventListener('keydown', function (event) {
                if(event.keyCode == 13) {
                    event.preventDefault();
                    return false;
                }
            });

            if (codeInputNode.value.length == 6) {
                let inputError = codeNodeInput.querySelector('div.t-input-error');
                if (codeInputNode.value == codeValue) {
                    codeInputNode.style.border = "1px solid green";
                    inputError.innerText = 'Код введен верно, нажмите кнопку "Оформить заказ"';
                    inputError.style.display = 'block';
                    inputError.style.color = 'green';
                    codeInputNode.disabled = true;
                    ourBtnSubmit.style.display = 'none';
                    btnSumbit.style.display = 'block';
                } else {
                    codeInputNode.style.border = "1px solid red";
                    inputError.innerText = 'Код введен неверно, проверьте смс!';
                    inputError.style.display = 'block';
                    inputError.style.color = 'red';
                }
            }

        }
    }
}
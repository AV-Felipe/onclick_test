const submitButton = document.getElementById('sendButton');
const nameInputField = document.getElementById('nameField');
const mailInputField = document.getElementById('mailField');
const comentInputField = document.getElementById('messageField');
const inputForm = document.getElementById('feedbackForm');
const clientsReviewList = document.getElementById('reviewList');


submitButton.addEventListener('click', submitForm);

function submitForm(){
    
    //fields validation
    if (nameInputField.value == "" || mailInputField.value == "" || comentInputField.value == ""){
        if (document.contains(document.getElementById('warningMessage'))) {
            return;
        }else{
            const alertMessage= document.createElement('p');
            alertMessage.innerHTML = "Por favor preencha todos os campos"
            alertMessage.style.color = 'red';
            alertMessage.style.marginTop = '-28px';
            alertMessage.style.alignSelf = 'center';
            alertMessage.setAttribute('id', 'warningMessage');
            inputForm.appendChild(alertMessage);
            return;
        }
    }

    //warning removal
    if (document.contains(document.getElementById('warningMessage'))) {
        document.getElementById('warningMessage').remove();
    }

    clientsReviewList.innerHTML += `
    <li class="clientReview">
                    <p class="reviewerName">${nameInputField.value}</p>
                    <p class="reviewerMail">${mailInputField.value}</p>
                    <p class="reviewerText">
                        ${comentInputField.value}
                    </p>
                    <p class="reviewerScore">
                        <img src="assets/images/pizza-pie-yes.png" alt="nota" />
                        5
                    </p>
                </li>
    `

    console.log(nameInputField.value);
    console.log(inputForm);
}
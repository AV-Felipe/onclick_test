const submitButton = document.getElementById('sendButton');
const nameInputField = document.getElementById('nameField');
const mailInputField = document.getElementById('mailField');
const commentInputField = document.getElementById('messageField');
const inputForm = document.getElementById('feedbackForm');
const clientsReviewList = document.getElementById('reviewList');
let clientRate = 0;

const pizzaRateImage = document.querySelectorAll('.pizzaPieImg');

//IMAGE ANIMATION
console.log(pizzaRateImage);

[...pizzaRateImage].map(pizza => {
    pizza.addEventListener('mouseover', ()=>{
        pizza.src = "assets/images/pizza-pie-yes.png";
    })
    pizza.addEventListener('mouseout', pizzaChange);
});

function pizzaChange(){
    this.src="assets/images/pizza-pie-no.png";
}

pizzaRateImage[0].onclick = () =>{
    clientRate = 1;
    console.log(clientRate);
}
pizzaRateImage[1].onclick = () =>{
    clientRate = 2;
    console.log(clientRate);
}
pizzaRateImage[2].onclick = () =>{
    clientRate = 3;
    console.log(clientRate);
}
pizzaRateImage[3].onclick = () =>{
    clientRate = 4;
    console.log(clientRate);
}
pizzaRateImage[4].onclick = () =>{
    clientRate = 5;
    console.log(clientRate);
}


//FORM SUBMISSION
submitButton.addEventListener('click', submitForm);

function submitForm(){
    
    //fields validation
    if (nameInputField.value == "" || mailInputField.value == "" || commentInputField.value == ""){
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

    //review posting
    clientsReviewList.innerHTML += `
    <li class="clientReview">
                    <p class="reviewerName">${nameInputField.value}</p>
                    <p class="reviewerMail">${mailInputField.value}</p>
                    <p class="reviewerText">
                        ${commentInputField.value}
                    </p>
                    <p class="reviewerScore">
                        <img src="assets/images/pizza-pie-yes.png" alt="nota" />
                        ${clientRate.toString()}
                    </p>
                </li>
    `;

    nameInputField.value = "";
    mailInputField.value = "";
    commentInputField.value = "";
    clientRate = 0;
    
    console.log(nameInputField.value);
    console.log(inputForm);
}
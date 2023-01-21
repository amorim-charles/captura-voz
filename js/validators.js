const message = document.getElementById("message")
const icon = document.getElementById("icon")
const iconError = document.getElementById("icon-error")


function kickIsNotBetweenSmallerValueAndBiggerValue(kick) {
    if(kick > biggerValue) {
        return true

    } else if(kick < smallerValue) {
        return true
    } 
    
    return false
}

function kickIsNumber(kick) {
    return Number.isNaN(kick);
}

function kickIsBiggerThanSecretNumber(kick) {
    return kick > secretNumber;
}

function kickIsSmallerThanSecretNumber(kick) {
    return kick < secretNumber;
}

function validatorKick(kickInput) {
    const kick = +kickInput
    icon.classList.remove("fa-sharp", "fa-solid", "fa-down-long", "box-icon", "fa-up-long", "fa-xmark");
    iconError.classList.remove("fa-sharp", "fa-solid", "fa-xmark", "box-icon")
    
     if(kickIsNotBetweenSmallerValueAndBiggerValue(kick)) {
        iconError.classList.add("fa-sharp", "fa-solid", "fa-xmark", "box-icon" );
        message.textContent = `The Secret Number is between ${smallerValue} and ${biggerValue}`;

    } else if(kickIsNumber(kick)) {
        iconError.classList.add("fa-sharp", "fa-solid", "fa-xmark", "box-icon");
        message.textContent = `Speak one number between ${smallerValue} and ${biggerValue}`;
        
    } else if(kickIsSmallerThanSecretNumber(kick)) {
        icon.classList.add("fa-sharp", "fa-solid", "fa-up-long", "box-icon");
        message.textContent = `The Secret Number is Bigger than ${kick}`;

    } else if (kickIsBiggerThanSecretNumber(kick)) {
        icon.classList.add("fa-sharp", "fa-solid", "fa-down-long", "box-icon");
        message.textContent = `The Secret Number is Smaller than ${kick}`;

    } else if(kick === secretNumber){
        window.location = "endgame.html"
    }
}

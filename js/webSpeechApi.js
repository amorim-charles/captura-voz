window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()
recognition.addEventListener("result", onSpeak)

const button = document.getElementById("button")
button.addEventListener("click", element => {onSpeak(element)})

function onSpeak(element) {
    const kick = element.results[0][0].transcript
    //const kick = 10
    updateElementBox(kick)
    validatorKick(kick)
    recognition.addEventListener("end", () => recognition.start() )
}

function updateElementBox(kick) {
    const box = document.getElementById("box")
    box.textContent = kick
}
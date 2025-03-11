async function jokeTeller() {
    try {

        let url = "https://official-joke-api.appspot.com/random_joke";
        console.log("Fetching data from:", url);

        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status - ${response.status}`);
        }

        let data = await response.json();

        document.getElementById("container").innerHTML = '';
        let jokeBox = document.createElement('p');
        jokeBox.innerHTML = `<strong>Type:</strong> ${data.type} <br> 
                             <strong>Setup:</strong> ${data.setup} <br> 
                             <strong>Punchline:</strong> ${data.punchline}`;


        document.getElementById("container").appendChild(jokeBox);
        text = `
                            ${data.setup}  
 ${data.punchline}`


        return text;

    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}


async function listen() {
    let textarea = document.getElementById("container").textContent;
    console.log(textarea);

    let speech = new SpeechSynthesisUtterance();

    speech.text = textarea;

    




    speech.onend = function () {
        let laughSound = new Audio('laugh.mp3'); // Make sure this file exists
        laughSound.play();
    };

    if (!window.speechSynthesis.speaking) {
        window.speechSynthesis.speak(speech);
    }





}




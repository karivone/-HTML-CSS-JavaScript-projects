const btnEl = document.getElementById("btn")

const jokeEl = document.getElementById("joke")
const apiKey = "DejuWH3RUUxDaAQikK7diA==dvezITg94L3Ei5Qj";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey, 
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    try {
        jokeEl.innerText = "updating...";
        btnEl.disabled = true;
        btnEl.innerText = "loading ...";
        const response = await fetch(apiUrl, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(Error)
    }

    
}

btnEl.addEventListener("click", getJoke)
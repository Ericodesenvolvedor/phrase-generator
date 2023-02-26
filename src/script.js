const getData = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    const phrases = await data;
    handleResult(phrases);
}

const handleResult = (phrases) => {
    const getPhrases = phrases.results;
    const {content} = generateRandomPhrase(getPhrases);
    showContent(content);
}

const generateRandomPhrase = (phrases) => {
    const {length} = phrases;
    let index = Math.floor(Math.random() * length);
    const generatedPhrase = phrases[index];
    return generatedPhrase;
}   

const showContent = (content) => {
    const resultContainer = document.querySelector("#result");
    const elementParagraph = document.createElement("p");
    elementParagraph.textContent = content;
    resultContainer.appendChild(elementParagraph);
}

const generate = (event) => {
    event.preventDefault();
    const category = document.querySelector("#category").value;
    const BASE_URL = `https://api.quotable.io/quotes?tags=${category}`;
    getData(BASE_URL);
}

const clear = (event) => {
    event.preventDefault();
    const resultContainer = document.querySelector("#result");
    const noContent = resultContainer.textContent === "";
    
    if(noContent) {
        return alert("Não há conteúdo para apagar!");
    }

    resultContainer.textContent = "";
}

document.querySelector("#generate").addEventListener("click", generate);
document.querySelector("#clear").addEventListener("click", clear);
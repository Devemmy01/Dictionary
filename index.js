const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bbbe677795mshdeea245e3e04749p1aaff2jsn97a9c46ed5c4',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            wordheader.innerHTML = "This is the meaning of:" + " " + response.word;
            definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
           
        })

        .catch(err => console.error(err));
}
searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    dictionary(searchinput.value)
})
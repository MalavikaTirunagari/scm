document.getElementById("submitButton").addEventListener('click', (event) => {
    event.preventDefault();
    let str = document.getElementById("name").value;
    if (str.length > 25) {
        alert("Name cannnot be more than 25 characters");
    } else {
        alert("You have successfully registered");
    }
});
//<button class="col-md-2 btn btn-danger" onclick="deleteCard('interest1')">-</button>

function addCard(interest) {
    let div = document.getElementById(interest);
    
    let removeButton = document.createElement('button');
    removeButton.className = "col-md-2 btn btn-danger";
    removeButton.innerHTML = '-';

    let newCard = document.createElement('div');
    removeButton.onclick = function() {
        deleteCard(newCard);
    }
    newCard.className = "card m-1 p-2"
    newCard.innerHTML = 
        '<img class=\"card-img-top\" src=\"./resources/twitter.png\"\>' +
        '<h4 class=\"card-title\">Tweet</h4>' + 
        '<p class=\"card-text\">Sample Tweet will go here!</p>';
    
    newCard.appendChild(removeButton);
    div.appendChild(newCard);
}

function deleteCard(interest) {
    interest.remove();
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var charButton = document.querySelector('#charizard').addEventListener("click", function() {
    
})

var gyarButton = document.querySelector('#gyarados').addEventListener("click", function() {
    
})

var oshButton = document.querySelector('#oshawott').addEventListener("click", function() {
    
})

var snivButton = document.querySelector('#snivy').addEventListener("click", function() {
    
})

var gardButton = document.querySelector('#gardevoir').addEventListener("click", function() {
    
})

var sanButton = document.querySelector('#sandile').addEventListener("click", function() {
    
})

var pikButton = document.querySelector('#pikachu').addEventListener("click", function() {
    
})

var bulbButton = document.querySelector('#bulbasaur').addEventListener("click", function() {
    
})

var genButton = document.querySelector('#gengar').addEventListener("click", function() {
    
})

var lucButton = document.querySelector('#lucario').addEventListener("click", function() {
    
})

var checkButton = document.querySelectorAll('.check').forEach(butt => 
    butt.addEventListener('click', function() {
        
    }))
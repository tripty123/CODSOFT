const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", function(){
    alert("Thank you for choosing Foodie Heaven");
});

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function(){

    cards.forEach(function(card){

        let position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});
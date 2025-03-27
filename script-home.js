// Modal popup på kontaktformulär

const modal = document.getElementById("myModal");
const modalBtn = document.getElementById("modalBtn");
const closeCross = document.getElementById("closeCross");

modalBtn.addEventListener("click", openModal);
closeCross.addEventListener("click", closeModal);


function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}
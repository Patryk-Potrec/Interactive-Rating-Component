const selectedValueDisplay = document.querySelector(".selected-value");
const btnSubmit = document.querySelector(".btn-submit");
const mainCard = document.querySelector(".card-main");
const submittedCard = document.querySelector(".card-submitted");


let ratingSelected = "";
btnSubmit.addEventListener("click", e =>{
    if(ratingSelected){
        selectedValueDisplay.textContent = `You selected ${ratingSelected} out of 5`;
        mainCard.classList.add("hidden")
        submittedCard.classList.remove("hidden")
    }else{
        window.alert("Select a rating!");
    }
})




function selectRating(){
    const ratings = document.querySelectorAll(".rating");
    let lastSelected;
    ratings.forEach(rating => {
        rating.addEventListener("click", e => {
            if(!lastSelected){
                lastSelected = rating;
                rating.classList.add("selected");
            }else if(lastSelected && lastSelected === rating){
                lastSelected = undefined;
                rating.classList.remove("selected");
            }else{
                lastSelected.classList.remove("selected");
                rating.classList.add("selected");
                lastSelected = rating;
            }
            ratingSelected = lastSelected.textContent.trim();
        })
    })
}

selectRating();
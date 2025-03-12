function cvData () {
    fetch("myData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById ("content").innerText = `Namn: ${data.name} \n Email: ${data.email} \n Telefon: ${data.phone}`; 
        const myPara2 = document.createElement("p");
        const box1 = document.getElementById("box1");
        const box2 = document.getElementById("box2");
        const jobs = data.yrkeserfarenhet;
        const container = document.getElementById("container");

        myPara2.innerHTML = `<strong>Utbildning:</strong> ${data.utbildning}`;

        for (const job of jobs) {
            const myPara1 = document.createElement("p");
            const myList = document.createElement("ul"); 

            myPara1.innerHTML = `<strong>Titel:</strong> ${job.jobtitle} <br> <strong> Arbetsplats:</strong> ${job.company} <br>  <strong> Varaktighet:</strong> ${job.duration}`;
            

            const descriptions = job.description;
            for (const description of descriptions) {
                const listItem = document.createElement("li");
                listItem.textContent = description;
                myList.appendChild(listItem);
            }

        

        

            
            box1.appendChild(myPara1);
            box1.appendChild(myList);
            

            


        }
    })
}

cvData();



// function testfunction () {
//     const test = document.getElementById("test");
//     const list = document.createElement("ul");
//     const punkt = document.createElement("li");
//     punkt.textContent = ("hello");


//     list.appendChild(punkt);
//     test.appendChild(list);
    
// }

// testfunction();






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
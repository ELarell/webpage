
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


        myPara2.innerHTML = `<strong>Utbildning:</strong> ${data.utbildning}`;
        box2.appendChild(myPara2);

        const jobs = data.yrkeserfarenhet;
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






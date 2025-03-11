function cvData () {
    fetch("myData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById ("content").innerText = `Namn: ${data.name} \n Email: ${data.email} \n Telefon: ${data.phone}`; 
        const box1 = document.getElementById("box1");
        const jobs = data.yrkeserfarenhet;
        const container = document.getElementById("container");

        for (const job of jobs) {
            const myPara1 = document.createElement("p");
            // const myPara2 = document.createElement("p");
            // const myPara3 = document.createElement("p");
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
            container.appendChild(box1);

        }
    })
}

cvData();

// // document.getElementById("formBtn").addEventListener("click", function (){
// //     alert("Tack för att du kontaktade mig");
// });
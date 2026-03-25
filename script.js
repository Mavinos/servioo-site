const artisans = {

plombier: [

{

name:"Atelier Plomberie",

phone:"06 12 34 56 78",

email:"contact@atelierplomberie.fr"

},

{

name:"SOS Dépannage Express",

phone:"06 98 44 22 11",

email:"sosdepannage@mail.fr"

}

],

coiffeur:[

{

name:"Salon Prestige",

phone:"06 55 66 77 88",

email:"salonprestige@mail.fr"

}

],

electricien:[

{

name:"ElecRapide",

phone:"07 77 66 55 44",

email:"elecrapide@mail.fr"

}

],

serrurier:[

{

name:"SOS Serrurerie",

phone:"06 99 22 33 44",

email:"sosserrurerie@mail.fr"

}

]

}



function search(){

let value = document.getElementById("searchInput").value.toLowerCase()

displayResults(value)

}



function searchCategory(category){

document.getElementById("searchInput").value = category

displayResults(category)

}



function displayResults(category){

let container = document.getElementById("results")

container.innerHTML=""



if(!artisans[category]){

container.innerHTML="<p>Aucun artisan trouvé.</p>"

return

}



artisans[category].forEach(a=>{

container.innerHTML+=`

<div class="card">

<h3>${a.name}</h3>

<p>📞 ${a.phone}</p>

<p>✉️ ${a.email}</p>

</div>

`

})

}

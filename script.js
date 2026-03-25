async function search(){

let query=document.getElementById("searchInput").value

let response=await fetch(

"http://localhost:8000/search?q="+query

)

let data=await response.json()

display(data)

}


function quickSearch(text){

document.getElementById("searchInput").value=text

search()

}


function display(list){

let container=document.getElementById("results")

container.innerHTML=""

list.forEach(company=>{

container.innerHTML+=`

<div class="card" onclick="openPanel('${company.name}','${company.city}','${company.phone}','${company.email}')">

<h3>${company.name}</h3>

<p>${company.city}</p>

⭐ ${company.rating ?? "4.7"}

</div>

`

})

}


function openPanel(name,city,phone,email){

document.getElementById("panel").classList.add("active")

document.getElementById("name").innerText=name

document.getElementById("city").innerText=city

document.getElementById("phone").innerText="📞 "+phone

document.getElementById("email").innerText="✉ "+email

}


function closePanel(){

document.getElementById("panel").classList.remove("active")

}

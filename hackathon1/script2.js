document.body.innerHTML=`<section class="info-list">
</section>`//section is created using DOM

async function getAllUsers1(){
  const data1=await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const users1=await data1.json();
  const userContainer=document.querySelector(".info-list");
  console.log(users1)
  const abi=users1.abilities;
  const b=abi.name;
  
  console.log(abi);
  
  
  userContainer.innerHTML+=`
  <div class="info-container">
  <ol>
  <li class="user-name">species:${users1.species.name}</li>
  <li class="user-name">ability:${abi[0].ability.name}</li>
  <li class="user-weight">Weight:${users1.weight}</li>
  <li class="user-height">Height:${users1.height}</li>
  
 </ol>
  </div>`
  }
  
getAllUsers1();

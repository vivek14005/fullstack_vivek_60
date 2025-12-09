let items =[
  {name:"car",price:20},
  {name:"bike",price:30}
];
const list = document.getElementById("itemList");
const totalBox = document.getElementById("totalAmount");

function render(){
  list.innerHTML = items.map(i=>`<li>${i.name}- ${item.price}</li>`).join("");
}
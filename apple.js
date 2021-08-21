const memoryField=document.getElementById('shipping2')
const first = document.getElementById('first');
const second = document.getElementById('second');
first.addEventListener('click', function(){
memoryField.innerText="0";
updateTotal();
})
second.addEventListener("click", function () {
  memoryField.innerText = "180";
  updateTotal();
})


const storageField = document.getElementById("shipping3");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth")
third.addEventListener("click", function () {
  storageField.innerText = "0";
  updateTotal();
});
fourth.addEventListener("click", function () {
  storageField.innerText = "100";
  updateTotal();
});
fifth.addEventListener("click", function(){
storageField.innerText = "180";
updateTotal();
});

const deliveryField = document.getElementById("shipping4");
const sixth = document.getElementById("sixth");
const seventh = document.getElementById("seventh");
sixth.addEventListener("click", function(){
  deliveryField.innerText = "0";
  updateTotal();
});
seventh.addEventListener("click", function() {
  deliveryField.innerText = "20";
  updateTotal();
})



const total = document.getElementById('shipping5')
function updateTotal() {
const memory = parseInt(memoryField.innerText);
const storage = parseInt(storageField.innerText);
const delivery = parseInt(deliveryField.innerText);
const fullTotal = memory + storage + delivery ;
document.getElementById('shipping5').innerText = fullTotal + 1299; 
document.getElementById('shipping').innerText=fullTotal + 1299 ;
}


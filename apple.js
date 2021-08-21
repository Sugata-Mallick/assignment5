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
});

function updateTotal(){
    const ship1 = document.getElementById('shipping2');
    const shiptotal = parseInt(ship1.innerText);
        const ship2 = document.getElementById("shipping3");
        const shiptotal2 = parseInt(ship2.innerText);
            const ship3 = document.getElementById("shipping4");
            const shiptotal3 = parseInt(ship3.innerText);
            const ship4 = shiptotal + shiptotal2 + shiptotal3; ;
            document.getElementById('shipping5').innerText= ship4 ;
}
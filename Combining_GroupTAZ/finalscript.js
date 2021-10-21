// If you click the Add button, it will add what you typed to the list
function addItem () {

    let whatyoutyped = document.getElementById("inputboxtext").value;  //getting value of input typed
    let newItem = document.createElement('li');  //creating new li element to add
    newItem.innerHTML = whatyoutyped;   //putting input text into the new li
    newItem.className = "list-item";    //adding a class for easy selection

    
    //checking if the user inputted one of the available toppings (not yet 100% functional)
    const itemList = document.getElementsByClassName("list-item");
    const str = whatyoutyped.toString();
    console.log(str); //to see output for debugging

    const contents = ["Cheese", "Caramelized Onion", "Spicy Ketchup", "Dill Pickle Chips", "Bread & Butter Chips", "Tomato", "Lettuce", "Arugula", "Red Onion", "Mustard", "Mayo"];
    
    if (contents.includes(str)) {

    document.getElementById("ul").appendChild(newItem); //adding new li onto end of list
    document.getElementById("inputboxtext").value = '';  //resetting placeholder value of input text box
    


    function crossOutItem(item){
        document.getElementById('ul').removeChild(item);
    };

    function removeItem(item){
        document.getElementById('ul').removeChild(item);
    };

    newItem.addEventListener('click', function(){
        newItem.className = "doubled";
    });

    newItem.addEventListener('dblclick', function(){
        newItem.className = "checked";
        setTimeout(() => {removeItem(newItem)}, 1000);
    });
    
  } else {
    alert("Hey, that's not a topping we have!");
  };

}


//Zeno's JS//
let billAmount = document.getElementById("billAmount");

let guests = document.getElementById("guests");

let submit = document.getElementById("submit");




const starWrapper = document.querySelector(".stars")
const stars = document.querySelectorAll(".stars a");


stars.forEach((star, clickedIdx) => {
star.addEventListener("click", () => {
starWrapper.classList.add("disabled");
  stars.forEach((otherStar, otherIdx) => {
    if (otherIdx <= clickedIdx) {
      otherStar.classList.add("active");
    }
  });

  let text = document.createElement('h3');
  text.innerHTML = `You gave us a ${clickedIdx +1} star rating`;
  container1.appendChild(text);

  var gueststip;
  if (guests.value >= 10) {

    gueststip = (billAmount.value)*(0.05);

  } else {
    gueststip = 0;

  }

  function gratuity(){
    return Number(billAmount.value) + Number((billAmount.value)*(.15)) + Number((clickedIdx+1)*(billAmount.value)*(.01)) + Number(gueststip);
  }
  submit.addEventListener("click", function() {


    let text2 = document.createElement('h1')
    text2.innerHTML = `Your total, including gratutity is: $${gratuity().toFixed(2)}.`
    container2.appendChild(text2);
    document.getElementById("submit").disabled = true;



});


  });


 

});
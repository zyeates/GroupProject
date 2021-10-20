// If you click the Add button, it will add what you typed to the list
function addItem() {
    let whatyoutyped = document.getElementById("inputboxtext").value;  //getting value of input typed
    let newItem = document.createElement('li');  //creating new li element to add
    newItem.innerHTML = whatyoutyped;   //putting input text into the new li
    newItem.className = "list-item";    //adding a class for easy selection

    //checking if the user inputted one of the available toppings
    let itemList = document.getElementsByClassName("list-item");
    let str = [].map.call(itemList, function(node){
        return node.innerHTML;
    }).join("");
    console.log(str);
    if (str.indexOf('Cheese' !== -1 || str.indexOf('Caramelized Onion') !== -1 || str.indexOf('Spicy Ketchup') !== -1) || str.indexOf('Dill Pickle Chips') !== -1 || str.indexOf('Bread & Butter Chips') !== -1 || str.indexOf('Tomato') !== -1 || str.indexOf('Lettuce') !== -1 || str.indexOf('Arugula') !== -1 || str.indexOf('Red Onion') !== -1 || str.indexOf('Mustard') !== -1 || str.indexOf('Mayo') !== -1) {
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
    

}
else {alert("Hey, that's not a topping we have!");
};

};
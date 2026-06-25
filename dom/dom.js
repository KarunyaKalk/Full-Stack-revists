
// Find the input element, read its value, and display it in the output element.
function showName() {
    // Get the text input element by its id. The id is lowercase 'input'.
    let name= document.getElementById("input").value;
    // Use the input element's value property, not the element object itself.
    //let name = nameInput.value;
    document.getElementById("output").innerHTML = name;
}

// let count = 0;
// function increase() {
//     count++;
//     document.getElementById("output").innerHTML = count;
// }
// function decrease() {
//     count--;
//     document.getElementById("output").innerHTML = count;
// }


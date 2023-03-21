
var num1 = 1; //this is declared globally
function clickMe(){
    
    document.getElementById('h1').innerHTML = 'Hello World';
    document.getElementById('h1').style.color = 'red';
    document.getElementById('h1').style.fontSize = '50px';
    window.alert("someone is clicking me")
}
function showMe(){
    console.log("im showing");
    document.getElementById('h1').style.display = "block";
}


function add(num1, num2) {

    return document.getElementById('sum').innerHTML = num1 + num2;

}



function increment() {

    // num1 = num1 + num1;
    // num1 += num1;
    document.getElementById('inc').innerHTML = num1++;


}

function addStrings(){
    var firstName = "john";
    var lastName = "doe";

    document.getElementById('fullname').innerHTML = firstName + ' ' + lastName;
}

console.log("5" === 5);



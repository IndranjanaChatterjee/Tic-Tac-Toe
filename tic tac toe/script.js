var first, second;
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
let a = 0, k = 0;
one.addEventListener("click", () => {
    if (k == 0) {
        get();
        console.log(second + "@");
        if (a % 2 == 0) {

            one.innerHTML = first;
        }
        else {
            one.innerHTML = second;
        }
        a++;
        check();
    }
    else {
        alert("GAME IS OVER");
    }
})
two.addEventListener("click", () => {
    if (k == 0) {
        get();
        console.log(first + "@");
        if (a % 2 == 0) {
            two.innerHTML = first;
        }
        else {


            two.innerHTML = second;
        }
        a++;
        check();
    }
    else {
        alert("GAME IS OVER");
    }
})
three.addEventListener("click", () => {
    if (k == 0) {
        get();
        console.log(first + "@");
        if (a % 2 == 0) {

            three.innerHTML = first;
        }
        else {
            three.innerHTML = second;
        }
        a++;
        check();
    }
    else {
        alert("GAME IS OVER");
    }
})
four.addEventListener("click", () => {
    if (k == 0) {
        get();
        console.log(first + "@");
        if (a % 2 == 0) {

            four.innerHTML = first;
        }
        else {
            four.innerHTML = second;
        }
        a++;
        check();
    }
    else {
        alert("GAME IS OVER");
    }
})
five.addEventListener("click", () => {
    if (k == 0) {
        get();
        console.log(first + "@");
        if (a % 2 == 0) {

            five.innerHTML = first;
        }
        else {
            five.innerHTML = second;
        }
        a++;
        check();
    }
    else {
        alert("GAME IS OVER");
    }
})
six.addEventListener("click", () => {
    if (k == 0) {
        get();
        console.log(first + "@");
        if (a % 2 == 0) {

            six.innerHTML = first;
        }
        else {
            six.innerHTML = second;
        }
        a++;
        check();
    }
    else {
        alert("GAME IS OVER");
    }
})
seven.addEventListener("click", () => {
    if (k == 0) {
        get();
        console.log(first + "@");
        if (a % 2 == 0) {

            seven.innerHTML = first;
        }
        else {
            seven.innerHTML = second;
        }
        a++;
        check();
    }
    else {
        alert("GAME IS OVER");
    }
})
eight.addEventListener("click", () => {
    if (k == 0) {


        get();
        console.log(first + "@");
        if (a % 2 == 0) {
            eight.innerHTML = first;
        }
        else {
            eight.innerHTML = second;
        }
        a++;
        check();
    }
    else {
        alert("GAME IS OVER");
    }
})
nine.addEventListener("click", () => {
    if (k == 0) {
        get();
        console.log(first + "@");
        if (a % 2 == 0) {

            nine.innerHTML = first;
        }
        else {
            nine.innerHTML = second;
        }
        a++;
        check();
    }
    else {
        alert("GAME IS OVER");
    }
})
function get() {
    first = document.getElementById("f").value;
    second = document.getElementById("s").value;


}
function check() {

    if ((one.innerHTML == first && two.innerHTML == first && three.innerHTML == first) || (one.innerHTML == first && four.innerHTML == first && seven.innerHTML == first) || (seven.innerHTML == first && eight.innerHTML == first && nine.innerHTML == first) || (three.innerHTML == first && six.innerHTML == first && nine.innerHTML == first) || (one.innerHTML == first && five.innerHTML == first && nine.innerHTML == first) || (three.innerHTML == first && five.innerHTML == first && seven.innerHTML == first) || (four.innerHTML == first && five.innerHTML == first && six.innerHTML == first) || (two.innerHTML == first && five.innerHTML == first && eight.innerHTML == first)) {
        document.getElementById("win").innerHTML = "Player 1 wins";
        document.getElementById("win").style.display = "block";
        document.getElementById("pic").src = "win.gif";
        k = 1;
    }
    else if ((one.innerHTML == second && two.innerHTML == second && three.innerHTML == second) || (one.innerHTML == second && four.innerHTML == second && seven.innerHTML == second) || (seven.innerHTML == second && eight.innerHTML == second && nine.innerHTML == second) || (three.innerHTML == second && six.innerHTML == second && nine.innerHTML == second) || (one.innerHTML == second && five.innerHTML == second && nine.innerHTML == second) || (three.innerHTML == second && five.innerHTML == second && seven.innerHTML == second) || (four.innerHTML == second && five.innerHTML == second && six.innerHTML == second) || (two.innerHTML == second && five.innerHTML == second && eight.innerHTML == second)) {
        document.getElementById("win").innerHTML = "Player 2 wins";
        document.getElementById("win").style.display = "block";
        document.getElementById("pic").src = "win.gif";
        k = 1;

    }
    else if (one.innerHTML != "" && two.innerHTML != "" && three.innerHTML != "" && four.innerHTML != "" && five.innerHTML != "" && six.innerHTML != "" && seven.innerHTML != "" && eight.innerHTML != "" && nine.innerHTML != "") {
        document.getElementById("win").innerHTML = "Oops! Its a tie";
        document.getElementById("win").style.display = "block";
        document.getElementById("pic").src = "giphy.gif";
        k = 1;
    }
}
restart.addEventListener("click",()=>
{
    window.location.reload();
})

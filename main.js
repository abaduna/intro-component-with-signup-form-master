let first = document.getElementById("First")
let last = document.getElementById("Last")
let email = document.getElementById("Email")
let password = document.getElementById("Password")

let htmlLast=  '<div class="error-c" ><img class="error-i" src="./images/icon-error.svg" alt="" sizes="" srcset=""> <p class="error-t">First Name cannot be empty</p></div> '
let htmlfirst=  '<div class="error-c" ><img class="error-i" src="./images/icon-error.svg" alt="" sizes="" srcset=""> <p class="error-t">last Name cannot be empty</p></div> '
let htmlemail=  '<div class="error-c" ><img class="error-i" src="./images/icon-error.svg" alt="" sizes="" srcset=""> <p class="error-t">email cannot be empty</p></div> '
let htmlpassword=  '<div class="error-c" ><img class="error-i" src="./images/icon-error.svg" alt="" sizes="" srcset=""> <p class="error-t">pass cannot be empty</p></div> '


const btn = document.querySelector("#btn")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
   validateEmpy(first.value, first,htmlfirst)
   validateEmpy(last.value, last,htmlLast)
   validateEmpy(email.value, email,htmlemail)
   validateEmpy(password.value, password,htmlpassword)
    
} )

function validateEmpy(valueImput,divInput,divEror){
    if(!(valueImput.length == 0)){
        ocultareror()
    }else{
        mostarEror(divInput,divEror)
    }
    
}
function mostarEror(divInput,divEror) {
     divInput.style.border = "1px solid red"
     divEror.innerHTML =  '<img class="error-i" src="./images/icon-error.svg" alt="" sizes="" srcset=""> <p class="error-t">last Name cannot be empty</p>'
}
function ocultareror() {
    divInput.style.border = " 1px solid black;"
}
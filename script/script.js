const form = document.querySelector("form")

const red = document.createElement("p")
red.style.color = "red"
red.textContent = "Fill the blank"

const green = document.createElement("p")
green.textContent = "You sign up successfully"
green.style.color = "green"


form.addEventListener("submit",function(e){
    e.preventDefault()
    const username = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if (username == "" || email == "" || password == ""){
        green.remove()
        form.appendChild(red)
    } else{
        red.remove()
        form.appendChild(green)
        form.reset()
    }
})
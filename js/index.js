let username;

document.getElementById("loginButton").onclick = function(){
    username = window.prompt("Enter your username:");
    if(username.length < 1){
        document.getElementById("welcomeMessage").textContent = `Welcome!`;
    }else{
        document.getElementById("welcomeMessage").textContent = `Welcome, ${username}!`;
        document.getElementById("loginButton").textContent = `Change Username`;
    }
}
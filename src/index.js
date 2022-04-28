const passwordInput = document.getElementById('password')

passwordInput.addEventListener("keypress", (event)=> {
    if (event.key.toLowerCase() === 'enter') { 
        if (event.target.value === 'test') {
            window.location.href = "dashboard.html";
        } else {
            alert('Password is wrong!')
        }
        
    }
});
const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");

form.onsubmit = (e) => {
    e.preventDefault();
}

continueBtn.onclick = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "controller/signup.php", false);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                let data = xhr.response;
                if(data === "success") {
                    location.href = "user.php";
                } else {
                    errorText.style.display = "block";
                    errorText.textContent = data;
                    error();
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
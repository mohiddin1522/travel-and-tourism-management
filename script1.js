document.querySelector("#login").addEventListener("click", function () {

    let userName = document.querySelector('#usermail').value;
    let userPass = document.querySelector('#userpass').value;

    if (userName && userPass) {

        let localStorageData = localStorage.getItem("userDetails");

        if (localStorageData) {

            localStorageData = JSON.parse(localStorageData);

            if (userName === localStorageData.mail && userPass === localStorageData.password) {

                window.location.href = "home.html";
            } else {
                alert("username/password is incorrect");
            }

        }
        else {
            alert("please signup first, and login");
            window.location.href = "registration.html";
        }



    } else {
        alert("please enter all the details.");
    }


})
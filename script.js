document.querySelector("#submit").addEventListener("click", function () {

    let userName = document.querySelector("#username").value;
    let userMail = document.querySelector("#usermail").value;
    let userPass = document.querySelector("#userpass").value;
    let userMobile = document.querySelector("#usermobile").value;


    if (userName && userMail && userPass && userMobile) {

        let userDetails = { name: userName, mail: userMail, password: userPass, mobile: userMobile };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        alert("registered successfully.....");
        window.location.href = "home.html";

    } else {
        alert("please enter all the details");
    }

})
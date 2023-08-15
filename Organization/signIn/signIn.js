const signUpOption = document.getElementsByTagName("em")[0];
const form = document.getElementById('form')

form.addEventListener("submit", function(e){
    e.preventDefault();
    const formInputs = e.currentTarget;
    const formData = new FormData(formInputs);
    const data = Object.fromEntries(formData.entries());
    // console.log({data})

    // const password = localStorage.password;

    // console.log(password)

    SignIn(data);
    // if(password.value === localStorage.password){
    // form.reset();
    // }

    //    else{
    //     alert("input a correct password");
    //    }
})

   function SignIn(data){
    fetch("https://clockin-be.onrender.com/auth/signin/", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(data)
    }).then((response) => response.json())
    .then(data => {
        console.log(data)
        // console.log(data.token)
        localStorage.setItem("token", data.token)
        let token = localStorage.getItem('token')
        // ``
        // localStorage.setItem("email", data.user.email)
        console.log(token)
        if (data.statusCode == 400){
            alert(data.message)
        }else{
            window.location.href = "/Organization/dashboard/dashboard.html";

        }
        // localStorage.setItem("password", data.password)

        // else{
        //     alert("Input Corrent Details")
        // }

    })
}


signUpOption.addEventListener("click", function(){

    window.location.href ="/Organization/signUp/signUp.html"
 })
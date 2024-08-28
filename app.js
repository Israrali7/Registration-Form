
function submitForm(event) {
    event.preventDefault();

    swal("Good job!", "Your form submission went off without a hitch!", "success");

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let num = document.getElementById('num').value;
    let date = document.getElementById('date').value;
    let Gen = document.querySelector('input[name="gender"]:checked').value;
    let crs = document.getElementById('Course').value;


    var info = {
        firstName: fname,
        lastName: lname,
        birthDay: date,
        emailAddress: email,
        mobileNumber: num,
        gender: Gen,
        course: crs,
    };

    console.log(info);

    let uniqueKey = "user_" + new Date().getTime()

    localStorage.setItem(uniqueKey, JSON.stringify(info))

    document.querySelector('form').reset();
    
}

function validateForm() {
    //alert("Test")
    let userName = document.getElementById('uName').value
    let password = document.getElementById('uPassword').value
    //alert(userName)
    if (userName == "" || userName.length <= 3) {
        document.getElementById('uNMsg').innerHTML = "Pls Enter Proper User Name"
    }
    if (password == '') {
        document.getElementById('uPMsg').innerHTML = "Pls Enter Proper Password "
    }

    return false
}
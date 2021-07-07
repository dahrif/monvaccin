var logoutbutton = $('#logout_submit');
logoutbutton.hide();
var loginbutton = $('#submit');
var registerButton = $('#registerButton');
var SaveLoadOutput = $('#SaveLoadOutput');
var logInForm = $('#logform');
multiplayersubmit.hide();

$("#logout_submit").click(function() {

    var test = "";
    $.post('Login/logout.php', { test: test }, function(data) {
            $('#infoSQL').text(data.msg);
            //alert(data.loggedin);
            if (data.loggedin == "false") {
                loginbutton.show();
                logoutbutton.hide();
                registerButton.show();
                SaveLoadOutput.hide();
                logInForm.show();

            }
        },
        'json');
});

$("#submit").click(function() {
    var username = $("#username").val(); // id=lMoveSQL finns i main.php
    var password = $("#password").val();
    var errorMSG = "Wrong username or password";
    //alert("hej");
    $.post('Login/checkLogin.php', { username: username, password: password }, function(data) {

            if (data.loggedin == "true") {
                $('#infoSQL').text(data.msg);
                loginbutton.hide();
                logoutbutton.show();
                registerButton.hide();
                formcontainer.hide();
                SaveLoadOutput.show();
                multiplayersubmit.show();
                logInForm.hide();
                $("#username").val('');
                $("#password").val('');
            } else {
                $('#infoSQL').text(errorMSG);
                //alert(errorMSG);
            }
        },
        'json');
});
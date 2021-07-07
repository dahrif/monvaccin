$("#register_submit").click(function() {
    var regusername = $("#regusername").val(); // id=lMoveSQL finns i main.php
    var regpassword = $("#regpassword").val();
    var regpassword_again = $("#regpassword_again").val();

    /* var formcontainer = $('#form_container');*/
    $("#form_container").next().toggle(250);

    if (regpassword != regpassword_again) {
        $('#infoSQL').text("passwords does not correspond, try again");
        regpassword = $("#regpassword").val('');
        regpassword_again = $("#regpassword_again").val('');
    } else {


        //alert(regpassword);
        $.post('Login/register.php', { regusername: regusername, regpassword: regpassword }, function(data) {

            $('#infoSQL').text(data.msg);
            //alert(data.loggedin);
            if (data.loggedin == "true") {


                registerButton.hide();
                formcontainer.hide();
                SaveLoadOutput.show();

                $("#regusername").val('');
                $("#regpassword").val('');
                $("#regpassword_again").val('');
                $("#name").val('');
            }
            //--------------------------------------------------------	
        }, 'json');
    }
});


formcontainer.hide();
$("#registerButton").click(function() {
    formcontainer.toggle();
});
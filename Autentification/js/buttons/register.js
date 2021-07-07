$("#register_submit").click(function () {
	var regusername = $("#regusername").val(); // id=lMoveSQL finns i main.php
	var regpassword = $("#regpassword").val();
    var regpassword_again = $("#regpassword_again").val();
	
   /* var formcontainer = $('#form_container');*/
	$("#form_container").next().toggle(250);

	if (regpassword != regpassword_again){ 
                $('#infoSQL').text("passwords does not correspond, try again");
				regpassword = $("#regpassword").val('');
				regpassword_again = $("#regpassword_again").val('');
        } else {
        
                
                //alert(regpassword);
                $.post('php_pages/register.php',{regusername: regusername,regpassword: regpassword}, function(data){
		
                $('#infoSQL').text(data.msg);
                //alert(data.loggedin);
                if (data.loggedin == "true"){
                
                        //loginbutton.show();
                        //logoutbutton.show();
						//multiplayersubmit.show();
                        registerButton.hide();
                        formcontainer.hide();
                        SaveLoadOutput.show();
                        //$("#form_container").hide();
                        //logInForm.hide();
                       $("#regusername").val('');
                       $("#regpassword").val('');
                       $("#regpassword_again").val('');
                       $("#name").val('');
                }
                //--------------------------------------------------------	
                },'json');
        } // if sats om 
});	


formcontainer.hide();
$("#registerButton").click(function () {
        formcontainer.toggle();
});


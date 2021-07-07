<!-- Login------------------------------------------------------------>	
<div type="text" id="log">
		<div type="text" id="logform">
			<label for="username">Nom d'utilisateur</label>
			<input type="text" id="username" />
			<br/>
			<label for="password">Mot de passe</label>
			<input type="password" id="password" />
			<br/>
			<input type="submit" id="submit" value="Se connecter">
			<br/>
                </div>	
		<input type="submit" id="logout_submit" value="D&eacute;connexion" style="display:none">
		<input type="submit" id="registerButton" value="Cr&eacute;er un compte">
		
		<div id="infoSQL" ></div>
	</div>
<!-- Form------------------------------------------------------------>	
<div type="text" id="form_container" method="post" style="display:none">
	<div class="field">
		<label for="regusername">Choisissez un nom d'utilisateur</label>
		<input type="text" name="regusername" id="regusername" value="">
	</div>
	<div class="field">
		<label for="regpassword">Choisissez un mot de passe</label>
		<input type="password" name="regpassword" id="regpassword">
	</div>
	<div class="field">
		<label for="regpassword_again">Entrez à nouveau votre mot de passe</label>
		<input type="password" name="regpassword_again" id="regpassword_again">
	</div>
	
	<input type="submit" id="register_submit" value="Cr&eacute;er un compte">
</div>	
<!-- Form------------------------------------------------------------>	
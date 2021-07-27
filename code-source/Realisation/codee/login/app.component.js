class App extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {



      
        return (
     
    
          
   
<div className="login-wrap">
  
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">CONNEXION</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">INSCRIPTION</label>
          <div className="login-form">
            <form className="sign-in-htm" action="./api/Parent/login.php" method="GET">
              <div className="group">
                <label htmlFor="user" className="label">Email</label>
                <input id="email" name="email" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Mot de passe</label>
                <input id="password" name="password" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
               <input type="submit" className="button" defaultValue="Connexion" />
              </div>
              <div className="hr" />
              
            </form>
            <form className="sign-up-htm" action="./api/Parent/signup.php" method="POST">
              <div className="group">
                <label htmlFor="user" className="label">Nom</label>
                <input id="lastname" name="lastname" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="user" className="label">Email</label>
                <input id="email" name="email" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Mot de passe</label>
                <input id="password" name="password" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Confirmer mot de passe</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
           
              <div className="group">
            
              <input type="submit" className="button" defaultValue="Créer votre compte" />
            
              </div>
             

             
            </form>
          </div>
        </div>
      </div>
         
         


        )
    }
}
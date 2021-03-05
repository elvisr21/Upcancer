import "./Register.css"

export const RegisterUser=(props)=>{
    const RegisterUser=(event)=>{
        event.preventDefault();
        var data={
          "name":event.target[0].value,
          "email":event.target[1].value,
          "password":event.target[2].value,
        }
        props.func(data,"register").then(res => {
            props.Signin({"email":data['email'],"password":data['password']}).then(res=>{
              document.cookie ="jwt="+res["data"]["jwt"];
              props.Logged({
                  "isLogged":true,
                  "jwt":res["data"]["jwt"]
              });
            }).catch(err => {
                props.Logged ({
                    "isLogged":false,
                    "jwt":""
                });
            })
        }).catch(err => {
          if (err.response) {
              let code = err.response.status;
              if (code===409) {
                  alert("Account already exists");
              } else {
                  alert("Something went wrong, try again");
              }
          } 
          else {
              alert("Server is unresponsive")
          }
      })

    }
    return (
        <div className="Register">
            <form onSubmit={RegisterUser}>
            <p>Enter your name:</p>
            <input type="text"/>
            <p>Enter your Email:</p>
            <input type="email"/>
            <p>Enter your Password:</p>
            <input type="password"/>
            <input type="submit"/>`
            </form>
      </div>
    );
}
import "./Signin.css"


export const Sign=(props)=>{
    const SignInUser=(event)=>{
        event.preventDefault();
        var data={
          "email":event.target[0].value,
          "password":event.target[1].value,
        }
        props.func(data,"signin").then(res=>{
          document.cookie ="jwt="+res["data"]["jwt"];
          props.Logged({
              "isLogged":true,
              "jwt":res["data"]["jwt"]
          });
        }).catch(err => {
            alert("Sign in failed");
        })
  
    }
    return (
        <div className="Login">
              <form onSubmit={SignInUser}>
                  <p>Enter your email:</p>
                  <input type="text"/>
                  <p>Enter your Password:</p>
                  <input type="password"/>
                  <input type="submit"/>
              </form>
        </div>
    )
}
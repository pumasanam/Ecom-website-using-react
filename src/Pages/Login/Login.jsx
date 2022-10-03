import "./Login.css";

const Login = () => {
  return (
    <>
     <div className="Login">
        <div className="login_content">
            <span className="title">sign in</span>

            <form action="">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <div className="form_ankers">
                  <a href="#">Forget Password ?</a>
                  <a href="#">Create An Account</a>
                </div>
                <button>Sign In</button>
            </form>
        </div>
      </div> 
    </>
  );
};

export default Login;

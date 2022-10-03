import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="register_content">
            <span className="title">create an account</span>

            <form action="">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <span>By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b></span>
                <button>Create</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default Register;

import React from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('second');
    const [confirmPassword, setConfirmPassword] = useState('');
  const register = (e) => {
    e.preventDefault();
    setError("");

    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return <div><form onSubmit={register} name='registration_form' ></form></div>;
};

export default Register;
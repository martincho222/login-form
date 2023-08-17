import React, { useState } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPassport, FaRegEye, FaRegEyeSlash, FaTwitter, FaYoutube } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { validateEmail } from "../utils/validationSchema";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    // const [dataForm, setDataForm] = useState({})
    // const [error, setError] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const handleChange = (e) => {
    //     setDataForm({...dataForm, [e.target.name]: e.target.value})
    //     setError("")
    // }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     // if(email === "" || password === "") {
//     //     console.log("los campos son obligatorios");
//     //     return;
//     // }
//     if(validarEmail(dataForm.email)){
//        return console.log(dataForm);
//     }
//     setError("no paso la validacion");
// }

// const validarEmail = (email) => {
//     let regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     return regex.test(email);
// }

const onSubmit = (data) => {
    console.log(data);
}


    return (
        <>
            <div className="background"></div>
            <div className="container">
                <div className="item">
                    <h2 className="logo">
                        <i className="bx bxl-xing"></i>Hash Techie
                    </h2>
                    <div className="text-item">
                        <h2>
                            Welcome! <br />
                            <span>To Our Channel</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                            repellendus?
                        </p>
                        <div className="social-icon">
                            <a href="#">
                                <FaFacebook className="icon" />
                            </a>
                            <a href="#">
                                <FaTwitter className="icon" />
                            </a>
                            <a href="#">
                                <FaYoutube className="icon" />
                            </a>
                            <a href="#">
                                <FaInstagram className="icon" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="login-section">
                    <div className="form-box login">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>Sign In</h2>
                            <div className="input-box">
                                <span className="icon">
                                    <FaEnvelope />
                                </span>
                                <input type="text" name="email" {...register("email", validateEmail)}  />
                                <label>Email</label>
                                <p className="error">{errors.email?.message}</p>
                            </div>
                            <div className="input-box">
                                <span className="icon">
                                    <i className="bx bxs-lock-alt"></i>
                                </span>
                                <input type={showPassword ? "text" : "password"} {...register("password", {required: "Contraseña obligatoria"})} name="password"  />
                                <label>Password</label>
                                <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <FaRegEye className="icon" />
                                    ) : (
                                        <FaRegEyeSlash className="icon" />
                                    )}
                                </span>
                                <p className="error">{errors.password?.message}</p>
                            </div>
                            <div className="remember-password">
                                <label>
                                    <input type="checkbox" />
                                    Remember Me
                                </label>
                                <a href="#">Forget Password</a>
                            </div>
                            <button className="btn" type="submit">Login In</button>
                            <div className="create-account">
                                <p>
                                    Create A New Account?{" "}
                                    <a href="#" className="register-link">
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

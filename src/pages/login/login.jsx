import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';







const Login = () => {
    const { signIn } = useContext(AuthContext);
    const captchaRef = useRef(null);
    const [disabled, setdisabled] = useState(true);
    
    const navigate = useNavigate();
    const location = useLocation();
  

    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })

    }

    useEffect( () => {
      loadCaptchaEnginge(6); 
    },[])

    const handleValidateCaptcha = () => {
       const user_captcha_value = captchaRef.current.value;
       if(validateCaptcha(user_captcha_value)){
        setdisabled(false);
       }
       else
       {
        setdisabled(true)
       }

    }
  
    return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex md:flex-row flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="type the text here"
                className="input input-bordered"
                required 
              />
              <button  onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-4'> Validate</button>
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn btn-primary">Login</button> */}
              <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className='text-center p-4'><small>New Here? <Link to="/signup">Create an account</Link></small> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

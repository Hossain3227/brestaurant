import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast';
import SocialLogin from '../../components/sociallogin/socialLogin';






const Login = () => {
  const [disabled, setDisabled] = useState(true);
    // const { signIn } = useContext(AuthContext);
    // const captchaRef = useRef(null);
    
    
    const navigate = useNavigate();
    const {signIn } = useContext(AuthContext);
    const location = useLocation();
  

    const from = location.state?.from?.pathname || "/";

//     const handleGoogleSignIn = async() => {
//  try{
// 	await logInWithGoogle()
// 	toast.success('login succesfull')
// 	navigate(from,{replace:true})
//  } catch(err) {
// 	console.log(err)
// 	toast.error(err.message)

//  }
// }


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

    // const handleValidateCaptcha = () => {
    //    const user_captcha_value = captchaRef.current.value;
    //    if(validateCaptcha(user_captcha_value)){
    //     setdisabled(false);
    //    }
    //    else
    //    {
    //     setdisabled(true)
    //    }

    // }
  

    const handleValidateCaptcha = (e) => {
      const user_captcha_value = e.target.value;
      if (validateCaptcha(user_captcha_value)) {
          setDisabled(false);
      }
      else {
          setDisabled(true)
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
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="type the text here"
                className="input input-bordered"
                required 
              />
              {/* <button  onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-4'> Validate</button> */}
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn btn-primary">Login</button> */}
              <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className='text-center p-4'><small>New Here? <Link to="/signup">Create an account</Link></small> </p>
          <div className='flex items-center justify-center p-4'>
            {/* <span className='mr-2'>Or login by</span> */}
            
            {/* <button onClick={handleGoogleSignIn} className=' p-2 text-2xl border-2 border-black rounded-lg'><FaGoogle /></button>
             */}
             <p className='px-6'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
             <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

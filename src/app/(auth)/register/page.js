import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import appData from "../../../components/constant"

export const metadata = {
  title: "MiLena Black | Sign Up",
  description: "A place to get all your items",
};

const SignUp = () => {
  return (
    <main className="flex min-h-screen flex-row items-center justify-start pr-24">
      {/* Left Side */}
      <div className="w-[60%]">
        <Image
          src={"/auth_image.png"}
          height={100}
          width={100}
          layout="responsive" // Set layout to responsive
          alt="SignUp Image"
        />
      </div>

      {/* Right Side  */}
      <div className="w-[30%] pl-14 ">
        <form className="pl-16 flex flex-col items-start justify-center h-full space-y-4">
          <h3 className="text-center font-bold text-2xl">
            Create an account
          </h3>
          <p className="text-center font-medium text-sm">
            Enter your details below
          </p>
          <input className="auth-input" placeholder="Name" />
          <input className="auth-input" placeholder="Email or Phone number" />
          <input className="auth-input" placeholder="Password" />

            <div className="not-found-btn w-full text-center mt-1">
              <Link href="/">Create Account</Link>  
            </div>    
              <Link href="/" className="w-full text-center flex flex-row items-center"> <div className="button-outline flex flex-row space-x-1 items-center justify-center w-full"> <FcGoogle/> <span className="text-sm"> Sign Up with Google</span></div>  </Link>
            

            <p className="text-center w-full">Already have account?<span className="underline cursor-pointer ml-3"> <Link href={'/login'}> Log In</Link></span></p>
           
        </form>
      </div>
    </main>
  );
};

export default SignUp;

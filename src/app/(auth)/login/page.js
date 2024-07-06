import Image from "next/image";
import Link from "next/link";
import {appData} from "../../../components/constant"

export const metadata = {
  title: "MiLena Black | Login",
  description: "A place to get all your items",
};

const Login = () => {
  return (
    <main className="flex min-h-screen flex-row items-center justify-start pr-24">
      {/* Left Side */}
      <div className="w-[60%]">
        <Image
          src={"/auth_image.png"}
          height={100}
          width={100}
          layout="responsive" // Set layout to responsive
          alt="Login Image"
        />
      </div>

      {/* Right Side  */}
      <div className="w-[30%] pl-14">
        <form className="pl-16 flex flex-col items-start justify-center h-full space-y-4">
          <h3 className="text-center font-bold text-2xl">
            {`Login In To ${appData.appName}`}
          </h3>
          <p className="text-center font-medium text-sm">
            Enter your details below
          </p>
          <input className="auth-input" placeholder="Enter your phone number" />
          <input className="auth-input" placeholder="Password" />

          <div className="flex flex-row items-center justify-between w-full">
            <div className="not-found-btn">
              <Link href="/">Login</Link>
            </div> 
            <div className="not-found-btn-none">
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;

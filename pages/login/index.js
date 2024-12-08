import Navbar from "../Navbar";
import Image from "next/image";
import login from "../../Assests/logo/login.png";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className=" flex  justify-center items-center pb-6 pt-6 bg-[#F1F2F4]">
        <div className="bg-blue-600 h-[550px] w-[330px]  flex flex-col relative ">
          <h3 className="text-white p-6 font-medium text-[30px]">Login</h3>
          <p className="text-gray-200 p-6 text-[18px]">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <div className="absolute bottom-12 left-[70px]">
            <Image src={login} height={150} width={150} />
          </div>
        </div>

        <div className="bg-white h-[550px] w-[500px] flex flex-col relative ">
          <div className="p-[30px]">
            <input
              className=" bg-white appearance-none w-[450px] h-[50px] border-b-2 focus:outline-none  border-orange-400"
              placeholder="Enter Email/Mobile number"
              type="text"
            />
          </div>
          <div className="pl-[30px] pb-[20px] text-[14px]  text-gray-600">
          By continuing, you agree to Flipkart's  <a className="text-blue-600" href="/">Terms of Use</a> and <a className="text-blue-600" href="/"> Privacy Policy</a>
          </div>
          <div className="pl-[30px]">
          <button className="w-[450px] h-[50px] bg-[#fb641b] font-medium text-white">Request OTP</button>
          </div>

          <div className="absolute bottom-4 left-[140px]">
            <a className="text-blue-600 font-medium" href="/">New to Flipkart? Create an account</a>
          </div>
         
        </div>
      </div>
    </>
  );
}

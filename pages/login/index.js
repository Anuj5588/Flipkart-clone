import Navbar from "../../components/Navbar";
import Image from "next/image";
import login from "../../Assests/logo/login.png";
import { useRouter } from "next/router";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";
import axios from "axios";


export default function Login({ register, setregister }) {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState();
  console.log(phoneNumber)

  console.log(register);
  const handleLogin = () => {
    router.push('/verify-otp')
    if (router.pathname === "/login") {
      setregister(false);
    }
  };

  const handlePhoneChange = (p) => {
    console.log("phonenumber",p)
    setPhoneNumber('+'+p);
    console.log("phonenumber",phoneNumber)
  };

  const handleregister = async () => {
    const data = {
      mobile: phoneNumber, // Pass the mobile number to the API
    };
    await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/sign-up`, data);
    console.log("after api is heat")
    router.push('/verify-otp')
  };

  return (
    <>
      <Navbar />
      <div className="  flex  justify-center items-center pb-6 pt-6 bg-[#F1F2F4]">
        <div className="bg-blue-600 h-[550px] w-[330px]  flex flex-col relative ">
          <h3
            className="text-white p-6 font-medium text-[30px]"
            onClick={handleLogin}
          >
            {register ? "Register" : "Login"}
          </h3>
          <p className="h1 p-6 ">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <div className="absolute bottom-12 left-[70px]">
            <Image src={login} height={150} width={150} />
          </div>
        </div>

        <div className="bg-white h-[550px] w-[500px] flex flex-col relative ">
          <div className="p-[30px]">
            <PhoneInput 
             value={phoneNumber}
             placeholder="Enter the mobile number"
             inputStyle={{ border: 'none',
            
    borderBottom: '2px solid orange',
    width:'400px',
    borderRadius:'0'
    
   

             }}
             country={'in'}
             onChange={handlePhoneChange}
             

            />
           
          </div>
          <div className="pl-[30px] pb-[20px] h1">
            By continuing, you agree to Flipkart's{" "}
            <a className="text-blue-600" href="/">
              Terms of Use
            </a>{" "}
            and{" "}
            <a className="text-blue-600" href="/">
              {" "}
              Privacy Policy
            </a>
          </div>
          <div className="pl-[30px]">
            <button
              className="w-[450px] h-[50px] bg-[#fb641b] font-medium text-white"
              onClick={handleregister}
            >
              {register ? "CONTINUE" : "Request OTP"}
            </button>
          </div>

          {!register && (
            <div className="absolute bottom-4 left-[140px]">
              <a className="text-blue-600 font-medium" href="/register">
                New to Flipkart? Create an account
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

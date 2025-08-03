import Navbar from "../../components/Navbar"
import Image from "next/image";
import login from "../../Assests/logo/login.png";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export default function Login({ register, setregister }) {
  const router = useRouter();
  const [otp, setotp] = useState(Array(6).fill(''));
 
  const handleLogin = () => {
    if (router.pathname === "/login") {
      setregister(false);
    }
  };

 const handleOtpChange = (e, index) => {
  const value = e.target.value;

  if (/[^0-9]/.test(value)) return;

  const updatedOtp = [...otp];
  updatedOtp[index] = value;
  setotp(updatedOtp);

  if (value && index < 5) {
    const nextInput = document.getElementById(`otp-input-${index + 1}`);
    if (nextInput) nextInput.focus();
  } else if (!value && index > 0) {
    const prevInput = document.getElementById(`otp-input-${index - 1}`);
    if (prevInput) prevInput.focus();
  }
};

const handleKeyDown = (e, index) => {
  if (e.key === 'Backspace') {
    if (otp[index] === '') {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    } else {
      // Clear the value if user presses backspace on filled input
      const updatedOtp = [...otp];
      updatedOtp[index] = '';
      setotp(updatedOtp);
    }
  }
};


  const handleVerifyOtp = async () => {
    const otpString = otp.join('');
    const data = {
      otp: otpString, // Pass the mobile number to the API
    };
  
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/verify-otp`,
        data
      );
  
      // Check the response for successful verification
      if (response.data.status === "approved") {
        alert(response.data.message); // Optional: Show success message
        router.push("/"); // Redirect to the home page
      } else {
        alert("OTP verification failed. Please try again."); // Handle failure
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className=" flex  justify-center items-center pb-6 pt-6 bg-[#F1F2F4]">
        <div className="bg-blue-600 h-[550px] w-[330px]  flex flex-col relative ">
          <h3
            className="text-white p-6 font-medium text-[30px]"
            onClick={handleLogin}
          >
            { "Login"}
          </h3>
          <p className="text-gray-200 p-6 text-[18px]">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <div className="absolute bottom-12 left-[70px]">
            <Image src={login} height={150} width={150} />
          </div>
        </div>

        <div className="bg-white h-[550px] w-[500px] flex flex-col relative ">
        <div className="flex space-x-2 p-4 pl-10">   
        {[...Array(6)].map((_, index) => (
      <input
        key={index}
        className="w-[40px] h-[40px] border-2 border-gray-300 rounded-lg text-center text-xl"
        maxLength="1"
        type="text"
        id={`otp-input-${index}`}
        value={otp[index] || ''}
        onChange={(e) => handleOtpChange(e, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        autoFocus={index === 0}
      />
    ))}
    </div> 
           
          <div className="pl-[30px] pb-[20px] text-[14px]  text-gray-600">
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
              onClick={handleVerifyOtp}
            >
              {"Verify OTP"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

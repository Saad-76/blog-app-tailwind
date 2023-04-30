
import React from "react";
import cover from "../../assets/login.png"
import fb from "../../assets/fb.svg"
import apple from "../../assets/apple.svg"
import google from "../../assets/google.svg"
import { CiCreditCardOff } from 'react-icons/ci';
import khudilogo from "../../assets/KhudiLogo.svg"

const SignUp = () => {
    return (
        <div className="bg-black">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 h-screen bg-black">
                <div className="col-span-2 lg:col-span-2 hidden lg:block log-left-side bg-cover bg-center h-screen login-background-img overflow-hidden ">
                    <h1 class="font-inter font-normal font-medium text-3xl text-gray-100 ms-12 mt-20">What User Say KHUDI</h1>
                    <p class="font-inter font-normal text-sm text-gray-400 ms-12">
                        Siapa yang menunjukkan kebaikan, maka dia akan mendapatkan pahala seperti pahala<br></br> orang yang melakukannya.
                    </p>
                    <img src={cover} alt="img" />
                </div>
                <div class="col-span-1 bg-neutral-950 px-4 sm:px-16 md:px-40 lg:px-11 max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full flex justify-center items-center ">
                    <div className="w-full ">
                        <img src={khudilogo} alt="img" className="mb-8" />
                        <h1 class="font-inter font-semibold text-white text-3xl leading-127 text-left">Get started with 10,000 free words</h1>
                        <h1 class="font-inter font-normal text-gray-300 text-base  text-left bg-white bg-opacity-10 rounded-md px-3 inline-flex justify-start items-center mt-2">
                            <CiCreditCardOff className="me-2" /> No credit card required.
                        </h1>
                        <form>
                            <div className="mt-10 ">
                                <label class="font-inter font-normal text-gray-300 text-sm leading-5 text-left" >Full Name</label>
                                <input type="password" class="w-full p-2 bg-gray-700   rounded-lg font-inter font-normal  border border-2 border-gray-500  text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 mb-2" placeholder="Enter Your full Name" required />
                            </div>
                            <div>
                                <label class="font-inter font-normal text-gray-300 text-sm leading-5 text-left" >Bussines Email</label>
                                <input type="email" class="w-full p-2 bg-gray-700   rounded-lg font-inter font-normal  border border-2 border-gray-500  text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 mb-2" placeholder="email@email.com" required />
                            </div>
                            <div>
                                <label class="font-inter font-normal text-gray-300 text-sm leading-5 text-left" >Password</label>
                                <input type="password" class="w-full p-2 bg-gray-700   rounded-lg font-inter font-normal  border border-2 border-gray-500  text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 mb-2" placeholder="•••••••••" required />
                            </div>
                            <button class="flex justify-center p-2.5 w-full items-center bg-green-900 border border-green-900 shadow-xs rounded-lg text-white font-bold mt-6 mb-10">
                                Sign In
                            </button>
                        </form>
                        <label class="font-inter font-normal text-gray-500 text-center text-base leading-6 flex justify-center">
                            Sign Up with</label>
                        <div className="flex justify-center mb-10 mt-6">
                            <button class="flex flex-row justify-center items-center w-16 h-16 bg-gray-700 bg-opacity-50 rounded-lg">
                                <img src={google} />
                            </button><button class="flex flex-row justify-center items-center mx-4 w-16 h-16 bg-gray-700 bg-opacity-50 rounded-lg">
                                <img src={apple} />
                            </button><button class="flex flex-row justify-center items-center  w-16 h-16 bg-gray-700 bg-opacity-50 rounded-lg">
                                <img src={fb} />
                            </button>
                        </div>
                        <div>
                            <label class="font-inter font-normal text-gray-500 text-center text-base leading-6 flex justify-center">
                                New to KHUDI AI?
                                <a href="#" class="font-medium text-base leading-6 text-green-800 hover:text-green-700  flex justify-end ms-2">Sign Up</a>
                            </label>
                            <p class="font-normal font-inter text-gray-500 flex justify-center text-xs text-center mt-5">
                                By creating an account, you are agreeing to our Terms of Service and Privacy Policy. You also agree to receive product-related marketing emails from Writesonic, which you can unsubscribe from at any time.
                            </p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default SignUp
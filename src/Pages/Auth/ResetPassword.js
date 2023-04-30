import React from "react";
import cover from "../../assets/login.png"
import khudilogo from "../../assets/KhudiLogo.svg"


const ResetPassword = () => {
    return (
        <>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 h-screen">
                <div className="col-span-2 lg:col-span-2 hidden lg:block log-left-side bg-cover bg-center h-screen login-background-img overflow-hidden">
                    <h1 class="font-inter font-normal font-medium text-3xl text-gray-100 ms-12 mt-20">What User Say KHUDI</h1>
                    <p class="font-inter font-normal text-sm text-gray-400 ms-12">
                        Siapa yang menunjukkan kebaikan, maka dia akan mendapatkan pahala seperti pahala<br></br> orang yang melakukannya.
                    </p>
                    <img src={cover} alt="img" />
                </div>
                <div class="col-span-1 bg-neutral-950 px-4 sm:px-16 md:px-40 lg:px-11 max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full flex justify-center items-center">
                    <div className="w-full">
                        <img src={khudilogo} alt="img" className="mb-8" />
                        <h1 class="font-inter font-semibold text-white text-3xl leading-127 text-left">Reset your password</h1>
                        <h1 class="font-inter font-normal text-gray-300 text-base leading-150 text-left">
                            We’ll send you an email to reset your password.
                        </h1>
                        <form>
                            <div class="mb-6 mt-10">
                                <label class="font-inter font-normal text-gray-300 text-sm leading-5 text-left">Bussines Email</label>
                                <input type="email" class="w-full p-2 bg-gray-700 rounded-lg font-inter font-normal  border border-2 border-gray-500  text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700" placeholder="email@email.com" />
                            </div>
                            <button class="flex justify-center p-2.5 w-full items-center bg-green-900 border border-green-900 shadow-xs rounded-lg text-white font-bold mt-6 mb-10">
                                Sign In
                            </button>
                        </form>
                        <div>
                            <a href="#" class="font-medium text-base leading-6 text-green-800 hover:text-green-700  flex justify-center">
                                Back to login
                            </a>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default ResetPassword
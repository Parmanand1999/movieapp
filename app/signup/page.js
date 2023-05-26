"use client"
import React, { useState } from "react";

export default function Registration() {
    const [userDetail, setUserDetail] = useState({
        name: "",
        email: "",
        password: "",
        confirm_pssword: ""
    })

    const [namePlace, setNamePlace] = useState(false)
    const [emailPlace, setEmailPlace] = useState(false)
    const [passPlace, setPassPlace] = useState(false)
    const [conPassPlace, setconPassPlace] = useState(false)
    const handelInputchange = (e) => {
        const { name, value } = e.target;
        setUserDetail((pre) => ({ ...pre, [name]: value }))
    }
    const Resisterhandler = () => {
        error = 0
        if (userDetail.name > 1) {
            setNamePlace(true)
            error++;
        }
        if (userDetail.email > 1) {
            setEmailPlace(true)
            error++;
        }
        if (userDetail.password > 1) {
            setPassPlace(true)
            error++;
        }
        if (userDetail.confirm_pssword === userDetail.password) {
            setconPassPlace(true)
        }


        console.log(userDetail, "adslk;fjasdljflasjf")

        localStorage.setItem(userDetail.email, JSON.stringify(userDetail));
    }



    return (
        <div>
            <div className="flex flex-col items-center min-h-screen  pt-6 sm:justify-center sm:pt-0 bg-gray-100">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Registration
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={userDetail.name}
                                    onChange={handelInputchange}
                                    placeholder="Enter Your Full Name"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm left-2 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    value={userDetail.email}
                                    onChange={handelInputchange}
                                    placeholder="Enter your Email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    value={userDetail.password}
                                    onChange={handelInputchange}
                                    placeholder="Enter password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            {passPlace ? <b className="text-red-500">Enter your password</b> : null}
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="confirm_pssword"
                                    value={userDetail.confirm_pssword}
                                    onChange={handelInputchange}
                                    placeholder="confirm your password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            {conPassPlace ? <b className="text-red-500">passwor are not match</b> : null}
                        </div>
                        <div className="flex items-center justify-end mt-4">

                            <a
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                href="#"
                            >
                                Already registered?
                            </a>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                                onClick={Resisterhandler}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
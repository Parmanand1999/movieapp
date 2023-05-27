
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const Router = useRouter()
    const [logData, setlogData] = useState({
        email: "",
        password: "",
    })
    const [emailpls, setEmailpls] = useState(false)
    const [passpls, setPasspls] = useState(false)
    const [success, setSuccess] = useState(false)
    const [success2, setSuccess2] = useState(false)
    const loginChange = (e) => {
        const { name, value } = e.target
        setlogData((pre) => ({ ...pre, [name]: value }))
        setEmailpls(false)
        setPasspls(false)
        setSuccess2(false)
    }


    const loginhandel = () => {

        const item = localStorage.getItem(logData.email)
        const parsedObject = JSON.parse(item);


        let erro = 0
        if (logData.email.length < 1) {
            setEmailpls(true)
            erro++;
        }
        if (logData.password.length < 1) {
            setPasspls(true)
            erro++
        }
        if (item === null) {
            setSuccess2(true)
            
        }
        console.log(item, ".........");
        console.log(parsedObject.email, "###########");
        if (erro == 0) {


            if (parsedObject.email === logData.email && parsedObject.password === logData.password) {
                setSuccess(true)
                Router.push("/movie")
                erro++
            } else {
                setSuccess2(true)
            }

        }

    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Sign in
                </h1>
                <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
                    {success ? <b className="text-blue-600 ml-[40%]">Login successfully</b> : null}
                    {success2 ? <b className="text-red-500">Invailid Emial oR password</b> : null}
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={logData.email}
                            onChange={loginChange}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {emailpls ? <b className="text-red-500">Enter your Email</b> : null}
                    </div>
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={logData.password}
                            onChange={loginChange}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {passpls ? <b className="text-red-500">Enter Your Password</b> : null}
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={loginhandel}>
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        href="/signup"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
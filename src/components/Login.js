import React from 'react'

function Login() {
    return (
        <div className="h-screen bg-green-50 flex flex-col items-center justify-center">
            <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#10B981" fillOpacity="1" d="M0,192L48,165.3C96,139,192,85,288,69.3C384,53,480,
                75,576,112C672,149,768,203,864,240C960,277,1056,299,1152,272C1248,245,1344,171,1392,133.3L1440,
                96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,
                320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
            
            <form className="md:w-2/6 absolute z-1">
            <h1 className="text-center text-green-500 text-3xl mb-3">Point of Sales System</h1>
                <div className="input-group">
                    <input className="form-input focus:outline-none focus:ring-2 focus:ring-green-400"type="text" placeholder="Username"></input>
                    <input className="form-input focus:outline-none focus:ring-2 focus:ring-green-400"type="password" placeholder="Password"></input>
                </div> 
                <div className="flex flex-col md:flex-row justify-between px-4">
                    <a type="submit" href="/login" className="btn text-md">Login</a> 
                    <a href="/register" className="btn text-md">Register</a> 
                </div>
                              
            </form>
        </div>
    )
}

export default Login

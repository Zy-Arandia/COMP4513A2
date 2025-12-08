import { useNavigate } from "react-router-dom";

const LoginPrompt = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    return (
        <div className="w-[600px] flex flex-col p-5 rounded-sm gap-y-3">
            <h1 className="flex items-end text-4xl font-bold text-black w-full">LOGIN</h1>
            <div className="w-full flex flex-col">
                <label htmlFor="adminUsername" className="text-lg">Email Address</label>
                <input type="text" name="" id="adminUsername" className="bg-white border rounded-sm p-2" />
            </div>
            <div className="w-full flex flex-col">
                <label htmlFor="adminPassword" className="text-lg">Password</label>
                <input type="password" name="" id="adminPassword" className="bg-white border rounded-sm p-2" />
            </div>



            <button className=" 
                bg-black text-white p-2 rounded-sm
                border border-white
                cursor-pointer
                hover:text-black hover:bg-white hover:border-black" 
                onClick={() => {
                    setIsLoggedIn(true);
                    navigate("/");
                }}>
                LOGIN
            </button>
        </div>
    )
}

export default LoginPrompt;
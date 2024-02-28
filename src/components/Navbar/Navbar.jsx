const Navbar = () => {
    return (
        <div>
            <div className="navbar lg:bg-yellow-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>Home</li>
                            <li>Exam</li>
                            <li>Review</li>
                        </ul>
                    </div>
                    <a className="bg-gradient-to-r border-none from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-cyan-50 btn text-xl rounded">TestTrove</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ol className="flex gap-4">
                        <li className="hover:text-cyan-600 text-cyan-50 cursor-pointer">Home</li>
                        <li className="hover:text-cyan-600 text-cyan-50 cursor-pointer">Exam</li>
                        <li className="hover:text-cyan-600 text-cyan-50 cursor-pointer">Review</li>
                    </ol>
                </div>
                <div className="navbar-end">
                    <a className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 text-cyan-50 btn text-xl border-none rounded">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
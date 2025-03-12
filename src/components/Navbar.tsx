
export const Navbar = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <a href="/" className="flex items-center">
                                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">GameTopUp</span>
                            </a>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-800 hover:text-indigo-600 transition font-medium">Home</a>
                            <a href="#" className="text-gray-800 hover:text-indigo-600 transition font-medium">Games</a>
                            <a href="#" className="text-gray-800 hover:text-indigo-600 transition font-medium">Promotions</a>
                            <a href="#" className="text-gray-800 hover:text-indigo-600 transition font-medium">Support</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="bg-transparent text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition">
                                Login
                            </button>
                            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                                Register
                            </button>
                            <button className="md:hidden text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

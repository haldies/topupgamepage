import { useState, useEffect } from 'react';


function HomePage() {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data
  const carouselItems = [
    {
      image: "https://www.lapakgaming.com/static/banner/lapakgaming/202503/LG_ID-1448x520-HB-GGSale_Ramadan_2025.png?tr=w-1200%2Cq-75",
      title: "Special Offer: 50% Extra Credits",
      description: "Limited time promotion for all games"
    },
    {
      image: "https://cdn.unipin.com/images/banners/1741674726-700x280px%20_Website%20-%202025-03-10T151802.170.jpg",
      title: "New Games Available",
      description: "Check out our latest additions"
    },
    {
      image: "https://cdn.unipin.com/images/banners/1741593677-1741341926-700x280px%20_Website%20-%202025-03-07T165820.430.jpg",
      title: "Weekend Bonus",
      description: "Get bonus credits on weekend top-ups"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  // Games data
  const games = [
    {
      id: 1,
      name: "Mobile Legends",
      image: "https://play-lh.googleusercontent.com/eOSTyn3tnJrezNp0pBV-grARGI8xWM0ylM0fZYoV-ZFaY52wCjyRwn0uIsWrAhQjzg"
    },
    {
      id: 2,
      name: "PUBG Mobile",
      image: "https://cdn6.aptoide.com/imgs/e/b/e/ebe4c3a3d00e00e9b26d18fcde77a3b6_icon.png"
    },
    {
      id: 3,
      name: "Free Fire",
      image: "https://play-lh.googleusercontent.com/6llpraFcTI0rEUuRpWEG9NWWblvm106y5JXcDzu60ACuaUYDD3i70a-p9_QM65NsGDE=w240-h480-rw"
    },
    {
      id: 4,
      name: "Genshin Impact",
      image: "https://cdn2.steamgriddb.com/icon_thumb/ffbab8235ddc5c0290ecd6ceccc0a61a.png"
    },
    {
      id: 5,
      name: "League of Legends",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMeWBd1Joy24pdQ1jbIJaRqq6tTUuM2fodw&s"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
   

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{item.title}</h2>
                <p className="text-lg md:text-xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <main className="py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Featured Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Top Up Your Game</h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Get instant credits for your favorite games with secure and fast transactions.</p>
            </div>

            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="Search games..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">All Categories</option>
                  <option value="mobile">Mobile Games</option>
                  <option value="pc">PC Games</option>
                  <option value="console">Console Games</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Sort By: Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Game Cards */}
            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-6 ">
              {games.map(game => (
                <div key={game.id} className="bg-white rounded-xl  overflow-hidden hover:shadow-lg transition-shadow duration-300 border shadow-2xl border-gray-400 ">
                  <div className="relative">
                    <img
                      className="w-full  object-cover"
                      src={game.image}
                      alt={game.name}
                    />
                    <div className="absolute top-1 right-1">
                      <span className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Popular</span>
                    </div>
                  </div>
                  <div className="p-2 text-center">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-bold text-gray-800">{game.name}</h3>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-center border-t border-gray-100">
                      <div className="flex items-center">
                        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition flex items-center ">
                          <p>Top-Up</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="mt-8 text-center">
              <button className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition font-medium">
                View More Games
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-12 bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800">Why Choose Us</h2>
              <p className="mt-2 text-gray-600">We provide the best top-up experience for gamers</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Fast Delivery</h3>
                <p className="mt-2 text-gray-600">Get your game credits instantly after payment</p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Secure Transactions</h3>
                <p className="mt-2 text-gray-600">Your payments are protected with encryption</p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
                <p className="mt-2 text-gray-600">Our customer service team is always ready to help</p>
              </div>
            </div>
          </section>
        </div>
      </main>

   
  
    </div>

  );
}

export default HomePage;
const Page2 = () => {
  return (
    <section className="relative h-screen py-16 md:py-24 lg:py-32 mb-4 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* left column */}
          <div className="order-2 lg:order-1">
            <p className="text-yellow-500 font-medium tracking-wider uppercase mb-4">
              Get to know us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Leader in Agriculture
              <br />
              Market
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              For over 20 years we have been delivering the highest quality
              organic produce directly from our farms to families worldwide. No
              chemicals, no shortcuts — only pure, nutrient-rich food grown with
              respect for nature and future generations.
            </p>
            <div className="mb-10">
              <p className="text-green-600 font-semibold mb-3">
                Modern agriculture types
              </p>
              <p className="text-gray-600">
                We're here for you from start to finish
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-4 px-10 rounded-full transition transform hover:scale-105 shadow-lg"
            >
              Discover More
            </a>
          </div>
          {/* right column images and stats */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-6">
              {/* farmer with apples */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1569089375322-533ea01e2826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhcm1lciUyMGhvbGRpbmclMjBhcHBsZXN8ZW58MHx8MHx8fDA%3D"
                  alt="farmer holding apple"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* tractor in field */}
              <div className="rounded-3xl overflow-hidden shadow-2xl mt-12">
                <img
                  src="https://images.unsplash.com/photo-1619314383191-3d75d5e26a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGljdHVyZSUyMG9mJTIwYSUyMHRyYWN0b3J8ZW58MHx8MHx8fDA%3D"
                  alt="Modern tractor in green field"
                  className="w-full h-96 object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;

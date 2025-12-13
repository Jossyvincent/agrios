const ServicesPage = () => {
  return (
    <section className="relative h-screen py-20 md:py-28 mb-4">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl pb-12">
        {/* header */}
        <div className="text-center mb-16 ">
          <p className="text-yellow-500 font-semibold tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            What We Offer
          </h2>
        </div>
        {/* cards grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 pb-2">
          {/* card1 */}
          <div className="rounded-3xl bg-white shadow-2xl p-2">
            <div className="relative mb-2">
              <img
                src="https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg"
                alt="Agricultural products"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="pt-3 pb-10 px-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Agriculture Products
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Fresh seasonal vegetables, grains, and seeds grown using
                sustainable farming methods with zero synthetic pesticides.
              </p>
            </div>
          </div>
          {/* card2 */}
          <div className="rounded-3xl bg-white shadow-2xl p-2">
            <div className="relative mb-2">
              <img
                src="https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg"
                alt="organic products"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="pt-3 pb-10 px-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Organic Products
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Certified 100% organic fruits, herbs, and superfoods packed with
                nutrients and flavor — just as nature intended.
              </p>
            </div>
          </div>
          {/* card3 */}
          <div className="rounded-3xl bg-white shadow-2xl p-2 ">
            <div className="relative mb-2">
              <img
                src="https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg"
                alt="dairy products"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dairy Products
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fresh milk, cheese, yogurt, and butter from grass-fed,
                free-range cows — pure, creamy, and hormone-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

const FAQ = () => {
  return (
    <section className="screen h-screen mb-4 py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* right */}
          <div className="relative rounded-3xl shadow-2xl max-w-md mx-auto">
            <img
              src="https://www.backwoodshome.com/bhm/wp-content/uploads/2015/12/johnny-mcclung-702726-unsplash.jpg"
              alt="person x"
              className="w-full h-full object-cover"
            />
            {/* Call us button overlay */}
              <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div class="bg-yellow-500 text-white font-bold py-4 px-8 rounded-full shadow-xl text-center">
                  <p class="text-sm uppercase tracking-wider">
                    Call us anytime
                  </p>
                  <p class="text-2xl">666 888 0000</p>
                </div>
              </div>
          </div>
          {/* left */}
          <div>
            <h3>Frequently asked questions</h3>
            <h1>You have any questions</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

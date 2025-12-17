const FAQ = () => {
  return (
    <section className="py-10 md:py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
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
                <p class="text-sm uppercase tracking-wider">Call us anytime</p>
                <p class="text-2xl">666 888 0000</p>
              </div>
            </div>
          </div>
          {/* left */}
          <div>
            <p className="text-yellow-500 font-semibold tracking-wider uppercase mb-3 text-center lg:text-left">
              Frequently asked questions
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-center lg:text-left">
              You have any questions
            </h3>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <details class="group bg-gray-100 rounded-2xl px-6 py-4 cursor-pointer">
                <summary class="flex justify-between items-center font-semibold text-lg text-gray-800">
                  What are the health benefits of organic farming?
                  <span class="ml-4 text-lime-500 group-open:rotate-180 transition">
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p class="mt-4 text-gray-600 leading-relaxed">
                  Organic farming avoids synthetic pesticides and fertilizers,
                  resulting in produce that is richer in nutrients,
                  antioxidants, and free from harmful chemicals.
                </p>
              </details>
              {/* FAQ2 */}
              <details class="group bg-gray-100 rounded-2xl px-6 py-4 cursor-pointer">
                <summary class="flex justify-between items-center font-semibold text-lg text-gray-800">
                  How do you ensure product freshness?
                  <span class="ml-4 text-lime-500 group-open:rotate-180 transition">
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p class="mt-4 text-gray-600 leading-relaxed">
                  We harvest daily and use cold-chain delivery to bring
                  farm-fresh products straight to your door within hours of
                  picking.
                </p>
              </details>
              {/* FAQ 3 */}
              <details class="group bg-gray-100 rounded-2xl px-6 py-4 cursor-pointer">
                <summary class="flex justify-between items-center font-semibold text-lg text-gray-800">
                  Are your dairy products truly grass-fed?
                  <span class="ml-4 text-lime-500 group-open:rotate-180 transition">
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p class="mt-4 text-gray-600 leading-relaxed">
                  Yes! Our cows graze on organic pastures year-round, producing
                  richer, creamier milk without hormones or antibiotics.
                </p>
              </details>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-4 mx-auto mb-5">
          {/* right side */}
          <div>
            <h2 className="text-yellow-400 text-2xl lg:text-3xl mb-2 font-semibold">Our Recent work</h2>
            <p className="text-black font-semibold uppercase text-2xl md:text-3xl">Recently completed Projects</p>
          </div>
          {/* left side */}
          <p className="text-gray-700 text-lg">
            We have been working on some projects around town. Here are some of
            the most eye-catching ones
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

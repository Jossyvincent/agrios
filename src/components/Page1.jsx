const Page1 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center opacity-70 overflow-hidden ">
      <img
        src="https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="background image"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Natural Products
          <br />
          <span className="text-yellow-400 text-6xl md:text-8xl">
            For Lovers of Healthy
          </span>
          <br />
          <span className="text-6xl md:text-8xl text-white">Organic Food</span>
        </h1>
        <div>
          <a
            href=""
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 rounded-full transition transform hover:scale-105"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page1;

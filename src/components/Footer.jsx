import {
  FaSquareXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#1b1b14] to-[#2a2a1f] text-gray-300">
      <div className="container grid md:grid-cols-4 gap-6 mx-auto px-6 py-16  max-w-7xl">
        {/* Agrios logo content*/}
        <div className="">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-white">Agrios</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </p>
          <div className="flex gap-4">
            <FaSquareXTwitter className="my-0 mx-[5px] cursor-pointer" />
            <FaFacebook className="my-0 mx-[5px] cursor-pointer" />
            <FaInstagram className="my-0 mx-[5px] cursor-pointer" />
            <FaLinkedinIn className="my-0 mx-[5px] cursor-pointer" />
          </div>
        </div>
        {/* Explore*/}
        <div>
          <h4 className="text-white font-semibold mb-4 relative inline-block">
            Explore
            <span className="block w-6 h-0.5 bg-green-500 mt-1"></span>
          </h4>
          <ul className="space-y-3 text-sm">
            <li>About</li>
            <li>Services</li>
            <li>Our Projects</li>
            <li>Meet the farmers</li>
            <li>Latest News</li>
            <li>Contact</li>
          </ul>
        </div>
        {/*News*/}
        <div>
          <h4 className="text-white font-semibold mb-4 relative inline-block">
            News
            <span className="block w-6 h-0.5 bg-green-500 mt-1"></span>
          </h4>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-white">
                Bringing Food Production Back To Cities
              </p>
              <span className="text-green-500 text-xs">July 5, 2022</span>
            </div>
            <div>
              <p className="text-white">
                The Future of Farming, Smart Irrigation Solutions
              </p>
              <span className="text-green-500 text-xs">July 5, 2022</span>
            </div>
          </div>
        </div>
        {/* Contacts */}
        <div>
          <h4 className="text-white font-semibold mb-4 relative inline-block">
            Contacts
            <span className="block w-6 h-0.5 bg-green-500 mt-1"></span>
          </h4>
          <ul className="space-y-3 text-sm mb-6">
            <li>📞 0114109301</li>
            <li>✉️ vincentjossy0@gmail.com</li>
            <li>
              Tok-yo, Lida
              <br />
              Karachuonyo, Homa-Bay
            </li>
          </ul>
          <div className="flex bg-white">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 rounded-l-lg text-black focus:outline-none"
            />
            <button className="bg-green-500 px-4 rounded-r-lg text-white">
              →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

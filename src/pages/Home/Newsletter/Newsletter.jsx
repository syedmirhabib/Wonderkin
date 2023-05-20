import logo from "../../../assets/icons/logo.png";

const Home = () => {
  return (
    <div>
      

      <section className="py-12 px-8 bg-gray-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center">
              <img className="h-12 w-auto mr-2" src={logo} alt="Logo" />
              <h1 className="text-xl font-bold text-gray-950">Wonderkin</h1>
            </div>
            <h2 className="text-3xl font-bold mt-4">Subscribe to Our Newsletter</h2>
          </div>
          <form className="max-w-md mx-auto">
            <div className="flex items-center">
              <input
                type="email"
                className="flex-grow py-2 px-4 border border-gray-300 rounded-l-md rounded-r-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email address"
              />
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-r-md rounded-l-none">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Add other sections of your home page here */}
    </div>
  );
};

export default Home;

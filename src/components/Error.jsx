import { Link } from 'react-router-dom';
import error from './../assets/images/error.jpg'

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <img
        src={error}
        alt="Error"
        className="w-48 mb-4"
      />
      <h1 className="text-4xl font-bold text-red-600 mb-2">Oops!</h1>
      <p className="text-gray-600">We encountered an error.</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">
        <Link to="/" className="text-white">
          Go back to home
        </Link>
      </button>
    </div>
  );
};

export default Error;

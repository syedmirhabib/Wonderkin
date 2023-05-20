
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md  w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              create a new account
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 00-6 6v2a6 6 0 1012 0V10a6 6 0 00-6-6zm4 7h2a1 1 0 011 1v1a1 1 0 01-1 1h-2v-1a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1.5c6.337 0 11.5 5.163 11.5 11.5S18.337 24.5 12 24.5 0.5 19.337 0.5 13 5.663 1.5 12 1.5zm7.282 5.466c.08.278.122.572.122.874 0 2.07-1.674 3.744-3.744 3.744h-2.686v3.376c0 .488-.396.884-.884.884H9.116a.885.885 0 01-.884-.884v-3.376H5.546c-2.07 0-3.744-1.674-3.744-3.744a4.637 4.637 0 011.167-3.067 4.637 4.637 0 013.067-1.167c.913 0 1.77.267 2.5.73.73-.463 1.587-.73 2.5-.73.913 0 1.77.267 2.5.73.73-.463 1.587-.73 2.5-.73.913 0 1.77.267 2.5.73.73-.463 1.587-.73 2.5-.73.913 0 1.77.267 2.5.73a4.63 4.63 0 011.167 3.067 4.63 4.63 0 01-1.167 3.067zm-4.782 2.738h2.686c1.238 0 2.244 1.006 2.244 2.244s-1.006 2.244-2.244 2.244H9.116c-1.238 0-2.244-1.006-2.244-2.244s1.006-2.244 2.244-2.244h2.686v-.7a.885.885 0 01.884-.884h1.84c.488 0 .884.396.884.884v.7z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3c5.79 0 10.5 4.71 10.5 10.5S17.79 24 12 24 1.5 19.29 1.5 13 6.21 2.5 12 2.5zm.624 11.578c-.362.184-.774.312-1.224.312H8.775c-.45 0-.862-.128-1.224-.312L7.95 13.14c-.16-.112-.336-.2-.55-.2H5.72c-.537 0-.973.41-.973.915v.787c0 .172.142.314.314.314h1.383c.25 0 .422-.204.35-.45l-.067-.25c-.148-.36-.22-.776-.22-1.263v-.502c0-.49.073-.905.22-1.264l.067-.25c.072-.247-.1-.45-.35-.45H5.34c-.173 0-.314.142-.314.315v.787c0 .63-.045 1.014-.012 1.265l.067.237c.16.342.426.58.774.687.34.106 1.01.145 2.01.145h1.8c.53 0 .8.4.8.85v1.13c0 .45-.27.85-.8.85h-1.92c-1.16 0-1.95.038-2.345-.4l-.22-.2c-.43-.36-.86-.47-1.45-.47H5.304c-.172 0-.314.142-.314.314v.787c0 .68-.092 1.29-.35 1.748l-.203.32c-.34.458-.022 1.093-.678 1.093h-.607c-.17 0-.314.142-.314.315v1.195c0 .173.142.314.314.314h.83c.956 0 1.486-.06 2.033-.4l.27-.21c.47-.38.874-.56 1.58-.56h.482c.172 0 .314-.142.314-.314v-.787c0-.605.19-1.235.61-1.655l.186-.19c.435-.44.907-.65 1.64-.65h1.55c.172 0 .314-.142.314-.314v-.922c0-.173-.142-.315-.314-.315h-.697z"
                />
              </svg>
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side: Branding */}
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-12">
        <div className="max-w-md text-center text-white animate-fadeIn">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AutoFusion
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Drive your ideas to the next level.
          </p>
        </div>
      </div>

      {/* Right Side: Form Area */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

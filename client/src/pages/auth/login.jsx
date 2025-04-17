import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-12 shadow-xl animate-fadeIn">
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
          AutoFusion
        </h1>
        <h2 className="mt-3 text-center text-2xl font-semibold text-gray-800">
          Sign in to your account
        </h2>

        <div className="mt-8">
          <CommonForm
            formControls={loginFormControls}
            buttonText={"Sign In"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
        </div>

        <div className="mt-5 text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-500 hover:text-gray-700 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            className="font-medium text-gray-600 hover:text-gray-800 hover:underline"
            to="/auth/register"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthLogin;

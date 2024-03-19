import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Button from "../../../ui/Button";
import InputFloatingLabel from "../../../ui/InputFloatingLabel"

function LoginForm() {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yess")
    // Implement your login logic here
  };
  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="rounded-md shadow-sm space-y-4">
          <InputFloatingLabel item={{ label: "email address", id: "email_address" }} />
          <InputFloatingLabel item={{ label: "password", id: "password" }} />
        </div>

        <div className="flex justify-between items-center flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="text-blue-700 focus:ring-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="text-blue-900">
              Remember me
            </label>
          </div>
          <p className="capitalize text-blue-700 font-semibold">forget password?</p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4">
        <Button type="login">
          <span>Login</span>
          <span className="text-lg"><GoArrowRight /></span>
        </Button>
        <p className="text-gray-400 text-xs tracking-wide flex items-center gap-1">
          <span className="capitalize">don't have an account yet?</span>
          <NavLink to="/signup" className="text-blue-600 font-bold">Sign up</NavLink>
        </p>
      </div>

    </form>
  )
}

export default LoginForm

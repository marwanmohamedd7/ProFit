import { GoArrowRight } from "react-icons/go";
import Button from "../../ui/Button";
import InputFloatingLabel from "../../ui/InputFloatingLabel"

function LoginForm() {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };
  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="rounded-md shadow-sm space-y-4">
          <InputFloatingLabel item={{ label: "email address", id: "email_address" }} />
          <InputFloatingLabel item={{ label: "password", id: "password" }} />
        </div>

        <div className="flex items-center gap-2">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-700 focus:ring-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="text-sm text-gray-900">
            Remember me
          </label>
        </div>
      </div>

      <Button type="login" to="/dashboard">
        <span>Login</span>
        <span className="text-lg"><GoArrowRight /></span>
      </Button>
    </form>
  )
}

export default LoginForm

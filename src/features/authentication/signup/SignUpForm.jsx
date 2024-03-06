import { GoArrowRight } from "react-icons/go"
import Button from "../../../ui/Button"
import InputFloatingLabel from "../../../ui/InputFloatingLabel"
import { NavLink } from "react-router-dom";

function SignUpForm() {
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("yes")
        // Implement your login logic here
    };
    return (
        <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="rounded-md shadow-sm space-y-4">
                    <InputFloatingLabel item={{ label: "first name", id: "firstName" }} />
                    <InputFloatingLabel item={{ label: "last name", id: "lastName" }} />
                    <InputFloatingLabel item={{ label: "email address", id: "email_address", type: "email" }} />
                    <InputFloatingLabel item={{ label: "password", id: "password", type: "password" }} />
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
            <div className="flex flex-col justify-center gap-4">
                <Button type="submit">
                    <span className="capitalize">let's create new account</span>
                    <span className="text-lg"><GoArrowRight /></span>
                </Button>
                <p className="text-gray-400 text-xs tracking-wide flex items-center gap-1">
                    <span className="capitalize">already have an account?</span>
                    <NavLink to="/login" className="text-blue-600 font-bold">Login</NavLink>
                </p>
            </div>
        </form>
    )
}

export default SignUpForm

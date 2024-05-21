import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useLogin } from "./useLogin";
import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Button from "../../../../ui/Button";
import InputFloatingLabel from "../../../../ui/InputFloatingLabel";
import SpinnerMini from "../../../../ui/SpinnerMini";
import { useLocalStorageState } from "../../../../hooks/useLocalStorageState";

function LoginForm() {
  const { login, isLogginIn } = useLogin()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userData,] = useLocalStorageState({}, "userInfo");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return
    // Implement your login logic here
    login({ email, password }, {
      onSuccess: () => {
        if (rememberMe) localStorage.setItem("userInfo", JSON.stringify({ email, password }))
        else localStorage.removeItem("userInfo")
        setEmail("")
        setPassword("")
      },
      onSettled: () => setPassword("")
    })
  };

  function handleRememberUserInfo(e) {
    setRememberMe(e.target.checked);
    if (!e.target.checked) localStorage.removeItem("userInfo");
  }

  useEffect(function () {
    if (userData?.email && userData?.password) {
      const { email, password } = userData;
      setEmail(email);
      setPassword(password);
      setRememberMe(true);
    }
  }, [userData])
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="rounded-md shadow-sm space-y-4">
          <InputFloatingLabel item={{ label: "email address", id: "email_address", value: email, type: "email" }} onChange={(e) => setEmail(e.target.value)} />
          <InputFloatingLabel icon={showPassword ? <FaRegEye /> : <FaRegEyeSlash />} setShowPassword={setShowPassword} item={{ label: "password", id: "password", value: password, type: `${showPassword ? "text" : "password"}` }} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="flex justify-between items-center flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            <input
              onChange={handleRememberUserInfo}
              checked={rememberMe}
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="text-blue-700 focus:ring-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="text-blue-900">
              Remember me
            </label>
          </div>
          <p className="capitalize text-blue-700 cursor-pointer font-semibold">forget password?</p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4">
        <Button type="login">
          {isLogginIn ?
            <SpinnerMini />
            :
            <p className="flex justify-center items-center gap-2 font-bold">
              <span className="text-base">Login</span>
              <span className="text-lg pt-0.5"><GoArrowRight /></span>
            </p>
          }
        </Button>
        <p className="text-gray-400 text-xs tracking-wide flex items-center gap-1">
          <span className="capitalize">don't have an account yet?</span>
          <NavLink to="/signup" replace={true} className="text-blue-600 font-bold">Sign up</NavLink>
        </p>
      </div>

    </form>
  )
}

export default LoginForm

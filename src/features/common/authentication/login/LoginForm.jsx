import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useLogin } from "./useLogin";
import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Button from "../../../../ui/Button";
import InputFloatingLabel from "../../../../ui/InputFloatingLabel";
import SpinnerMini from "../../../../ui/SpinnerMini";
import { useLocalStorageState } from "../../../../hooks/useLocalStorageState";
import styles from "../../../../styles/styles";
import { useDarkMode } from "../../../../context/DarkModeProvider";
// import styles from "../../../../styles/styles";
// import { useDarkMode } from "../../../../context/DarkModeProvider";

function LoginForm() {
  const colors = styles()
  const { isDarkMode } = useDarkMode();
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
              className={`${isDarkMode ? `accent-slate-700 border-gray-700` :`accent-gray-700 focus:ring-gray-600 border-gray-300`} rounded`}
            />
            <label htmlFor="remember-me" className={`${isDarkMode ? colors.text_gray_200 : colors.text_gray_600}`}>
              Remember me
            </label>
          </div>
          <p className={`capitalize ${isDarkMode ? colors.text_gray_200 : colors.text_gray_600} cursor-pointer font-semibold`}>forget password?</p>
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
          <NavLink to="/signup" replace={true} className={`${isDarkMode ? colors.text_gray_200 : colors.text_gray_600} font-bold`}>Sign up</NavLink>
        </p>
      </div>

    </form>
  )
}

export default LoginForm

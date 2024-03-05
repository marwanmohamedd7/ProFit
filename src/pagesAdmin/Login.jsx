import LoginBackgroundCover from "../features/authentication/LoginBackgroundCover";
import LoginFormLayout from "../features/authentication/LoginFormLayout";

function Login() {
  return (
    <div className="grid grid-cols-2 h-dvh ">
      <LoginBackgroundCover />
      <LoginFormLayout />
    </div >
  )
}
export default Login



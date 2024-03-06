import LoginBackgroundCover from "../features/authentication/login/LoginBackgroundCover";
import LoginLayout from "../features/authentication/login/LoginLayout";

function Login() {
  return (
    <div className="grid grid-cols-2 h-dvh ">
      <LoginBackgroundCover />
      <LoginLayout />
    </div >
  )
}
export default Login



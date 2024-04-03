import BackgroundCoverAuth from "../features/common/authentication/BackgroundCoverAuth";
import LoginLayout from "../features/common/authentication/login/LoginLayout";

function Login() {
  return (
    <div className="grid grid-cols-2 h-dvh ">
      <BackgroundCoverAuth />
      <LoginLayout />
    </div >
  )
}
export default Login



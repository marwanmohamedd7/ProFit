import LoginBackgroundCover from "../features/authentication/login/LoginBackgroundCover"
import CreatingProfile from "../features/authentication/signup/CreatingProfile"

function SignUp() {
    return (
        <div className="grid grid-cols-2 h-dvh ">
            <LoginBackgroundCover />
            <CreatingProfile />
        </div >
    )
}

export default SignUp

import BackgroundCoverAuth from "../features/common/authentication/BackgroundCoverAuth"
import SignUpTrainer from "../features/common/authentication/signup/Trainer/SignUpTrainer"

function SignUp() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-dvh">
            <BackgroundCoverAuth />
            <SignUpTrainer/>
        </div >
    )
}

export default SignUp

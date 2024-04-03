import BackgroundCoverAuth from "../features/common/authentication/BackgroundCoverAuth"

function SignUp() {
    return (
        <div className="grid grid-cols-2 h-dvh ">
            <BackgroundCoverAuth />
            <signUp />
        </div >
    )
}

export default SignUp

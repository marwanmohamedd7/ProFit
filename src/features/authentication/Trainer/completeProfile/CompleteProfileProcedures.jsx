const procedures = [
    {
        pageName: "personal-information",
        desc: 'Create your special identity',
        src: "/images/person.png",

    },
    {
        pageName: 'professional-credentials',
        desc: 'Expertise and Impact',
        src: "/images/check.png",
    },
    {
        pageName: 'subscription-pricing',
        desc: 'Training packages and their costs.',
        src: "/images/coin.png",
    },
    {
        pageName: 'submission-and-review',
        desc: 'Administrative Review',
        src: "/images/lens.png",
    }
]

function CompleteProfileProcedures({ page }) {
    return (
        <div className="relative flex flex-col justify-around xl:px-16 lg:px-10 md:px-8 sm:px-6 px-4"
            style={
                {
                    "backgroundImage": "linear-gradient(0deg, rgba(225, 239, 254, 0.90) 0%, rgba(225, 239, 254, 0.90) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #1D4ED8 75.52%), url('/trainerBackground.jpeg')",
                    "backgroundColor": "lightgray",
                    "backgroundPosition": "center", // this corresponds to 'bg-top' in your class, change it if necessary
                    "backgroundSize": "cover",
                    "backgroundRepeat": "no-repeat",
                }
            }>
            <div className="flex flex-col items-center p-4">
                <h1 className="text-blue-700 font-bold text-2xl">Trainer New Account</h1>
                <div className="flex flex-col items-center gap-8">
                    <img className="w-48" src={`${procedures[page].src}`} alt="" />
                    <div className="flex flex-col gap-8">
                        {procedures.map((step, index) => {
                            let style;
                            if (page === index) style = {
                                text: `text-blue-600`,
                                border: `border-blue-600`,
                                font: `font-bold`,
                            }
                            else if (page > index) style = {
                                text: `text-green-600`,
                                border: `border-green-600`,
                                bg: `bg-green-600`
                            }
                            else style = {
                                text: `text-gray-500`,
                                border: `border-gray-500`
                            }
                            return <div key={index} className={`flex items-center ${style.text} gap-4`} >
                                <h4 className={`rounded-full px-3 py-1 border ${style.border} ${style?.bg ? `${style.bg} text-white` : ``} justify-center items-center flex`}>
                                    <span className="">{index + 1}</span>
                                </h4>
                                <p className="flex flex-col gap-1">
                                    <span className={`${style.font ? style.font : "font-semibold"} capitalize`}>{(step.pageName).replace("-", " ")}</span>
                                    <span className="text-xs">{step.desc}</span>
                                </p>
                            </div>
                        }
                        )}
                    </div>
                </div>
            </div>
            <p className="text-center text-sm text-gray-500">
                <span className="">Already have an account ?</span>
                <span className="text-neutral-400 "> </span>
                <span className="text-blue-700 font-bold">Log in</span>
            </p>
        </div>
    )
}

export default CompleteProfileProcedures

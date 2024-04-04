import { NavLink } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

function PendingTrainerSocialMedia({ socialMedia }) {
    const { facebook, instagram, X } = socialMedia || {}
    return (
        <div className="space-y-6">
            <span className="text-xl basis-40 flex items-center gap-4 text-gray-600" >
                <img className="w-8" src="/images/facebook.png" alt="facebook" />
                <NavLink to={facebook} target={`${facebook ? "_blank" : ""}`} className="text-sm text-gray-900">
                    {facebook ? (facebook).startsWith("https://") ? (facebook).replace("https://", "") : facebook : "facebook"}
                </NavLink>
            </span>
            <span className="text-xl basis-40 flex items-center gap-4 text-gray-600" >
                <img className="w-8" src="/images/instagram.png" alt="instagram" />
                <NavLink to={instagram} target={`${instagram ? "_blank" : ""}`} className="text-sm text-gray-900">
                    {instagram ? (instagram).startsWith("https://") ? (instagram).replace("https://", "") : instagram : "instagram"}
                </NavLink>
            </span>
            <span className="text-xl basis-40 flex items-center gap-4 text-gray-600" >
                <img className="w-8" src="/images/X.png" alt="X" />
                <NavLink to={X} target={`${X ? "_blank" : ""}`} className="text-sm text-gray-900">
                    {X ? (X).startsWith("https://") ? (X).replace("https://", "") : X : "X"}
                </NavLink>
            </span>
        </div>
    )
}

export default PendingTrainerSocialMedia

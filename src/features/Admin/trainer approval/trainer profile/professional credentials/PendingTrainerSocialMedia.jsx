import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

function PendingTrainerSocialMedia() {
    const socialLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com/Marwan.Magdy_1060' },
        { name: 'Instagram', url: 'https://www.instagram.com/Marwan.Magdy_1060' },
        { name: 'X', url: 'https://www.x.com/Marwan.Magdy_1060' },
    ];
    return (
        <section className="space-y-4 bg-white p-4 rounded-md border">
            <h2 className="text-xl text-blue-900 font-bold">Social Media and Contact Links</h2>
            <div className="space-y-2">
                {socialLinks.map((link, index) => (
                    <div key={index} className="flex items-center gap-4 border-gray-300 rounded py-2">
                        <span className="text-xl text-gray-600" >
                            {link.name === 'Facebook' && <FaFacebook />}
                            {link.name === 'Instagram' && <FaInstagram />}
                            {link.name === 'X' && <FaTwitter />}
                        </span>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:underline">
                            {link.url}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PendingTrainerSocialMedia

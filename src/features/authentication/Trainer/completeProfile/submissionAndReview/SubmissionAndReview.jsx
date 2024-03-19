import { useNavigate } from "react-router-dom"
import { HiArrowLongRight } from "react-icons/hi2";
import Button from "../../../../../ui/Button"
import { useState } from "react";

function SubmissionAndReview() {
    const navigate = useNavigate()
    const [terms, setTerms] = useState(true)
    const [agree, setAgree] = useState(true)

    return (
        <div className="container flex flex-col gap-8">
            <div className="flex flex-col justify-center gap-4">
                <h1 className="text-blue-900 font-bold text-lg capitalize">Administrative review</h1>

                <ul className="list-disc text-sm font-semibold text-blue-900 space-y-1.5 pl-6">
                    <li>At ProFIT, we are committed to maintaining the highest standards of professionalism and quality in our community of trainers and trainees.</li>
                    <li>To ensure this, every trainer profile submitted for registration undergoes a thorough administrative review.</li>
                    <li>This process involves verifying the accuracy of your professional credentials, qualifications, and experience as stated in your profile.</li>
                    <li>Our team also assesses the suitability of the content you provide, including your client transformation photos, to ensure they align with our platform's values and standards.</li>
                    <li>The review typically takes between 2 to 3 business days.</li>
                    <li>Once the review is complete, we will notify you of the outcome.</li>
                    <li>If your profile is approved, it will be activated and visible to potential trainers on our platform.</li>
                    <li>In cases where additional information or clarification is needed, we will reach out to you directly.</li>
                    <li>We appreciate your patience and understanding during this review process as we work together to build a trusted and effective fitness community.</li>
                </ul>
            </div>

            <div className="flex flex-col justify-center gap-4">
                <div className="inline-flex items-center gap-4">
                    <input
                        type="checkbox"
                        id="terms-conditions"
                        name="terms-conditions"
                        className="form-checkbox h-4 w-4 text-blue-700 accent-blue-700 rounded-md focus:outline-none transition-all duration-300"
                        checked={terms}
                        onChange={() => setTerms(value => !value)}
                    />
                    <label htmlFor="terms-conditions" className="text-blue-800 text-sm font-semibold">
                        <span>I accept the platform's <strong className="text-blue-700">terms</strong> and <strong className="text-blue-700">conditions</strong> or privacy policy.</span>
                    </label>
                </div>

                <div className="inline-flex items-center gap-4">
                    <input
                        type="checkbox"
                        id="read-agree"
                        name="read-agree"
                        className="form-checkbox h-4 w-4 text-blue-700 accent-blue-700 rounded-md focus:outline-none transition-all duration-300"
                        checked={agree}
                        onChange={() => setAgree(value => !value)}
                    />
                    <label htmlFor="read-agree" className="text-blue-800 text-sm font-semibold">
                        <span>By using ProFIT, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</span>
                    </label>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <Button onClick={(e) => {
                    e.preventDefault()
                    navigate("/complete-profile/subscription-pricing")
                }} type="secondary">back</Button>
                <Button>
                    <p className="flex justify-center font-bold tracking-wide items-center gap-2">
                        <span>submit request</span>
                        <span className="text-xl"><HiArrowLongRight /></span>
                    </p>
                </Button>
            </div>

        </div>
    )
}

export default SubmissionAndReview

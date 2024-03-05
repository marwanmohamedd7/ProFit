import { useState } from "react";
import Button from "../../../ui/Button";
import InputFloatingLabel from "../../../ui/InputFloatingLabel";

function PendingTrainerProfessionalCredentials() {
    const [tags, setTags] = useState(['weight loss', 'muscle gain', 'fitness', 'muscle gain']);
    const [inputValue, setInputValue] = useState('');
    const removeTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };
    const addTag = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            setTags([...tags, e.target.value]);
            setInputValue('');
        }
    };
    return (
        <section className="space-y-4 bg-white p-4 rounded-md border">
            <h2 className="text-2xl text-blue-900 font-bold">Professional Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="tag-input" className="block text-sm font-medium text-gray-700">Specialization*</label>
                    <div className="flex flex-wrap gap-1 bg-gray-50 items-center border rounded-md p-1">
                        {tags.map((tag, index) => (
                            <div className="flex items-center gap-2 bg-gray-200 rounded px-2 py-1" key={index}>
                                <span>{tag}</span>
                                <Button type="remove" onclick={() => removeTag(index)}>&times;</Button>
                            </div>
                        ))}
                        <input
                            type="text"
                            id="tag-input"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyUp={addTag}
                            className="flex-1 outline-none bg-gray-50"
                            disabled={true}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-end">
                    <InputFloatingLabel item={{ label: "Years of experience*", id: "experience", type: "number", defaultValue: "7", disabled: true }} />
                </div>
            </div>
        </section>
    )
}
export default PendingTrainerProfessionalCredentials


// < label htmlFor = "experience" className = "block text-sm font-medium text-gray-700" >
//     Years of experience *
//                 </ >
// <input
//     type="number"
//     id="experience"
//     className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//     placeholder="7"
// />
//             </div >
import { useState } from "react";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";
import CompoundTabs from "../../../../../ui/CompoundTabs";
import SubscribedTrainerInfoCard from "../../../../../ui/SubscribedTrainerInfoCard";
import Button from "../../../../../ui/Button";

function DietAssessmentSettingsForm({ getDietAssessmentSettingsForm }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const {
        weight,
        height,
        disease,
        bodyFat,
        neckArea,
        dietType,
        waistArea,
        fitnessGoals,
        activityLevel,
        numberofmeals,
        foodAllergens,
        religionrestriction,
        macros: { calories, proteins, carbs, fats } = {}
    } = getDietAssessmentSettingsForm;
    const [dietFats, setDietFats] = useState(fats);
    const [dietCarbs, setDietCarbs] = useState(carbs);
    const [dietProteins, setDietProteins] = useState(proteins);
    const [dietCalories, setDietCalories] = useState(calories);

    function handleReset() {
        setDietFats(fats);
        setDietCarbs(carbs);
        setDietProteins(proteins);
        setDietCalories(calories);
    }

    return (
        <div className="w-[45rem] h-[30rem] flex flex-col">
            <CompoundTabs tabsFeild="dietSettings" defaultTab="personalData" className="flex-grow">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="personalData">Personal Data</CompoundTabs.Open>
                    <CompoundTabs.Open opens="measurements">Measurements</CompoundTabs.Open>
                    <CompoundTabs.Open opens="dietPreferences">Preferences</CompoundTabs.Open>
                    <CompoundTabs.Open opens="dietMacros">Diet Macros</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="personalData">
                    <div className="py-4 space-y-4 capitalize">
                        <h1 className={`font-bold ${isDarkMode ? colors.text_white : colors.text_gray_700}`}>Personal Data</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <SubscribedTrainerInfoCard field="Goal" value={fitnessGoals} backgroundColor={colors.bg_gray_50} />
                            <SubscribedTrainerInfoCard field="Activity Level" value={activityLevel} backgroundColor={colors.bg_gray_50} />
                        </div>
                    </div>
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="measurements">
                    <div className="py-4 space-y-4 capitalize">
                        <h1 className={`font-bold ${isDarkMode ? colors.text_white : colors.text_gray_700}`}>Measurements</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <SubscribedTrainerInfoCard field="Weight" value={weight} backgroundColor={colors.bg_gray_50} />
                            <SubscribedTrainerInfoCard field="Height" value={height} backgroundColor={colors.bg_gray_50} />
                            <SubscribedTrainerInfoCard field="Body Fat" value={bodyFat} backgroundColor={colors.bg_gray_50} />
                            <SubscribedTrainerInfoCard field="Neck Area" value={neckArea} backgroundColor={colors.bg_gray_50} />
                            <SubscribedTrainerInfoCard field="Waist Area" value={waistArea} backgroundColor={colors.bg_gray_50} />
                        </div>
                    </div>
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="dietPreferences">
                    <div className={`py-4 space-y-4 capitalize divide-y ${isDarkMode && "divide-gray-700"}`}>
                        <div className="space-y-4">
                            <h1 className={`font-bold ${isDarkMode ? colors.text_white : colors.text_gray_700}`}>Diet Preferences</h1>
                            <div className="grid grid-cols-2 gap-4">
                                <SubscribedTrainerInfoCard field="Number of Meals" value={numberofmeals} backgroundColor={colors.bg_gray_50} />
                                <SubscribedTrainerInfoCard field="Diet Type" value={dietType} backgroundColor={colors.bg_gray_50} />
                                <SubscribedTrainerInfoCard field="Religion Restriction" value={religionrestriction.join(", ")} backgroundColor={colors.bg_gray_50} />
                            </div>
                        </div>
                        <div className="space-y-4 pt-4">
                            <h1 className={`font-bold ${isDarkMode ? colors.text_white : colors.text_gray_700}`}>Medical Case</h1>
                            <div className="grid grid-cols-2 gap-4">
                                <SubscribedTrainerInfoCard field="Food Allergens" value={foodAllergens.join(", ")} backgroundColor={colors.bg_gray_50} />
                                <SubscribedTrainerInfoCard field="Disease" value={disease.join(", ")} backgroundColor={colors.bg_gray_50} />
                            </div>
                        </div>
                    </div>
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="dietMacros">
                    <div className={`flex flex-col justify-between py-4 space-y-4 capitalize h-full ${isDarkMode && "divide-gray-700"}`}>
                        <div className="space-y-4">
                            <h1 className={`font-bold ${isDarkMode ? colors.text_white : colors.text_gray_700}`}>Diet Macros</h1>
                            <div className="grid grid-cols-2 gap-4">
                                <SubscribedTrainerInfoCard updateValue={true} field="Fats" value={dietFats} setValue={setDietFats} backgroundColor={colors.bg_gray_50} />
                                <SubscribedTrainerInfoCard updateValue={true} field="Carbs" value={dietCarbs} setValue={setDietCarbs} backgroundColor={colors.bg_gray_50} />
                                <SubscribedTrainerInfoCard updateValue={true} field="Proteins" value={dietProteins} setValue={setDietProteins} backgroundColor={colors.bg_gray_50} />
                                <SubscribedTrainerInfoCard updateValue={true} field="Calories" value={dietCalories} setValue={setDietCalories} backgroundColor={colors.bg_gray_50} />
                            </div>
                        </div>
                        <div className="pt-4 flex items-center justify-end gap-2">
                            <Button type="primary">Update</Button>
                            <Button onClick={handleReset} type="secondary">Reset</Button>
                        </div>
                    </div>
                </CompoundTabs.Window>
            </CompoundTabs>
        </div>
    );
}

export default DietAssessmentSettingsForm;

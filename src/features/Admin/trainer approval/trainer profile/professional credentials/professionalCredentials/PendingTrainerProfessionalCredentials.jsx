import { useForm } from "react-hook-form"
import ProfessionalCredentialsForm from "../../../../../Trainer/completeProfile/professionalCredentials/ProfessionalCredentialsForm"

function PendingTrainerProfessionalCredentials({ id, values }) {
    const isExist = Boolean(id);
    const { register, formState: { errors }, control, watch } = useForm({
        defaultValues: isExist ? values : {},
    })
    return (
        <ProfessionalCredentialsForm
            watch={watch}
            errors={errors}
            control={control}
            register={register}
            disabled={true}
        />
    )
}

export default PendingTrainerProfessionalCredentials
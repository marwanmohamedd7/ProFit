import { useForm } from "react-hook-form"
import ProfessionalCredentialsForm from "../../../../../Trainer/completeProfile/professionalCredentials/ProfessionalCredentialsForm"


function PendingTrainerProfessionalCredentials({ values }) {
    const { register, formState: { errors }, control, watch } = useForm({
        defaultValues: values || {},
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
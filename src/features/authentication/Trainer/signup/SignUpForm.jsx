import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { GoArrowRight } from "react-icons/go"
import Button from "../../../../ui/Button"
import InputFloatingLabel from "../../../../ui/InputFloatingLabel"
import SpinnerMini from "../../../../ui/SpinnerMini";

// Email regex: /\S+@\S+\.\S+/

function SignUpForm() {
    const { signup, isSignningUp } = useSignup()
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm()
    // Handle form submission
    async function onsubmit(data) {
        if (!data) return null;
        const { confirm_password, ...signUpData } = data
        signup(signUpData, {
            onSettled: () => {
                reset()
                navigate("/complete-profile/personal-information")
            },
        })
    };

    return (
        <form className="space-y-10" onSubmit={handleSubmit(onsubmit)}>
            <div className="space-y-6">
                <div className="rounded-md shadow-sm space-y-4">
                    <InputFloatingLabel item={{ label: "first name", id: "firstName" }}
                        disabled={isSignningUp}
                        error={errors?.firstName?.message}
                        register={{
                            ...register("firstName", {
                                required: "This field is required",
                                minLength: {
                                    value: 2
                                },
                                maxLength: {
                                    value: 30
                                }
                            })
                        }} />
                    <InputFloatingLabel item={{ label: "last name", id: "lastName" }}
                        disabled={isSignningUp}
                        error={errors?.lastName?.message}
                        register={{
                            ...register("lastName", {
                                required: "This field is required",
                                minLength: {
                                    value: 2
                                },
                                maxLength: {
                                    value: 30
                                }
                            })
                        }}
                    />
                    <InputFloatingLabel item={{ id: "national_ID", label: "national ID*", type: "number" }}
                        error={errors?.national_ID?.message}
                        register={
                            {
                                ...register("national_ID", {
                                    required: 'This field is required',
                                    minLength: {
                                        value: 14,
                                        message: "national Id must be less than 14 digits long"
                                    },
                                    maxLength: {
                                        value: 14,
                                        message: "national Id can't exceed 14 digits"
                                    }
                                })
                            }
                        }
                    />
                    <InputFloatingLabel item={{ label: "email address", id: "email_address", type: "email" }}
                        disabled={isSignningUp}
                        error={errors?.email_address?.message}
                        register={{
                            ...register("email_address", {
                                required: "This field is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Please enter a valid email address"
                                }
                            })
                        }}
                    />
                    <InputFloatingLabel item={{ label: "password", id: "password", type: "password" }}
                        disabled={isSignningUp}
                        error={errors?.password?.message}
                        register={{
                            ...register("password", {
                                required: "This field is required", minLength: {
                                    value: 8,
                                    message: "Password needs a minimum of characters",
                                }
                            })
                        }}
                    />
                    <InputFloatingLabel item={{ label: "confirm password", id: "confirm_password", type: "password" }}
                        disabled={isSignningUp}
                        error={errors?.confirm_password?.message}
                        register={{
                            ...register("confirm_password", {
                                required: "This field is required",
                                validate: {
                                    checkPassword: (value) => getValues().password === value || "Passwords do not match"
                                }
                            })
                        }}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <Button disabled={isSignningUp} type="submit">
                    {isSignningUp ? <SpinnerMini />
                        :
                        <>
                            <span className="capitalize">let's create new account</span>
                            <span className="text-lg"><GoArrowRight /></span>
                        </>
                    }
                </Button>
                <p className="text-gray-400 text-xs tracking-wide flex items-center flex-wrap gap-1">
                    <span className="capitalize">already have an account?</span>
                    <NavLink to="/login" className="text-blue-600 font-bold">Login</NavLink>
                </p>
            </div>
        </form>
    )
}

export default SignUpForm

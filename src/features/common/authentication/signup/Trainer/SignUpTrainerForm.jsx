import { useState } from "react";
import { useSignUp } from "./useSignUp"
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Button from "../../../../../ui/Button";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";
// Email regex: /\S+@\S+\.\S+/

function SignUpTrainerForm() {
    const colors = styles()
    const { isDarkMode } = useDarkMode();
    const { signup, isSignningUp } = useSignUp()
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { register, formState: { errors }, handleSubmit, getValues, watch, reset } = useForm()

    // Handle form submission
    async function onsubmit(data) {
        if (!data) return null;
        const { confirm_password, ...signUpData } = data
        signup(signUpData, {
            onSuccess: () => {
                if (rememberMe) localStorage.setItem("userInfo", JSON.stringify({ email: getValues().email, password: getValues().password }))
                else localStorage.removeItem("userInfo")
                reset();
            }
        })
    };
    function handleRememberUserInfo(e) {
        setRememberMe(e.target.checked);
        if (!e.target.checked) localStorage.removeItem("userInfo");
    }
    return (
        <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
            <div className="space-y-6">
                <div className="rounded-md shadow-sm space-y-4">
                    <div className="flex justify-between items-center gap-2">
                        <div className="w-full">
                            <InputFloatingLabel item={{ label: "first name", id: "firstName", value: watch("firstName") }}
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
                        </div>
                        <div className="w-full">
                            <InputFloatingLabel item={{ label: "last name", id: "lastName", value: watch("lastName") }}
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
                        </div>
                    </div>
                    <InputFloatingLabel item={{ id: "nationalId", label: "national ID*", type: "number", value: watch("nationalId") }}
                        error={errors?.nationalId?.message}
                        register={
                            {
                                ...register("nationalId", {
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
                    <InputFloatingLabel item={{ label: "email address", id: "email", type: "email", value: watch("email") }}
                        disabled={isSignningUp}
                        error={errors?.email?.message}
                        register={{
                            ...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Please enter a valid email address"
                                }
                            })
                        }}
                    />
                    <InputFloatingLabel item={{ label: "password", id: "password", type: `${showPassword ? "text" : "password"}`, value: watch("password") }}
                        disabled={isSignningUp}
                        error={errors?.password?.message}
                        setShowPassword={setShowPassword}
                        icon={showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        register={{
                            ...register("password", {
                                required: "This field is required",
                                minLength: {
                                    value: 8,
                                    message: "Password needs a minimum of characters",
                                }
                            })
                        }}
                    />
                    <InputFloatingLabel item={{ label: "confirm password", id: "confirm_password", type: "password", value: watch("confirm_password") }}
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
                    <div className="flex items-center gap-2 text-xs">
                        <input
                            onChange={handleRememberUserInfo}
                            checked={rememberMe}
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className={`${isDarkMode ? `accent-blue-700 border-blue-600` : `accent-blue-700 focus:ring-blue-600 border-gray-300`} rounded`}
                        />
                        <label htmlFor="remember-me" className={`${isDarkMode ? colors.text_gray_200 : colors.text_gray_600}`}>
                            Remember me
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <Button disabled={isSignningUp} type="submit">
                    {isSignningUp ? <SpinnerMini dark={false} />
                        :
                        <p className="flex justify-center items-center gap-2 font-bold">
                            <span className="text-base">let's create new account</span>
                            <span className="text-lg pt-0.5"><GoArrowRight /></span>
                        </p>
                    }
                </Button>
                <p className="text-gray-400 text-xs tracking-wide flex items-center flex-wrap gap-1">
                    <span className="capitalize">already have an account?</span>
                    <NavLink to="/login" className={`${isDarkMode ? colors.text_gray_200 : colors.text_gray_600} font-bold`}>Login</NavLink>
                </p>
            </div>
        </form>
    )
}

export default SignUpTrainerForm

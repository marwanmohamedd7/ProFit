import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";
import LoginForm from "./LoginForm"
// import styles from "../../../../styles/styles";
// import { useDarkMode } from "../../../../context/DarkModeProvider";

function LoginLayout() {
    const colors = styles()
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? `${colors.bg_slate_900}` : colors.bg_gray_50}`}>
            <div className={`max-w-md w-full flex flex-col gap-6 p-10 rounded-md border shadow-md divide-y ${isDarkMode ? `${colors.bg_slate_900} ${colors.border_gray_700} divide-gray-700` : colors.bg_white}`}>
                <div className="flex items-center gap-2">
                    <svg className={`p-1 rounded-md ${isDarkMode ? colors.bg_blue_900 : colors.bg_blue_700} w-11 h-11`} viewBox="0 0 44 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M28.631 0.642118C28.4271 1.51796 28.0558 2.3322 27.74 3.1526C27.4219 3.97972 27.1279 4.813 26.8222 5.63564C26.2101 7.28484 25.5554 8.91052 25.0139 10.6292C25.3499 10.7708 25.7419 10.7104 26.1205 10.7104C27.2455 10.7104 28.5358 10.772 29.5757 10.6835C31.0748 10.5558 32.0268 9.94764 32.626 9.03708C32.9211 8.58796 33.163 7.79892 32.9228 7.17452C32.7727 6.7842 32.4171 6.43532 32.0593 6.28412C30.941 5.81036 29.1092 6.3698 27.74 6.04108C27.7865 5.55164 27.9993 5.09468 28.1718 4.63772C28.3426 4.1858 28.5414 3.73892 28.7116 3.28812C29.0571 2.37308 29.3646 1.44124 29.7913 0.588918C31.8672 0.586118 33.9039 0.458438 35.9457 0.535158C38.0149 0.612998 39.5526 1.1114 40.8854 1.99284C42.1281 2.81436 43.1473 4.10964 43.5309 5.77172C43.9391 7.53964 43.5942 9.65252 42.8292 11.0895C41.3654 13.838 38.7614 15.6916 35.2171 16.2992C33.2952 16.629 31.2714 16.5008 29.0896 16.5691C27.0372 16.6335 24.921 16.4996 22.8271 16.596C22.4883 17.0081 22.3573 17.5614 22.1792 18.0536C21.0956 21.0491 19.8955 24.1072 18.7778 27.1234C18.5941 27.6201 18.4927 28.1611 18.1573 28.5811C14.5442 28.613 10.8028 28.6707 7.19808 28.5542C7.24792 28.0306 7.47864 27.554 7.65672 27.0696C7.83984 26.5735 7.96192 26.0538 8.1428 25.5582C8.84616 23.6279 9.58256 21.7093 10.329 19.7544C10.6958 18.7945 11.0699 17.8179 11.355 16.8121C10.9814 16.6206 10.4119 16.704 9.8704 16.704C8.82544 16.704 7.76704 16.6951 6.76632 16.704C6.2696 16.7085 5.77288 16.7595 5.33552 16.6228C5.4072 16.088 5.6648 15.5902 5.84848 15.084C6.2136 14.0782 6.63864 13.0971 7.00936 12.088C7.19136 11.5924 7.328 11.0592 7.6304 10.6297C9.60104 10.5144 11.771 10.7154 13.6767 10.576C13.9226 10.3167 14.015 9.93476 14.1354 9.60436C14.5033 8.593 14.944 7.56148 15.2419 6.4734C14.7245 6.32724 14.0984 6.3922 13.4606 6.3922C10.3845 6.39276 7.32016 6.3922 4.25584 6.3922C3.04792 6.3922 1.85064 6.42692 0.720001 6.31156C0.736801 5.78628 1.01176 5.32596 1.20608 4.82588C1.65912 3.65996 2.1116 2.4722 2.60944 1.20884C2.736 0.887398 2.75784 0.594518 3.06808 0.534038C3.51328 0.447238 4.12872 0.560918 4.71448 0.560918C8.49616 0.561478 12.1171 0.560358 15.9974 0.560918C17.0317 0.560918 18.0878 0.572118 19.1289 0.534038C20.1856 0.495398 21.2373 0.608518 22.2873 0.560918C24.1493 0.476918 26.0466 0.482518 27.9018 0.560918C28.146 0.570998 28.4165 0.497638 28.631 0.642118Z" fill="white" />
                    </svg>
                    <div className="flex flex-col justify-center">
                        <h2 className={`text-2xl font-extrabold ${isDarkMode ? colors.text_white : colors.text_blue_700}`}>
                            ProFIT
                        </h2>
                        <p className={`text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>
                            Admin Portal
                        </p>
                    </div>
                </div>
                <div className="space-y-4 pt-6">
                    <h3 className={`capitalize text-lg ${isDarkMode ? colors.text_white : colors.text_gray_700} font-extrabold`}>login to your account</h3>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
export default LoginLayout

import { useMainNav } from "../context/MainNavProvider";
import { useCurrentUser } from "../context/UserProvider";

function Logo() {
  const { userRole } = useCurrentUser()
  const { isOpen } = useMainNav();

  return (
    <div className="flex justify-center text-center py-[0.44rem] px-[0.325rem] border-solid border-b border-grey-100">
      <div className="rounded-md w-36 flex items-center justify-center gap-3 capitalize">
        <div className="bg-blue-900 rounded-lg px-1.5 py-2.5">
          <svg
            width="44"
            height="30"
            viewBox="0 0 44 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Seitsenpainos_logo 1" clipPath="url(#clip0_4531_1086)">
              <g id="Seitsenpainos">
                <path
                  id="Vector"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.6309 0.142118C28.4271 1.01796 28.0558 1.8322 27.74 2.6526C27.4219 3.47972 27.1279 4.313 26.8221 5.13564C26.2101 6.78484 25.5554 8.41052 25.0139 10.1292C25.3499 10.2708 25.7419 10.2104 26.1205 10.2104C27.2455 10.2104 28.5357 10.272 29.5757 10.1835C31.0748 10.0558 32.0268 9.44764 32.626 8.53708C32.9211 8.08796 33.163 7.29892 32.9228 6.67452C32.7727 6.2842 32.4171 5.93532 32.0593 5.78412C30.9409 5.31036 29.1092 5.8698 27.74 5.54108C27.7865 5.05164 27.9993 4.59468 28.1717 4.13772C28.3425 3.6858 28.5413 3.23892 28.7116 2.78812C29.0571 1.87308 29.3645 0.941238 29.7913 0.0889181C31.8672 0.0861181 33.9039 -0.0415619 35.9457 0.0351581C38.0149 0.112998 39.5526 0.611398 40.8854 1.49284C42.1281 2.31436 43.1473 3.60964 43.5308 5.27172C43.9391 7.03964 43.5941 9.15252 42.8292 10.5895C41.3653 13.338 38.7613 15.1916 35.2171 15.7992C33.2952 16.129 31.2713 16.0008 29.0896 16.0691C27.0372 16.1335 24.9209 15.9996 22.8271 16.096C22.4883 16.5081 22.3573 17.0614 22.1792 17.5536C21.0956 20.5491 19.8955 23.6072 18.7777 26.6234C18.594 27.1201 18.4927 27.6611 18.1573 28.0811C14.5441 28.113 10.8028 28.1707 7.19805 28.0542C7.24789 27.5306 7.47861 27.054 7.65669 26.5696C7.83981 26.0735 7.96189 25.5538 8.14277 25.0582C8.84613 23.1279 9.58253 21.2093 10.329 19.2544C10.6958 18.2945 11.0699 17.3179 11.3549 16.3121C10.9814 16.1206 10.4119 16.204 9.87037 16.204C8.82541 16.204 7.76701 16.1951 6.76629 16.204C6.26957 16.2085 5.77285 16.2595 5.33549 16.1228C5.40717 15.588 5.66477 15.0902 5.84845 14.584C6.21357 13.5782 6.63861 12.5971 7.00933 11.588C7.19133 11.0924 7.32797 10.5592 7.63037 10.1297C9.60101 10.0144 11.771 10.2154 13.6767 10.076C13.9225 9.81668 14.0149 9.43476 14.1353 9.10436C14.5033 8.093 14.944 7.06148 15.2419 5.9734C14.7245 5.82724 14.0984 5.8922 13.4605 5.8922C10.3844 5.89276 7.32013 5.8922 4.25581 5.8922C3.04789 5.8922 1.85061 5.92692 0.719971 5.81156C0.736771 5.28628 1.01173 4.82596 1.20605 4.32588C1.65909 3.15996 2.11157 1.9722 2.60941 0.708838C2.73597 0.387398 2.75781 0.0945181 3.06805 0.0340381C3.51325 -0.0527619 4.12869 0.0609181 4.71445 0.0609181C8.49613 0.0614781 12.1171 0.0603581 15.9973 0.0609181C17.0317 0.0609181 18.0878 0.0721181 19.1289 0.0340381C20.1856 -0.0046019 21.2373 0.108518 22.2873 0.0609181C24.1493 -0.0230819 26.0465 -0.0174819 27.9018 0.0609181C28.146 0.0709981 28.4165 -0.00236189 28.6309 0.142118Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_4531_1086">
                <rect
                  width="42.9845"
                  height="28.1226"
                  fill="white"
                  transform="translate(0.719971)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        {isOpen &&
          <div className="flex flex-col items-start gap-1">
            <h1 className="font-extrabold text-2xl capitalize sm:text-3xl text-blue-900 leading-6 sm:leading-7">
              pro
              <span className="uppercase">
                Fit
              </span>
            </h1>
            <span className="text-xs text-gray-500 font-normal p-0 m-0">
              {userRole} panel
            </span>
          </div>
        }
      </div>
    </div>
  );
}

export default Logo;

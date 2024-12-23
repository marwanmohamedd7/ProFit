function AppleIcon({ fill }) {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7.5991C10.5637 7.5991 9.89343 6.47974 8.05631 7.03939C5.15363 8.15878 3.57366 11.3601 4.10035 14.3152C4.62699 16.9569 5.86853 19.4998 7.78685 21.0314C9.10727 22.0857 10.2213 21.0314 12 21.0314C13.7787 21.0314 14.8927 22.0857 16.2132 21.0314C18.1315 19.4998 19.373 16.9569 19.8997 14.3152C20.4263 11.3601 18.8464 8.15878 15.9437 7.03939C14.1066 6.47973 13.4363 7.5991 12 7.5991ZM12 7.5991C11.8643 5.70564 12 5 11 3"
                fill={fill && "currentColor"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export default AppleIcon


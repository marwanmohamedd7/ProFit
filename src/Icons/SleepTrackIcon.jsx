import React from 'react';

function SleepTrackIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Changed mask ID to make it unique */}
            <mask id="mask0_sleeptrack" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                <path d="M8.433 3.73486C8.14526 4.62829 7.99915 5.56125 8 6.49986C8 11.4704 12.0295 15.4999 17 15.4999C18.2268 15.5014 19.4408 15.2512 20.567 14.7649C19.4005 18.3834 16.006 20.9999 12 20.9999C7.0295 20.9999 3 16.9704 3 11.9999C3 8.29636 5.2365 5.11586 8.433 3.73486Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M15.83 5H20.5L15.5 9H20.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </mask>
            {/* Updated mask reference to the new unique ID */}
            <g mask="url(#mask0_sleeptrack)">
                <path d="M0 0H24V24H0V0Z" fill="#1C64F2" />
            </g>
        </svg>
    );
}

export default SleepTrackIcon;

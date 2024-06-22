import React from 'react';

function SleepIcon() {
    return (
        <svg width="136" height="142" viewBox="0 0 136 142" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Changed filter ID to make it unique */}
            <g filter="url(#filter0_sleep)">
                <circle cx="64" cy="67" r="43" fill="url(#paint0_linear_sleep)" />
            </g>
            <circle cx="64.0009" cy="67" r="32.3388" fill="#F3F6FB" />
            {/* Changed filter ID to make it unique */}
            <g filter="url(#filter1_sleep)">
                <circle cx="64.0006" cy="67.0001" r="12.0826" fill="#F3F6FB" />
            </g>
            <circle cx="63.9997" cy="67.0002" r="39.4587" stroke="white" strokeWidth="5" strokeMiterlimit="1" strokeDasharray="2 20" />
            <line x1="100.588" y1="66.377" x2="103.605" y2="66.377" stroke="#C8D6ED" strokeWidth="2" />
            <line x1="63.377" y1="30.0352" x2="63.377" y2="27.0176" stroke="#C8D6ED" strokeWidth="2" />
            <line x1="27.0352" y1="67.623" x2="24.0176" y2="67.623" stroke="#C8D6ED" strokeWidth="2" />
            <line x1="63.377" y1="106.605" x2="63.377" y2="103.588" stroke="#C8D6ED" strokeWidth="2" />
            {/* Changed mask ID to make it unique */}
            <mask id="mask0_sleep" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="54" y="58" width="19" height="19">
                <path d="M60.7302 59.6738C60.4665 60.4928 60.3326 61.348 60.3333 62.2084C60.3333 66.7647 64.027 70.4584 68.5833 70.4584C69.7079 70.4598 70.8207 70.2305 71.8531 69.7847C70.7838 73.1016 67.6722 75.5001 64 75.5001C59.4437 75.5001 55.75 71.8064 55.75 67.2501C55.75 63.8552 57.8001 60.9397 60.7302 59.6738Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M67.5115 60.8335H71.7923L67.209 64.5002H71.7923" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </mask>
            {/* Updated mask reference to the new unique ID */}
            <g mask="url(#mask0_sleep)">
                <path d="M53 56.25H75V78.25H53V56.25Z" fill="#A4CAFE" />
            </g>
            <defs>
                {/* Updated filter ID to make it unique */}
                <filter id="filter0_sleep" x="0" y="0" width="142" height="142" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="7" dy="4" />
                    <feGaussianBlur stdDeviation="14" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.816406 0 0 0 0 0.858789 0 0 0 0 0.9375 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                {/* Updated filter ID to make it unique */}
                <filter id="filter1_sleep" x="27.918" y="30.9175" width="72.166" height="72.1655" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="12" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.870486 0 0 0 0 0.895585 0 0 0 0 0.958333 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                {/* Updated linearGradient ID to make it unique */}
                <linearGradient id="paint0_linear_sleep" x1="98.1157" y1="86.5455" x2="36.8141" y2="34.6612" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E6EDFA" />
                    <stop offset="1" stopColor="#E6EDFA" stopOpacity="0.33" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SleepIcon;

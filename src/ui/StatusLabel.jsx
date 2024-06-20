import { useDarkMode } from "../context/DarkModeProvider";

function StatusLabel({ status, customStyle = "", labelName = "" }) {
    let statusStyle;
    const { isDarkMode } = useDarkMode();
    if (status?.toLowerCase() === "incomplete") statusStyle = isDarkMode ? `text-blue-500 bg-blue-900 bg-opacity-50` : `text-blue-500 bg-blue-100`;
    if (status?.toLowerCase() === "subscriber") statusStyle = isDarkMode ? `text-teal-500 bg-teal-900 bg-opacity-50` : `text-teal-500 bg-teal-100`;
    if (status?.toLowerCase() === "non-subscriber") statusStyle = isDarkMode ? `text-fuchsia-500 bg-fuchsia-900 bg-opacity-50` : `text-fuchsia-500 bg-fuchsia-100`;
    if (status?.toLowerCase() === "expired") statusStyle = isDarkMode ? `text-indigo-500 bg-indigo-900 bg-opacity-50` : `text-indigo-500 bg-indigo-100`;
    if (status?.toLowerCase() === "pending") statusStyle = isDarkMode ? `text-yellow-500 bg-yellow-900 bg-opacity-50` : `text-orange-500 bg-orange-100`;
    if (status?.toLowerCase() === "cancelled" || status?.toLowerCase() === "rejected") statusStyle = isDarkMode ? `text-red-500 bg-red-900 bg-opacity-50` : `text-red-500 bg-red-100`;
    if (status?.toLowerCase() === "active" || status?.toLowerCase() === "accepted" || labelName) statusStyle = isDarkMode ? `text-green-500 bg-green-900 bg-opacity-50` : `text-green-500 bg-green-100`;
    return <span className={`px-2 py-0.5 rounded-md text-xs capitalize whitespace-nowrap ${customStyle} ${statusStyle}`}>{status?.replaceAll("-", " ") || labelName?.replaceAll("-", " ")}</span>
}

export default StatusLabel

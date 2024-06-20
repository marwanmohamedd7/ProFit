import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function SortTableColumnsHeader({ sortingKey, columnName = "", sortConfig, setSortConfig }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const styleOn = isDarkMode ? colors.text_white : colors.text_black;
    const styleOff = isDarkMode ? colors.text_gray_500 : colors.text_gray_400;

    const areKeysEqual = (key1, key2) => JSON.stringify(key1) === JSON.stringify(key2);

    const getArrowStyle = (direction) => {
        if (!sortConfig.key) return styleOff;
        return (areKeysEqual(sortConfig.key, sortingKey) && sortConfig.direction === direction) ? styleOn : styleOff;
    };

    const handleSort = (key) => {
        let direction;
        if (!sortConfig.key || !areKeysEqual(sortConfig.key, key)) {
            direction = 'ascending';
        } else if (sortConfig.direction === 'ascending') {
            direction = 'descending';
        } else {
            key = null;
            direction = 'default';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSort(sortingKey);
            }}
            className="flex items-center justify-between cursor-pointer gap-4"
        >
            <span>{columnName}</span>
            <div className="flex flex-col items-center">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSort(sortingKey);
                    }}
                    className={`text-lg mb-[-3.5px] ${getArrowStyle('ascending')}`}
                >
                    <RiArrowDropUpLine />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSort(sortingKey);
                    }}
                    className={`text-lg mt-[-3.5px] ${getArrowStyle('descending')}`}
                >
                    <RiArrowDropDownLine />
                </button>
            </div>
        </div>
    );
}

export default SortTableColumnsHeader;

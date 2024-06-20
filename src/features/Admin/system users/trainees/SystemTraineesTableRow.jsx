import { MdOutlineBlock } from "react-icons/md";
import Table from "../../../../ui/Table";
import ImageViewer from "../../../../ui/ImageViewer";
import StatusLabel from "../../../../ui/StatusLabel";
import { formatDate, formatTime } from "../../../../utils/helpers";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";
import Button from "../../../../ui/Button";
// import { IoCheckmarkOutline, IoEyeOutline } from "react-icons/io5"

function SystemTraineesTableRow({ trainee }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { firstName, lastName, email, phoneNumber, profilePhoto, Registration_Date, status, assignedTrainer, package: packageDetails } = trainee ?? {};
    return (
        <Table.Row>
            <td className="px-4 py-2 whitespace-nowrap mx-auto">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-14 w-14">
                        <ImageViewer imageURL={profilePhoto || ""}>
                            <img className="h-14 w-14 rounded-md" src={profilePhoto} alt={firstName} />
                        </ImageViewer>
                    </div>
                    <div className="flex flex-col justify-center gap-1 bg-">
                        <p className="flex items-center gap-1 capitalize">
                            <span className="text-sm font-bold">{firstName}</span>
                            <span className="text-sm font-bold">{lastName}</span>
                        </p>
                        <div className={`text-xs flex flex-col  ${isDarkMode ? colors.text_gray_100 : colors.text_gray_700}`}>
                            <span>{email}</span>
                            <span>{phoneNumber}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="p-4 whitespace-nowrap font-bold">
                <p className="flex items-center gap-1 capitalize">
                    <span className="text-sm font-bold">{assignedTrainer?.firstName}</span>
                    <span className="text-sm font-bold">{assignedTrainer?.lastName}</span>
                </p></td>
            <td className="p-4 whitespace-nowrap">{packageDetails?.packageName}</td>
            {/* <td className="p-4 whitespace-nowrap">{trainee.startAt}</td>
            <td className="p-4 whitespace-nowrap">{trainee.endAt}</td> */}
            <td className="p-4 whitespace-nowrap capitalize"><StatusLabel status={status} /></td>
            <td className="p-4 whitespace-nowrap">
                <p className="flex flex-col justify-center gap-0.5">
                    <strong>{formatDate(Registration_Date)}</strong>
                    <span>{formatTime(Registration_Date)}</span>
                </p>
            </td>
            <td className="p-4 whitespace-nowrap text-right text-sm font-medium">
                <div className='flex items-center justify-start gap-2'>
                    {/* <span
                        href="#"
                        className="text-blue-600 p-2 hover:text-blue-900 bg-blue-100 rounded-md"
                    >
                        <IoEyeOutline />

                    </span> */}

                    {/* <span
                        href="#"
                        className="text-green-600 p-2 hover:text-green-900 bg-green-100 rounded-md"
                    >
                        <IoCheckmarkOutline />

                    </span> */}

                    <Button type="icon-delete"
                    >
                        <MdOutlineBlock />
                    </Button>
                </div>
            </td>
        </Table.Row>
    )
}

export default SystemTraineesTableRow

import AppleIcon from "../../../Icons/AppleIcon"
import CoinIcon from "../../../Icons/CoinIcon"
import DumbbellIcon from "../../../Icons/DumbbellIcon"
import StarIcon from "../../../Icons/StarIcon"
import { formatCurrency } from "../../../utils/helpers"
import Stat from "./Stat"

function Stats() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <Stat icon={<CoinIcon />} color="bg-blue-100 text-blue-600" title="Total Earnings" value={`${formatCurrency(2900)}`}  />
            <Stat icon={<DumbbellIcon />} color="bg-red-100 text-red-600" title="Total Workout Plans" value="15" />
            <Stat icon={<AppleIcon fill={true} />} color="bg-green-100 text-green-600" title="Total Diet Plans" value="35" />
            <Stat icon={<StarIcon />} color="bg-amber-100" title="Profile Rating" value="4.3" />
        </div>
    )
}

export default Stats

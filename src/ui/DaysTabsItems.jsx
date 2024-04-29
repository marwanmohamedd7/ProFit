import DaysTabs from "./DaysTabs";
import { useDietProvider } from "../context/DietProvider";

function DaysTabsItems({ children }) {
    // const [days, setDays] = useState(1)
    const { days } = useDietProvider()
    return (
        <DaysTabs>
            <DaysTabs.Tabs>
                {days.map(day =>
                    <DaysTabs.Open key={day.day} opens={`day-${day.day}`}>
                        day {day.day}
                    </DaysTabs.Open>
                )}
            </DaysTabs.Tabs>
            {days.map(day =>
                <DaysTabs.Window key={day.day} opens={`day-${day.day}`}>
                    {children}
                </DaysTabs.Window>
            )}
        </DaysTabs>
    )
}

export default DaysTabsItems

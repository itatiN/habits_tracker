import { View, Text } from "react-native";
import { Header } from "../components/Header";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateRangeDatesFromYearStart();

export function Home() {
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <Header />

            <View className="flex-row mt-6 mb-2">
                {weekDays.map((weekDays, i) => (
                    <Text
                        key={`${weekDays}-${i}`}
                        className="text-zinc-400 text-xl font-bold text-center mx-1"
                        style={{ width: DAY_SIZE }}
                    >
                        {weekDays}
                    </Text>
                ))}
            </View>

            <View className="flex-row flex-wrap">
                {datesFromYearStart.map(date => (
                    <HabitDay key={date.toISOString()} />
                ))}
            </View>

        </View>
    )
}
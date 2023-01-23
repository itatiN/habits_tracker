import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'


export function HabitEmpty() {
    const { navigate } = useNavigation()
    return (
        <Text
            className='text-violet-400 text-base underline active:text-violet-500 mt-19 text-center'
            onPress={() => navigate('new')}>
            Que tal criar um novo hábito?
        </Text>

    )
}
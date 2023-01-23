import { View, TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { Feather } from "@expo/vector-icons"
import Animated, { RotateInUpLeft, ZoomOut } from "react-native-reanimated";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
    checked?: boolean;
    title: string;
}

export function CheckBox({ checked = false, title, ...rest }: Props) {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.7}
                className="flex-row mb-2 item-center"
                {...rest}
            >
                {
                    checked ?
                        <Animated.View
                            className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
                            entering={RotateInUpLeft}
                            exiting={ZoomOut}
                        >
                            <Feather
                                name="check"
                                size={20}
                                color={colors.white}
                            />
                        </Animated.View>
                        :
                        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
                }

                <Text className="text-white text-base ml-3">
                    {title}
                </Text>

            </TouchableOpacity>
        </View>
    )
}
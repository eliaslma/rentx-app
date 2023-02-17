import { NativeStackNavigationProp} from "@react-navigation/native-stack";

export type propsNavigatorStack = {
    Profile: undefined;
    EditProfile: undefined;
    SignOut: undefined;
    ChangesCompleted: undefined
}

export type propsNavigationStack = NativeStackNavigationProp<propsNavigatorStack>
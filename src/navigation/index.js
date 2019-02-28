import { createStackNavigator, createAppContainer } from "react-navigation";

import { Comments, Main, NewItem } from "../screens";

const AppNavigator = createStackNavigator(
    {
        Comments,
        Main,
        NewItem,
    },
    {
        initialRouteName: "Main"
    }
);
export default createAppContainer(AppNavigator);
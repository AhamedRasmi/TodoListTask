import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ToDo from '../../screens/ToDo';
import Done from '../../screens/Done';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={

                ({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (route.name === 'To-Do') {
                            iconName = 'clipboard-list';
                            size = focused ? 25 : 20;
                            color = focused ? '#045e87' : 'grey'
                        } else if (route.name === 'Done') {
                            iconName = 'clipboard-check';
                            size = focused ? 25 : 20;
                            color = focused ? '#045e87' : 'grey'
                        }
                        return (
                            <FontAwesome5
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    }
                })
            }
        >
            <Tab.Screen name={'To-Do'} component={ToDo} />
            <Tab.Screen name={'Done'} component={Done} />
        </Tab.Navigator>
    );
}

export default BottomTabs;
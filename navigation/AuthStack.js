import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './Tabs/BottomTabs';
import Task from '../screens/Task';

const RootStack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <RootStack.Navigator
            initialRouteName="To do List"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#045e87'
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontSize: 25,
                    fontWeight: 'bold'
                }
            }}
        >
            <RootStack.Screen
                name="My Tasks"
                component={BottomTabs}
            />
            <RootStack.Screen
                name="Task"
                component={Task}
            />
        </RootStack.Navigator>
    )
}

export default AuthStack;
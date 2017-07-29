import React from 'react';
import { StackNavigator } from 'react-navigation';
import ExampleRoutes from './routes/Routes';

export const createRootNavigator = () => {
  return StackNavigator(
    {
       ...ExampleRoutes
    },
    {
        mode: "modal",
        initialRouteName: "Home" ,
    }
  );
};


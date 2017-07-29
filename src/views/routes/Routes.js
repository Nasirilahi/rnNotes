/*
* import all screens here for adding it in to route.
*/
import HomeScreen from '../views/Home';
import NewNote from '../views/NewNote';
import ViewNote from '../views/ViewNote';

const ExampleRoutes = {
     Home:{
        name: 'Home',
        description: 'Home Screen',
        screen: HomeScreen,
    },
     NewNote:{
        name: 'NewNote',
        description: 'New Note Screen',
        screen: NewNote,
    },
    ViewNote:{
        name: 'ViewNote',
        description: 'View Note Screen',
        screen: ViewNote,
    },
};

export default ExampleRoutes;
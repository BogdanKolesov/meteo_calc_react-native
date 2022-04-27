import Home from '../components/views/Home'
import NotExist from '../components/views/NotExist'


export const navigationStackData = [
    {
        name: 'Home',
        component: Home,
        options: { headerShown: false }
    },
    //Данные из вкладки "Грозы"
    {
        name: 'Ki',
        component: NotExist,
        options: { headerShown: false }
    },

]

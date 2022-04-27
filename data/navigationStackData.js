import Home from '../components/views/Home'
import NotExist from '../components/views/NotExist'
import Baily from '../components/views/Thunder/Thunder.content/Baily'


export const navigationStackData = [
    {
        name: 'Home',
        component: Home,
        options: { headerShown: false }
    },
    //Данные из вкладки "Грозы"
    {
        name: 'ThunderBaily',
        component: Baily,
        options: { headerShown: false }
    },

]

import Home from '../components/views/Home'
import NotExist from '../components/views/NotExist'
import Fateev from '../components/views/Thunder/Thunder.content/Fateev'
import Baily from '../components/views/Thunder/Thunder.content/Baily'
import Waiting from '../components/views/Thunder/Thunder.content/Waiting'


export const navigationStackData = [
    {
        name: 'Home',
        component: Home,
        options: { headerShown: false }
    },
    {
        name: 'NotExist',
        component: NotExist,
        options: { headerShown: false }
    },
    //Данные из вкладки "Грозы"
    {
        name: 'ThunderBaily',
        component: Baily,
        options: { headerShown: false }
    },
    {
        name: 'ThunderFateev',
        component: Fateev,
        options: { headerShown: false }
    },
    {
        name: 'ThunderWaiting',
        component: Waiting,
        options: { headerShown: false }
    },


]

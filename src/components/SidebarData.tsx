import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHistory,
    AiOutlineHome,
    AiFillCaretRight,
    AiOutlineMoneyCollect,
    AiOutlineUser
} 
from 'react-icons/ai';
import {
    RiShoppingBasket2Line,
}
from 'react-icons/ri'
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Vendas',
        path: '/overview',
        icon: <RiShoppingBasket2Line/>,
        iconClosed: <AiFillCaretRight />,
        iconOpened: <AiFillCaretDown />,
        subnav: [
            {
                title: 'Pedidos de Vendas',
                path: '/overview/users',
                icon: ''
            },
            {
                title: 'Delivery',
                path: '/overview/revenue',
                icon: ''
            },
            {
                title: 'Expedição',
                path: '/overview/revenue',
                icon: ''
            }
        ]
    },
    {
        title: 'Suprimentos',
        path: '/order',
        icon: <RiShoppingBasket2Line />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [

        ]
    },
    {
        title: 'Cadastros',
        path: '/order',
        icon: ''
    },
    {
        title: 'Crediário',
        path: '/history',
        icon: <AiOutlineHistory />
    },
    {
        title: 'Configurações',
        path: '/configurations',
        icon: <FaCog />
    }
];

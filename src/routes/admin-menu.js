import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';

import Dashboard from '../pages/dashboard';
import HomePage from '../pages/home';
import AccountPage from '../pages/account';
import ChatAppPage from '../pages/chat-app';
import { LoginPage } from '../pages/auth/login';

/**
 * Admin Menu On Sidebar
 */
export const adminMenu = [
    {
        title: "Home Page",
        url: "/",
        icon: <DashboardIcon />,
        page: <HomePage />
    },
    {
        title: "Grade Board",
        url: "/grade-board",
        icon: <AssignmentIcon />,
        page: <Dashboard />
    },
    {
        title: "Account",
        url: "/account",
        icon: <PersonIcon />,
        page:<AccountPage/>
    },
    {
        title: "Chat",
        url: "/chat",
        icon: <ChatIcon />,
        page:<ChatAppPage/>
    },
    {
        title: "Log Out",
        icon: <LogoutIcon />,
        page:<LoginPage/>
    }
]
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';

import Dashboard from '../pages/dashboard';
import Overview from '../pages';
import AccountPage from '../pages/account';
import ChatAppPage from '../pages/chat-app';
import { LoginPage } from '../pages/auth/login';

/**
 * Admin Menu On Sidebar
 */
export const adminMenu = [
    {
        title: "Overview",
        url: "/",
        icon: <DashboardIcon />,
        page: <Overview />
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
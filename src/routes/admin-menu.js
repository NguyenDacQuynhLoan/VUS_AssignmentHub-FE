import Home from '../pages/Home';
import Assignment from '../pages/Assignment';

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Setting } from '../pages/Setting';

/**
 * Admin Menu On Sidebar
 */
export const adminMenu = [
    {
        title: "Home",
        url: "/",
        icon: <HomeIcon />,
        page: <Home />
    },
    {
        title: "Assignment Board",
        url: "/assignments",
        icon: <AssignmentIcon />,
        page: <Assignment />
    },
    {
        title: "Setting",
        url: "/setting",
        icon: <SettingsIcon />,
        page:<Setting/>
    }
]
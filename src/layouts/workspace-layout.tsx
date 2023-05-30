import { styled} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useEffect, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from 'js-cookie';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { Routes } from 'src/routes';
import InventoryIcon from '@mui/icons-material/Inventory';
import BusinessIcon from '@mui/icons-material/Business';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const drawerWidth = 240;

const routes = [
  { path: Routes.PRODUCTS, name: 'Продукты', icon: InventoryIcon },
  { path: Routes.CONTRAGENTS, name: 'Контрагенты', icon: BusinessIcon },
  { path: Routes.PROVIDERS, name: 'Поставщики', icon: LocalShippingIcon },
];

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

function clear_all_cookies() {
  document.cookie.split(";").forEach(function (cookie) { 
    document.cookie = ""; 
});
  window.location.reload()
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

interface Props {
  children: React.ReactNode;
  title: string;
}

export const WorkspaceLayout: React.FC<Props> = ({ children, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  const handleLogout = () => {
    clear_all_cookies()
    Cookies.remove('access-token');
    navigate(Routes.SIGN_IN)
  };
  console.log('rerender');

  useEffect(() =>{
    document.title = title
  },[title])
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={isOpen}>
        <Toolbar
          sx={{
            pr: '24px',
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(isOpen && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <Badge color="secondary">
              <LogoutIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={isOpen}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {routes.map((route) => (
            <Link
              style={{ textDecoration: 'none', color: 'inherit' }}
              to={route.path}
            >
              <ListItemButton selected={location.pathname === route.path}>
                <ListItemIcon>{<route.icon />}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </Link>
          ))}

          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

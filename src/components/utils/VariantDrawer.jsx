import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Tooltip from '@mui/material/Tooltip';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

import WysiwygRoundedIcon from '@mui/icons-material/WysiwygRounded';
import { HomeRepairServiceOutlined } from '@mui/icons-material';

const drawerWidth = 240;
const arrayLinks = [
	{ title: "Home", path: "/feed", icon: <GridViewRoundedIcon color="secondary" /> },
	{ title: "All Topics", path: "/all-topics", icon: <WysiwygRoundedIcon color="secondary" /> },
	{ title: "Playground", path: "/playground", icon: <SportsEsportsIcon color="secondary" /> },
	{ title: "Home Board", path: "/homeboard", icon: <HomeRepairServiceOutlined color="secondary" /> }
];

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	minHeight: '50vh',
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexShrink: 0,
		borderRadius: "16px",
		border: "2px solid #312E2D",
		background: "#171312",
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);

export default function MiniDrawer() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />

			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					{open
						? <Typography variant="h6" component="div" onClick={handleDrawerClose} sx={{
							color: "#FFF",
							fontFamily: "Poppins",
							fontSize: "1vw",
							fontStyle: "normal",
							fontWeight: 700,
							lineHeight: "normal",
							opacity: open ? 1 : 0,
							cursor: "pointer",
						}}>FICTION ROLEPLAY</Typography>
						: ""
					}


					{open
						? <IconButton onClick={handleDrawerClose}><ChevronLeftIcon /></IconButton>
						: <IconButton onClick={handleDrawerOpen}> <ChevronRightIcon /></IconButton>
					}

				</DrawerHeader>
				<Divider />

				<List>

					{

						arrayLinks.map((item) => (
							<ListItem disablePadding sx={{ display: 'block' }} key={item.title + item.length}>
								<Tooltip title={item.title} placement="right" arrow>
									<ListItemButton
										sx={{
											minHeight: 48,
											justifyContent: open ? 'initial' : 'center',
											px: 2.5,
										}}
										to={item.path}
										component={Link}>
										<ListItemIcon
											sx={{
												minWidth: 0,
												mr: open ? 3 : 'auto',
												justifyContent: 'center',
											}}
										>{item.icon}</ListItemIcon><ListItemText primary={item.title} sx={{
											opacity: open ? 1 : 0,
											color: "#FFF",
											fontFamily: "Quicksand !important",
											fontSize: "14px",
											fontStyle: "normal",
											fontWeight: 200,
											lineHeight: "normal",
										}} />
									</ListItemButton>
								</Tooltip>

							</ListItem>
						))
					}
				</List>



				<Divider />
				{/* <List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem key={text} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					))}
				</List> */}
			</Drawer>

		</Box >
	);
}

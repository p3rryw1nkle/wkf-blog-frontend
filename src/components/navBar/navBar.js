import * as React from 'react';
import "./navBar.css"
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMatchMedia from '../../tools/matchMedia';
import { makeStyles } from '@mui/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

const useStyles = makeStyles({
    paper: {
        background: "black",
        width: "400px"
    }
})

export default function NavBar(props) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const resize = useMatchMedia(620);
    const classes = useStyles();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
   
    return (
        <>
            <Grid container item sx={{ display: 'flex' }} xs={12}>
                <nav className={resize ? "navB" : "nav"}>
                    <div className="siteTitle">
                        <a href="/" className="siteTitle">
                            {resize ? "The Wizard, The King, & The Fool" : "WKF"}
                        </a>
                    </div>
                    <div className="links">
                        <ul>
                            <li>
                                <a href="/Home" className="title">Home</a>
                            </li>
                            <li>
                                <a href="/Lore" className="title">Lore</a>
                            </li>
                            <li>
                                <a href="/Blog" className="title">Blog</a>
                            </li>
                            <li>
                                <a href="/Synopsis" className="title">Book Synopsis</a>
                            </li>
                        </ul>
                    </div>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: 'none' })}}>
                        <MenuIcon />
                    </IconButton>
                </nav>

                {/* side drawer */}

                <Drawer
                    variant="persistent"
                    anchor='right'
                    open={open}
                    // className="drawer"
                    className={{ paper: classes.paper }}>
                    <DrawerHeader className={resize ? "drawerHeaderB" : "drawerHeader"}>
                        <IconButton onClick={handleDrawerClose} sx={{color: 'white'}}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <div className="linkContainer">
                            <a href="Synopsis" className="drawerLink">
                                Book Synopsis
                            </a>
                        </div>    
                        <div className="linkContainer">
                            <a href="VocalGuide" className="drawerLink">
                                Vocal Guide
                            </a>
                        </div>                 
                        <div className="linkContainer">
                            <a href="PerformanceGuide" className="drawerLink">
                                Performance Guide
                            </a>
                        </div>  
                    </List>
                </Drawer>
            </Grid>
        </>
    )
}
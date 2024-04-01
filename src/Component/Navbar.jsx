import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { CiMenuBurger as MenuIcon } from "react-icons/ci";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <div>
            {/* <AppBar position="static" sx={{ width: "100%" }}>
                <Toolbar>
                    <Box sx={{ md: { display: "none" } }}> <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}

                    >
                        <MenuIcon />
                    </IconButton></Box>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Ai Models
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Ai Models</Button>
                    <Button color="inherit">Upload Models</Button>
                    <Button color="inherit">Try Ai Models</Button>
                    <Button color="inherit">Sign In</Button>
                    <Button color="inherit">Sign Up</Button>
                </Toolbar>
            </AppBar> */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <div
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Ai Models" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Upload Models" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Try Ai Models" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="Sign In" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Sign Up" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

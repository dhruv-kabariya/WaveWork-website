// import { Button } from "@mui/material";
import Image from "next/image";
import styles from "../styles/navbar.module.css"
import Link from "next/link";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Icon } from "@mui/material";

const pages = ['Step-1', 'Step-2', 'Step-3'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (

        <AppBar position="fixed" color="inherit">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{width: '100%'}}>
                    <Box component={"img"} src="logo-icon.png" width={50} height={50} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}></Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/#"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        REPAIR-MAN
                    </Typography>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link style={{textDecoration: "none"}} key={page} href={`#${page}`}><MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem></Link>
                            ))}
                        </Menu>
                    </Box> */}
                    <Box component={"img"} src="logo-icon.png" width={30} height={30} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}></Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 400,
                            letterSpacing: {xs: '.1rem', md: ".3rem"},
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        REPAIR-MAN
                    </Typography>
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link style={{textDecoration: "none"}} key={page} href={`#${page}`}> <Button
                                
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page}
                            </Button></Link>
                        ))}
                    </Box> */}

                    <Box sx={{ flexGrow: 1 }}>
                        <Button sx={{alignSelf: "flex-end", float: "right", backgroundColor: "#f61524", color: "white"}} onMouseLeave={(e) => e.target.style.backgroundColor = "#f61524"} onMouseEnter={(e) => e.target.style.backgroundColor = "#d00815"} variant="contained">Get App</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
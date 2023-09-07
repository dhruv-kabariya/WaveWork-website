import styles from "../styles/navbar.module.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from "next/link";

const pages = ['Step-1', 'Step-2', 'Step-3'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {

    return (

        <AppBar position="fixed" className="py-lg-2 py-md-1 py-0" color="inherit">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ width: '100%' }}>
                    <Link href={"/#"} style={{ textDecoration: "none" }}><Box component={"div"} sx={{ display: "flex" }}>
                        <Box component={"img"} src="logo-icon.png" alt="WaveWork logo" height={60} sx={{ display: { xs: 'none', md: 'flex' } }}></Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="span"
                            sx={{
                                mr: 2,
                                mt: 3.8,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 900,
                                fontSize: { xs: "1.4rem" },
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                backgroundImage: 'linear-gradient(to right, #f3a22d, #e67d2c, #eb642a, #ff9800)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            ave-Work
                        </Typography>
                    </Box></Link>


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
                    <Link href={"/#"} style={{ textDecoration: "none" }}><Box component={"div"} sx={{ display: "flex" }}>
                        <Box component={"img"} alt="WaveWork logo " src="logo-icon.png" height={35} sx={{ display: { xs: 'flex', md: 'none' } }}></Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="span"
                            sx={{
                                mr: 1,
                                mt: 2,
                                display: { xs: 'flex', md: 'none' },
                                fontFamily: 'monospace',
                                fontWeight: 900,
                                fontSize: { xs: "1rem" },
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                backgroundImage: 'linear-gradient(to right, #f3a22d, #e67d2c, #eb642a, #ff9800)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            ave-Work
                        </Typography>
                    </Box></Link>
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
                        <Link target="_blank" href={"https://play.google.com/store/apps/details?id=com.acutelabs.repair_man"}><Button sx={{ alignSelf: "flex-end", float: "right", backgroundColor: "#f61524", color: "white" }} className={`${styles['nav-button']}`} onMouseLeave={(e) => e.target.style.backgroundColor = "#f61524"} onMouseEnter={(e) => e.target.style.backgroundColor = "#d00815"} variant="contained">Get App</Button></Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
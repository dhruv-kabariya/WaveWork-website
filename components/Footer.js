import { Box, Typography } from "@mui/material";
import MobileStoreButton from 'react-mobile-store-button';
import AppStoreSVG from "../public/appstore.svg"
import PlayStoreSVG from "../public/playstore.svg"
import Image from "next/image";
import { FacebookSharp, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
    return (
        <Box component={'div'} sx={{background: "black", color: "white",  flexDirection: {xs: 'column', md: 'row'}, columnGap: "1rem", rowGap: '1rem', justifyContent: "space-evenly", alignItems: {xs: "center", md: "flex-start"}}} className="d-flex py-5">
            <Box component={'div'} sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", rowGap: "1rem" }}>
                <Typography 
                    variant={"h5"}
                    component={'body1'}
                >Customer App</Typography>
                <Image src={PlayStoreSVG} alt="customer palystore-app link" width={150} />
                <Image src={AppStoreSVG} alt="customer app-store link" width={150} />
            </Box>
            <Box component={'div'} sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", rowGap: "1rem" }}>
                <Typography 
                    variant="h5"
                    component={'body1'}
                >Captain App</Typography>
                <Image src={PlayStoreSVG} alt="customer palystore-app link" width={150} />
            </Box>
            <Box component={'div'} sx={{display:"flex", flexDirection: {xs: "row", md: "column"}, rowGap: "0.8rem", columnGap: "0.8rem"}}>
                <Typography component={'p'} variant="body3">Home</Typography>
                <Typography component={'p'} variant="body3">About Us</Typography>
                <Link href={"/privacy-policy"} style={{textDecoration: "none", color: "white"}}><Typography component={'p'} variant="body3">Privacy Policy</Typography></Link>
            </Box>
            <Box component={'div'} sx={{display:"flex", flexDirection: {xs: "row", md: "column"}, rowGap: "0.8rem", columnGap: "0.8rem"}}>
                <Link href={"/customer-terms"} style={{textDecoration: "none", color: "white"}}><Typography component={'p'} variant="body3">Customer Terms</Typography></Link>
                <Link href={"/partner-terms"} style={{textDecoration: "none", color: "white"}}><Typography component={'p'} variant="body3">Partner Terms</Typography></Link>
            </Box>
            <Box component={'div'} sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", rowGap: "1rem" }}>
                <Typography 
                    variant="h5"
                    component={'body1'}
                >Follow Us</Typography>
                <Box component={'div'} sx={{display: "flex", justifyContent: "center", alignItems: "center", columnGap: "1rem"}}>
                    <FacebookSharp />
                    <Twitter />
                    <LinkedIn />
                    <Instagram />
                </Box>
            </Box>
        </Box>
    )
}
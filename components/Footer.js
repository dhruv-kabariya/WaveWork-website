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
                <Link target="_blank" href={"https://play.google.com/store/apps/details?id=com.acutelabs.repair_man"}><Image src={PlayStoreSVG} alt="WaveWork palystore-app link" width={150} /></Link>
                {/* <Image src={AppStoreSVG} alt="WaveWork app-store link" width={150} /> */}
            </Box>
            <Box component={'div'} sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", rowGap: "1rem" }}>
                <Typography 
                    variant="h5"
                    component={'body1'}
                >Partner App</Typography>
                <Link target="_blank" href={"https://play.google.com/store/apps/details?id=com.acutelabs.repair_man_partner"}><Image src={PlayStoreSVG} alt="WaveWork partners palystore-app link" width={150} /></Link>
            </Box>
            <Box component={'div'} sx={{display:"flex", flexDirection: {xs: "row", md: "column"}, rowGap: "0.8rem", columnGap: "0.8rem"}}>
            <Link href={"/"} style={{textDecoration: "none", color: "white"}}><Typography component={'p'} variant="body3">Home</Typography></Link>
                {/* <Typography component={'p'} variant="body3">About Us</Typography> */}
                <Link target="_blank" href={"https://docs.google.com/forms/d/e/1FAIpQLSc4HCpkfaBwTbixW1CAm8m722zLM8piu93yFoFfj1T55j-GZw/viewform?usp=sf_link"} style={{textDecoration: "none", color: "white"}}><Typography component={'p'} variant="body3">Early Registration</Typography></Link>
            </Box>
            <Box component={'div'} sx={{display:"flex", flexDirection: {xs: "row", md: "column"}, rowGap: "0.8rem", columnGap: "0.8rem"}}>
            <Link href={"/privacy-policy"} style={{textDecoration: "none", color: "white"}}><Typography component={'p'} variant="body3">Privacy Policy</Typography></Link>
                <Link href={"/terms-and-conditions"} style={{textDecoration: "none", color: "white"}}><Typography component={'p'} variant="body3">Customer Terms</Typography></Link>
                <Link href={"/partner-terms-and-conditions"} style={{textDecoration: "none", color: "white"}}><Typography component={'p'} variant="body3">Partner Terms</Typography></Link>
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
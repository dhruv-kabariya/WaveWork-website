import styles from "../styles/MainSection.module.css"
import MainSectionSVG from "../public/mainSection.svg"
import Image from "next/image"
import { Box, Button, Typography } from "@mui/material"

export default function MainSection() {
    return (
        <section id="#" className={`${styles['main-section']}`}>
            <Box component={'div'} sx={{display: "flex", flexDirection: {xs: 'column', md: 'row'}, justifyContent: "center", alignItems: "center", columnGap: {xs: "0rem", md: "1rem"}}}>
                <Box component={'div'} sx={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: {xs: "75%", md: "30%"}}}>
                    <Typography variant="h2" component="h1" className={`${styles['main-section-writing']}`}>
                        India’s largest bike taxi service
                    </Typography>
                    <Typography variant="h6" component="p" className={`${styles['main-section-writing']} mt-3`}>
                        Rapido is India’s first and fastest-growing Bike taxi app with a whopping 25 Million+ app downloads. We are now running operations in more than 100 cities.
                    </Typography>
                    <Button variant="contained" size="large" className={`mx-auto mt-3 ${styles['main-section-button']}`}>Get App</Button>
                </Box>
                <Box component={'div'} sx={{maxWidth: {xs: "100%", md: "50%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Image src={MainSectionSVG} alt="hero-image" className={`${styles['main-section__image']}`}/>
                </Box>
            </Box>
        </section>
    )
}
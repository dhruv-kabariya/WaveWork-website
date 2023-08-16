import styles from "../styles/Step2.module.css"
import Image from "next/image"
import { Box, Button, Typography } from "@mui/material"

export default function Step2Function() {
    return (
        <section id="Step-2" className={`${styles['step2-section']}`}>
            <Box component={'div'} sx={{display: "flex", minHeight: "100vh", flexDirection: {xs: 'column', md: 'row'}, justifyContent: {xs: "center", md: "space-evenly"}, alignItems: "center", columnGap: {xs: "0rem", md: "2rem"}, rowGap: {xs: "1rem", md: "0rem"}}}>
                

                <Box component={'div'} className={`${styles['step2-section-writing']}`} sx={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: {xs: "75%", md: "30%"}}}>
                    <Typography variant="h2" component="h1">
                        India’s largest bike taxi service
                    </Typography>
                    <Typography variant="h6" component="p" className={`mt-3`}>
                        Rapido is India’s first and fastest-growing Bike taxi app with a whopping 25 Million+ app downloads. We are now running operations in more than 100 cities.
                    </Typography>
                    <Button variant="contained" size="large" className={`mx-auto mt-3 ${styles['step2-section-button']}`}>Get App</Button>
                </Box>
                
                <Box component={'div'} sx={{maxWidth: {xs: "100%", md: "50%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={"/step1.jpeg"} alt="step2-image" className={`${styles['step2-section__image']}`}/>
                </Box>
            </Box>
        </section>
    )
}
import styles from "../styles/Step1.module.css"
import Image from "next/image"
import { Box, Button, Typography } from "@mui/material"

export default function Step1Function() {
    return (
        <section className={`${styles['step1-section']}`}>
            <Box component={'div'} sx={{ display: "flex", minHeight: "100vh", flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: "center", md: "space-evenly" }, alignItems: "center", columnGap: { xs: "0rem", md: "2rem" }, rowGap: { xs: "5rem", md: "0rem" } }}>
                <Box component={'div'} sx={{ maxWidth: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={"/step1.png"} alt="Post Your Desired Service on WaveWork" className={`${styles['step1-section__image']}`} />
                </Box>

                <Box component={'div'} className={`${styles['step1-section-writing']}`} sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: { xs: "75%", md: "30%" } }}>
                    <Typography variant="h2" component="h1">
                    Post Your Desired Service on WaveWork
                    </Typography>
                    <Typography variant="h6" component="p" className={`mt-3`}>
                    Choose a service category from the available options and set the wheels in motion to receive bids from local service partners. It&apos;s as straightforward as that.
                    </Typography>
                </Box>

            </Box>
        </section>
    )
}
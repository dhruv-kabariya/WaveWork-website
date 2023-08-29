import styles from "../styles/Step3.module.css"
import Image from "next/image"
import { Box, Button, Typography } from "@mui/material"

export default function Step3Function() {
    return (
        <section id="Step-3" className={`${styles['step3-section']}`}>
            <Box component={'div'} sx={{ display: "flex", minHeight: "100vh", flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: "center", md: "space-evenly" }, alignItems: "center", columnGap: { xs: "0rem", md: "2rem" }, rowGap: { xs: "5rem", md: "0rem" } }}>
                <Box component={'div'} sx={{ maxWidth: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={"/step3.png"} alt="Accept Quotations and Celebrate" className={`${styles['step3-section__image']}`} />
                </Box>

                <Box component={'div'} className={`${styles['step3-section-writing']}`} sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: { xs: "75%", md: "30%" } }}>
                    <Typography variant="h2" component="h1" sx={{ alignSelf: "flex-start" }}>
                    Accept Quotations and Celebrate 🥳
                    </Typography>
                    <Typography variant="h6" component="p" className={`mt-3`}>
                    Welcome to HarmonyHome! Your ultimate destination for household solutions. With our intuitive platform, enjoy tranquility as you handpick the perfect matches for your tasks. Your serene home, our area of expertise.
                    </Typography>
                </Box>

            </Box>
        </section>
    )
} 

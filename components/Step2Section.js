import styles from "../styles/Step2.module.css"
import Image from "next/image"
import { Box, Button, Typography } from "@mui/material"

export default function Step2Function() {
    return (
        <section id="Step-2" className={`${styles['step2-section']}`}>
            <Box component={'div'} sx={{display: "flex", minHeight: "100vh", flexDirection: {xs: 'column', md: 'row'}, justifyContent: {xs: "center", md: "space-evenly"}, alignItems: "center", columnGap: {xs: "0rem", md: "2rem"}, rowGap: {xs: "5rem", md: "0rem"}}}>
                

                <Box component={'div'} className={`${styles['step2-section-writing']}`} sx={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: {xs: "75%", md: "30%"}}}>
                    <Typography variant="h2" component="h1">
                        Get Quotations for your work
                    </Typography>
                    <Typography variant="h6" component="p" className={`mt-3`}>
                    Crafting perfection is in the details. Fill in your task specifics, fuel your requirements with precision, and seal it with &apos;Get Quotation&apos;.
                    </Typography>
                </Box>
                
                <Box component={'div'} sx={{maxWidth: {xs: "100%", md: "50%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={"/step2.png"} alt="step2-image" className={`${styles['step2-section__image']}`}/>
                </Box>
            </Box>
        </section>
    )
}
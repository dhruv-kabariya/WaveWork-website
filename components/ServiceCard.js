import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Services.module.css"

export default function ServiceCard(props) {
    console.log(props.data.icon)
    return (
        <Box component={'div'} className={`py-lg-3 py-md-2 py-1 px-lg-3 px-md-2 px-1 ${styles["service-card"]}`} sx={{display: "flex", borderRadius: "15px", width: "450px", alignItems: "center", columnGap: "1.5rem", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)"}}>
            <Image src={props?.data?.icon} width={70} height={70} style={{borderRadius: "50%"}} />
            <Box component={'div'} sx={{display: "flex", flexDirection: "column"}}>
                <Typography variant="h4" component={'h4'}>{props?.data?.service?.en}</Typography>
                <Typography variant="body1" component={'p'}>{props?.data?.title?.en}</Typography>
            </Box>
        </Box>
    )

}
import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import Image from "next/image";
import PlayStoreSVG from "../public/playstore.svg";
import Link from "next/link";
import styles from "../styles/ServiceDetails.module.css";

export default function GetAppDialog(props) {
    return (
        <Dialog open={true} maxWidth={'lg'}> 
            <DialogContent>
                <Box component={'div'} className={`d-flex mt-3 justify-content-between align-items-start ${styles["dialog-main"]}`} sx={{columnGap: "3rem", flexGrow: 1}}>
                    <Box component={'div'} className={`col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-between align-items-center ${styles["dialog-column"]}`} sx={{rowGap: "2rem"}}>
                        <DialogTitle><Typography variant="h2" className={`${styles["dialog-title"]}`} component={"p"}>Get the app</Typography></DialogTitle>
                        <Typography variant="body1" className={`text-center ${styles["dialog-text"]}`} component={'p'}>Tired of searching {props?.worker}? Get Started with <b>WaveWork</b> and let service providers find you</Typography>
                        <Image src="/qrcode.png" className={`${styles["dilaog-qrcode"]}`} alt="qr to wave work Play Store link" width={250} height={250} />
                        <Link target="_blank" href={"https://play.google.com/store/apps/details?id=com.acutelabs.repair_man"}><Image src={PlayStoreSVG} alt="WaveWork palystore-app link" width={150} height={60} /></Link>
                    </Box>
                    <Image className={`mx-auto ${styles["dialog-image"]}`} src={"/home.png"} alt="wavework homescreen" width={270} height={600} />
                </Box>
            </DialogContent>
            
        </Dialog>
    )
}
import { Box, Skeleton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import styles from "../../styles/ServiceDetails.module.css";
import GetAppDialog from "@/components/GetAppDialog";
import Head from "next/head";
import { SentimentDissatisfied } from "@mui/icons-material";

function camelCaseToWords(s) {
    const result = s.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
}
const locations = [
    "ahmedabad",
    "maninagar",
    "vastrapur",
    "satellite",
    "navrangpura",
    "bodakdev",
    "prahladnagar",
    "ghatlodia",
    "thaltej",
    "naranpura",
    "chandkheda",
    "vastral",
    "sarkhej",
    "naroda",
    "sabarmati",
    "ambawadi",
    "shahibaug",
    "isanpur",
    "jodhpur",
    "paldi",
    "sola",
    "bopal",
    "southBopal",
    "iscon",
    "isconCrossRoad",
    "sindhuBhavanRoad",
    "gurukul",
    "memnagar",
    "ranip",
    "motera",
    "chandlodia",
    "nikol",
    "cgRoad",
    "nehruNagar",
    "driveInRoad",
    "navrangpura",
    "shivranjani",
    "chandkheda"
]
const skills = [
    "electrician",
    "driver",
    "gardener",
    "lock",
    "painter",
    "construction",
    "cook",
    "beautician",
    "salon",
    "hairCare",
    "massage",
    "waxing",
    "manicure",
    "pedicure",
    "facial",
    "photographer",
    "videoGraphy",
    "eventOrganiser",
    "decorator",
    "mechanic",
    "carMechanic",
    "bikeMechanic",
    "acService",
    "washingMachineService",
    "fridgeService",
    "sofaCleaner",
    "pestControl",
    "waterPurifier",
    "geyserService",
    "cleaner",
    "tableRepair",
    "chairRepair",
    "furnitureRepair",
    "tvService",
    "computerService",
    "cctvService",
    "keyLock",
    "doorLock",
    "makeupArtist",
    "mehndiArtist",
    "plumber",
    "carpenter",
    "blacksmith",
    "handyman",
    "roService",
    "microwaveService"
]

export default function ServiceDetails({params}) {
    // const router = useRouter();
    // const { id } = router.query;
    let skill = params?.split("-")[0];
    let location = params?.split("-")[1];

    
    // if(!skills.includes(skill) || !locations.includes(location)) {
    //     skill = null;
    //     location = null;
    // }

    return (
        <>

        {params ? 

        <>

        <Head>
            <title>{`Best ${camelCaseToWords(skill)} in ${camelCaseToWords(location)}`}</title>
            <meta name="description" content={`Find top ${camelCaseToWords(skill)} in ${camelCaseToWords(location)}. We offer skilled ${camelCaseToWords(skill)} services near you.`} />
            <meta name="keywords" content={`${camelCaseToWords(skill)}, ${camelCaseToWords(location)}, ${camelCaseToWords(skill)} near me, top ${camelCaseToWords(skill)}, best ${camelCaseToWords(skill)}`} />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="WaveWork" />
        </Head>
        
        <Box className={`${styles['services-details-section']}`} component={'div'}>
            <Box component={'div'} className={`mt-3 px-lg-4 px-md-3 px-1 col-lg-10 col-md-11 col-11 mx-auto`}>
                <Typography variant="h1" component={'h1'} className="text-center">Service Details</Typography>
                <Box component={'div'} className={`d-flex flex-column py-3 px-lg-3 px-md-2 px-1 mt-5 mb-4`} sx={{rowGap:"1.8rem"}}>
                    <Box component={'div'} className={`px-lg-3 px-md-2 px-1 py-2 col-xl-6 col-md-11 col-12 mx-auto ${styles["service-details-card"]}`} sx={{border: "0.5px solid lightgray", borderRadius: "15px"}}>
                        <Box component={'div'} className={`d-flex align-items-center`} sx={{columnGap: "1rem", flexDirection: {xs: "column", md: "row"}}}>
                            <Skeleton variant="circular" className={`${styles["service-details-avatar"]}`} width={120} height={120} />
                            <Box component={'div'} className={`d-flex flex-column`}>
                                <Skeleton variant="text" width={150} height={40} />
                                <Skeleton variant="text" width={100} height={30} />
                                <Skeleton variant="text" className={`${styles["service-details-description"]}`} width={550} height={130} />
                            </Box>
                        </Box>
                        
                    </Box>
                    <Box component={'div'} className={`px-lg-3 px-md-2 px-1 py-2 col-xl-6 col-md-11 col-12 mx-auto ${styles["service-details-card"]}`} sx={{border: "0.5px solid lightgray", borderRadius: "15px"}}>
                        <Box component={'div'} className={`d-flex align-items-center`} sx={{columnGap: "1rem", flexDirection: {xs: "column", md: "row"}}}>
                            <Skeleton variant="circular" className={`${styles["service-details-avatar"]}`} width={120} height={120} />
                            <Box component={'div'} className={`d-flex flex-column`}>
                                <Skeleton variant="text" width={150} height={40} />
                                <Skeleton variant="text" width={100} height={30} />
                                <Skeleton variant="text" className={`${styles["service-details-description"]}`} width={550} height={130} />
                            </Box>
                        </Box>
                        
                    </Box>
                    <Box component={'div'} className={`px-lg-3 px-md-2 px-1 py-2 col-xl-6 col-md-11 col-12 mx-auto ${styles["service-details-card"]}`} sx={{border: "0.5px solid lightgray", borderRadius: "15px"}}>
                        <Box component={'div'} className={`d-flex align-items-center`} sx={{columnGap: "1rem", flexDirection: {xs: "column", md: "row"}}}>
                            <Skeleton variant="circular" className={`${styles["service-details-avatar"]}`} width={120} height={120} />
                            <Box component={'div'} className={`d-flex flex-column`}>
                                <Skeleton variant="text" width={150} height={40} />
                                <Skeleton variant="text" width={100} height={30} />
                                <Skeleton variant="text" className={`${styles["service-details-description"]}`} width={550} height={130} />
                            </Box>
                        </Box>
                        
                    </Box>
                    <Box component={'div'} className={`px-lg-3 px-md-2 px-1 py-2 col-xl-6 col-md-11 col-12 mx-auto ${styles["service-details-card"]}`} sx={{border: "0.5px solid lightgray", borderRadius: "15px"}}>
                        <Box component={'div'} className={`d-flex align-items-center`} sx={{columnGap: "1rem", flexDirection: {xs: "column", md: "row"}}}>
                            <Skeleton variant="circular" className={`${styles["service-details-avatar"]}`} width={120} height={120} />
                            <Box component={'div'} className={`d-flex flex-column`}>
                                <Skeleton variant="text" width={150} height={40} />
                                <Skeleton variant="text" width={100} height={30} />
                                <Skeleton variant="text" className={`${styles["service-details-description"]}`} width={550} height={130} />
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
            <GetAppDialog worker={skill}  />
        </Box>
        </>

        : 

        <>
        <Head>
            <title>Get Work Done with WaveWork - Your Trusted Platforms</title>
            <meta name="description" content="Connect with nearby service providers on WaveWork. Compare bids, pick experts, and accomplish tasks efficiently. Your go-to platform for simplified day-to-day services." />
            <meta name="keywords" content="nearby service providers, compare bids, household solutions, daily tasks, WaveWork" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="WaveWork" />
        </Head>
        <Box className={`${styles['services-details-section']}`} component={'div'}>
            <Box component={'div'} className={`mt-3 px-lg-4 px-md-3 px-1 col-lg-10 col-md-11 col-11 mx-auto`}>
                <Typography variant="h1" component={'h1'} className="text-center">Service Details</Typography>
                <Box component={'div'} className={`d-flex justify-content-center align-items-center mt-5 mb-4`}>
                    <Typography variant="h5" component={'h5'} className="text-center">
                        Oops! we couldn&apos;t find the service you were looking for <SentimentDissatisfied />
                    </Typography>
                </Box>
            </Box>
        </Box>
        </>
        }
        </>
    )
}

export async function getStaticPaths() {
    let paths = [];
    skills.forEach(skill => {
        locations.forEach(location => {
            paths.push({params: {id: `${skill}-${location}`}});
        })
    })
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params}) {
    let skill = params?.id?.split("-")[0];
    let location = params?.id?.split("-")[1];
    if(!skills.includes(skill) || !locations.includes(location)) {
        return {
            props: {
                params: null
            }
        }
    }
    return {
        props: {
            params: params.id
        }
    }
}
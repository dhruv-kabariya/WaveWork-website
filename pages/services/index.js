import ServiceCard from "@/components/ServiceCard";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/Services.module.css";
import { Router } from "next/router";
import { SentimentDissatisfied } from "@mui/icons-material";



export default function Page({data}) {
    
    return (
        <>
            <Head>
                <title>Services | WorkWaves - Simplified Day-to-Day Solutions</title>
                <meta name="description" content="Discover a wide range of convenient services at WorkWaves. Find trusted service providers for tasks like electrician services, TV repair, plumbing, and more. Simplify your life with WorkWaves today." />
                <meta name="keywords" content="Services,Electrician Services,TV Repair,Plumbing Solutions,Cook at Home,Handyman Services,Landscaping and Gardening,Home Cleaning,Car Maintenance,Catering Services,Beauty and Wellness" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:title" content="ervices | WorkWaves - Simplified Day-to-Day Solutions" />
                <meta property="og:description" content="Discover a wide range of convenient services at WorkWaves. Find trusted service providers for tasks like electrician services, TV repair, plumbing, and more." />
                <meta property="og:image" content="https://wavework.in/logo-icon.png" />
                <meta property="og:url" content="https://wavework.in" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ervices | WorkWaves - Simplified Day-to-Day Solutions" />
                <meta name="twitter:description" content="Discover a wide range of convenient services at WorkWaves. Find trusted service providers for tasks like electrician services, TV repair, plumbing, and more." />
                <meta name="twitter:image" content="https://wavework.in/logo-icon.png" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
        

        <div className={`${styles['services-section']}`}>
            <Typography variant="h1" component={'h1'} className="text-center">Our Services</Typography>
            <Typography variant="body1" component={'p'} className="text-center">Explore our comprehensive list of services, including electricians, plumbers, TV repair, and more.</Typography>

            {data.services.length ? 

            <Box component={'div'} sx={{display: "flex", justifyContent: "center"}}>
            <Box component={'div'} sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: 'center', rowGap: "2rem", columnGap: "1.5rem"}}  className={`mt-5 px-lg-3 px-md-3 px-1 mx-auto ${styles["services-list"]}`}>
                {data.services.map((dt, idx) => <ServiceCard key={idx} data={dt} />)}
            </Box>
            </Box>

                :

            <Box component={'h5'} className="text-center mt-5" >
                Oops! unable to load services <SentimentDissatisfied />
            </Box>

            }
        </div>
        </>
    )
}   

export async function getServerSideProps() {
    try{
        // Fetch data from external API
        const res = await fetch(`http://api.wavework.in:8080/auth/v1/services/`)
        const data = await res.json();
        console.log(data)
        return { props: { data: data?.data } }
    }catch(err){
        return { props: { data: {
            services: []
        } } }
    }
    
}
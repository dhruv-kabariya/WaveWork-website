import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Services.module.css"
import Link from "next/link";

let getLongestCommonSubstring = function (string1, string2) {
    // init max value
    let longestCommonSubstring = "";
    let shortestString = string1.length > string2.length ? string2 : string1;
    let longestString = string1.length > string2.length ? string1 : string2;

    // init 2D array with 0
    let table = Array(shortestString.length);
    for (let i = 0; i <= shortestString.length; ++i) {
        table[i] = Array(longestString.length);
        for (let j = 0; j <= longestString.length; ++j) {
            table[i][j] = 0;
        }
    }

    // fill table
    let longestSubstringLength = 0;
    let longestSubstringColumn = 0;
    let longestSubstringRow = 0;
    for (let i = 1; i <= shortestString.length; ++i) {
        for (let j = 1; j <= longestString.length; ++j) {
            if (shortestString[i - 1] === longestString[j - 1]) {
                table[i][j] = table[i - 1][j - 1] + 1;
                if (table[i][j] > longestSubstringLength) {
                    longestSubstringLength = table[i][j];
                    longestSubstringColumn = j;
                    longestSubstringRow = i;
                }
            } else {
                table[i][j] = 0;
            }
        }
    }

    // return longestSubstringLength;
    if (longestSubstringLength === 0) {
        // return longestCommonSubstring;
        return false;
    }
    // return longestCommonSubstring;
    return shortestString.substring(longestSubstringRow - longestSubstringLength, longestSubstringRow);
}

export default function ServiceCard(props) {
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

    const assigned = {
        "TV Repair": "tvService",
        "Workman": "handyman",
        "Home Cleaner": "cleaner",
    }
    let mx = 0;
    let idx = 0;
    for(let i = 0; i < skills.length; i++) {
        if(assigned[props?.data?.service?.en]) {
            idx = assigned[props?.data?.service?.en];
            break;
        }
        let lcs = getLongestCommonSubstring(props?.data?.service?.en.toLowerCase(), skills[i].toLowerCase());
        if(lcs && lcs.length > mx) {
            mx = lcs.length;
            idx = skills[i];
        }
    }
    return (
        <Link href={`/services/${idx}-ahmedabad`} style={{textDecoration: "none", color: "black"}}><Box component={'div'} className={`py-lg-3 py-md-2 py-1 px-lg-3 px-md-2 px-1 ${styles["service-card"]}`} sx={{display: "flex", borderRadius: "15px", width: "450px", alignItems: "center", columnGap: "1.5rem", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)"}}>
            <Image src={props?.data?.icon} alt={props?.data?.service?.en} width={70} height={70} style={{borderRadius: "50%"}} />
            <Box component={'div'} sx={{display: "flex", flexDirection: "column"}}>
                <Typography variant="h4" component={'h4'}>{props?.data?.service?.en}</Typography>
                <Typography variant="body1" component={'p'}>{props?.data?.title?.en}</Typography>
            </Box>
        </Box></Link>
    )

}
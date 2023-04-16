import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const AWSSync = () => {
    return (
        <Container>
            <Typography variant="h6">AWS sync happens only for the filtered data and all the values are synced only once per day (e.g. 9 AM EST) when batch job picks up the raw files and keeps them ingested into S3 bucket for further Analytics</Typography>
            <Link type="button" href="https://aws.amazon.com/resources/analyst-reports/?nc2=h_ql_exm_rep&analyst-reports-main.sort-by=item.additionalFields.datePublished&analyst-reports-main.sort-order=desc&awsf.analyst-reports-flag=*all&awsf.tech-category=*all&awsf.analyst-reports-use-case=*all&awsf.analyst-reports-industry=*all&awsf.analyst-reports-firm=*all&awsf.analyst-reports-region=*all&awsf.analyst-reports-year=*all">Sync Now</Link>
        </Container>
    )
}

export default AWSSync
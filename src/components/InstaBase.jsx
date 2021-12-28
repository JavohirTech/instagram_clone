import Grid from '@mui/material/Grid'
import InstaCards from './InstaCards'
import InstaSidebar from './InstaSidebar'


const InstaBase = () =>{
    return(
        <>
        <div className="container">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <InstaCards/>
                    <InstaCards/>
                    <InstaCards/>
                    <InstaCards/>
                </Grid>
                <Grid item xs={4}  style={{marginTop: "40px"}}>
                    <InstaSidebar/>
                    <InstaSidebar/>
                    <InstaSidebar/>
                    <InstaSidebar/>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default InstaBase
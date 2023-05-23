import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { data } from '../../Data/data';
import FooterTitle from './FooterTitle';
import FooterInfo from './FooterInfo';
const Footer = () => {
    return (
        <Box component="footer"
            sx={{
                backgroundColor: '#8145CE',
                py: 4,
            }}
        >
            <Grid container spacing={3} sx={{ textAlign: 'center' }}>
                <Grid item xs={12} sm={6} md={3} >
                    <Typography variant="h5" color="common.white" gutterBottom>
                        THE BOOK HOUSE
                    </Typography>
                </Grid>
                {data.map((element) => {
                    return (
                        <Grid item xs={12} sm={6} md={2} key={element.id}>
                            <FooterTitle text={element.title} />
                            {
                                element.body.map((items, index) => {
                                    return (
                                        <FooterInfo {...items} key={index} />
                                    )
                                })
                            }
                        </Grid>
                    )
                })
                }
                <Grid item xs={12} sx={{ marginTop: '20px', }}>
                    <hr />
                    <Typography variant="body2" color="common.white">
                        © {new Date().getFullYear()} The Book House. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Footer;
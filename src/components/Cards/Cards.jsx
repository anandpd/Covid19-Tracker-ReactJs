import React from 'react'
import styles from './Cards.module.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate } }) => {

   if (!confirmed){
       return 'Loading ...'
   }
    return(
        <div className={styles.container}>
            <Grid container spacing = {3} justify="center">
                <Grid item component = {Card} xs= {12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutter="bottom"> Infected </Typography>
                        <Typography variant="h5"> 
                            <CountUp start = {0}end = {confirmed.value}duration = {1.5}separator = ","/>
                         </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Active Cases of Covid 19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs= {12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutter="bottom"> Recovered </Typography>
                        <Typography variant="h5"> <CountUp start = {0}end = {recovered.value}duration = {1.5}separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Recovered Cases of Covid 19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs= {12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutter="bottom"> Deaths </Typography>
                        <Typography variant="h5"><CountUp start = {0}end = {deaths.value}duration = {1.5}separator = ","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Death caused by Covid 19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
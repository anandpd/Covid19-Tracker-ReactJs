import React ,{useState, useEffect} from 'react'
import { fetchDailyData } from '../../Api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Charts.module.css'

const Chart = ( {data:{confirmed, deaths, recovered} ,country} ) => {
    const [dailyData, setDailyData] = useState( [] );

    useEffect( ()=>{
        const fetchApi = async() => {
            setDailyData(await fetchDailyData());
        }
        
        fetchApi();
    },[] );


const barChart = (
    confirmed ? (
        <Bar
        data= {{
            labels : ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor:['#ff8000', '#21E54F', '#E52121'],
            data : [confirmed.value, recovered.value, deaths.value]
            }]
        }}
        opotions= {{
             legend : {display: false},
             title: {display: true, text: `Current state in ${country}`}
        }}
        
         />
    ):null
)

    const lineChart = (
        dailyData.length?
             ( <Line 
                data = {{
                    labels: dailyData.map( ({date}) => date ),
                    datasets: [{
                        data : dailyData.map( ({confirmed}) => confirmed ),
                        label : 'Infected',
                        backgroundColor : '#ff8000',
                        fill : true
                    }, {  
                        data : dailyData.map( ({deaths}) => deaths ),
                        label : 'Deaths',
                        backgroundColor : '#E52121',
                        fill : true
                    }]
                }}
            />) : null
    );

    return(
      <div className={styles.container}>
            {country ? barChart : lineChart}
      </div>
    )
}

export default Chart;
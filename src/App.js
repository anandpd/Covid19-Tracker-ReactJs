import React from 'react'

// Components
import { Cards, Charts, CountryPicker } from './components'
import { fetchData } from './Api'
import styles from './App.module.css'

import mylogo from './image/image.png'
class App extends React.Component {

state = {
    data : {},
    country: ''
}

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState( {data:fetchedData}  )
    }

 handleCountryChange = async(country)=> {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState( {data:fetchedData,country:country});
}
   render(){
        const { data,country } = this.state;
        return(
            <div className={styles.container}>
           <img className={styles.image} src={mylogo} alt='COVID-19'/>
            <Cards data = {data} />
            <CountryPicker handleCountryChange = {this.handleCountryChange} />
            <Charts data= {data} country= {country} />
            </div>
        )
    }
}
export default App ;
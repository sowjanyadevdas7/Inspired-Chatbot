import React from 'react';
import { Cards, CountryPicker, Chart } from '../components';
import { fetchData } from '../api/';
import Nav from '../components/nav';
import image from '../images/image.png';
import Footer from '../components/footer';

class test extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;
    const mystyle = {
      width: 365,
      height: 650,
    };
    return (
      <header1>
      <Nav/>
      <div >
        <img className={mystyle.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
      <Footer/>
      </header1>
    );
  }
}

export default test;
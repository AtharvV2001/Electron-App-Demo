import ReactWeather, { useOpenWeather } from 'react-open-weather';
import logo from './logo.svg';
import './App.css';

function App() {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '4cf55dfa9a0ab63a939fffb8ae325498',
    lat: '22.2860819',
    lon: '73.1703513',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <div className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang='en'
        locationLabel='Vadodara'
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    </div>
  );
}

export default App;

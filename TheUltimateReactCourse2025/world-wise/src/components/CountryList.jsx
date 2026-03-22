import styles from "./CountryList.module.css";

import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";
import city from "./City.jsx";

export function CountryList({ cities, isLoading }) {

  if(isLoading) return <Spinner />

  if(!cities.length) return (
    <Message message="No cities found" />
  );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map(el => el.country).includes(city.country)) {
      return [...arr, {
        country: city.country,
        emoji: city.emoji,
        id: city.id
      }]
    } else {
      return arr
    }
  }, []);

  return (
    <ul className= { styles.countryList }>
      {countries.map((country) => (
        <CountryItem country={ country } key={ country.id } />
      ))}
    </ul>
  );

}
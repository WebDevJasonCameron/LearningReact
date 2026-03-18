import styles from "./CityList.module.css"

export default function CityList({ cities, isLoading } ) {
  console.log( cities );
  console.log( isLoading )
  return (
    <ul className={ styles.cityList }>
      list
    </ul>
  )
}
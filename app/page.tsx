import styles from './page.module.css'
import SearchBar from './SearchBar'

const sets = [
  {id: "75336", setName: "ATAT"},
  {id: "75337", setName: "X-Wing"},
  {id: "75338", setName: "Star Destroyer"},
  {id: "75339", setName: "Republic Fighter Tank"},
  {id: "75340", setName: "Republic Gunship"},
  {id: "75341", setName: "Death Star"},
  {id: "75342", setName: "ATST"}
]

export default function Home() {
  return (
    <div>
      <SearchBar results={sets} renderItem={(item) => <p>{item.setName}</p>}/>
    </div>
  )
}

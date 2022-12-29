"use client"
import styles from './page.module.css'
import SearchBar from './SearchBar'
import React from 'react'
import {useState} from 'react'

const sets = [
  {id: "75336", setName: "ATAT"},
  {id: "75337", setName: "X-Wing"},
  {id: "75338", setName: "Star Destroyer"},
  {id: "75339", setName: "Republic Fighter Tank"},
  {id: "75340", setName: "Republic Gunship"},
  {id: "75341", setName: "Death Star"},
  {id: "75342", setName: "ATST"},
  {id: "75343", setName: "Death Star"},
  {id: "75344", setName: "Gungan Ship"},
  {id: "75345", setName: "Ashoka Shuttle"},
  {id: "75346", setName: "Jedi Cruiser"},
  {id: "75347", setName: "Republic Venator"},
  {id: "75348", setName: "501st Battlepack"},
  {id: "75349", setName: "ATTE"},
  {id: "75350", setName: "Imperial Speeder"},
]

export default function Home() {
  const [results, setResults] = useState<{id: string; setName: string}[]>();

  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;

  const handleChange: changeHandler = (event) => {
    const {target} = event;
    if(!target.value.trim()) return setResults([])

    const filteredValue = sets.filter((set) =>
      set.setName.toLowerCase().startsWith(target.value)
    )
    setResults(filteredValue)
  }


  return (
    <div>
      <SearchBar results={results} onChange={handleChange} renderItem={(item) => <p>{item.setName}</p>}/>
    </div>
  )
}

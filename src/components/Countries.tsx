import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card'

const Countries = () => {
  const [data, setData] = useState([])
  const [range, setRange] = useState(36)
  const [selectedContinent, setSelectedContinent] = useState('')
  const Continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res.data))
  }, [data])
  return (
    <div>
      <ul className="m-8 flex items-center justify-center gap-4 rounded-2xl bg-slate-500 p-8 text-2xl text-slate-50">
        <span>1</span>
        <div className="relative">
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 transform">
            {range}
          </span>
          <input
            type="range"
            min={1}
            max={250}
            defaultValue={range}
            onChange={(e) => setRange(parseInt(e.target.value))}
          />
        </div>
        <span>250</span>
        {Continents.map((continent) => {
          return (
            <li className="mx-8 flex items-center justify-center gap-2">
              <input
                type="radio"
                name="ContinentRadio"
                checked={selectedContinent === continent}
                id={continent}
                onChange={(e) => {
                  setSelectedContinent(e.target.id)
                }}
                className="peer hidden"
              />
              <div className="h-5 w-5 rounded-full border-2 border-gray-600 bg-white transition duration-75 peer-checked:border-blue-900 peer-checked:bg-blue-500"></div>
              <label htmlFor={continent}>{continent}</label>
            </li>
          )
        })}
      </ul>
      <div className="mb-8 flex items-center justify-center">
        {selectedContinent && (
          <button
            onClick={() => setSelectedContinent('')}
            className="rounded-xl bg-slate-500 p-4 text-xl text-slate-50 hover:bg-slate-900 hover:text-slate-50"
          >
            Annuler la recherche
          </button>
        )}
      </div>
      <ul className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mx-40 xl:grid-cols-10">
        {data
          .filter((country: any) =>
            country.continents[0].includes(selectedContinent)
          )
          .sort((a: any, b: any) => b.population - a.population)
          .slice(0, range)
          .map((country: any, index: number) => {
            return <Card key={index} country={country} />
          })}
      </ul>
    </div>
  )
}

export default Countries

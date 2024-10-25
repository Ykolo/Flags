import axios from 'axios'
import { useEffect, useState } from 'react'
import { cn } from '../libs/utils'
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
      <ul
        className={cn(
          'm-4',
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'gap-4',
          'rounded-2xl',
          'bg-slate-500',
          'p-8',
          'text-2xl',
          'text-slate-50',
          'lg:m-8',
          'lg:flex-row'
        )}
      >
        <span className={cn('hidden', 'lg:flex')}>1</span>
        <div className="relative">
          <span
            className={cn(
              'absolute',
              'bottom-6',
              'left-1/2',
              '-translate-x-1/2',
              'transform'
            )}
          >
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
        <span className={cn('hidden', 'lg:flex')}>250</span>
        {Continents.map((continent) => {
          return (
            <li
              className={cn(
                'flex',
                'items-center',
                'justify-center',
                'gap-2',
                'xl:mx-8'
              )}
            >
              <input
                type="radio"
                name="ContinentRadio"
                checked={selectedContinent === continent}
                id={continent}
                onChange={(e) => {
                  setSelectedContinent(e.target.id)
                }}
                className={cn('peer', 'hidden')}
              />
              <div
                className={cn(
                  'h-5',
                  'w-5',
                  'rounded-full',
                  'border-2',
                  'border-gray-600',
                  'bg-white',
                  'transition',
                  'duration-75',
                  'peer-checked:border-blue-900',
                  'peer-checked:bg-blue-500'
                )}
              ></div>
              <label htmlFor={continent}>{continent}</label>
            </li>
          )
        })}
      </ul>
      <div className={cn('mb-8', 'flex', 'items-center', 'justify-center')}>
        {selectedContinent && (
          <button
            onClick={() => setSelectedContinent('')}
            className={cn(
              'rounded-xl',
              'bg-slate-500',
              'p-4',
              'text-xl',
              'text-slate-50',
              'hover:bg-slate-900',
              'hover:text-slate-50'
            )}
          >
            Annuler la recherche
          </button>
        )}
      </div>
      <ul
        className={cn(
          'grid',
          'gap-2',
          'sm:grid-cols-1',
          'md:grid-cols-2',
          'md:text-4xl',
          'lg:grid-cols-4',
          'lg:text-2xl',
          'xl:mx-40',
          'xl:text-lg',
          'xl:grid-cols-6'
        )}
      >
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

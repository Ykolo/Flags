const Card = ({ country }: any) => {
  return (
    <li className="group relative mx-4 flex items-center justify-center gap-4 lg:mx-0">
      <img
        className="h-auto w-full rounded-md object-cover transition duration-700 ease-in-out lg:h-32 lg:group-hover:scale-110"
        src={country.flags.svg}
        alt={'drapeau ' + country.name.common}
      />
      <div className="absolute left-0 top-0 hidden h-full w-full flex-col items-center justify-center rounded-md bg-slate-900 p-4 text-slate-50 shadow-lg transition duration-500 ease-in-out group-hover:flex lg:group-hover:scale-110">
        <h2>{country.name.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop: {country.population.toLocaleString()} </p>
      </div>
    </li>
  )
}

export default Card

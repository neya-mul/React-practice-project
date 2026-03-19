
export default function Country({country}) {
    console.log(country.area.area);

    
  return (
    
    <div className="border border-red-400 max-w-[500px] mb-2 p-4 mx-auto text-center">
        <img src={country.flags.flags.png} className="mx-auto" alt="" />
        <h1 className="">Name: {country.name.common}</h1>
        <p>Area: {country.area.area}</p>
        <p>{country.area.area >= 400000 ? 'Big country' : 'Small Country'}</p>

    </div>
  );
}
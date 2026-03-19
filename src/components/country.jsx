
export default function Country({country}) {
    console.log(country.flags.flags);

    
  return (
    
    <div className="border border-red-400 max-w-[500px] mb-2 p-4 mx-auto">
        <img src={country.flags.flags.png} className="mx-auto" alt="" />
        <h1 className="text-center">Name: {country.name.common}</h1>

    </div>
  );
}
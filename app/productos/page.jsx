import Card from "../components/Card"

function page() {
    const servicio=[
        {
        servicio:'NETFLIX',
        tiempo:'( 30 Días )',
        precio:'Precio: 3,5$',
        URL:'NETFLIX'
        },
        {
        servicio: 'MAGIS TV' ,
        tiempo:'( 30 Días  )',
        precio:'Precio: 4$',
        URL:'MAGISTV'
        },
        {
        servicio: 'STAR +' ,
        tiempo:'( 30 Días  )',
        precio:'Precio: 1,50$',
        URL:'STAR'
        },
        {
        servicio: 'DISNEY +' ,
        tiempo:' ( 30 Días  ) ',
        precio:'Precio: 1,49$',
        URL:'DISNEY'
        },{
          servicio:'SPOTIFY',
          tiempo:'( 3 meses  )',
          precio:'Precio: 6$',
          src:'/SPOTIFY.svg',
          URL:'SPOTIFY'
        },
        {
        servicio: 'AMAZON PRIME' ,
        tiempo:'( 30 Días  )',
        precio:'Precio: 1,90$',
        URL:'AMAZONPRIME'
        },{
        servicio:'HBO MAX',
        tiempo:'( 30 Días  )',
        precio:'Precio: 1,90$',
        URL:'HBOMAX'
        }   
    ]
  return (
    <main className="gap-4 scroll-smooth flex flex-col min-h-screen justify-center items-center  h-fit w-full  p-2 md:p-6 lg:p-12  bg-gradient-to-b from-black via-gray-500 to-black ">
        
        <div className="w-full grid grid-col-5 mt-[140px]">
                <h1 className="col-span-3 text-white font-bold text-2xl md:text-4xl font-sans">SERVICIOS</h1>
                <div className="col-span-2 font-sans">

                </div>
        </div>
        <section className="col-span-4 gap-6 grid grid-cols-2 md:grid-cols-3 h-fit  w-full md:w-3/4 lg:grid-cols-4 grid-rows-7 p-2 md:p-4 lg:p-10">
            
            {servicio.map((data, i)=>{
              return  ( <Card key={i} data={data}/>)
            })}

        </section>
    
    </main>
  )
}

export default page
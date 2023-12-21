
import Aros from './components/svgs/Aros'
import Link from 'next/link'
import Carousel from './components/carousel'
import SwiperCard from './components/swiper'
import Adornos from './components/Adornos'
import { Suspense } from 'react'
import Loader from './components/Loader'
import { lazy } from 'react';
import Image from 'next/image'

export default function Home() {
  const HomeLogo = lazy(() => import('./components/svgs/HomeLogo'));
  const promociones=[
    {
      servicio:'Promoción DISNEY + y START +',
      img:'promocionDyS.svg',
      url:'disneyystar',
      promo:true

    },
    {
      servicio:'Promoción HBO MAX y STAR +',
      img:'promocionHYS.svg',
      url:'hboystar',
      promo:true

    },{
      servicio:'Promoción NETFLIX y AMAZON prime',
      img:'promocionNYA.svg',
      url:'netflixyamazon',
      promo:true
    },{
      servicio:'Promoción NETFLIX y DISNEY +',
      img:'promocionNYD.svg',
      url:'netflixydisney',
      promo:true

    },{
      servicio:'Promoción NETFLIX y HBO MAX',
      img:'promocionNYH.svg',
      url:'netflixyhbo',
      promo:true
    },{
      servicio:'Promoción NETFLIX y PARAMOUNT',
      img:'promocionNYP.svg',
      url:'netflixyparamount',
      promo:true
    },{
      servicio:'Promoción NETFLIX y STAR +',
      img:'promocionNYS.svg',
      url:'netflixystart',
      promo:true
    }, {
      Servicio:'Super promo',
      img:'superpromo.svg',
      url:'superpromo',
      promo:true
    },
  ]
  const reseñas=[
    {
      nombre: "Sofía Melo",
      puntuacion: 4,
      reseña: "Me encanta la música y por eso compré una cuenta de Spotify. La cuenta funciona muy bien y tiene la mejor calidad de sonido. Lo único que no me gustó fue que el proceso de pago fue un poco complicado."
    },
    {
      nombre: "Carlos Arturo",
      puntuacion: 5,
      reseña: "Excelente servicio, las cuentas funcionan perfectamente y el precio es muy razonable. lo Recomiendo para comprar cuentas de streaming."
    },
    {
      nombre: "Pedro Sanchez",
      puntuacion: 5,
      reseña: "Es muy fácil y seguro, y aceptan diferentes métodos de pago. Además, tienen promociones y descuentos muy buenos."
    },
    {
      nombre: "María Fernanda",
      puntuacion: 4,
      reseña: "Me gustó mucho la variedad de opciones que ofrece M&L. Pude comprar cuentas de Netflix, Disney+ y Amazon con facilidad y seguridad."
    },
    {
      nombre: "Daniela Acosta",
      puntuacion: 5,
      reseña: "Me encanta el cine y por eso uso M&L para comprar cuentas de streaming de las mejores plataformas. Tienen una gran variedad de opciones y precios, y el servicio es muy rápido y confiable. No tengo ninguna queja."
    }
  ];
  const servicio=[
    {
    servicio:'NETFLIX',
    tiempo:'( 30 Días )',
    img:'NETFLIX.svg',
    promo:false,
    precio:'Precio: 3,5$',
    url:'NETFLIX'
    },
    {
    servicio: 'MAGIS TV' ,
    tiempo:'( 30 Días  )',
    precio:'Precio: 4$',
    img:'MAGISTV.svg',
    promo:false,
    url:'MAGISTV'
    },
    {
      servicio: 'SPOTIFY' ,
      tiempo:'( 3 MES  )',
      precio:'Precio: 6$',
      img:'SPOTIFY.svg',
      promo:false,
      url:'SPOTIFY'
    },
    {
    servicio: 'STAR +' ,
    tiempo:'( 30 Días  )',
    precio:'Precio: 1,50$',
    img:'STAR.svg',
    promo:false,
    url:'STAR'
    },
    {
    servicio: 'DISNEY +' ,
    tiempo:' ( 30 Días  ) ',
    precio:'Precio: 1,49$',
    img:'DISNEY.svg',
    promo:false,
    url:'DISNEY'
    },
    {
    servicio: 'AMAZON PRIME' ,
    tiempo:'( 30 Días  )',
    precio:'Precio: 1,90$',
    img:'AMAZONPRIME.svg',
    promo:false,
    url:'AMAZONPRIME'
    },{
    servicio:'HBO MAX',
    tiempo:'( 30 Días  )',
    precio:'Precio: 1,90$',
    img:'HBOMAX.svg',
    promo:false,
    url:'HBOMAX'
    }   
]
  
  return (
    <Suspense fallback={<Loader/>}>
    <main className=" scroll-smooth flex min-h-screen h-fit w-full flex-col bg-gradient-to-b from-black via-gray-500 to-black ">
    
      <section className='grid items-center relative justify-items-center lg:grid-cols-2  w-full h-screen'>
        <Adornos/>
        <div className='col-span-1 gap-6 flex absolute leading-2 md:relative flex-col h-1/2 p-10 md:pl-24 md:pt-16 text-center md:text-start items-center md:items-start lg:text-start'>
          <h1 className='text-white text-4xl sm:text-5xl  md:text-6xl lg:text-7xl font-bold font-sans'>SERVICIOS <br/><span className='text-[#ffd33c] bg-transparent text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans'>STREAMING</span></h1>
          <h2 className='text-white text-sm lg:text-1xl font-bold font-sans'>&quot;Ofrecemos la mejor calidad y precio en todos nuestros servicios &quot;</h2>
          <Link href={'/productos'} className='text-[#ffd33c] p-2 w-fit h-fit font-bold border-[#ffd33c] border-b-4 hover:border-none hover:scale-105 bg-transparent hover:bg-[#ffd33c] hover:text-[#291504] hover:shadow-lg ease-in-out duration-300 rounded-lg'>Conoce nuestros servicios</Link>
        </div>
        <div className='hidden lg:flex w-2/3 h-2/3  relative col-span-1'>
          <Aros className='w-full h-full opacity-60 absolute z-20'/>
          <HomeLogo className='w-full h-full absolute z-10'/>
        </div>
        
      </section>
      <section id={'promociones'} className='flex flex-col gap-10 relative overflow-hidden p-6 md:p-20 w-full items-center h-[75vh] sm:h-screen bg-cover bg-center ' >
        <h3 className='text-white text-3xl h-fit font-bold font-sans text-center'>PROMOCIONES</h3>
        <div className='w-full md:w-1/2 h-[55vh] sm:h-[45vh] sm:h-[70vh]'>
          <SwiperCard data={promociones}/>
        </div>
       
      </section>
      <section id={'promociones'} className='flex flex-col gap-10 relative overflow-hidden p-6 md:p-20 w-full items-center h-[75vh] sm:h-screen bg-cover bg-center ' >
        <h3 className='text-white text-3xl h-fit font-bold font-sans text-center'>SERVICIOS</h3>
        <div className='w-full md:w-1/2 h-[55vh] sm:h-[45vh] sm:h-[70vh]'>
          <SwiperCard data={servicio}/>
        </div>
       
      </section>
      <section className='relative  w-full h-[75vh] sm:h-screen flex flex-col p-6 md:p-10 lg:p-20 gap-8 items-center' >
        <h4  className='text-white text-2xl md:text-3xl font-bold font-sans text-center w-full'>OPINIÓN DE NUESTROS CLIENTES</h4>
        <div className='w-full md:w-3/4 h-[50vh] md:h-[70vh] bg-zing-800 '>
        <Carousel data={reseñas} /> 
        </div>
        
      </section>
      <section id={'contactanos'} className='relative  w-full h-[50vh] flex flex-col p-2 gap-8 items-center bg-gradient-to-t from-zing-950 from-20% via-black to-zing-800 to-80%' >
        <h4  className='text-white text-2xl md:text-3xl font-bold font-sans text-center w-full'>CONTACTANOS</h4>
        <span className='text-white text-lg text-center'>Conoce más de nosotros y síguenos en nuestras redes sociales</span>
          <div className='p-4 w-[80%] sm:w-3/4 h-1/2 grid grid-cols-2 gap-2 items-center justify-items-center'>
            <Link className='w-3/4 flex flex-col items-center justify-center col-span-1 gap-2 hover:scale-105'  href={'https://api.whatsapp.com/send/?phone=584128220099&text=Hola,%20Me%20gustaria%20conocer%20mas%20de%20su%20servicio&type=phone_number&app_absent=0'}>
              <Image src={'/redesSociales/whatsapp.svg'} className='' width={100} height={100} alt=''></Image>
              <span className='text-[#ffd33c] '>whatsapp</span>
            </Link>
          
            <Link  className='w-3/4 flex flex-col items-center justify-center col-span-1 gap-2 hover:scale-105' href={'https://www.facebook.com/profile.php?id=100088886517762&mibextid=ZbWKwL'}>
              <Image src={'/redesSociales/facebook.svg'} className='' width={100} height={100} alt=''></Image>
              <span className='text-[#ffd33c] '>Facebook</span>
            </Link> 
          </div>
        
      </section>
      <footer className='h-[35vh] bg-zinc-800 w-full grid grid-cols-2 sm:grid-cols-4 p-6 relative'>
        <div className=' sm:col-span-1 px-10 p-4'>
          <h6 className='text-white text-3xl text-center'>M&L</h6>
          <h6 className='text-white text-xs text-center '>SERVICIOS DE STREAMING</h6>
         
        </div>
        <div className=' sm:col-span-3 p-8 md:p-12 lg:p-16 items-center justify-center'>
           <div className='w-full h-3/4'>
              <ul className='grid  grid-cols-1 md:grid-cols-2 gap-2'>
                <li><Link href={'/'} className='text-white'>Inicio</Link></li>
                <li><Link href={'/productos'} className='text-white'>Productos</Link></li>
                <li><Link href={'/#promocion'} className='text-white'>Promociones</Link></li>
                <li><Link href={'/#contactanos'} className='text-white'>Contactanos</Link></li>
              </ul>
          </div>
        </div>
        
      </footer>
    </main>
    </Suspense>
  )
}

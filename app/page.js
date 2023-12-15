
import Aros from './components/svgs/Aros'
import Link from 'next/link'
import Carousel from './components/carousel'
import SwiperCard from './components/swiper'
import Adornos from './components/Adornos'
import { Suspense } from 'react'
import Loader from './components/loader'
import { lazy } from 'react';

export default function Home() {
  const HomeLogo = lazy(() => import('./components/svgs/HomeLogo'));
  const promociones=[
    {
      servicio:'Promoción DISNEY + y START +',
      img:'promocionDyS.svg',
      url:'disneyystar'

    },
    {
      servicio:'Promoción HBO MAX y STAR +',
      img:'promocionHYS.svg',
      url:'hboystar'

    },{
      servicio:'Promoción NETFLIX y AMAZON prime',
      img:'promocionNYA.svg',
      url:'netflixyamazon'
    },{
      servicio:'Promoción NETFLIX y DISNEY +',
      img:'promocionNYD.svg',
      url:'netflixydisney'

    },{
      servicio:'Promoción NETFLIX y HBO MAX',
      img:'promocionNYH.svg',
      url:'netflixyhbo'
    },{
      servicio:'Promoción NETFLIX y PARAMOUNT',
      img:'promocionNYP.svg',
      url:'netflixyparamount'
    },{
      servicio:'Promoción NETFLIX y STAR +',
      img:'promocionNYS.svg',
      url:'netflixystart'
    }, {
      Servicio:'Super promo',
      img:'superpromo.svg',
      url:'superpromo'
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
      <section className='relative  w-full h-[75vh] sm:h-screen flex flex-col p-6 md:p-10 lg:p-20 gap-8 items-center' >
        <h4  className='text-white text-2xl md:text-3xl font-bold font-sans text-center w-full'>OPINIÓN DE NUESTROS CLIENTES</h4>
        <div className='w-full md:w-3/4 h-[50vh] md:h-[70vh] bg-zing-800 '>
        <Carousel data={reseñas} /> 
        </div>
        
      </section>
      <section id={'contactanos'}  className='grid relative  w-full h-[75vh] sm:h-screen flex flex-col gap-8 p-10 md:p-20 content-center  ' >
        <h4  className='text-white text-2xl md:text-3xl font-bold font-sans w-full text-center'>CONTACTANOS</h4>
        <div className='before:block before:absolute before:-inset-1 before:-skew-y-3 w-full md:w-3/4 lg:w-1/2 md:left-[12.5%] lg:left-1/4  before:bg-[#ffd33c]  relative inline-block'>
          <div className='flex flex-col gap-8 p-6 rounded-lg items-center w-full bg-zinc-700 relative z-10'>
            <p className='text-white text-center text-xs'>Si tienes alguna duda o sugerencia, puedes contactarnos a través de nuestro formulario de contacto. Estaremos encantados de atenderte y resolver tus inquietudes.</p>
              <form className='flex flex-col gap-4 w-3/4 md:w-2/3 lg:w-2/3'>
                <div className='flex flex-col gap-2'>
                  <label className='text-white text-sm'>Nombre:</label>
                  <input type='text' className='border-2  border-[#ffd33c] text-white bg-transparent rounded-lg text-sm'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-white text-sm'>Correo:</label>
                  <input type='text' className='border-2 border-[#ffd33c] text-white bg-transparent  rounded-lg text-sm'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-white text-sm'>Mensaje:</label>
                  <textarea type='text'  className='border-2 text-white border-[#ffd33c] bg-transparent rounded-lg text-sm'/>
                </div>
              </form>
            <Link href={'/#'} className='text-[#ffd33c] p-2 w-fit h-fit text-sm font-bold border-[#ffd33c] border-b-4 hover:border-none hover:scale-105 bg-transparent hover:bg-[#ffd33c] hover:text-[#291504] hover:shadow-lg ease-in-out duration-300 rounded-lg px-6'>Enviar</Link>

          </div>
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

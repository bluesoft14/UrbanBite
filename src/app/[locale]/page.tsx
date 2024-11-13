'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button, Image, Card, CardBody, CardFooter } from '@nextui-org/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const popularItems = [
  {
    id: 1,
    name: 'Pizza Margarita',
    price: 45,
    image: '/image/margarita.jpg'
  },
  {
    id: 2,
    name: 'Spaghetti a la Boloñesa',
    price: 35,
    image: '/image/bolonesa.webp'
  },
  {
    id: 3,
    name: 'Pizza Pepperoni',
    price: 50,
    image: '/image/peperoni.webp'
  },
  {
    id: 4,
    name: 'Lasaña de Carne',
    price: 55,
    image: '/image/carnes.webp'
  }
]

const menuCategories = [
  { id: 1, name: 'Pizzas', icon: '/pizza-icon.svg' },
  { id: 2, name: 'Pastas', icon: '/pasta-icon.svg' },
  { id: 3, name: 'Entradas', icon: '/entradas-icon.svg' },
  { id: 4, name: 'Postres', icon: '/postres-icon.svg' },
  { id: 5, name: 'Bebidas', icon: '/bebidas-icon.svg' },
  { id: 6, name: 'Catering para Eventos', icon: '/catering-icon.svg' },
  { id: 7, name: 'Ofertas Especiales', icon: '/ofertas-icon.svg' }
]

function HangingNeonSign() {
  const [isOpen, setIsOpen] = useState(true)
  const [isFlickering, setIsFlickering] = useState(false)

  return (
    <motion.div
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ opacity: 1, rotate: isOpen ? -3 : 3 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.5
      }}
      className='absolute left-1/2 top-10 z-50 -translate-x-1/2 transform cursor-pointer sm:top-10'
      onClick={() => setIsOpen(!isOpen)}
      onHoverStart={() => setIsFlickering(true)}
      onHoverEnd={() => setIsFlickering(false)}
    >
      {/* Rope */}
      <div className='absolute -top-8 left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-[#0C88AB] bg-transparent shadow-[0_0_10px_#0ff,0_0_20px_#0ff,0_0_30px_#0ff]' />

      {/* Neon lines connecting to sign */}
      <div className='absolute left-1/2 top-[-28px] h-[20px] w-[2px] origin-top -translate-x-1/2 rotate-[-30deg] transform bg-[#0C88AB] shadow-[0_0_10px_#0ff,0_0_20px_#0ff,0_0_30px_#0ff]' />
      <div className='absolute left-1/2 top-[-28px] h-[20px] w-[2px] origin-top -translate-x-1/2 rotate-[30deg] transform bg-[#0C88AB] shadow-[0_0_10px_#0ff,0_0_20px_#0ff,0_0_30px_#0ff]' />

      {/* Sign frame */}
      <div className='relative flex h-16 w-40 items-center justify-center rounded-xl border-4 border-[#0C88AB] bg-transparent shadow-[0_0_10px_#0ff,0_0_20px_#0ff,0_0_30px_#0ff] backdrop-blur-sm sm:h-12 sm:w-32'>
        {/* Neon text */}
        <motion.h1
          animate={{
            opacity: isFlickering ? [1, 0.7, 1] : 1,
            textShadow: isFlickering
              ? isOpen
                ? [
                    '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00',
                    '0 0 3px #00ff00, 0 0 6px #00ff00, 0 0 9px #00ff00',
                    '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00'
                  ]
                : [
                    '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000',
                    '0 0 3px #ff0000, 0 0 6px #ff0000, 0 0 9px #ff0000',
                    '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000'
                  ]
              : isOpen
                ? '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00'
                : '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000'
          }}
          transition={{
            duration: 0.5,
            repeat: isFlickering ? Infinity : 0,
            repeatType: 'reverse'
          }}
          className={`text-xl font-extrabold tracking-widest sm:text-xl ${isOpen ? 'text-green-100' : 'text-red-100'}`}
        >
          {isOpen ? 'ABIERTO' : 'CERRADO'}
        </motion.h1>
      </div>
    </motion.div>
  )
}

export default function DashboardPage() {
  return (
    <div>
      {/* Letrero colgante */}
      <HangingNeonSign />

      <div className='flex flex-col items-center justify-center lg:flex-row'>
        <section className='flex flex-col items-center justify-center px-4 py-8 lg:ml-12'>
          <div>
            <h1 className='text-center text-5xl font-extrabold leading-tight sm:text-7xl'>
              Bienvenid@ a <br />
              <span className='bg-span-bg bg-clip-text text-transparent'>
                Urban Bite
              </span>
              <p className='text-xl sm:text-lg'>
                ¡La mejor experiencia en sabores italianos!
              </p>
            </h1>
            <div className='my-4 px-6 text-center text-lg text-text-secondary sm:text-base'>
              Disfruta de nuestras auténticas pastas artesanales, pizzas de
              primer nivel y servicio de catering para tus eventos.
            </div>
            <div className='mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center'>
              <a href='/menu'>
                <Button
                  color='default'
                  radius='full'
                  size='md'
                  className='w-full text-sm sm:w-auto'
                >
                  Ver Menú
                </Button>
              </a>
              <a href='/contacto'>
                <Button
                  radius='full'
                  size='md'
                  color='secondary'
                  className='w-full text-sm sm:w-auto'
                >
                  Contáctanos para eventos
                </Button>
              </a>
            </div>
          </div>
        </section>

        <div className='hidden p-3 lg:ml-5 lg:block lg:w-3/4'>
          <Image
            src={'/image/pizza.png'}
            alt='Imagen de pizza deliciosa'
            width={350}
            height={350}
            className='rounded-lg'
          />
        </div>
      </div>

      <div className='container mx-auto px-4 py-6'>
        {/* Popular New Items Section */}
        <section className='mb-10'>
          <h2 className='mb-6 text-center text-2xl font-bold sm:text-xl'>
            Productos Populares
          </h2>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {popularItems.map(item => (
              <Card key={item.id} className='w-full'>
                <CardBody className='p-0'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className='aspect-square w-full object-cover'
                  />
                </CardBody>
                <CardFooter className='flex flex-col items-start'>
                  <h3 className='mb-1 text-lg font-medium sm:text-base'>
                    {item.name}
                  </h3>
                  <div className='flex w-full items-center justify-between'>
                    <span className='text-sm font-bold'>{item.price} Bs.</span>
                    <Button color='danger' size='sm'>
                      Ver Detalles
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Menu Categories Section */}
        <section>
          <h2 className='mb-6 text-center text-2xl font-bold sm:text-xl'>
            Categorías
          </h2>
          <div className='relative'>
            <div className='flex items-center justify-center gap-2 overflow-x-auto py-4'>
              {menuCategories.map(category => (
                <Button
                  key={category.id}
                  color='primary'
                  variant='flat'
                  className='flex h-auto min-w-[80px] flex-col items-center py-1 sm:min-w-[100px]'
                  aria-pressed='false'
                >
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={40}
                    height={40}
                    className='mb-1'
                  />
                  <span className='text-center text-sm font-medium'>
                    {category.name}
                  </span>
                </Button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              isIconOnly
              className='absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg'
              aria-label='Previous'
            >
              <ChevronLeft className='h-5 w-5' />
            </Button>
            <Button
              isIconOnly
              className='absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg'
              aria-label='Next'
            >
              <ChevronRight className='h-5 w-5' />
            </Button>

            {/* Dots Navigation */}
            <div className='mt-4 flex justify-center gap-2'>
              {[...Array(menuCategories.length)].map((_, i) => (
                <Button
                  key={i}
                  isIconOnly
                  size='sm'
                  className={`h-2 w-2 min-w-0 rounded-full p-0 ${
                    i === 1 ? 'bg-warning' : 'bg-default-200'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Frescura</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              Ingredientes frescos y de calidad en cada plato, para una
              experiencia inolvidable.
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Variedad</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              Desde pastas caseras hasta una selección de masitas y comida para
              tus eventos.
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Calidad</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              Comprometidos con la excelencia, te ofrecemos comida de alta
              calidad para cada ocasion.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

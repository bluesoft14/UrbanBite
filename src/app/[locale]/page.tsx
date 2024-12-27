'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Button,
  Image,
  Card,
  Input,
  CardBody,
  CardFooter
} from '@nextui-org/react'
import { CarouselCateg } from '@/src/components/carouselCateg'
import MenuModal from '@/src/components/MenuModal'
import ContactModal from '@/src/components/ContactModal'

const popularItems = [
  {
    id: 1,
    name: 'Pizza Americana',
    prices: [
      { label: 'Personal', value: 12 },
      { label: 'Mediana', value: 15 },
      { label: 'Grande', value: 20 },
      { label: 'Familiar', value: 40 }
    ],
    image: '/image/americana2.jpeg'
  },
  {
    id: 2,
    name: 'Pizza Hawaiana',
    prices: [
      { label: 'Personal', value: 12 },
      { label: 'Mediana', value: 15 },
      { label: 'Grande', value: 20 },
      { label: 'Familiar', value: 40 }
    ],
    image: '/image/hawaiana.jpeg'
  },
  {
    id: 3,
    name: 'Pizza Lasagna',
    prices: [
      { label: 'Personal', value: 12 },
      { label: 'Mediana', value: 15 },
      { label: 'Grande', value: 20 },
      { label: 'Familiar', value: 40 }
    ],
    image: '/image/lasagna.png'
  },
  {
    id: 4,
    name: 'Pizza Primavera',
    prices: [
      { label: 'Personal', value: 12 },
      { label: 'Mediana', value: 15 },
      { label: 'Grande', value: 20 },
      { label: 'Familiar', value: 40 }
    ],
    image: '/image/primavera2.jpeg'
  }
]

function HangingNeonSign({ isAuthenticated }: { isAuthenticated: boolean }) {
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
      onClick={() => {
        // Si NO está autenticado, no cambia el cartel
        if (!isAuthenticated) return

        // Si está autenticado, alterna abierto/cerrado
        setIsOpen(!isOpen)
      }}
      onHoverStart={() => setIsFlickering(true)}
      onHoverEnd={() => setIsFlickering(false)}
    >
      {/* Rope */}
      <div
        className='
          absolute
          -top-8
          left-1/2
          h-4
          w-4
          -translate-x-1/2
          transform
          rounded-full
          border-4
          border-[#F59707]
          bg-transparent
          shadow-[0_0_10px_#F59707,0_0_20px_#F59707,0_0_30px_#F59707]
        '
      />

      {/* Neon lines connecting to sign */}
      <div
        className='
          absolute
          left-1/2
          top-[-28px]
          h-[20px]
          w-[2px]
          origin-top
          -translate-x-1/2
          rotate-[-30deg]
          transform
          bg-[#F59707]
          shadow-[0_0_10px_#F59707,0_0_20px_#F59707,0_0_30px_#F59707]
        '
      />
      <div
        className='
          absolute
          left-1/2
          top-[-28px]
          h-[20px]
          w-[2px]
          origin-top
          -translate-x-1/2
          rotate-[30deg]
          transform
          bg-[#F59707]
          shadow-[0_0_10px_#F59707,0_0_20px_#F59707,0_0_30px_#F59707]
        '
      />

      {/* Sign frame */}
      <div
        className='
          relative
          flex
          h-12
          w-36
          items-center
          justify-center
          rounded-xl
          border-4
          border-[#F59707]
          bg-transparent
          shadow-[0_0_10px_#F59707,0_0_20px_#F59707,0_0_30px_#F59707]
          backdrop-blur-sm
          sm:h-12
          sm:w-36
        '
      >
        {/* Neon text */}
        <motion.h1
          animate={{
            opacity: isFlickering ? [1, 0.7, 1] : 1,
            textShadow: isFlickering
              ? isOpen
                ? [
                    // ABIERTO - parpadeo con #F59707
                    '0 0 5px #F59707, 0 0 10px #F59707, 0 0 15px #F59707',
                    '0 0 3px #F59707, 0 0 6px #F59707, 0 0 9px #F59707',
                    '0 0 5px #F59707, 0 0 10px #F59707, 0 0 15px #F59707'
                  ]
                : [
                    // CERRADO - parpadeo con #FF7043
                    '0 0 5px #FF7043, 0 0 10px #FF7043, 0 0 15px #FF7043',
                    '0 0 3px #FF7043, 0 0 6px #FF7043, 0 0 9px #FF7043',
                    '0 0 5px #FF7043, 0 0 10px #FF7043, 0 0 15px #FF7043'
                  ]
              : // Si NO está parpadeando:
                isOpen
                ? '0 0 5px #F59707, 0 0 10px #F59707, 0 0 15px #F59707'
                : '0 0 5px #FF7043, 0 0 10px #FF7043, 0 0 15px #FF7043'
          }}
          transition={{
            duration: 0.5,
            repeat: isFlickering ? Infinity : 0,
            repeatType: 'reverse'
          }}
          className='
            text-xl
            font-extrabold
            tracking-widest
            text-white
            sm:text-xl
          '
        >
          {isOpen ? 'ABIERTO' : 'CERRADO'}
        </motion.h1>
      </div>
    </motion.div>
  )
}

export default function DashboardPage() {
  // Estado para los modales
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  // Estado de autenticación y login
  const [isLoginVisible, setIsLoginVisible] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Usuarios de prueba
  const users: { [key: string]: string } = {
    admin: '12345',
    user: 'password'
  }

  const handleLogin = () => {
    if (users[username] && users[username] === password) {
      setIsLoginVisible(false)
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div>
      {/* Botón sutil de Login en la esquina superior derecha (o donde desees) */}
      {!isAuthenticated && !isLoginVisible && (
        <button
          onClick={() => setIsLoginVisible(true)}
          className='absolute right-4 top-10       rounded bg-transparent px-3 py-1 text-xs font-semibold hover:text-gray-700 md:right-32 lg:right-36
    '
        >
          Login
        </button>
      )}

      {isLoginVisible ? (
        <div className='flex h-full flex-col items-center justify-center px-4 pt-20 sm:px-0'>
          <div className='w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-xl'>
            <h2 className='text-center text-3xl font-bold text-gray-800'>
              Iniciar Sesión
            </h2>
            <p className='mt-1 text-center text-sm text-gray-500'>
              ¡Bienvenido de nuevo!
            </p>

            {/* Input usuario */}
            <div className='mt-6'>
              <label className='mb-1 block text-sm font-semibold text-gray-700'>
                Usuario
              </label>
              <input
                type='text'
                placeholder='Ingrese su usuario'
                value={username}
                onChange={e => setUsername(e.target.value)}
                className='
          w-full
          rounded-lg
          border
          border-gray-300
          p-2
          text-sm
          focus:border-blue-500
          focus:outline-none
        '
              />
            </div>

            {/* Input contraseña */}
            <div className='mt-4'>
              <label className='mb-1 block text-sm font-semibold text-gray-700'>
                Contraseña
              </label>
              <input
                type='password'
                placeholder='Ingrese su contraseña'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='
          w-full
          rounded-lg
          border
          border-gray-300
          p-2
          text-sm
          focus:border-blue-500
          focus:outline-none
        '
              />
            </div>

            {/* Botones de Acción */}
            <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
              <button
                onClick={handleLogin}
                className='
          flex-1
          rounded-lg
          bg-blue-500
          px-4
          py-2
          text-sm
          font-semibold
          text-white
          transition-colors
          duration-300
          hover:bg-blue-600
          focus:outline-none
          focus:ring-2
          focus:ring-blue-300
        '
              >
                Iniciar Sesión
              </button>

              {/* Botón Volver */}
              <button
                onClick={() => setIsLoginVisible(false)}
                className='
          flex-1
          rounded-lg
          border
          border-gray-300
          px-4
          py-2
          text-sm
          font-semibold
          text-gray-700
          hover:bg-gray-100
          focus:outline-none
          focus:ring-2
          focus:ring-gray-200
        '
              >
                Volver
              </button>
            </div>

            {/* Mensaje de error */}
            {error && (
              <p className='mt-4 text-center text-sm text-red-500'>{error}</p>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Cartel principal */}
          <HangingNeonSign isAuthenticated={isAuthenticated} />

          <div className='flex flex-col items-center justify-center lg:flex-row'>
            <section className='flex flex-col items-center justify-center px-4 py-8 lg:ml-12'>
              <div>
                <h1 className='text-center text-4xl font-extrabold leading-tight sm:text-6xl'>
                  <span className='bg-span-bg bg-clip-text text-transparent'>
                    Urban Bite
                  </span>
                  <br />
                  <p className='text-3xl sm:text-5xl'>
                    El Arte del Sabor Urbano
                  </p>
                  <p className='pt-6 text-xl sm:text-lg'>
                    ¡La mejor experiencia en sabores!
                  </p>
                </h1>
                <div className='my-4 px-6 text-center text-lg text-text-secondary sm:text-base'>
                  Disfruta de nuestras auténticas pastas artesanales, pizzas de
                  primer nivel y servicio de catering para tus eventos.
                </div>
                <div className='mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center'>
                  <Button
                    color='default'
                    radius='full'
                    size='md'
                    className='w-full text-sm sm:w-auto'
                    onPress={openModal}
                  >
                    Ver Menú
                  </Button>

                  {/* Botón que abre el segundo modal de contacto para eventos */}
                  <Button
                    radius='full'
                    size='md'
                    color='secondary'
                    className='w-full text-sm sm:w-auto'
                    onPress={openContactModal}
                  >
                    Contáctanos para eventos
                  </Button>
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
            {/* Productos Populares */}
            <section className='mb-10'>
              <h2 className='mb-6 text-center text-2xl font-bold sm:text-xl'>
                Productos Populares
              </h2>
              <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                {popularItems.map(item => (
                  <Card
                    key={item.id}
                    className='w-full max-w-sm rounded-lg border border-gray-200 shadow-md transition-shadow hover:shadow-xl'
                  >
                    <CardBody className='p-0'>
                      <Image
                        src={item.image}
                        alt={item.name}
                        className='aspect-square w-full rounded-t-lg object-cover'
                      />
                    </CardBody>

                    <CardFooter className='flex flex-col p-4'>
                      <h3 className='mb-3 text-xl font-bold text-gray-800 sm:text-lg'>
                        {item.name}
                      </h3>
                      <div className='grid w-full grid-cols-2 gap-2'>
                        {item.prices?.map((priceOption, index) => (
                          <div
                            key={index}
                            className='flex flex-col items-center justify-center rounded-lg bg-gray-100 p-2'
                          >
                            <span className='text-xs text-gray-500'>
                              {priceOption.label}
                            </span>
                            <span className='text-sm font-semibold text-gray-700'>
                              {priceOption.value} Bs.
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
            <CarouselCateg />
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
                  Desde pastas caseras hasta una selección de masitas y comida
                  para tus eventos.
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
        </>
      )}

      {/* Modal del Menú */}
      <MenuModal isVisible={isModalOpen} onClose={closeModal} />

      {/* Modal de Contacto para Eventos */}
      <ContactModal
        isVisible={isContactModalOpen}
        onClose={closeContactModal}
      />
    </div>
  )
}

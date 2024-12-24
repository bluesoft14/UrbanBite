import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Badge,
  Divider
} from '@nextui-org/react'
import {
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaTiktok
} from 'react-icons/fa'

interface ProfileCardProps {
  name: string
  title: string
  bio: string
  stats: {
    eventos: number
    platos: number
    clientes: number
  }
  avatar: string
  socialLinks: {
    instagram?: string
    whatsapp?: string
    facebook?: string
    tiktok?: string
  }
}

export default function ContactoCard({
  name = 'Gustavo Urban',
  title = 'Chef para Eventos',
  bio = 'Chef apasionado especializado en crear experiencias culinarias inolvidables para eventos especiales. ¡Conectemos y hagamos que tu ocasión sea extraordinaria!',
  stats = {
    eventos: 45,
    platos: 120,
    clientes: 300
  },
  avatar = '/image/profile.jpeg',
  socialLinks = {
    instagram: 'https://instagram.com',

    whatsapp: 'https://whatsapp.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://www.tiktok.com/@urban_bite_pizzas'
  }
}: ProfileCardProps) {
  const socialIcons = [
    { icon: FaFacebook, link: socialLinks.facebook },
    { icon: FaInstagram, link: socialLinks.instagram },
    { icon: FaWhatsapp, link: socialLinks.whatsapp },
    { icon: FaTiktok, link: socialLinks.tiktok }
  ]

  return (
    <div className='h-full bg-[#121212] p-5 sm:p-8'>
      <Card className='mx-2 mt-0 max-w-7xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white shadow-xl'>
        <CardBody className='p-6 sm:p-8 md:p-10'>
          <div className='mb-8 flex flex-col items-center text-center'>
            <div className='relative mb-4'>
              <Badge
                content='CHEF'
                color='secondary'
                placement='top-right'
                className='p-1'
                showOutline={false}
              >
                <Avatar
                  src={avatar}
                  alt={name}
                  className='h-20 w-20 border-4 border-white shadow-lg sm:h-24 sm:w-24 md:h-28 md:w-28'
                />
              </Badge>
            </div>

            <h2 className='mb-2 text-xl font-bold sm:text-2xl md:text-3xl'>
              {name}
            </h2>
            <p className='mb-4 text-base font-light sm:text-lg md:text-xl'>
              {title}
            </p>
            <p className='mb-6 max-w-lg text-sm sm:text-base md:text-lg'>
              {bio}
            </p>

            <div className='mb-6 flex flex-wrap justify-center gap-4 sm:gap-6'>
              {socialIcons.map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700 shadow-lg transition-transform hover:scale-110 sm:h-12 sm:w-12 md:h-14 md:w-14'
                >
                  <Icon className='h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7' />
                </a>
              ))}
            </div>

            <div className='mb-6 flex flex-wrap justify-center gap-4'>
              {[
                '¿Qué servicios ofreces para eventos especiales?',
                '¿Ofreces menús personalizados?',
                '¿Cuál es el precio de tus pizzas artesanales?',
                '¿Tienes opciones veganas o vegetarianas?',
                '¿Puedo reservarte para un evento este fin de semana?'
              ].map((pregunta, index) => (
                <Button
                  key={index}
                  as='a'
                  href={`https://wa.me/69935453?text=${encodeURIComponent(pregunta)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  variant='bordered'
                  className='border-white text-xs text-white hover:bg-white hover:text-blue-700 sm:text-sm md:text-base'
                >
                  {pregunta}
                </Button>
              ))}
            </div>
          </div>

          <Divider className='my-8 border-white opacity-70' />

          <div className='mx-4 flex flex-col items-center gap-6 sm:mx-16 sm:flex-row lg:mx-32'>
            <div className='flex-1'>
              <div className='mb-4 flex justify-between text-center'>
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key}>
                    <p className='text-xl font-bold sm:text-2xl'>{value}</p>
                    <p className='text-xs capitalize sm:text-sm'>
                      {key === 'eventos'
                        ? 'Eventos Realizados'
                        : key === 'platos'
                          ? 'Platos Creados'
                          : key === 'clientes'
                            ? 'Clientes Satisfechos'
                            : key}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

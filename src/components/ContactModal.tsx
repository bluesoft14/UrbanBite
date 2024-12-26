'use client'

import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Badge,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/react'
import {
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaTiktok
} from 'react-icons/fa'

export default function ContactModal({
  isVisible,
  onClose
}: {
  isVisible: boolean
  onClose: () => void
}) {
  const name = 'Gustavo Urban'
  const title = 'Chef para Eventos'
  const bio =
    'Chef apasionado especializado en crear experiencias culinarias inolvidables para eventos especiales. ¡Conectemos y hagamos que tu ocasión sea extraordinaria!'
  const stats = {
    eventos: 45,
    platos: 120,
    clientes: 300
  }
  const avatar = '/image/profile.jpeg'
  const socialLinks = {
    instagram: 'https://instagram.com',
    whatsapp: 'https://whatsapp.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://www.tiktok.com/@urban_bite_pizzas'
  }

  const socialIcons = [
    { icon: FaFacebook, link: socialLinks.facebook },
    { icon: FaInstagram, link: socialLinks.instagram },
    { icon: FaWhatsapp, link: socialLinks.whatsapp },
    { icon: FaTiktok, link: socialLinks.tiktok }
  ]
  return (
    <Modal
      isOpen={isVisible}
      onClose={onClose}
      aria-labelledby='modal-title'
      closeButton
      size='4xl'
      className='m-0 p-0'
    >
      <ModalContent className='m-5 p-0'>
        <ModalHeader className='m-0 p-0'></ModalHeader>
        <ModalBody className='m-0 p-0'>
          <div>
            <Card className='mx-0 mt-0 max-w-7xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white shadow-xl'>
              <CardBody className='p-6 sm:p-8 md:p-10'>
                <div className='mb-6 flex flex-col items-center text-center'>
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
                        className='h-16 w-16 border-4 border-white shadow-lg sm:h-20 sm:w-20 md:h-24 md:w-24'
                      />
                    </Badge>
                  </div>

                  <h2 className='mb-0 text-xl font-bold'>{name}</h2>
                  <p className='mb-4 text-xs font-light '>{title}</p>
                  <p className='mb-6 max-w-lg text-sm '>{bio}</p>

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

                  <div className='mb-0 flex flex-wrap justify-center gap-4'>
                    {[
                      '¿Qué servicios ofreces para eventos especiales?',
                      '¿Ofreces menús personalizados?',
                      '¿Tienes opciones veganas o vegetarianas?',
                      '¿Puedo reservarte para un evento este fin de semana?'
                    ].map((pregunta, index) => (
                      <Button
                        key={index}
                        as='a'
                        href={`https://wa.me/59169935453?text=${encodeURIComponent(pregunta)}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        variant='bordered'
                        className='border-white text-xs text-white hover:bg-white hover:text-blue-700 sm:text-xs md:text-xs'
                      >
                        {pregunta}
                      </Button>
                    ))}
                  </div>
                </div>
                {/* 
                <Divider className='my-4 border-white opacity-70' />

                <div className='mx-4 flex flex-col items-center gap-6 sm:mx-16 sm:flex-row lg:mx-32'>
                  <div className='flex-1'>
                    <div className='mb-4 flex justify-between gap-4 text-center'>
                      {Object.entries(stats).map(([key, value]) => (
                        <div key={key}>
                          <p className='text-xl font-bold sm:text-2xl'>
                            {value}
                          </p>
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
                </div> */}
                <div className=' flex justify-end pb-0 pr-1 pt-0 text-end'>
                  <Button
                    color='danger'
                    className=' px-6 py-2 text-sm font-semibold'
                    onPress={onClose}
                  >
                    Cerrar
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </ModalBody>
        <ModalFooter className='m-0 p-0'></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

'use client'

import {
  Modal,
  Button,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'

export default function MenuModal({
  isVisible,
  onClose
}: {
  isVisible: boolean
  onClose: () => void
}) {
  // Ahora cada item tiene un arreglo de 4 precios fijos
  const menuItems = [
    {
      name: 'Pizza Carnivora',
      prices: [12, 15, 20, 40],
      image: '/image/carnivora.png',
      category:
        'Mozzarella, jamón, chorizo ahumado, carne molida y salsa de tomate'
    },
    {
      name: 'Pizza Americana',
      prices: [12, 15, 20, 40],
      image: '/image/americana.png',
      category: 'Mozzarella, jamón, tocino y salsa de tomate'
    },
    {
      name: 'Pizza Hawaiana',
      prices: [12, 15, 20, 40],
      image: '/image/hawaiana.jpeg',
      category: 'Mozzarella, jamón, piña picada y salsa de tomate'
    },
    {
      name: 'Pizza Primavera',
      prices: [12, 15, 20, 40],
      image: '/image/primavera2.png?height=200&width=200',
      category: 'Lonjas de chorizo, maíz amarillo y salsa de tomate'
    },
    {
      name: 'Pizza Classic',
      prices: [12, 15, 20, 40],
      image: '/image/classic.jpeg?height=200&width=200',
      category: 'Mozaarella, jamón y salsa de tomate'
    },
    {
      name: 'Pizza Bolivianita',
      prices: [12, 15, 20, 40],
      image: '/image/boliv.jpeg?height=200&width=200',
      category: 'Mozzarella, carne, morrón, cebolla y salsa de tomate'
    },
    {
      name: 'Pizza Italiana',
      prices: [12, 15, 20, 40],
      image: '/image/italiana.webp?height=200&width=200',
      category:
        'Mozzarella, rodajas de tomate, lonjas de tocino y salsa de tomate'
    },
    {
      name: 'Pizza Margarita',
      prices: [12, 15, 20, 40],
      image: '/image/margarita.jpeg?height=200&width=200',
      category: 'Mozzarella, rodajas de tomate y salsa de tomate'
    },
    {
      name: 'Pizza Lasagna',
      prices: [12, 15, 20, 40],
      image: '/image/lasagna.png?height=200&width=200',
      category:
        'Salsa boloñesa de carne, pasta casera, queso mozzarella y salsa de tomate'
    }
  ]

  return (
    <Modal
      isOpen={isVisible}
      onClose={onClose}
      aria-labelledby='modal-title'
      closeButton
      size='4xl'
    >
      <ModalContent>
        <ModalHeader className='flex justify-center text-center'>
          <h2 id='modal-title' className='text-2xl font-bold text-orange-600'>
            Menú de Urban Bite
          </h2>
        </ModalHeader>
        <ModalBody>
          <div className='max-h-[70vh] overflow-y-auto px-4'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
                >
                  {/* Imagen */}
                  <div className='h-40 w-40 overflow-hidden rounded-full shadow-md'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className='h-full w-full object-cover'
                    />
                  </div>

                  {/* Nombre y descripción */}
                  <div className='mt-4 text-center'>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      {item.name}
                    </h3>
                    <p className='mt-1 text-sm italic text-gray-600'>
                      {item.category}
                    </p>
                  </div>

                  {/* Cuatro Precios */}
                  <div className='mt-3 grid w-full max-w-[200px] grid-cols-2 gap-2'>
                    {item.prices.map((priceValue, idx) => (
                      <div
                        key={idx}
                        className='flex items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-md'
                      >
                        Bs. {priceValue}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='danger'
            className='px-6 py-2 text-sm font-semibold'
            onPress={onClose}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

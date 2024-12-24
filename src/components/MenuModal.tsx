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
  const menuItems = [
    {
      name: 'Pizza Americana',
      price: 20,
      image: '/image/margarita.jpg',
      category: 'queso, choclo, chorizo en rodajas y salsa de tomate'
    },
    {
      name: 'Pizza Margarita',
      price: 22.99,
      image: '/image/carne.jpeg',
      category: 'queso, choclo, chorizo en rodajas y salsa de tomate'
    },
    {
      name: 'Beef Burger with Melted Cheese',
      price: 27.99,
      image: '/image/margarita.jpg',
      category: 'Burgers'
    },
    {
      name: 'Chicken Steak with Teriyaki Sauce',
      price: 41.99,
      image: '/image/margarita.jpg?height=200&width=200',
      category: 'Steaks'
    },
    {
      name: 'Beef Steak with Garlic and Parsley',
      price: 48.99,
      image: '/image/margarita.jpg?height=200&width=200',
      category: 'Steaks'
    },
    {
      name: 'Fish Steak with Hollandaise Sauce',
      price: 37.99,
      image: '/image/margarita.jpg?height=200&width=200',
      category: 'Steaks'
    },
    {
      name: 'Spaghetti Bolognese with Cheese',
      price: 32.99,
      image: '/image/margarita.jpg?height=200&width=200',
      category: 'Pasta'
    },
    {
      name: 'Rotini with Creamy Tomato Sauce',
      price: 36.99,
      image: '/image/margarita.jpg?height=200&width=200',
      category: 'Pasta'
    },
    {
      name: 'Chicken and Bacon Penne Pasta',
      price: 37.99,
      image: '/image/margarita.jpg?height=200&width=200',
      category: 'Pasta'
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
          <h2 id='modal-title' className='text-3xl font-bold text-orange-600'>
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
                  <div className='h-40 w-40 overflow-hidden rounded-full shadow-md'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div className='mt-4 text-center'>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      {item.name}
                    </h3>
                    <p className='mt-1 text-sm italic text-gray-600'>
                      {item.category}
                    </p>
                    <div className='mt-3 inline-block rounded-full bg-orange-500 px-6 py-2 text-lg font-bold text-white shadow-md'>
                      Bs. {item.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='danger'
            className='px-6 py-2 text-lg font-semibold'
            onPress={onClose}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

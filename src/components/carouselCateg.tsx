import { useState, useEffect } from 'react'
import { Button, Image } from '@nextui-org/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const menuCategories = [
  { id: 1, name: 'Pizzas', icon: '/image/pizza.jpeg' },
  { id: 2, name: 'Pastas', icon: '/image/pasta.jpeg' },
  { id: 3, name: 'Entradas', icon: '/image/entrada.jpeg' },
  { id: 4, name: 'Postres', icon: '/image/postre.jpeg' },
  { id: 5, name: 'Bebidas', icon: '/image/bebida.jpeg' },
  { id: 6, name: 'Catering', icon: '/image/caterin.jpeg' }
]

export const CarouselCateg = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(3)

  // Ajusta el número de elementos visibles según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsToShow(3)
      } else if (window.innerWidth <= 1024) {
        setItemsToShow(4)
      } else {
        setItemsToShow(5)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize() // Set initial value
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNext = () => {
    if (currentIndex < menuCategories.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section>
      <h2 className='mb-5 text-center text-2xl font-bold text-amber-500 sm:text-xl'>
        Quizá te puede interesar preguntar por
      </h2>
      <div className='relative'>
        <div className='overflow-hidden'>
          <div
            className='flex transition-transform duration-300 ease-in-out'
            style={{
              transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`
            }}
          >
            {menuCategories.map(category => (
              <Button
                key={category.id}
                color='primary'
                variant='flat'
                className='flex h-[220px] w-full min-w-[190px] flex-col items-center py-1 sm:min-w-[100px]'
                aria-pressed='false'
                style={{ flex: `0 0 ${100 / itemsToShow}%` }}
              >
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={180}
                  height={180}
                  className='mb-1'
                />
                <span className='text-center text-sm font-medium'>
                  {category.name}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          isIconOnly
          onClick={handlePrev}
          className='absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg'
          aria-label='Previous'
          disabled={currentIndex === 0}
        >
          <ChevronLeft className='h-5 w-5' />
        </Button>
        <Button
          isIconOnly
          onClick={handleNext}
          className='absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg'
          aria-label='Next'
          disabled={currentIndex >= menuCategories.length - itemsToShow}
        >
          <ChevronRight className='h-5 w-5' />
        </Button>

        {/* Dots Navigation */}
        <div className='mt-4 flex justify-center gap-2'>
          {Array.from({
            length: Math.ceil(menuCategories.length / itemsToShow)
          }).map((_, i) => (
            <Button
              key={i}
              isIconOnly
              size='sm'
              onClick={() => setCurrentIndex(i)}
              className={`h-2 w-2 min-w-0 rounded-full p-0 ${
                i === Math.floor(currentIndex / itemsToShow)
                  ? 'bg-warning'
                  : 'bg-default-200'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { Card, CardBody, CardHeader, Button } from '@nextui-org/react'

export default function PrecioCards() {
  const plans = [
    {
      name: 'FREE',
      price: '0',
      period: '/Month',
      features: [
        'Platform-hosted store',
        '30 products a month',
        '5 product images',
        'Community support'
      ],
      color: 'bg-gradient-to-b from-pink-500 to-pink-600',
      buttonClass: 'bg-gray-300 hover:bg-gray-400'
    },
    {
      name: 'MERCHANT',
      price: '99',
      period: '/Month',
      features: [
        'Self-hosted store',
        '500 products a month',
        'Custom shipping options',
        '24/7 support'
      ],
      color: 'bg-gradient-to-b from-purple-500 to-purple-600',
      buttonClass: 'bg-purple-600 hover:bg-purple-700 text-white'
    },
    {
      name: 'ENTERPRISE',
      price: '179',
      period: '/Month',
      features: [
        'Self-hosted store',
        'Unlimited products a month',
        'Product variations',
        'Custom shipping options',
        '24/7 support'
      ],
      color: 'bg-gradient-to-b from-teal-500 to-teal-600',
      buttonClass: 'bg-gray-300 hover:bg-gray-400'
    }
  ]

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-pink-100 via-purple-100 to-teal-100 p-8 lg:flex-row'>
      {plans.map((plan, index) => (
        <Card
          key={plan.name}
          className={`w-full max-w-sm ${index === 1 ? 'lg:-mt-4' : ''}`}
          shadow='lg'
        >
          <CardHeader className='relative p-0'>
            <div className={`h-48 w-full ${plan.color} rounded-t-xl`}>
              <div className='absolute bottom-0 w-full'>
                <svg
                  viewBox='0 0 100 100'
                  className='w-full text-white'
                  preserveAspectRatio='none'
                  style={{ height: '40px' }}
                >
                  <path
                    d='M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
                <div className='flex items-start'>
                  <span className='text-2xl'>$</span>
                  <span className='text-6xl font-bold'>{plan.price}</span>
                  <span className='text-xl'>.00</span>
                </div>
                <span className='text-lg opacity-90'>{plan.period}</span>
              </div>
            </div>
          </CardHeader>
          <CardBody className='flex flex-col gap-6 p-6'>
            <h3 className='text-center text-xl font-semibold'>{plan.name}</h3>
            <ul className='flex flex-col gap-3'>
              {plan.features.map((feature, i) => (
                <li key={i} className='text-center text-gray-600'>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className={`mt-auto w-full font-semibold ${plan.buttonClass}`}
              size='lg'
            >
              CHOOSE PLAN
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

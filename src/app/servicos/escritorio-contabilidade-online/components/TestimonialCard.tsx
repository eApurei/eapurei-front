'use client'

import Image from 'next/image'

import { TestimonialCardProps } from '@/@types'

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="mx-4 w-96 flex-shrink-0 rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start gap-4">
        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
          <Image
            src={testimonial.avatar || '/placeholder.svg'}
            alt={testimonial.name}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-primary-100">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <p className="leading-relaxed text-gray-700">
        &apos;{testimonial.testimonial}&apos;
      </p>
    </div>
  )
}

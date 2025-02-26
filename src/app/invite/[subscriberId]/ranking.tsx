import Image from 'next/image'

import { getRanking } from '@/http/api'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map(({ id, name, score }, index) => (
          <div
            className="relative rounde-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            key={id}
          >
            <span className="text-sm text-gray-300 leading-none">
              <span className="font=semibold">
                {' '}
                {index + 1}° | {name}
              </span>
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              {score}
            </span>

            <Image
              src={index === 0 ? gold : index === 1 ? silver : cooper}
              alt={`medal-${index === 0 ? 'gold' : index === 1 ? 'silver' : 'cooper'}`}
              className="absolute top-0 right-8"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

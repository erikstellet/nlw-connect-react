'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { postSubscriptions } from '@/http/api'
import { useRouter, useSearchParams } from 'next/navigation'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite uma e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export default function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver<SubscriptionSchema>(subscriptionSchema),
  })

  async function onSubscribe({ email, name }: SubscriptionSchema) {
    const referrer = searchParams.get('referrer')
    const { subscriberId } = await postSubscriptions({ email, name, referrer })

    router.push(`invite/${subscriberId}`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>

            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>

          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>

            <InputField
              placeholder="E-mail"
              type="email"
              {...register('email')}
            />
          </InputRoot>

          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email?.message}
            </p>
          )}
        </div>
      </div>

      <Button title="Confirmar" type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}

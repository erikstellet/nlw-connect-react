'use client'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function handleCopyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        defaultValue={inviteLink}
        placeholder="'lucide-react'"
        readOnly
      />

      <IconButton className="-mr-2" onClick={handleCopyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}

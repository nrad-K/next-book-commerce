'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5'

export function LoginCard() {
  return (
    <Card className="w-fit text-center">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button variant="secondary" className="w-full">
          <IoLogoGoogle size={16} className="mr-2" /> Login with Email
        </Button>
        <Button className="w-full">
          <IoLogoGithub size={16} className="mr-2" /> Login with Github
        </Button>
      </CardContent>
    </Card>
  )
}

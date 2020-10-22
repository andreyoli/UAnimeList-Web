import React from 'react'

import { Button, Person } from './styles'

const LoginButton: React.FC = () => {
  return (
    <>
      <Button>
        <Person size="20px" />
        Login
      </Button>
    </>
  )
}

export default LoginButton

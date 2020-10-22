import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { InputGeneric } from './styles'

interface IInput {
  name: string
}

const Input: React.FC<IInput> = ({ name }) => {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return <InputGeneric ref={inputRef} />
}

export default Input

import React from 'react'
import s from './NotFoundBlock.module.scss'

const NotFoundBlock: React.FC = () => {
  return (
    <h1 className={s.notFound}>Страница не найдена <span>&#128579;</span></h1>
  )
}

export default NotFoundBlock
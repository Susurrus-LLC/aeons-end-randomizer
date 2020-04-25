import React from 'react'

import styles from './buttonLink.module.sass'

type PropTypes = {
  classes?: string
  onClick?: Function
  children?: React.ReactNode
}

const ButtonLink = (props: PropTypes) => {
  const buildClasses = () =>
    props.classes !== undefined
      ? `${styles.buttonLink} ${props.classes}`
      : styles.buttonLink

  return (
    <button
      className={buildClasses()}
      onClick={() => (props.onClick !== undefined ? props.onClick() : null)}
      type='button'
    >
      {props.children}
    </button>
  )
}

export default ButtonLink

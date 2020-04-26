import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { Data, Set } from '../../data'

import styles from './SetCard.module.sass'

type PropTypes = {
  set: Set
  data: Data
  setData: Function
  base: Boolean
  promo: Boolean
}

const SetCard = (props: PropTypes) => {
  const { url } = useRouteMatch()

  const setClasses = () => {
    let classes: string = `${styles.setCard}`

    if (props.base) {
      classes += ` ${styles.baseSet}`
    } else {
      classes += ` ${styles.expansionSet}`
    }

    if (props.promo) {
      classes += ` ${styles.promoSet}`
    }

    return classes
  }
  return (
    <div className={setClasses()}>
      <div className={styles.cardArea}>
        <label>
          <input type='checkbox' /> Set
        </label>
      </div>
      <div className={styles.cardArea}>
        {props.base ? (
          <h3 className={styles.setTitle}>{props.set.set}</h3>
        ) : (
          <h4 className={styles.setTitle}>{props.set.set}</h4>
        )}
      </div>
      {props.base && !props.promo ? (
        <div className={styles.cardArea}>
          <label>
            <input type='checkbox' /> Wave &darr;
          </label>
        </div>
      ) : null}
      <div className={styles.cardArea}>
        <p>
          <Link
            to={`${url}/${props.set.code}`}
            className={styles.customizeLink}
          >
            Customize &rarr;
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SetCard

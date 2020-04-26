import React, { useState, useEffect, useRef } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { Data, Set, Selection } from '../../data'

import styles from './SetCard.module.sass'

type PropTypes = {
  set: Set
  data: Data
  setData: Function
  base: Boolean
  promo: Boolean
  checkSelected: (set: Set | 'all', wave: Boolean) => Selection
}

const SetCard = (props: PropTypes) => {
  const { url } = useRouteMatch()
  const [sel, setSel] = useState(props.checkSelected(props.set, false))
  const setCheckRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const { availableCards, availableMages, availableNemeses } = props.data
  const { checkSelected, set } = props
  useEffect(() => {
    setSel(checkSelected(set, false))
  }, [availableCards, availableMages, availableNemeses, checkSelected, set])

  useEffect(() => {
    setCheckRef.current.checked = sel === 'all' || sel === 'partial'
    setCheckRef.current.indeterminate = sel === 'partial'
  }, [sel, setCheckRef])

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
          <input type='checkbox' ref={setCheckRef} /> Set
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

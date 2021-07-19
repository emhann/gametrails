import React from 'react'
import {Link} from 'react-router-dom'
import Icon from 'components/shared/icons/faIcons'
import styles from 'components/misc/toolbar.scss'

const Toolbar = () => {
  return (
    <div className={styles.bar}>
      <Link className={styles.title} to='/'>GameTrails</Link>
      <Link className={styles.icon} to='/profile'>
        <Icon icon='user-circle' />
      </Link>
    </div>
  )
}
  
  export default Toolbar

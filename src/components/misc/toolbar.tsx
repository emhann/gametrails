import React from 'react'
import {Link} from 'react-router-dom'

import styles from 'components/misc/toolbar.scss'

const Toolbar = () => (
    <div className={styles.bar}>
      <Link className={styles.title}to='/'>GameTrails</Link>
    </div>
  )
  
  export default Toolbar

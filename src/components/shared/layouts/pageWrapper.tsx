import React from 'react'

import Toolbar from 'components/misc/toolbar'

import styles from './pageWrapper.scss'

type Props = {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => (
  <div className={styles.page}>
    <Toolbar/>
    <div className={styles.content}>{children}</div>
  </div>
)

export default PageWrapper
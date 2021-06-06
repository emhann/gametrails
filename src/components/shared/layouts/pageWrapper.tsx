import React from 'react'

import styles from './pageWrapper.scss'

type Props = {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => (
  <div className={styles.page}>
    {/* Insert toolbar here */}
    <div className={styles.content}>{children}</div>
  </div>
)

export default PageWrapper
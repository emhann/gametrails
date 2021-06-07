import React from 'react'

import styles from 'components/misc/welcomeModal.scss'

const WelcomeModal = () => (
    <>
        <div className={styles.welcome}>
            <h1>Welcome to GameTrails</h1>
        </div>
        <div className={styles.advantages}>
            <p>Sign up now.</p>
        </div>
    </>
)

export default WelcomeModal
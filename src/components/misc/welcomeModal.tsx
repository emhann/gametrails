import React from 'react'

import styles from 'components/misc/welcomeModal.scss'

const WelcomeModal = () => (
    <>
        <div className={styles.welcome}>
            <h1 className={styles.title}>Welcome to GameTrails</h1>
            <div>
                <div className={styles.advantages}>Sign up now.</div>
            </div>
        </div>
            
    </>
)

export default WelcomeModal
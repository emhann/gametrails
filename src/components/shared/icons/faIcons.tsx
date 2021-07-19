import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FaIcons from '@fortawesome/free-solid-svg-icons'
import * as FaRegularIcons from '@fortawesome/free-regular-svg-icons'

import styles from './faIcons.scss'

export const IconLibrary = {
    info: FaIcons.faInfoCircle,
    'arrow-up': FaIcons.faArrowUp,
    'arrow-down': FaIcons.faArrowDown,
    'arrow-right': FaIcons.faArrowRight,
    'arrow-left': FaIcons.faArrowLeft,
    sync: FaIcons.faSync,
    folder: FaIcons.faFolder,
    'folder-open': FaIcons.faFolderOpen,
    file: FaIcons.faFile,
    upload: FaIcons.faUpload,
    download: FaIcons.faDownload,
    trash: FaIcons.faTrash,
    'user-circle': FaIcons.faUserCircle,
}

export const RegularIconLibrary = {
    save: FaRegularIcons.faSave,
    trash: FaRegularIcons.faTrashAlt,
}

export type IconType = keyof typeof IconLibrary
export type RegularIconType = keyof typeof RegularIconLibrary

export type Props = { className?: string } & (
    | { icon: IconType; regularIcon?: never }
    | { icon?: never; regularIcon: RegularIconType }
  )
  
  const Icon = ({ icon, regularIcon, className = '' }: Props) => (
    <>
      {icon && <FontAwesomeIcon className={className} icon={IconLibrary[icon]} />}
      {regularIcon && <FontAwesomeIcon className={className} icon={RegularIconLibrary[regularIcon]} />}
    </>
  )
  
  export default Icon
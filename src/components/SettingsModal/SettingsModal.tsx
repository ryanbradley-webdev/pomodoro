import { Dispatch, SetStateAction, useEffect, useState } from "react"
import styles from './SettingsModal.module.css'

export default function SettingsModal({
  visible,
  setVisible
}: {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}) {
  const [display, setDisplay] = useState('none')

  const applySettings = () => {
    setVisible(false)
  }

  useEffect(() => {
    setDisplay(visible ? '' : 'none')
  }, [visible])

  return (
    <aside
      className={styles.modal_container}
      style={{
        display
      }}
    >
      
      <section
        className={styles.modal}
      >

        Settings

        <button
          onClick={applySettings}
        >
          Apply
        </button>

      </section>

    </aside>
  )
}

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import styles from './SettingsModal.module.css'
import CloseIcon from "../../assets/CloseIcon"

export default function SettingsModal({
  visible,
  setVisible
}: {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}) {
  const [display, setDisplay] = useState('none')

  const closeModal = () => {
    setVisible(false)
  }

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

        <div
          className={styles.heading}
        >

          <h2
            className={styles.heading_h2}
          >
            Settings
          </h2>

          <button
            onClick={closeModal}
          >
            <CloseIcon />
          </button>

        </div>

        <button
          onClick={applySettings}
        >
          Apply
        </button>

      </section>

    </aside>
  )
}

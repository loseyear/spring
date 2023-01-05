import { useEffect, useState } from 'react'
import { Panel, PanelGroup } from 'react-resizable-panels'

import ResizeHandle from './ResizeHandle'
import './root.css'
import styles from './styles.module.css'

export default function App() {
  const [showFirstPanel, setShowFirstPanel] = useState(true)
  const [showLastPanel, setShowLastPanel] = useState(true)

  useEffect(() => {
    console.log('showFirstPanel %s', showFirstPanel)
  }, [showFirstPanel])

  return (
    <div className={styles.Container}>
      <div className={styles.TopRow}>
        <p>
          <button
            className={styles.Button}
            onClick={() => setShowFirstPanel(!showFirstPanel)}
          >
            {showFirstPanel ? 'hide' : 'show'} top panel
          </button>
          &nbsp;
          <button
            className={styles.Button}
            onClick={() => setShowLastPanel(!showLastPanel)}
          >
            {showLastPanel ? 'hide' : 'show'} bottom panel
          </button>
        </p>
      </div>
      <div className={styles.BottomRow}>
        <PanelGroup autoSaveId="example" direction="vertical">
          {showFirstPanel && (
            <>
              <Panel className={styles.Panel} defaultSize={20} order={1}>
                <div className={styles.PanelContent}>top</div>
              </Panel>
              <ResizeHandle />
            </>
          )}
          <Panel className={styles.Panel} order={2}>
            <div className={styles.PanelContent}>middle</div>
          </Panel>
          {showLastPanel && (
            <>
              <ResizeHandle />
              <Panel className={styles.Panel} defaultSize={20} order={3}>
                <div className={styles.PanelContent}>bottom</div>
              </Panel>
            </>
          )}
        </PanelGroup>
      </div>
    </div>
  )
}

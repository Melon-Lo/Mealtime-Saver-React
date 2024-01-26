import { useContext } from "react"
import { AppTypeContext } from "../contexts/AppTypeContext"

export default function AppTypeSwitch() {
  const { appType, setAppType } = useContext(AppTypeContext)
  const className = appType === 'normal' ? 'normal' : 'server'

  return (
    <section id="appTypeSwitch" className={className}>
      <div className={'switchWrapper ' + className}>
        <h5
          className={'title ' +  className}
        >
          { appType === 'normal' ? '一般模式' : '伺服器模式'}
        </h5>
        <button
          className={'button ' + className}
          onClick={() => {
            let switchToClassName = ''
            if (appType === 'normal') {
              switchToClassName = 'server'
            } else {
              switchToClassName = 'normal'
            }
            setAppType(switchToClassName)
          }}
        >
          切換模式
        </button>        
      </div>
    </section>
  )
}
import { useContext } from "react"
import { FunctionsContext } from '../contexts/FunctionsContext'
import { AppTypeContext } from "../contexts/AppTypeContext"

export default function AppTypeSwitch() {
  const { switchAppType } = useContext(FunctionsContext)
  const { appType } = useContext(AppTypeContext)
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
          onClick={() => switchAppType()}
        >
          切換模式
        </button>        
      </div>
    </section>
  )
}
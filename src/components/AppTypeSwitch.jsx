import { useContext } from "react"
import { FunctionsContext } from '../contexts/FunctionsContext'
import { AppTypeContext } from "../contexts/AppTypeContext"
import { textData } from "../data/textData"

export default function AppTypeSwitch() {
  const { switchAppType } = useContext(FunctionsContext)
  const { appType } = useContext(AppTypeContext)
  const { normalMode, serverMode, switchMode } = textData.appTypeSwitch
  const className = appType === 'normal' ? 'normal' : 'server'

  return (
    <section id="appTypeSwitch" className={className}>
      <div className={'switchWrapper ' + className}>
        <h5
          className={'title ' +  className}
        >
          { appType === 'normal' ? normalMode : serverMode}
        </h5>
        <button
          className={'button ' + className}
          onClick={() => switchAppType()}
        >
          {switchMode}
        </button>        
      </div>
    </section>
  )
}
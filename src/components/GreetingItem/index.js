import './index.css'

const GreetingItem = props => {
  const {details, isActive, clickId} = props
  const {buttonText, id} = details
  const btnText = isActive ? 'active-btn' : 'button'

  const activeTab = () => {
    clickId(id)
  }
  return (
    <li className="list">
      <button type="button" className={btnText} onClick={activeTab}>
        {buttonText}
      </button>
    </li>
  )
}
export default GreetingItem

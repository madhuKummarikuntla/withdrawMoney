// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachItem, onDisplayAmount} = props
  const {value} = eachItem

  const onClickAdd = () => {
    onDisplayAmount(value)
  }
  return (
    <li className="li-con">
      <button className="button" type="button" onClick={onClickAdd}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem

// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDisplayAmount = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-con">
        <div className="atm-con">
          <div className="profile-con">
            <div className="head">
              <h1 className="letter">M</h1>
            </div>

            <p className="name">Madhu</p>
          </div>
          <div className="bal-con">
            <p className="your-bal">Your Balance</p>
            <div className="two-thou">
              <p className="digi">{balance}</p>
              <p className="in-Rs">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="li-items">
            {denominationsList.map(each => (
              <DenominationItem
                eachItem={each}
                key={each.id}
                onDisplayAmount={this.onDisplayAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal

import {Component} from 'react'
import GreetingItem from '../GreetingItem'
import GreetingImage from '../GreetingImage'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {activeId: languageGreetingsList[0].id}

  clickId = id => {
    this.setState({activeId: id})
  }

  changeImg = () => {
    const {activeId} = this.state
    const updateImg = languageGreetingsList.filter(
      eachPic => eachPic.id === activeId,
    )
    return updateImg
  }

  render() {
    const updateImg = this.changeImg()
    const {activeId} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="list-item">
          {languageGreetingsList.map(each => (
            <GreetingItem
              key={each.id}
              details={each}
              isActive={activeId === each.id}
              clickId={this.clickId}
            />
          ))}
        </ul>
        {updateImg.map(eachImg => (
          <GreetingImage key={eachImg.id} details={eachImg} />
        ))}
      </div>
    )
  }
}
export default Greetings

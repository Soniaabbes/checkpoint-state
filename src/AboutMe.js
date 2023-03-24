import React, { Component } from 'react'

export class AboutMe extends Component {
  render() {
    return (
      <div>

<p>Looking for my first job, I decided to go with web development.
              I enjoy working on the code and developing beautiful websites.
            </p>
            <>
            <span style={{fontSize:"xx-large" , color:'#01be96', fontWeight:'bolder'}}>My service</span> 
            <br/>
            <div className='images'>
           
                <img className="html" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZr35dgSTUwPWfFrBYTylUA8utdoqzX4ByNEfTei-DmDfTpgfwQb4asDvsxFGzHEgeHU&usqp=CAU" alt='HTML'></img>
                <img className='css' src='https://t4.ftcdn.net/jpg/05/07/73/17/360_F_507731780_yH0Bfwi5wtjzmA8knRraWdhm0LhtGdUH.jpg' alt='CSS'></img>
            <img className='js' src='https://www.pngkey.com/png/detail/550-5509803_js-logo-javascript-logo-circle-png.png' alt='JS'></img>
            <img className='react' src='https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png' alt='react'></img>
            </div>
            </>

      </div>
    )
  }
}

export default AboutMe
import React from 'react'

const Welcome = () => {
  return (
   
        <div data-layer="Welcome" className="Welcome" style={{width: 390, height: 844, paddingTop: 65, paddingBottom: 102, paddingLeft: 16, paddingRight: 15, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex'}}>
  <img data-layer="image" className="Image" style={{width: 358, height: 325, borderRadius: 9999}} src="https://placehold.co/358x325" />
  <div data-layer="Welcome to MindCare! Track your mood, meditate, and feel supported every day" className="WelcomeToMindcareTrackYourMoodMeditateAndFeelSupportedEveryDay" style={{width: 358, height: 201, textAlign: 'center'}}><span style="color: '#00008B', fontSize: 28, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'">Welcome to MindCare!<br/></span><span style="color: '#454557', fontSize: 16, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word'"><br/>Track your mood, meditate, and feel supported every day</span></div>
  <div data-layer="Group 1" className="Group1" style={{width: 286.40, height: 60, position: 'relative'}}>
    <div data-layer="Rectangle 1" className="Rectangle1" style={{width: 286.40, height: 60, left: 0, top: 0, position: 'absolute', background: '#00008B', borderRadius: 12}} />
    <div data-layer="Get Started" className="GetStarted" style={{left: 96, top: 19, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Get Started</div>
  </div>
</div>
    
  )
}

export default Welcome
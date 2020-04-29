import React from 'react'
import Image from './Image'
// import CSSTransitionGroup from 'react-transition-group';
export default function Body() {

    return (
        <div className='main'>
            <div className='ill'>
                <Image myClass='myimg' source='https://i.pinimg.com/564x/ce/32/e1/ce32e1576f37f58567849de2113d6b45.jpg' />
                <div className='WelcomePart'>
                    <h1 className='welcomeTxt'>Welcome to LearnEnglish!</h1>
                    <h2>I’ve failed over and over and over again in my life. And that is why I succeed. <q>Michael Jordan</q> </h2>
                </div>
            </div>
           
            {/* <CSSTransitionGroup transitionName='sections' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            <div id='section2' className='section2'></div>
            <div id='section2' className='section3'></div>
            <div id='section2' className='section4'></div>
            </CSSTransitionGroup> */}
        </div>
    )
}

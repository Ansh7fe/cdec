import React from 'react'
import Director from './components/director'
import Textpart from './components/textpart'
import Top from "./components/top";
import Team from './components/team';
import Profs from './components/profs'
const About = () => {
    return (
        <div>
            <Top />
            <Textpart />
            <Director />
            <Profs />
            <Team />
        </div>
    )
}

export default About
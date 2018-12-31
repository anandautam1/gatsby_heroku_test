import React from "react"
import FullHeader from 'reuwsaat-react-full-header';

import NavBar from "../components/NavBar"
import FlexBox from "../components/ContentBox"

export default () => 
    <div>
        <NavBar/>
        <FlexBox sticky={"right"} content={'Hello from this component'}/>
        {/* <FullHeader
            title="Water is good"
            subtitle="Water you waiting for"
            bgColor="#EBE9EB"
            textColor="#3299BB"
            font="Helvetica"
            video="http://mazwai.com/system/posts/videos/000/000/161/original/leonard_soosay--missfit.mp4?1424004876"
        /> */}
        <FlexBox sticky={"left"} content={'Hello from this component'}/>
        <FlexBox sticky={"right"} content={'Hello from this component'}/>
    </div>
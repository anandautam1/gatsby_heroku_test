import React from "react"
import NavBarFlex from "../components/NavBarFlex";
import ContentBox from "../components/ContentBox";
import MarkSelector from "../components/MarkSelector";

import { Button } from 'grommet';

export default () => 
    <div>
        <NavBarFlex />
        <div style={{paddingLeft:'20px', paddingRight:'20px'}}>
            {/* <ContentBox content={'How\'s the food ?'} sticky={'left'}/> */}
                {/* <br/><br/><br/><br/><br/><br/> */}
            <MarkSelector />

            {/* <ContentBox content={'How\'s the event ?'} sticky={'right'}/> */}
                {/* <br/><br/><br/><br/><br/><br/> */}
            <MarkSelector />

            {/* <ContentBox content={'Would you recomend this gathering ?'} sticky={'left'}/> */}
                {/* <br/><br/><br/><br/><br/><br/> */}
            <MarkSelector />

            {/* <ContentBox content={'Did you like the garherings content ?'} sticky={'right'}/> */}
                {/* <br/><br/><br/><br/><br/><br/> */}
            <MarkSelector />
                <br/>
            <Button style={{margin:'auto', display:'block'}} primary label="Submit" />
        </div>
    </div>
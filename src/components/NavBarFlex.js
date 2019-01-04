import React, { Component } from 'react';
import { Collapsible, 
    Box, 
    Grommet,
    ResponsiveContext, 
    Anchor, 
    Button, 
    Menu,
    Layer, 
    Heading } from 'grommet';
import { Sign, Notification, FormClose } from 'grommet-icons';

const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='light-2'
      pad={{ vertical: 'small', horizontal: 'medium' }}
      elevation='medium'
      {...props}
      />
);

const theme = {
    global: {
        colors: {
            brand: '#228BE6',
            'light-2': '#f5f5f5',
            'text':{
                light: 'rgba(0,0,0,0,0.87)',
            },
        },
        edgeSize: {
        small: '14px',
        },
        elevation: {
        light: {
            medium: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        },
        },
        font: {
        family: 'Roboto',
        size: '14px',
        height: '20px',
        },
    },
    button: {
        border: {
        width: '1px',
        radius: '4px',
        },
        padding: {
        vertical: '8px',
        horizontal: '16px',
        },
    },
};

class NavBarFlex extends Component{
    constructor(props){
        super(props);
        this.state = {
            showSidebar: false,
        };
    }

    render(){
        const { showSidebar } = this.state;
        return(
            <div>
                <Grommet theme={theme} full>
                    <ResponsiveContext.Consumer>
                        {size => (
                            <Box fill>
                                <AppBar>
                                    <Heading level='3' margin='none'>RockStar</Heading>
                                    <Sign size='medium'/>
                                    
                                    <Anchor href="#">Solutions</Anchor>
                                    <Anchor href="#">Services</Anchor>
                                    <Anchor href="#">Products</Anchor>
                                    <Anchor href="#">About Us</Anchor>
                                    <Anchor href="#">Support</Anchor>
                                    {/* <Box size={{width: {max: 'xxlarge'}}} direction="row"
                                        responsive={false} justify="start" align="center"
                                        pad={{horizontal: 'medium'}} flex="grow"> */}
                                        {/* <Menu label="Label" inline={true} direction="column" flex="grow">
                                            <Anchor href="#">Solutions</Anchor>
                                            <Anchor href="#">Services</Anchor>
                                            <Anchor href="#">Products</Anchor>
                                            <Anchor href="#">About Us</Anchor>
                                            <Anchor href="#">Support</Anchor>
                                        </Menu> */}
                                    {/* </Box> */}
                                    {/* <Box flex="grow" align="end"> */}
                                    <Button 
                                        icon={<Notification />} 
                                        onClick={() => {this.setState({ showSidebar: !this.state.showSidebar })}} 
                                    />
                                    {/* </Box> */}
                                </AppBar>

                                <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                                    <Box flex align='center' justify='center'>
                                        app Body
                                    </Box>    
                                
                                    {(!showSidebar || size !== 'small') ? (
                                    <Collapsible direction="horizonal" open={showSidebar}>
                                        <Box
                                            width='medium'
                                            background='light-2'
                                            elevation='small'
                                            align='center'
                                            justify='center'
                                        >
                                            Sidebar
                                        </Box>
                                    </Collapsible>
                                    ): (
                                        <Layer>
                                            <Box
                                                tag='header'
                                                background='light-2'
                                                justify='end'
                                                align='center'
                                                direction='row'
                                            >
                                                <Button
                                                    icon={<FormClose/>}
                                                    onClick={() => this.setState({ showSidebar: false })}
                                                />
                                            </Box>

                                            <Box
                                                fill
                                                background='light-2'
                                                align='center'
                                                justify='center'
                                            >
                                                sidebar
                                            </Box>
                                        </Layer>
                                )}
                            </Box>
                        </Box>
                    )}
                    </ResponsiveContext.Consumer>
                </Grommet>
            </div>
        );
    }
};

export default NavBarFlex;
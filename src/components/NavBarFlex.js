import React, { Component } from 'react';
import { Collapsible, 
    Box, 
    Grommet,
    ResponsiveContext, 
    Anchor, 
    Button, 
    Menu,
    Layer,
    Paragraph,
    Heading } from 'grommet';

import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { Sign, Notification, FormClose, Menu as MenuIcon } from 'grommet-icons';
import Headroom from 'react-headroom';

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
        breakpoints: {
            xsmall: {
              value: 500
            },
            small: {
              value: 900
            },
            medium: undefined,
            middle: {
              value: 3000
            }
        },
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

        this.forceShowSideBarClose = () => {
            this.setState({ showSidebar: false });
        }
    }

    // componentDidMount() {
    //     window.onscroll = function() {
    //         if(window.pageYOffset === 0) {
    //             // if the page is at the top then change the style and icon
    //             alert('I AM AT THE TOP');
    //         }
    //     };
    // }

    componentWillUnmount() {
        window.onscroll = null;
        // console.log('component unmount');
    }

    handleSomething() {
        this.setState({ showSidebar: false });
    }
      

    render(){
        const { showSidebar } = this.state;
        return(
            <div>
                <Headroom>
                    <Grommet theme={theme}>
                        <AppBar>
                            <Heading level={3} margin='none'>
                                <Sign size='medium'/>
                                RockStarForm
                            </Heading>
                                <ResponsiveContext.Consumer>
                                    {size => {
                                        if ((size !== 'small' && size !== 'xsmall')) {
                                            return (
                                                <div>
                                                    <Box direction='row' pad={{"right":"30px"}} gap='medium'>
                                                        <Anchor href="#">Solutions</Anchor>
                                                        <Anchor href="#">Services</Anchor>
                                                        <Anchor href="#">Products</Anchor>
                                                        <Anchor href="#">About Us</Anchor>
                                                        <Anchor href="#">Support</Anchor>
                                                    </Box>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div>
                                                    <Box direction='row' pad={{"right":"10px"}}>
                                                        <Button
                                                            primary={true}
                                                            hoverIndicator={false} 
                                                            icon={<MenuIcon/>} 
                                                            onClick={() => {this.setState({ showSidebar: !this.state.showSidebar })}} 
                                                        />
                                                    </Box>

                                                    {(!showSidebar) ? (
                                                        <div></div>
                                                        // <Collapsible direction="horizontal" open={showSidebar}>
                                                        //     <Box
                                                        //         flex
                                                        //         width='medium'
                                                        //         background='light-2'
                                                        //         elevation='small'
                                                        //         align='center'
                                                        //         justify='center'
                                                        //     >
                                                        //         Sidebar
                                                        //     </Box>
                                                        // </Collapsible>
                                                        ) : (
                                                        <Layer>
                                                            <Box
                                                                tag='header'
                                                                background='light-2'
                                                                justify='end'
                                                                align='center'
                                                                direction='row'
                                                                pad={{"top":"12px","right":"45px"}}
                                                            >
                                                                <Button
                                                                    primary={true}
                                                                    icon={<FormClose/>}
                                                                    onClick={() => this.setState({ showSidebar: false })}
                                                                />
                                                            </Box>

                                                            <Box flex fill
                                                                background='light-2'
                                                                align='center'
                                                                justify='start'
                                                                gap='medium'
                                                            >
                                                                <Anchor href="#">Solutions</Anchor>
                                                                <Anchor href="#">Services</Anchor>
                                                                <Anchor href="#">Products</Anchor>
                                                                <Anchor href="#">About Us</Anchor>
                                                                <Anchor href="#">Support</Anchor>
                                                            </Box>
                                                        </Layer>
                                                    )}
                                                </div>
                                            )
                                        }
                                    }}
                                </ResponsiveContext.Consumer>
                        </AppBar>
                    </Grommet>
                </Headroom>
            </div>
        );
    }
};

export default NavBarFlex;
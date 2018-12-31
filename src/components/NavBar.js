import React, { Component } from 'react';

import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Menu = styled.div`
  border-bottom: 2px solid MediumPurple;
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: MediumPurple;
    &:hover {
      color: white;
    }
  }
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

const Wrapper = styled.div`
    z-index: 99;
`;

class NavBar extends Component{
    render(){
        return(
            <div>
                <Wrapper>
                    <ResponsiveMenu
                        menuOpenButton={<FaBars size={30} color="MediumPurple"/>}
                        menuCloseButton={<FaTimes size={30} color="MediumPurple"/>}
                        changeMenuOn="500px"
                        largeMenuClassName="large-menu"
                        smallMenuClassName="small-menu"
                        menu={
                            <Menu>
                            <ul>
                                <li>
                                <a href="">Home</a>
                                </li>
                                <li>
                                <a href="">About</a>
                                </li>
                                <li>
                                <a href="">Team</a>
                                </li>
                                <li>
                                <a href="">Contact</a>
                                </li>
                                <li>
                                <a href="">News</a>
                                </li>
                            </ul>
                            </Menu>
                        }
                    />
                </Wrapper>
            </div>
        );
    }
}

export default NavBar;
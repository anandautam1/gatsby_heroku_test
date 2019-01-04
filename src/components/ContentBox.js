import React, { Component } from 'react';
import styled from 'styled-components';

const ContentBox = styled.div`
  background-color: white;
  border: 2px solid MediumPurple;
  width: 60%;
  font-size: 15px;
  padding: 20px;
  margin: 20px;
  float: ${props => props.float};
  @media (max-width: 500px) {
    float: none;
    margin: 20px auto;
  }
`;

class FlexBox extends Component{
    render(){
        return(
            <div>
                <ContentBox float={this.props.sticky}>
                    {this.props.content}
                </ContentBox>
            </div>
        );
    }
}

export default FlexBox;
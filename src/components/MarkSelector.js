import React, { Component } from 'react';
import { Grommet, Box, RangeSelector, Stack, Text } from 'grommet';

class MarkSelector extends Component{
    constructor(props){
        super(props);
        this.state = {
            values: [0, 5]
        };
    }

    render(){
        const { values } = this.state;
        return(
            <div>
                <Grommet>
                    <Stack>
                        <Box direction='row' justify='between' margin='small' pad='small'>
                            {[0, 1, 2, 3, 4, 5].map(value => (
                            <Box key={value} pad='small' border={false}>
                                <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
                            </Box>
                            ))}
                        </Box>
                        <RangeSelector
                            direction='horizontal'
                            invert={false}
                            min={0}
                            max={5}
                            size='full'
                            round='small'
                            values={values}
                            onChange={nextValues => this.setState({ values: nextValues })}
                        />
                    </Stack>
                </Grommet>
            </div>
        );
    }
}

export default MarkSelector;
import React from 'react'

import {Tooltip} from 'mimir'
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
    return (
        <Wrapper>
            <Tooltip>test</Tooltip>
        </Wrapper>
    )
}

export default App

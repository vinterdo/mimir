import React, {ReactNode, useState} from "react";
import styled from "styled-components";

const TooltipWrap = styled.div`
  background: #EEE;
  display: inline-block;
  position: relative;
`

const TooltipBubble = styled.div<{ position: "top" | "bot" | "left" | "right" }>`
  background: transparent;
  position: absolute;
  z-index: 10;
  
  ${(props) => {
    switch (props.position) {
        case "top":
            return `
                padding-bottom: 9px;
                transform: translateX(-50%);
                left: 50%;
                bottom: 100%;
                &::after {
                  border-left: 9px solid transparent;
                  border-right: 9px solid transparent;
                  border-top: 9px solid #CCC;
                  bottom: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  content: '';
                  position: absolute;
                }
            `;
        case "bot":
            return `
                top: 100%;
                left: 50%;
                padding-top: 9px;
                transform: translateX(-50%);
                
                &::after {
                  border-left: 9px solid transparent;
                  border-right: 9px solid transparent;
                  border-bottom: 9px solid #CCC;
                  top: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  content: '';
                  position: absolute;
                }
            `;
        case "left":
            return `
                top: 50%;
                right: 100%;
                padding-right: 9px;
                transform: translateY(-50%);
                
                &::after {
                  border-left: 9px solid #CCC;
                  border-top: 9px solid transparent;
                  border-bottom: 9px solid transparent;
                  top: 50%;
                  right: 0;
                  transform: translateY(-50%);
                  content: '';
                  position: absolute;
                }
            `;
        case "right":
            return `
                top: 50%;
                left: 100%;
                padding-left: 9px;
                transform: translateY(-50%);
                
                &::after {
                  border-right: 9px solid #CCC;
                  border-top: 9px solid transparent;
                  border-bottom: 9px solid transparent;
                  top: 50%;
                  left: 0;
                  transform: translateY(-50%);
                  content: '';
                  position: absolute;
            `;
    }
}
}
  
`

const TooltipMessage = styled.div`
  background: #CCC;
  padding: .5em;
  text-align: center;
`

export default (props: { children: ReactNode }) => {
    const [mouseOverWrap, setMouseOverWrap] = useState<boolean>(false);
    const [mouseOverTooltip, setMouseOverTooltip] = useState<boolean>(false);
    const [locked, setLocked] = useState<boolean>(false);

    function onMouseLeaveWrap() {
        setMouseOverWrap(false);
    }

    function onMouseEnterWrap() {
        setMouseOverWrap(true);
    }

    function onMouseLeaveTooltip() {
        setMouseOverTooltip(false);
    }

    function onMouseEnterTooltip() {
        setMouseOverTooltip(true);
    }

    function onLockAction() {
        setLocked((prevState) => !prevState);
    }


    return (
        <TooltipWrap onMouseLeave={onMouseLeaveWrap} onMouseEnter={onMouseEnterWrap} onAuxClick={onLockAction}>
            {props.children}
            {(mouseOverTooltip || mouseOverWrap || locked) &&
            <TooltipBubble position={"right"} onMouseLeave={onMouseLeaveTooltip} onMouseEnter={onMouseEnterTooltip}>
                <TooltipMessage>
                    content
                </TooltipMessage>
            </TooltipBubble>
            }
        </TooltipWrap>
    )
}
import styled from 'styled-components'

export const CustomRow = styled.div`
    min-height:10px;
    margin-top: 10px;
    // margin-bottom: 20px;
    padding-bottom:20px;
    overflow: auto;


    position: relative;
    padding-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
    // box-shadow: 0 5px 11px 2px rgba(0,9,30,0.20);
    // border-style: groove;
    border: 1px solid #b3b3b3;
    border-radius: 5px;
`
export const CustomP = styled.p`
    margin-top: -5px;
    margin-bottom:0px;
    text-indent: 0px;
`
export const CustomPAlignLeft = styled(CustomP)`
    float: left
`
export const CustomPAlignRight = styled(CustomP)`
    float: right
`
export const CustomClearAlign = styled(CustomP)`
    clear: both
`

export const CustomH3 = styled.h3`
    margin-bottom: 15px
`

export const CustomHr = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
`


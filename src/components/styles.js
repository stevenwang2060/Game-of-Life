import styled from 'styled-components';
import { theme } from '../theme';
import { ChevronDown } from '@styled-icons/boxicons-solid';

export const Body = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
`;

export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.white};
`;

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1100px;
    z-index: 10;
    h1{
        font-size: ${theme.fontSize.header3};
        font-family: ${theme.font};
        color: ${theme.colors.black};
        user-select: none;
    }
`;

export const DropDown = styled.div`
    font-size: ${theme.fontSize.text};
    font-family: ${theme.font};
    color: ${props => props.selected ? theme.colors.lightGray : theme.colors.black};
    cursor: pointer;
    user-select: none;
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${props => props.speed ? '160px' : 'auto'};
    }
    &:hover{
        color: ${theme.colors.lightGrey};
        transition: .5s color ease;
    }
`;

export const Menu = styled.div`
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    width: ${props => props.width};
    height: ${props => props.height};
    position: absolute;
    margin-top: 20px;
    z-index: 999;
    background-color: ${theme.colors.white};
    .presets{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p{
            margin: 15px 10px;
        }
    }
    .speed{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Button = styled.div`
    background-color: ${props => props.run ? 
        (props.start ? theme.colors.lightRed : theme.colors.lightGreen) 
        : theme.colors.white};
    font-family: ${theme.font};
    font-size: ${theme.fontSize.text};
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
    user-select: none;
    &:hover{
        background-color: ${props => props.run ? 
            (props.start ? theme.colors.lightRed : theme.colors.lightGreen) 
            : theme.colors.yellow};
        transition: .5s background-color ease;
    }
`;

export const DownArrow = styled(ChevronDown)`
    margin-left: 5px;
    width: 20px;
`;

export const HorizontalDivider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.lightGrey};
`;

export const SpeedOption = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px 0;
    color: ${props => props.selected ? theme.colors.lightGrey : theme.colors.black};
    &:hover{
        color: ${theme.colors.lightGrey};
        transition: .5s color ease;
    }
`;

export const PresetOption = styled.div`
    display: flex;
    align-items: center;
    color: ${theme.colors.black};
    img{
        width: 50px;
        height: 50px;
        margin: 10px;
        margin-left: 30px;
    }
    &:hover{
        color: ${theme.colors.lightGrey};
    }
`;

// Generation Counter

export const GenWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;

export const GenCounter = styled.div`
    width: 385px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p{
        font-family: ${theme.font};
        font-size: ${theme.fontSize.text};
    }
`;

// Grid

export const GridWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .info{
        width: 10%;
        margin: 50px;
        h3{
            font-family: ${theme.font};
            font-size: ${theme.fontSize.header3};
        }
        p{
            font-family: ${theme.font};
            font-size: ${theme.fontSize.text};
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.colCount}, 20px);
`;

export const Cell = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.live ? undefined : theme.colors.lightGrey};
    border: 1px solid ${theme.colors.black};
    cursor: pointer;
    &:hover{
        background-color: ${theme.colors.white};
    }
`;
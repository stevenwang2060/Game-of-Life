import React from 'react';
import { DropDown, 
        DownArrow, 
        Menu, 
        SpeedOption,
        PresetOption, 
        HorizontalDivider } from './styles';

import Cross from '../img/Cross.png';
import Pulsar from '../img/Pulsar.png';
import Star from '../img/Star.png';

export default ({ 
        type, 
        currentMenu, 
        handleMenuChange, 
        children, 
        stateChanger,
        speed 
    }) => {

    const handleClick = () => {
        switch(type){
            case 'rules':
                if(currentMenu === 'rules'){
                    handleMenuChange(null);
                }else{
                    handleMenuChange('rules');
                }
                break;
            case 'presets':
                if(currentMenu === 'presets'){
                    handleMenuChange(null);
                }else{
                    handleMenuChange('presets');
                }
                break
            case 'speed':
                if(currentMenu === 'speed'){
                    handleMenuChange(null);
                }else{
                    handleMenuChange('speed');
                }
                break;
            default:
                handleMenuChange(null);
        }
    }

    return (
        <DropDown selected={type === currentMenu ? 1 : 0} speed={type === 'speed' ? 1 : 0}>
            <div 
                className='content'
                onClick={handleClick}
            >
                {children}
                <DownArrow/>
            </div>
            {type === 'presets' && currentMenu === 'presets' && (
                    <Menu width='190px' height='260px'>
                        <div className='presets'>
                            <HorizontalDivider/>
                            <PresetOption onClick={() => {
                                    stateChanger('RANDOM');
                                }}>
                                <p>Random generation</p>
                            </PresetOption>
                            <HorizontalDivider/>
                            <PresetOption onClick={() => {
                                    stateChanger('PULSAR');
                                }}>
                                <img src={Pulsar} alt='Pulsar preset'/>
                                <p>Pulsar preset</p>
                            </PresetOption>
                            <HorizontalDivider/>
                            <PresetOption onClick={() => {
                                    stateChanger('STAR');
                                }}>
                                <img src={Star} alt='Star preset'/>    
                                <p>Star preset</p>
                            </PresetOption>
                            <HorizontalDivider/>
                            <PresetOption onClick={() => {
                                    stateChanger('CROSS');
                                }}>
                                <img src={Cross} alt='Cross preset'/>    
                                <p>Cross preset</p>
                            </PresetOption>
                            <HorizontalDivider/>
                        </div>
                    </Menu>
            )}
            {type === 'speed' && currentMenu === 'speed' && (
                    <Menu width='150px' height='78px'>
                        <div className='speed'>
                            <SpeedOption 
                                selected={speed === 100} 
                                onClick={() => stateChanger(100)}
                            >
                                Fast
                            </SpeedOption>
                            <HorizontalDivider/>
                            <SpeedOption 
                                selected={speed === 500} 
                                onClick={() => stateChanger(500)}
                            >
                                Average
                            </SpeedOption>
                            <HorizontalDivider/>
                            <SpeedOption 
                                selected={speed === 1000} 
                                onClick={() => stateChanger(1000)}
                            >
                                Slow
                            </SpeedOption>
                            <HorizontalDivider/>
                        </div>
                    </Menu>
            )}
        </DropDown>
    );
}
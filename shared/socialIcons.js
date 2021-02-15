import React from 'react';
import { SvgXml } from 'react-native-svg';

export const FacebookSocial = () => {
    const facebookIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,1,2,12,10.011,10.011,0,0,1,12,2Zm0-2A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM10,10H8v2h2v6h3V12h1.82L15,10H13V9.167c0-.478.1-.667.558-.667H15V6H12.6C10.8,6,10,6.792,10,8.308V10Z" fill="#fff"/></svg>`;

    const FacebookSvg = () => <SvgXml xml={facebookIcon} />;
    
    return <FacebookSvg />
}
import React from 'react';
import {useSelector } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';


const Directory = () => {
    const sections = useSelector(selectDirectorySections);
    return (
        <DirectoryMenuContainer>
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </DirectoryMenuContainer>
    )
};

export default Directory;
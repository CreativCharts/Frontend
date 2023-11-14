import React from 'react';
import MenuButton from './MenuButton';
import NavMenu from './NavMenu';

const NavigationMenu = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <MenuButton handleOpenNavMenu={handleOpenNavMenu} />
            <NavMenu anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} />
        </>
    );
}

export default NavigationMenu;

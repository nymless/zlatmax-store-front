import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../../assets/svg/avatar.svg';
import { AppRouts } from '../../../../variables/AppRouts';
import MuiButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { User } from '../../../../redux/models/models';
import { AppPaths } from '../../../../variables/AppPaths';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles/';
import { useAppDispatch } from '../../../../redux/store';
import { logout } from '../../../../redux/reducers/userSlice';
import { useCookies } from 'react-cookie';

const Button = styled(MuiButton)`
  color: #fff;
  text-transform: none;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  letter-spacing: normal;
`;

interface UserMenuProps {
  user: User;
}

export const UserMenu: FC<UserMenuProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useAppDispatch();

  const [, setCookie] = useCookies(['logged_in']);

  const handleLogoutClick = () => {
    setCookie('logged_in', 'false');
    dispatch(logout());
    handleClose();
  };

  return (
    <Box>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs="auto">
          {props.user.img ? (
            <Avatar
              src={AppPaths.IMG_URL + props.user.img}
              alt="Пользователь"
            />
          ) : (
            <img src={avatar} alt="Пользователь" />
          )}
        </Grid>
        <Grid item xs="auto">
          <Button
            id="account-button"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {props.user.firstName + ' ' + props.user.lastName}
          </Button>
        </Grid>
      </Grid>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        MenuListProps={{
          'aria-labelledby': 'account-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to={AppRouts.ACCOUNT}>Личный кабинет</Link>
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>Выйти из аккаунта</MenuItem>
      </Menu>
    </Box>
  );
};

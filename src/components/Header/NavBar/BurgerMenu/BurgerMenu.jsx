import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      fontFamily: '"Montserrat", sans-serif',
      padding: '16px',
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: '#E2007E', 
          color: '#fff', 
          fontFamily: '"Bebas Neue", sans-serif', 
          fontSize: '22px', 
          '&:hover': {
            backgroundColor: '#E2007E', 
            fontSize: '22px', 
          },
        }}
      >
        RECURSOS
      </Button>


      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <a href="https://ceroestigma.felgtbi.org/" target="_blank"><MenuItem disableRipple>
          Estigma y vih
        </MenuItem></a>
        <a href="https://felgtbi.org/wp-content/uploads/2023/05/folletovih_migrantes_es_felgtbi-2.pdf" target="_blank"><MenuItem disableRipple>
          Información prueba vih
        </MenuItem></a>
        <a href="https://felgtbi.org/wp-content/uploads/2023/05/folletovih_migrantes_es_felgtbi-2.pdf" target="_blank"><MenuItem disableRipple>
          Programa de diagnóstico precoz
        </MenuItem></a>
        <a href="https://felgtbi.org/wp-content/uploads/2024/10/triptico_saludtrans2023.pdff" target="_blank"><MenuItem disableRipple>
          Tríptico personas trans
        </MenuItem></a>
        <a href="https://felgtbi.org/safechemsex/" target="_blank"><MenuItem disableRipple>
          #SafeChemSex
        </MenuItem></a>
        <a href="https://felgtbi.org/its/wp-content/uploads/sites/27/2024/10/its_triptico_es2024_MS.pdf" target="_blank"><MenuItem disableRipple>
          Guía rápida de its
        </MenuItem></a>
        <a href="https://felgtbi.org/positivosenred/" target="_blank"><MenuItem disableRipple>
          Soporte emocional
        </MenuItem></a>

      </StyledMenu>
    </div>
  );
}
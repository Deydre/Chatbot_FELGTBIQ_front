import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaCalendarAlt, FaChartBar, FaPen, FaCogs, FaTachometerAlt, FaEye, FaQuestionCircle, FaFileAlt } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const SideBar = () => {
  return(
      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar>
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: disabled ? '#E2007E' : '#E2007E',
                    backgroundColor:'#d0d0d0',
                  };
              },
            }}
          >
            <SubMenu defaultOpen label="Estadísticas" icon={<FaChartBar />}>
              <MenuItem> Edad</MenuItem>
              <MenuItem> Identidad </MenuItem>
              <MenuItem> Origen</MenuItem>
            </SubMenu>
            <MenuItem active icon={<FaFileAlt />}>
              Ver/editar panel sociosanitario (active)
            </MenuItem>
            <MenuItem icon={<FaFileAlt/>}> Ver/editar panel personas usuarias</MenuItem>
          </Menu>
        </Sidebar>
      </div>
    )


};
export default SideBar;
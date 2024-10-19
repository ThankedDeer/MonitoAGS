// src/App.tsx

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React from 'react';
import logo from '../images/Logo.jpeg'; // Asegúrate de la ruta correcta

const App: React.FC = () => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <img 
            src={logo} 
            alt="Logo de MonitorAGS" 
            style={{ width: '50px', height: 'auto', marginRight: '10px' }} 
          />
          <p className="font-bold text-inherit">MonitorAGS</p>
        </NavbarBrand>

        <NavbarContent className="sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/" color="foreground">Home</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/criminalProfile" aria-current="page" color="secondary">Perfil de criminal</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/monitoHorariosTabla" color="foreground">Table</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>

      {/* Aquí puedes colocar el mapa */}
     
    </>
  );
};

export default App;

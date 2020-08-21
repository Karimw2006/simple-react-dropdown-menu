import React, { useState } from 'react';

function App() {
  return (
    <NavBar>
      <NavItem icon='+'></NavItem>
      <NavItem icon='-'></NavItem>
      <NavItem icon='=>'></NavItem>
      <NavItem icon='d'>
        <DropDown />
      </NavItem>
    </NavBar>
  );
}

function NavBar(props){
  return(
    <nav className='navbar'>
      <ul className='navbar-nav'> { props.children } </ul>
    </nav>
  )
}

function NavItem(props){
  
  const [open, setOpen] = useState(false);

  return(
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

function DropDown(){
  function DropDownItem(props){
    return (
      <a className='menu-item'>
        {props.children}
      </a>
    )
  }

  return(
    <div className='dropdown'>
      <DropDownItem>
        My Profile
      </DropDownItem>
      <DropDownItem>
        settings
      </DropDownItem>
    </div>
  );
}

export default App;

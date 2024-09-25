import React from 'react'
import './sidebarstyle.css'

const Sidebar = () => {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onclick={closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <h2>Animated Sidenav Example</h2>
            <p>Click on the element below to open the side navigation menu.</p>
            <span style="font-size:30px;cursor:pointer" onclick={openNav}>&#9776; open</span>
        </>
    )
}

export default Sidebar







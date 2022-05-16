import React from "react";

function Footer(){
    const year = new Date();
    return(
        <footer>
        <p>copyright @MackVerma {year.getFullYear()} </p>
        </footer>
    );
}

export default Footer;
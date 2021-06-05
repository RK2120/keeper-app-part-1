import React from "react";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer>
            <p>Copyright Rahul Kamath &copy; {year}</p>
        </footer>
    );
}

export default Footer;

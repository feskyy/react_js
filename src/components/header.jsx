import React from "react";

function Header() {
    return (
        <header style={styles.header}>
            <h2>
                Homework1
            </h2>
        </header>
    );

}

const styles = {
    header: {
        padding: '16px',
        background: '#282c34',
        color: 'white',
        textAlign: 'center',
    },
};

export default Header;
import React from "react";

function Footer() {

    return (
        <footer style={styles.footer}>
            <p>© 2025 год -- Все прва защищены</p>
        </footer>
    );

}

const styles = {
    footer: {
        padding: '12px',
        background: '#f0f0f0',
        color: '#333',
        textAlign: 'center',
        fontSize: '14px',
    }

}

export default Footer;
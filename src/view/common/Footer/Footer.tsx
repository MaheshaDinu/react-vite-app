import './Footer.css';
export function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2025 MyReactSite. All rights reserved.</p>
            <ul className="footer-links">
                {['Privacy Policy', 'Terms of Service', 'Help'].map(text => (
                    <li key={text}>
                        <a href={`#${text.toLowerCase().replace(/ /g, '-')}`}>{text}</a>
                    </li>
                ))}
            </ul>
            <div className="social-icons">
                {[
                    { href: 'https://twitter.com', icon: '🐦' },
                    { href: 'https://facebook.com', icon: '📘' },
                    { href: 'https://instagram.com', icon: '📸' }
                ].map(({ href, icon }, i) => (
                    <a key={i} href={href} aria-label="social">{icon}</a>
                ))}
            </div>
        </footer>
    );
}
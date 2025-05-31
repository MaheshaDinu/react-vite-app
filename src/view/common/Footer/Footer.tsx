
export function Footer() {
    return (
        <footer className="footer bg-slate-900 text-white text-center p-2 text-sm">
            <p>&copy; 2025 MyReactSite. All rights reserved.</p>
            <ul className="footer-links list-none p-0 mt-0.5 mb-0.5 ml-0 mr-0 flex justify-center gap-1">
                {['Privacy Policy', 'Terms of Service', 'Help'].map(text => (
                    <li key={text}>
                        <a className='decoration-0 text-zinc-400 hover:text-white' href={`#${text.toLowerCase().replace(/ /g, '-')}`}>{text}</a>
                    </li>
                ))}
            </ul>
            <div className="social-icons">
                {[
                    { href: 'https://twitter.com', icon: '🐦' },
                    { href: 'https://facebook.com', icon: '📘' },
                    { href: 'https://instagram.com', icon: '📸' }
                ].map(({ href, icon }, i) => (
                    <a className='text-zinc-400 mt-0 mb-0 ml-0.5 mr-0.5 text-xl decoration-0 hover:text-sky-500' key={i} href={href} aria-label="social">{icon}</a>
                ))}
            </div>
        </footer>
    );
}

export default function Footer() {
    return (
        <footer
            className="border-t transition-colors"
            style={{
                borderColor: 'var(--border-primary)',
                backgroundColor: 'var(--background)',
            }}
        >
            <div className="container mx-auto max-w-6xl px-6">
                {/* ─── Bottom Bar ─── */}
                <div
                    className="py-4 border-t flex flex-col sm:flex-row justify-between items-center gap-2"
                    style={{ borderColor: 'var(--border-primary)' }}
                >
                    <span
                        style={{
                            fontSize: '10px',
                            letterSpacing: '2px',
                            color: 'var(--muted-foreground)',
                            fontFamily: "'IBM Plex Mono', monospace",
                        }}
                    >
                        © 2026 GRIMLABS
                    </span>
                    {/* <span
                        style={{
                            fontSize: '10px',
                            letterSpacing: '2px',
                            color: 'var(--muted-foreground)',
                            fontFamily: "'IBM Plex Mono', monospace",
                        }}
                    >
                    </span> */}
                </div>
            </div>
        </footer>
    );
}
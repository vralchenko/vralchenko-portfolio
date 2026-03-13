export function Footer() {
    return (
        <footer className="py-2 text-center w-full shrink-0 space-y-1">
            <div className="flex justify-center mb-1">
                <div className="inline-flex flex-col items-center gap-0.5 px-4 py-2 rounded-lg border border-border bg-muted/50">
                    <span className="text-[10px] text-muted-foreground">Support via Twint</span>
                    <span className="text-xs font-semibold">+41 79 534 96 62</span>
                </div>
            </div>
            <p className="text-[10px] text-muted-foreground">© 2026 Viktor Ralchenko</p>
            <div className="flex justify-center gap-3">
                <a href="mailto:vralchenko@gmail.com" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">vralchenko@gmail.com</a>
                <a href="https://www.linkedin.com/in/victoralchenko/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="https://vralchenko-portfolio.vercel.app/en" target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            </div>
        </footer>
    )
}

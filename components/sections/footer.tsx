export function Footer() {
  return (
    <footer className="px-3 pb-10">
      <div className="section-shell">
        <div className="glass-panel rounded-[28px] px-5 py-6 text-center text-sm text-[var(--muted-foreground)]">
          <p>
            Designed as a premium modern portfolio for <span className="text-[var(--foreground)]">Pritam</span>.
            Update the contact links, certificate issuers, and live project URLs in{" "}
            <span className="text-[var(--foreground)]">lib/data.ts</span> when your final assets are ready.
          </p>
        </div>
      </div>
    </footer>
  );
}

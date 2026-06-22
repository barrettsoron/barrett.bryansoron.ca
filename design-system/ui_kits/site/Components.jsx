// UI Kit components — barrett.bryansoron.ca
// Modular JSX recreations of the live site. Mount via babel-standalone.

const SiteMark = () => (
  <a className="site" href="#home">barrett</a>
);

const Nav = ({ current = 'notes' }) => {
  const items = [
    { id: 'notes',   label: 'Notes',   href: '#notes' },
    { id: 'essays',  label: 'Essays',  href: '#essays' },
    { id: 'about',   label: 'About',   href: '#about' },
    { id: 'rss',     label: 'RSS',     href: '#rss' },
  ];
  return (
    <nav aria-label="Primary">
      {items.map(it => (
        <a key={it.id}
           href={it.href}
           aria-current={current === it.id ? 'page' : undefined}>
          {it.label}
        </a>
      ))}
      <a className="nav-dev" href="#dev" aria-label="Dev">dev</a>
    </nav>
  );
};

const Header = ({ current }) => (
  <header>
    <SiteMark />
    <Nav current={current} />
  </header>
);

const PostList = ({ posts, onOpen, hanging = false }) => (
  <ul className={"posts" + (hanging ? " posts--hanging" : "")}>
    {posts.map(p => (
      <li key={p.slug}>
        <time dateTime={p.date}>{p.date}</time>
        <a href={"#" + p.slug}
           onClick={(e) => { e.preventDefault(); onOpen && onOpen(p); }}>
          {p.title}
        </a>
      </li>
    ))}
  </ul>
);

const PostMeta = ({ date, kind, draft, words }) => (
  <p className="post-meta">
    <time dateTime={date}>{date}</time>
    {" · "}{kind}
    {words ? ` · ${words} words` : ''}
    {draft ? ' · draft' : ''}
  </p>
);

const Folio = () => <hr />;

const Admonition = ({ kind = 'note', label, children }) => (
  <aside className={"admonition " + kind} role="note">
    <span className="admonition-label">{label || kind}</span>
    {children}
  </aside>
);

const Callout = ({ children }) => (
  <div className="callout"><p>{children}</p></div>
);

const TOC = ({ items }) => (
  <nav className="toc" aria-label="Contents">
    <p className="toc-label">Contents</p>
    <ul className="toc-list">
      {items.map((it, i) => (
        <li key={i} className={"toc-item" + (it.sub ? " toc-item--sub" : "")}>
          <a href={"#" + it.anchor}>{it.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

const SubscribeForm = () => (
  <form className="embeddable-buttondown-form" onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor="bd-email">Email</label>
    <input id="bd-email" type="email" placeholder="you@example.org" />
    <button type="submit">Subscribe</button>
  </form>
);

const Footer = () => (
  <footer>
    <div className="footer-nav">
      <a href="#notes">Notes</a>
      <a href="#essays">Essays</a>
      <a href="#about">About</a>
      <a href="#rss">RSS</a>
      <a href="https://bsky.app/profile/mbbsoron.bsky.social">Bluesky</a>
      <a href="https://github.com/barrettsoron">GitHub</a>
    </div>
    <p className="footer-contact">
      <a href="mailto:barrett@bryansoron.ca">barrett@bryansoron.ca</a>
    </p>
    <p className="footer-land">
      Written from the unceded ancestral territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaʔɬ (Tsleil-Waututh) Nations.
    </p>
    <p className="footer-copyright">© 2026 Barrett Bryan-Soron · MIT / CC BY-SA 4.0</p>
  </footer>
);

Object.assign(window, {
  SiteMark, Nav, Header, PostList, PostMeta,
  Folio, Admonition, Callout, TOC, SubscribeForm, Footer,
});

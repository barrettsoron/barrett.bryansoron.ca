// Pages — view templates for the site UI kit.
// Each is a stateless component that renders one route's body.

const HomePage = ({ notes, essays, onOpen }) => (
  <main id="main">
    <p style={{ color: 'var(--muted)', maxWidth: '32rem', marginTop: '0' }}>
      Notes, essays, and working documents on durable political infrastructure and technology held to human terms.
    </p>

    <h2>Latest notes</h2>
    <PostList posts={notes.slice(0, 5)} onOpen={onOpen} hanging />

    <h2>Essays</h2>
    <PostList posts={essays} onOpen={onOpen} hanging />

    <SubscribeForm />
  </main>
);

const NotesIndex = ({ notes, onOpen }) => (
  <main id="main">
    <h1>Notes</h1>
    <p style={{ color: 'var(--muted)' }}>
      Short pieces. Working notes, reading reactions, technical asides. Some are drafts.
    </p>
    <PostList posts={notes} onOpen={onOpen} hanging />
  </main>
);

const EssaysIndex = ({ essays, onOpen }) => (
  <main id="main">
    <h1>Essays</h1>
    <p style={{ color: 'var(--muted)' }}>
      Longer pieces. Slow work — held in a drawer until the argument earns its length.
    </p>
    <PostList posts={essays} onOpen={onOpen} hanging />
  </main>
);

const AboutPage = () => (
  <main id="main">
    <h1>About</h1>
    <p>
      I'm Barrett. I do political work in Vancouver — durable infrastructure for eco-socialist movement and party work in Canada — and I write here about craft, technology, and the harder work the left has to do now.
    </p>
    <p>
      This site is a static <a href="https://astro.build">Astro</a> build, deployed from <code>main</code>. No analytics, no trackers, no cookies.
    </p>
    <h2>Elsewhere</h2>
    <ul>
      <li><a href="mailto:barrett@bryansoron.ca">barrett@bryansoron.ca</a></li>
      <li><a href="https://bsky.app/profile/mbbsoron.bsky.social">Bluesky</a></li>
      <li><a href="https://github.com/barrettsoron">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/mbbsoron/">LinkedIn</a></li>
    </ul>
    <Folio />
    <h2>Colophon</h2>
    <p>
      Set in <strong>BC Sans</strong> for chrome, <strong>Noto Serif</strong> for essay bodies, and <strong>Noto Sans Mono</strong> for code and meta. The accent is Viridian, committed 2026-04-21.
    </p>
  </main>
);

const NotePage = ({ post, onBack }) => (
  <main id="main">
    <p style={{ marginBottom: '1rem' }}>
      <a href="#notes"
         onClick={(e)=>{ e.preventDefault(); onBack && onBack(); }}>← Notes</a>
    </p>
    <h1>{post.title}</h1>
    <PostMeta date={post.date} kind="note" draft={post.draft} words={post.words} />
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </main>
);

const EssayPage = ({ post, onBack }) => (
  <main id="main">
    <p style={{ marginBottom: '1rem' }}>
      <a href="#essays"
         onClick={(e)=>{ e.preventDefault(); onBack && onBack(); }}>← Essays</a>
    </p>
    <h1>{post.title}</h1>
    <PostMeta date={post.date} kind="essay" draft={post.draft} words={post.words} />
    {post.toc ? <TOC items={post.toc} /> : null}
    <article className="essay-body" dangerouslySetInnerHTML={{ __html: post.html }} />
  </main>
);

Object.assign(window, { HomePage, NotesIndex, EssaysIndex, AboutPage, NotePage, EssayPage });

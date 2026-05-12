// Sample content for the UI-kit demo. Pulled from the upstream repo.
// Not all content is reproduced — this is a fidelity sampler for the visual system.

const NOTES = [
  {
    slug: 'fastmail-not-proton',
    title: 'Fastmail, not Proton',
    date: '2026-04-21',
    draft: false,
    words: 268,
    html: `
      <p>I switched to <a href="#">Fastmail</a>. The honest accounting is worth writing down.</p>
      <p>Proton's guarantee is stronger: end-to-end encryption at rest, open-source clients, Swiss jurisdiction. They genuinely cannot read your mail. Fastmail's position is "we won't" — backed by a decent transparency record and a subscription model that doesn't depend on your attention. But Australia is Five Eyes. That gap is real, and I'm not going to pretend otherwise.</p>
      <p>What tipped it: <code>JMAP</code> — the modern replacement for IMAP, designed for programmatic use from the start. Proton doesn't support it. Their path to programmatic access runs through a local bridge app — a daemon you have to keep running. That's not a technical detail; it's a constraint on how I work.</p>
      <p>Both things are true: Proton's model is more private, and Fastmail's is more workable. I picked one.</p>
      <p>If the threat model changes, I'll revisit.</p>
    `,
  },
  {
    slug: 'le-guin-carrier-bag',
    title: 'Le Guin on the shape of stories',
    date: '2026-04-17',
    draft: true,
    words: 184,
    html: `
      <p>Rereading Ursula K. Le Guin's <em>The Carrier Bag Theory of Fiction</em> (1986).</p>
      <p>Her argument, compressed: the dominant shape of Western storytelling is the spear — a protagonist, a conflict, a killing, a return. But the older and more human technology, she says, is the bag. The basket. The sling.</p>
      <blockquote><p>A book holds words. Words hold things. They bear meanings. A novel is a medicine bundle, holding things in a particular, powerful relation to one another and to us.</p></blockquote>
      <p>I think about this essay every time I find myself pulled toward the spear-shape — the big argument, the definitive take, the piece that <em>wins</em>. Most writing worth doing is bag-shaped.</p>
      <p>A site like this one is a bag.</p>
    `,
  },
  {
    slug: 'self-hosting-fonts',
    title: 'Self-hosted fonts, in three lines',
    date: '2026-04-16',
    draft: true,
    words: 168,
    html: `
      <p>Google Fonts will get you going. It will also cost you a third-party request on every page load, a privacy footprint you didn't ask for, and one more thing that can fail silently when someone else's CDN hiccups.</p>
      <p>Self-hosting is the less glamorous answer and almost always the right one:</p>
      <ol>
        <li>Drop the <code>.woff2</code> files into <code>public/fonts/</code>.</li>
        <li>Declare <code>@font-face</code> once in <code>global.css</code> with <code>font-display: swap</code>.</li>
        <li>Reference by name.</li>
      </ol>
      <p>Same-origin, browser-cached, and you own the dependency. The only tax is a bit of disk — which, on a text-forward site, is nothing.</p>
    `,
  },
  {
    slug: 'a-good-cable',
    title: 'A good cable',
    date: '2026-04-09',
    draft: true,
    words: 41,
    html: `
      <p>Spent fifteen minutes today untangling a knot of bad USB cables. Threw out four of them. Kept the two with proper strain relief. A small relief, the kind that compounds.</p>
    `,
  },
  {
    slug: 'before-breakfast',
    title: 'Before breakfast',
    date: '2026-02-03',
    draft: true,
    words: 38,
    html: `
      <p>Thirty minutes with a notebook before the phone comes on. The best thirty minutes of the day, most days. A small discipline that pays compound interest.</p>
    `,
  },
];

const ESSAYS = [
  {
    slug: 'field-notes-on-building-slowly',
    title: 'Field notes on building slowly',
    date: '2026-04-18',
    draft: true,
    words: 712,
    toc: [
      { anchor: 'the-premise',     label: 'The premise' },
      { anchor: 'weekly',          label: 'The weekly shape' },
      { anchor: 'block',           label: 'What counts as a block', sub: true },
      { anchor: 'tools',           label: 'Tools, briefly' },
      { anchor: 'example',         label: 'An example' },
      { anchor: 'reading',         label: 'Reading rhythm' },
    ],
    html: `
      <p>This is an attempt to write down, without flinching, how I actually build things when I have the luxury of going slowly.</p>

      <h2 id="the-premise">The premise</h2>
      <p><em>Slowly</em> is doing a lot of work in that sentence. I don't mean lazy. I mean <strong>one decision at a time, with reasons</strong>, and a refusal to optimize for a pace I can't sustain.</p>

      <aside class="admonition note">
        <span class="admonition-label">Scope</span>
        <p>This applies to side projects, personal writing, and the one or two things at work I have real ownership over. It does not apply to the rest of my calendar.</p>
      </aside>

      <h2 id="weekly">The weekly shape</h2>
      <p>Most weeks look like this:</p>
      <ol>
        <li>One long block (two to three hours) on Sunday for the thing that needs uninterrupted thinking</li>
        <li>Two or three short blocks (30 minutes each) during the week to keep the state warm</li>
        <li>A single "publish or trim" pass on Friday</li>
      </ol>

      <h3 id="block">What counts as a block</h3>
      <ul>
        <li>Phone in another room</li>
        <li>One tab, one document, one question</li>
        <li>A visible timer</li>
      </ul>

      <h2 id="tools">Tools, briefly</h2>
      <p>A short, opinionated list:</p>
      <table>
        <thead><tr><th>Tool</th><th>For</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>Plain text files</td><td>Almost everything</td><td>Portable, greppable, outlives any app</td></tr>
          <tr><td>A single notebook</td><td>Reading, planning</td><td>Friction where I want friction</td></tr>
          <tr><td><code>rg</code> and <code>fd</code></td><td>Finding things</td><td>Faster than any GUI search</td></tr>
          <tr><td>A kitchen timer</td><td>Focus blocks</td><td>Analog, loud, cannot be snoozed silently</td></tr>
        </tbody>
      </table>

      <h2 id="example">An example</h2>
      <p>Below is the shape of the build script for this site — not because it's clever, but because <em>boring</em> is a feature:</p>
<pre><code>#!/usr/bin/env bash
set -euo pipefail

npm run build
touch dist/.nojekyll</code></pre>

      <aside class="admonition caveat">
        <span class="admonition-label">Caveat</span>
        <p>None of this scales to a team. These are habits for solo work. A team needs documented shared tools, not one person's preferences in a shoebox.</p>
      </aside>

      <h2 id="reading">Reading rhythm</h2>
      <p>I read a little every day. Not a lot. A chapter most mornings, an essay some evenings. The rule is:</p>
      <blockquote><p>If the book is boring, close it. Libraries are full.</p></blockquote>

      <hr />

      <div class="callout"><p>Consistency is the long game's only cheat code.</p></div>
    `,
  },
  {
    slug: 'a-quieter-internet',
    title: 'A quieter internet',
    date: '2026-04-05',
    draft: true,
    words: 137,
    toc: null,
    html: `
      <p>Most of the internet I love is built by people with day jobs and a long memory. It updates once a month, or once a quarter, and nobody is in a hurry.</p>
      <p>The reward for writing into that kind of internet is modest and strange. A good message from a stranger, once a year. A link back from another small site. The feeling that your corner of the thing is at least yours.</p>
      <p>I am trying to build a smaller corner. Quietly.</p>
    `,
  },
];

window.NOTES = NOTES;
window.ESSAYS = ESSAYS;

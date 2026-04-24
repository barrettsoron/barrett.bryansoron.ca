---
title: Notes from the Lewis for Leader campaign on digital sovereignty
date: 2026-04-24
description: "On the tech stack we ran for the winning Avi Lewis campaign for NDP Leader, the alternatives we tested and rejected, the partnerships that carried the work, and the sovereignty practice that emerged from all of it."
draft: false
---

On a busy afternoon mid-campaign, one of our field organizers was hustling to get a volunteer update email out. Endorsements were rolling in steadily and a multi-stop tour was underway. Our creative team was stretched thin, creating endorsement cards and event graphics at a rapid clip. Thankfully, Avi Lewis made an early choice to double-down on "big organizing" as a strategy, distributing authority and resources down to local volunteers, equipping them to act rapidly and independently through templates, training, and a supportive staff team.

So, this organizer asked to do their own design work because the campaign didn't have a dedicated designer available. Simple enough! They open our Team Canva to remove a photo background and put a border around a group of canvass volunteers. It's a routine task. A standard template with an existing brand kit. The kind of common design work volunteers and campaign workers do, since the pre-LLM days, with a tool like Canva.

But this time, it also does something else. Under the hood (and completely unnecessarily) the tool call invokes generative AI for a task that doesn't need it, either through a confused UX or a deliberate imposition by Canva during that wave of the AI frenzy. The faces in the photos come out distorted in the way early gen AI could *really* get faces wrong. Inexplicably, the moustache on one volunteer was applied to everyone, their faces twisted and smeared. A sign one of the volunteers is holding blurs into illegible gibberish. It's such a common and tested task in Canva that it doesn't get the review it needs. Nobody catches it. The image goes out in a campaign email…

The first replies land within minutes. *Yikes.* People immediately notice what we don't and the emails and social messages flood in.

The organizer writes an apology to the list within the hour: *Sorry for the jump scare. I uploaded the photos into Canva and applied a template style to get a border. I did not notice what the template did to the actual photo. Very embarrassing!*

They attach the originals (the real photos of real volunteers from the real field action) so the list can see them alongside what the template had produced. The closer is self-deprecating and kind-hearted: *this is what you get when organizers attempt to do design!* A line about probably being banned from Canva for the rest of the campaign. They feel *terrible* and the people who noticed were not always polite and understanding in their response.

A longstanding, predictable task — remove a background, apply an outline, add a filter — became shockingly unreliable inside a single campaign. The same tool that had been removing backgrounds and applying filters reliably for years now produced faces that had never existed.

From day one, our creative director had been holding a clear line: if we're sharing a photo of volunteers, it's a real photo from the field. Zero generative AI in our creative. That line got harder to hold as Canva sneaked in more generative features. The team kept the commitment; what it couldn't keep was a reliable handle on what the tool was doing under the hood.

Moments like that ran parallel to the main work we were doing, as we tried to manage the AI slop that big tech was forcing on everyone. Usually we caught them early, deactivated the new "feature" where we could. Sometimes, like this one, we only caught them after — and sent the apology alongside the originals as quickly as we could. The labour of noticing these changes, before or after, was its own burden.

## Vantage: seven months, three roles

A word about my own vantage point before the rest of this piece makes sense. The campaign ran seven months, September 2025 through late March 2026. For the first couple months, I was an interim campaign manager, doing the job until we connected with the extraordinary [Savhanna Wilson](https://youtu.be/KXLN47bVxis?si=yOtxFRW4kfoQboWw&t=83). I moved to a dual operations and communications director role, until we found a permanent communications director in [Donya Ziaee](https://www.ndp.ca/news/ndp-leader-avi-lewis-announces-details-senior-team) — who's brought her skill and relationships into that same role in the new leader's office. I moved into a much-needed full operations role and currently continue in that role, closing out the campaign and meeting our compliance obligations with Elections Canada. The people designing and maintaining the tech stack were also the people running the campaign, and there were rarely enough of them.

## Starting from refusal

Before the stack came together, we started with a refusal. NationBuilder was out. It's been a Canadian campaign stalwart for decades now, but the tide had finally turned. The reasoning was operational: the tool is costly at scale, dated in its UX and data model, and not built for the shape of a "big organizing", distributed campaign like we were planning — the kind of campaign that runs through a hundred Discord channels and Signal threads, a dozen regional chapters, and a diverse and multilingual volunteer base. It was a clear-eyed read on whether the tool could carry the work. It couldn't. Before we'd chosen anything, we'd decided what was off the table.

Starting from "we're not doing X" forced me, our data director, and our field director to articulate what we needed early on. A CRM that could do serious relational organizing across provinces. Document collaboration that a policy expert three time zones away could drop into after they put their kids to sleep. Project coordination that would survive a volunteer who suddenly disappears. Meeting infrastructure that didn't require training anyone. Design throughput that could keep up with a rolling schedule of events, field actions, and endorsements. But the refusal was the first spec, written in negative. We knew what we didn't want before we knew what we wanted.

## What we tested — and where it stalled

Through the summer of 2025, working ahead of the September campaign launch, we ran real trials on FOSS (free and open source) alternatives across pieces of the stack. The Trump regime's threats against Canada and Microsoft's denial of service to the International Criminal Court were top of mind. Losing access to critical campaign infrastructure because it was controlled or influenced by adversarial governments was something we had to consider.

Two failure modes came out of those trials. The first: FOSS tools not yet mature enough at a nationwide campaign scale. The second: FOSS tools mature enough, but still losing because incumbent familiarity across a distributed volunteer base is its own barrier. Campaign and movement-tech writing often collapses these into one story. They're different phenomena, and the second is more damning and harder to overcome. Both appear below.

Our small team explored. HedgeDoc for collaborative markdown notes. CryptPad for encrypted docs and file storage. MkDocs as a documentation and training tool. We sketched out bespoke database-and-API options, working to build something from scratch. Each got a genuine look. None landed.

The failures were operational, not philosophical. The markdown and documentation tools would only work for a small technically-minded team and stalled when we tried to onboard others: the UX carried enough friction that the minutes-per-new-user cost added up, across hundreds of volunteers and staff, into a training debt the campaign couldn't handle. The bespoke database work could be cleanly built but would require continuous engineering attention we didn't have the budget to sustain once the campaign was live. These were fine options if we had a dedicated engineering team and a small crew of permanent staff. They stalled when they met the actual shape of a nationwide campaign: widely distributed, multi-lingual, volunteer-oriented, high-turnover, urgency-driven, trained in whatever the rest of the world uses.

That's failure mode one. Failure mode two showed up when we looked at full-stack Google Workspace alternatives. Proton — encrypted, EU-based, a genuine sovereignty-first option with Drive, Docs, Calendar and the rest. NextCloud — the canonical self-hosted FOSS workspace, mature and battle-tested. Both were real candidates. The tools worked. The problem was that every volunteer, every contractor, every ally we collaborated with already lived in Google Workspace. Switching to FOSS alternatives meant asking a distributed, turnover-heavy team to learn more limited new interfaces under urgency, and losing some of the expert collaborators on the other side of every shared doc. The gravitational pull of the gargantuan incumbent here is measured in onboarding hours the campaign didn't have. We knew the trade-offs and we rolled the dice with them.

## The solidarity.tech partnership

solidarity.tech came to us out of the blue. There's a bigger story around this that I will tell another time. But for now: The product is a relational-organizing CRM built for contemporary distributed campaign work — the kind of tool that sits in the cluster where Action Network, Nationbuilder, and the progressive CRM landscape has been iterating for a decade. Nothing in the Canadian market had come close.

It was one of the largest single-item line costs on the campaign budget. Understandably so as it consolidated a number of services that used to be separate. We paid because the work we did genuinely wouldn't have been possible otherwise. FOSS at the scale we needed didn't exist. A Canadian alternative didn't exist either. The options were three: pay for a product that worked, try to build something bespoke and watch the campaign eat its own timeline, or accept a degraded version of the work. We paid.

And then — this is the part that moves the story from "purchase" to "partnership" — we worked continuously with the developer to refine it for Canadian use cases and to address edge cases as they surfaced. That's a different relationship from the procurement model most campaigns know. It's closer to how good movement infrastructure actually gets built: a small developer iterating alongside a live campaign, absorbing what the campaign learns, shipping refinements that the next campaign benefits from.

My honest assessment: it really did scale. The tool carried seven months of nationwide volunteer, donor, and contact work — 8,400 volunteers onboarded, 2,800 relational organizers who in turn brought thousands more people in, more than 450,000 phone calls logged across 6,500-plus caller-hours, 550,000 text messages sent, members signed up in 338 of 343 federal ridings, more than $1.5 million raised from 11,000-plus individual donors. It's going to be gamechanging for Canadian movement work in the years ahead — candidates, EDAs, advocacy orgs, labour locals who need a serious relational-organizing substrate need to take a serious look at this tool.

Yet: it's still a US vendor. Still SaaS. Still not movement-owned. The partnership model is a real sovereignty rung — higher than "use whatever the Trump-friendly hyperscaler ships," lower than "movement builds and owns its own Canadian infrastructure." The ladder doesn't have a step that's magic here. But this is a good rung, and the Canadian movement is materially better off that the tool is available.

## The stack we ran on

By November, our tech stack had settled into a working shape. Not designed with intention — more accreted under the pressure and urgency of the largest, most distributed campaign any of us had ever worked on.

<a href="/essays/stack.html" target="_blank" rel="noopener" aria-label="View the stack diagram larger" style="display:block;text-decoration:none;border-bottom:none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 370" role="img" aria-labelledby="stack-title stack-desc" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:auto;max-width:600px;margin:2.5rem auto">
	<title id="stack-title">The campaign tech stack: chosen and drifted</title>
	<desc id="stack-desc">A block diagram of the Avi Lewis leadership campaign tech stack from September 2025 through March 2026. Four tools we chose deliberately (solidarity.tech, bespoke Astro site, individual AI tools, bespoke data integrations) sit above four tools that shipped generative-AI features underneath us during the campaign (Google Workspace with Gemini, Asana with Intelligence, Zoom with AI Companion, Canva with Magic Studio).</desc>
	<text x="14" y="28" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" font-weight="700" letter-spacing="2">THE STACK WE RAN ON</text>
	<text x="586" y="28" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="1">sept 2025 – mar 2026</text>
	<text x="14" y="72" font-family="'BC Sans', -apple-system, sans-serif" font-size="12" font-weight="700" fill="#10b981" letter-spacing="2">CHOSEN</text>
	<text x="74" y="72" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#8a8a92">tools we picked with intention</text>
	<line x1="14" y1="92" x2="148" y2="92" stroke="#10b981" stroke-width="2"/>
	<line x1="160" y1="92" x2="294" y2="92" stroke="#10b981" stroke-width="2"/>
	<line x1="306" y1="92" x2="440" y2="92" stroke="#10b981" stroke-width="2"/>
	<line x1="452" y1="92" x2="586" y2="92" stroke="#10b981" stroke-width="2"/>
	<text x="14" y="114" font-family="'BC Sans', -apple-system, sans-serif" font-size="14" font-weight="700" fill="#ededed">solidarity.tech</text>
	<text x="14" y="134" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#8a8a92">Nationwide CRM</text>
	<text x="160" y="114" font-family="'BC Sans', -apple-system, sans-serif" font-size="14" font-weight="700" fill="#ededed">Astro site</text>
	<text x="160" y="134" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#8a8a92">Candidate's site</text>
	<text x="306" y="114" font-family="'BC Sans', -apple-system, sans-serif" font-size="14" font-weight="700" fill="#ededed">Individual AI</text>
	<text x="306" y="134" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#8a8a92">Personal tools</text>
	<text x="452" y="114" font-family="'BC Sans', -apple-system, sans-serif" font-size="14" font-weight="700" fill="#ededed">Integrations</text>
	<text x="452" y="134" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#8a8a92">Bespoke data glue</text>
	<text x="14" y="206" font-family="'BC Sans', -apple-system, sans-serif" font-size="12" font-weight="700" fill="#8a8a92" letter-spacing="2">DRIFT</text>
	<text x="64" y="206" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#8a8a92">tools that changed underneath us</text>
	<line x1="14" y1="226" x2="148" y2="226" stroke="#3a3a42" stroke-width="1.5" stroke-dasharray="4 3"/>
	<line x1="160" y1="226" x2="294" y2="226" stroke="#3a3a42" stroke-width="1.5" stroke-dasharray="4 3"/>
	<line x1="306" y1="226" x2="440" y2="226" stroke="#3a3a42" stroke-width="1.5" stroke-dasharray="4 3"/>
	<line x1="452" y1="226" x2="586" y2="226" stroke="#3a3a42" stroke-width="1.5" stroke-dasharray="4 3"/>
	<text x="14" y="248" font-family="'BC Sans', -apple-system, sans-serif" font-size="14" font-weight="700" fill="#a8a8b0">Google Workspace</text>
	<text x="14" y="268" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#8a8a92">Mail, Docs, Drives</text>
	<text x="14" y="296" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#0a8d65" letter-spacing="1">↳ GEMINI</text>
	<text x="160" y="248" font-family="'BC Sans', -apple-system, sans-serif" font-size="14" font-weight="700" fill="#a8a8b0">Asana</text>
	<text x="160" y="268" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#8a8a92">Coordination</text>
	<text x="160" y="296" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#0a8d65" letter-spacing="1">↳ INTELLIGENCE</text>
	<text x="306" y="248" font-family="'BC Sans', -apple-system, sans-serif" font-size="14" font-weight="700" fill="#a8a8b0">Zoom</text>
	<text x="306" y="268" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#8a8a92">Meetings</text>
	<text x="306" y="296" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#0a8d65" letter-spacing="1">↳ AI COMPANION</text>
	<text x="452" y="248" font-family="'BC Sans', -apple-system, sans-serif" font-size="14" font-weight="700" fill="#a8a8b0">Canva</text>
	<text x="452" y="268" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#8a8a92">Design</text>
	<text x="452" y="296" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#0a8d65" letter-spacing="1">↳ MAGIC STUDIO</text>
	<text x="14" y="350" font-family="'Noto Serif', Georgia, serif" font-size="12" font-style="italic" fill="#8a8a92">Chosen items held deliberately. Drift items shipped generative-AI defaults mid-campaign.</text>
</svg></a>

Gmail handled org email and calendars. Google Shared Drives held volunteer and worker resource libraries, the kind of documents new organizers needed on day one on whatever mobile device they already owned.

Google Docs carried our collaborative policy production. Drafts opened up to outside experts, researchers, and movement elders who commented and suggested directly in the margins, shaping the campaign's policy positions in a way that, honestly, only Docs' Suggestion Mode currently enables at any kind of scale. I've not found anything better; the FOSS alternatives for that specific use case don't exist yet.

Zoom carried meetings, because everyone already knew how to use it — mute-buttons-in-muscle-memory is a real thing, and fighting it costs time trainers and facilitators couldn't spare.

Asana arrived later than the others. It wasn't our first choice. It was the first one that worked. We had been trying to coordinate the campaign through shared spreadsheets and Google Docs — the default substrate I find every movement org defaults to because everyone already has it. But in our case, that substrate hit its ceiling mid-campaign. Travel details slipped through the cracks as different local meetings produced different spreadsheets for different decision-makers. Accountability diffused across project-tracking docs that weren't always properly shared and re-discoverable. We needed somewhere to work together with a short onboarding curve and enough structure to hold the pieces. Asana cleared that bar enough. As more people got into it, it absorbed the coordination work that had been dissolving in the shared-sheets layer.

Returning to Canva, it carried design throughput. It's a tool many small-budget movement orgs that can't afford a full-time designer use — so our volunteers and campaign workers knew it. But the same reason every volunteer and contractor could pick it up was also the reason the campaign couldn't fully monitor what it was doing under the hood. The opening scene of this essay shows the risk of this tradeoff.

On other AI tools specifically, we made a deliberate architectural choice: individual, not institutional. I ran a Claude Max subscription for scripting, coding, research and monitoring. Other team members used what they chose; others refused AI as much as Big Tech would allow. But generative AI for external copy and images was fully off the table. Personally identifiable information (PII) stayed isolated in solidarity.tech and restricted Google Drives. We didn't adopt a full refusal — we used the technology where it made sense, with intention, and communicated that to our volunteers and staff.

The campaign's site lived outside the SaaS stack entirely. We built it bespoke in Astro — thousands of lines of it scaffolded with AI-assisted coding — because owning the site meant owning the code, the content, the deploy, and the data model. That ownership is one of the few places in the stack where the sovereignty word applies without caveats. The site was ours.

Some of the most politically important infrastructure work on the campaign happened in a layer I was adjacent to rather than inside. A small and dedicated data team, volunteers mostly, built the integrations that held the stack together: the pipelines that moved data between our new CRM and the party's existing fundraising platform via the public site and social ads and more. I'm not the person to tell that story. What I can tell you is that the bespoke glue they wrote was where the future of our sovereignty practice can be seen. Built with clear intention, customized for Canadian data and users, interoperable and compatible with Google Workspace only where it made sense and we had full control.

## What the platforms did while we were busy

<a href="/essays/drift.html" target="_blank" rel="noopener" aria-label="View the platform drift timeline larger" style="display:block;text-decoration:none;border-bottom:none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" role="img" aria-labelledby="drift-title drift-desc" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:auto;max-width:600px;margin:2.5rem auto">
	<title id="drift-title">Platform drift — September 2025 through March 2026</title>
	<desc id="drift-desc">A timeline of generative-AI features that shipped into four tools (Canva, Zoom, Asana, Google Workspace) during the Avi Lewis leadership campaign, plus the Otter.ai class action filed just before the window opens. Dots mark discrete platform events; the Google row shows an ambient band representing gradual default rollout of Gemini across Workspace.</desc>
	<defs>
		<linearGradient id="drift-ambient" x1="0" y1="0" x2="1" y2="0">
			<stop offset="0%" stop-color="#10b981" stop-opacity="0.10"/>
			<stop offset="100%" stop-color="#10b981" stop-opacity="0.26"/>
		</linearGradient>
	</defs>
	<text x="14" y="28" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" font-weight="700" letter-spacing="2">PLATFORM DRIFT</text>
	<text x="586" y="28" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="1">sept 2025 → mar 2026</text>
	<line x1="14" y1="48" x2="586" y2="48" stroke="#24242a" stroke-width="1"/>
	<text x="14" y="68" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="9.5" fill="#8a8a92" letter-spacing="1.5" font-weight="700">AUG 15, 2025  ·  PRE-WINDOW</text>
	<text x="14" y="86" font-family="'Noto Serif', Georgia, serif" font-size="12.5" font-style="italic" fill="#ededed">Otter.ai class action filed (Brewer v. Otter) — Notetaker auto-joined meetings without consent.</text>
	<line x1="14" y1="102" x2="586" y2="102" stroke="#24242a" stroke-width="1"/>
	<text x="125" y="122" text-anchor="middle" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="2" font-weight="700">SEP</text>
	<text x="195" y="122" text-anchor="middle" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="2" font-weight="700">OCT</text>
	<text x="265" y="122" text-anchor="middle" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="2" font-weight="700">NOV</text>
	<text x="335" y="122" text-anchor="middle" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="2" font-weight="700">DEC</text>
	<text x="405" y="122" text-anchor="middle" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="2" font-weight="700">JAN</text>
	<text x="475" y="122" text-anchor="middle" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="2" font-weight="700">FEB</text>
	<text x="545" y="122" text-anchor="middle" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="2" font-weight="700">MAR</text>
	<line x1="14" y1="132" x2="586" y2="132" stroke="#24242a" stroke-width="1"/>
	<line x1="14" y1="172" x2="586" y2="172" stroke="#24242a" stroke-width="1"/>
	<line x1="14" y1="212" x2="586" y2="212" stroke="#24242a" stroke-width="1"/>
	<line x1="14" y1="252" x2="586" y2="252" stroke="#24242a" stroke-width="1"/>
	<line x1="14" y1="302" x2="586" y2="302" stroke="#24242a" stroke-width="1"/>
	<line x1="90" y1="132" x2="90" y2="302" stroke="#1a1a20" stroke-width="1"/>
	<line x1="160" y1="132" x2="160" y2="302" stroke="#1a1a20" stroke-width="1"/>
	<line x1="230" y1="132" x2="230" y2="302" stroke="#1a1a20" stroke-width="1"/>
	<line x1="300" y1="132" x2="300" y2="302" stroke="#1a1a20" stroke-width="1"/>
	<line x1="370" y1="132" x2="370" y2="302" stroke="#1a1a20" stroke-width="1"/>
	<line x1="440" y1="132" x2="440" y2="302" stroke="#1a1a20" stroke-width="1"/>
	<line x1="510" y1="132" x2="510" y2="302" stroke="#1a1a20" stroke-width="1"/>
	<line x1="580" y1="132" x2="580" y2="302" stroke="#1a1a20" stroke-width="1"/>
	<text x="82" y="156" text-anchor="end" font-family="'BC Sans', -apple-system, sans-serif" font-size="12" font-weight="700" fill="#ededed">Canva</text>
	<text x="82" y="196" text-anchor="end" font-family="'BC Sans', -apple-system, sans-serif" font-size="12" font-weight="700" fill="#ededed">Zoom</text>
	<text x="82" y="236" text-anchor="end" font-family="'BC Sans', -apple-system, sans-serif" font-size="12" font-weight="700" fill="#ededed">Asana</text>
	<text x="82" y="281" text-anchor="end" font-family="'BC Sans', -apple-system, sans-serif" font-size="12" font-weight="700" fill="#ededed">Google</text>
	<circle cx="108" cy="152" r="4" fill="#10b981"/>
	<text x="118" y="156" font-family="'BC Sans', -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="#ededed">Nano Banana rollout</text>
	<circle cx="265" cy="152" r="4" fill="#10b981"/>
	<text x="275" y="156" font-family="'BC Sans', -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="#ededed">Nano Banana Pro</text>
	<circle cx="132" cy="192" r="4" fill="#10b981"/>
	<text x="142" y="196" font-family="'BC Sans', -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="#ededed">AI Companion announced</text>
	<circle cx="335" cy="192" r="4" fill="#10b981"/>
	<text x="345" y="196" font-family="'BC Sans', -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="#ededed">AI Companion GA</text>
	<circle cx="152" cy="232" r="4" fill="#10b981"/>
	<text x="162" y="236" font-family="'BC Sans', -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="#ededed">AI Teammates beta</text>
	<circle cx="285" cy="232" r="4" fill="#10b981"/>
	<text x="295" y="236" font-family="'BC Sans', -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="#ededed">Fall release</text>
	<circle cx="475" cy="232" r="4" fill="#10b981"/>
	<text x="485" y="236" font-family="'BC Sans', -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="#ededed">Winter release</text>
	<rect x="90" y="264" width="490" height="26" fill="url(#drift-ambient)"/>
	<text x="335" y="281" text-anchor="middle" font-family="'BC Sans', -apple-system, sans-serif" font-size="11" font-weight="700" fill="#ededed" letter-spacing="1.5">GRADUAL GEMINI DEFAULT ROLLOUT</text>
	<text x="14" y="334" font-family="'Noto Serif', Georgia, serif" font-size="12" font-style="italic" fill="#8a8a92">Changes shipped as defaults — the stack we'd started with became something else.</text>
</svg></a>

Across the seven months of the campaign, the stack we had chosen quietly became something else. In the summer, Google Docs was a tool we used to collaborate on early platforms ideas. By March, it was a tool with "Help me write" hovering in the sidebar, Gemini offering to summarize spreadsheets, and AI features rolling into defaults without a straightforward opt-out moment. Asana kept shipping new "Asana Intelligence" features mid-campaign. Canva accelerated its "Magic Studio" rollout through the fall. Zoom deployed "AI Companion" across configurations — meeting summaries, transcript generation — in ways that required active campaign responses to contain. Meetings would begin with participants apologizing for bringing "Otter.AI" in with them — they didn't know how to turn it off. None of this happened in a single big announcement. It arrived one default at a time.

Google was particularly notorious for this. But the inertia of Google is hard to overcome because *"free"* is load-bearing for diverse, distributed teams. Every volunteer (or close enough) already has a Google account. Every collaborator already knows the interface. The cost of switching a thousand occasional contributors to something else is paid in time and attention the campaign doesn't have. This raw deal with Google and the others had *always* been extractive; the AI rollout made the extraction starkly visible. A tool we'd chosen in good faith in August was, by February, doing things we hadn't agreed to and didn't always understand.

Against that, new tools we chose to use were genuinely transformative. AI-assisted coding for the Astro site and the data integrations, planned, reviewed and iterated on by humans. Team members using their own preferred AI tools for planning, research synthesis, compliance, coding support. Those choices moved the campaign's work forward and helped us understand the environment we were making [policy proposals](https://lewisisleader.ca/ideas/dignified-work) about.

The distinction — between tools we chose and tools that changed underneath us — sits at the centre of the argument. The issue wasn't AI in the abstract. It was who decided where, when, and how. A campaign running a Claude subscription because a specific person picked it for a specific task is a different thing than a platform quietly routing routine volunteer work through generative AI because an executive decided the roadmap. The first is a choice. The second is what happens to you.

<div class="callout">
<p>The first is a choice. The second is what happens to you.</p>
</div>

And underneath both: the people whose labour trained the next cycle's models mostly didn't have any say in the terms. We didn't solve that, and naming it here doesn't solve it either. It's a debt the movement is carrying and hasn't figured out how to pay.

## The layer most tech-stack essays miss

I've mostly written about technology choices, but most of our core operational challenges weren't technical. They were case-making, training, and change management.

Forms for purchase orders went unused (or inconsistently used). Invoicing automations broke because many of our young contractors were tracking billable time for the first time in their lives. Turnover was rapid in the early months. Urgency overrode standard practice — and "standard practice" across a nationwide campaign where different regions moved at different speeds in different languages was a moving target anyway. People freelanced. Parallel bookkeeping sprang up. Local groups kept calendars that conflicted with national ones. Asking folks to adopt an unfamiliar workflow wasn't always well-received by people already stretched to their limit.

Underneath the workflow-adoption struggles was a harder, less tractable problem: at any given moment, we often couldn't say clearly who was responsible for making a particular decision, who was responsible for cascading it to the people who needed to act on it, or how to verify that the right information had reached the right people in time to matter. With a dozen key staff and several hundred volunteers distributed across the country — contributing real work at different speeds, through different channels, under different levels of context — that coordination task was immense.

We never quite got it right. We got it better over time. We shipped. We showed up. We hit our KPIs. And still — decisions got made in one thread and missed in another. Urgent information reached half the team and surprised the other half the next morning. Accountability for a given call diffused across three people, any of whom could reasonably have thought it sat with someone else.

That's a sovereignty problem no tool solves. Asana can show you who's assigned a task. It can't teach a distributed team of volunteers and staff — many new to campaign work, many rotating in and out, all working at campaign speed — the muscle memory of surfacing a decision, claiming it, cascading it, and closing the loop. That muscle memory is a practice the movement has to teach deliberately, and most of us are still learning. Myself included.

## The ladder

Digital sovereignty for movements is something you practice, not something you achieve. We didn't achieve it. Any campaign that claims they did is either being loose with the word or small enough that the claim can't be tested. What you can ask honestly: did we know where we weren't sovereign, did we have a working sense of the ladder, and did we have a plan for moving up a rung or two when we could.

The rungs, as we found them:

- Refusal at the top end: NationBuilder, walked away from entirely.
- FOSS alternatives tested and rejected on operational grounds, with the receipts documented so the next campaign doesn't have to redo the work.
- Paid partnership with solidarity.tech: a US vendor relationship with active co-development rather than straight SaaS.
- Architectural segregation: PII held in solidarity.tech, no institutional AI against campaign data or generative, individuals using their own AI tools at their own risk under our confidentiality rules.
- Human-enforced generative discipline: a candidate and creative director with a clear line, holding it against platforms that were increasingly designed to make holding it harder.
- Owned code: the campaign's Astro site, AI-assisted in the writing and entirely ours in the running.
- Accreted core: Google Workspace, Asana, Zoom, Canva — the incumbent stack, chosen after honest testing of alternatives, used with eyes open.
- Change management and coordination: the layer we struggled with most, and the one most future campaigns will also struggle with however technology changes.

<a href="/essays/ladder.html" target="_blank" rel="noopener" aria-label="View the sovereignty ladder larger" style="display:block;text-decoration:none;border-bottom:none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 580" role="img" aria-labelledby="ladder-title ladder-desc" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:auto;max-width:600px;margin:2.5rem auto">
	<title id="ladder-title">The sovereignty ladder</title>
	<desc id="ladder-desc">Eight rungs of digital sovereignty from the Avi Lewis leadership campaign, ordered from default SaaS dependency at the bottom to full refusal at the top. Higher rungs carry more sovereignty; the accent fades as the rungs descend.</desc>
	<defs>
		<linearGradient id="ladder-upright" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#10b981" stop-opacity="0.95"/>
			<stop offset="100%" stop-color="#0a8d65" stop-opacity="0.18"/>
		</linearGradient>
	</defs>
	<text x="16" y="30" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" font-weight="700" letter-spacing="2">THE SOVEREIGNTY LADDER</text>
	<text x="584" y="30" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="1">↑ more sovereign</text>
	<line x1="88" y1="52" x2="88" y2="536" stroke="url(#ladder-upright)" stroke-width="2"/>
	<line x1="64" y1="76" x2="88" y2="76" stroke="#10b981" stroke-width="2"/>
	<text x="54" y="80" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" letter-spacing="0.5">08</text>
	<text x="104" y="74" font-family="'BC Sans', -apple-system, sans-serif" font-size="15" font-weight="700" fill="#ededed" letter-spacing="-0.2">Refusal</text>
	<text x="104" y="94" font-family="'Noto Serif', Georgia, serif" font-size="13" font-style="italic" fill="#8a8a92">NationBuilder, walked away entirely.</text>
	<line x1="64" y1="136" x2="88" y2="136" stroke="#10b981" stroke-width="2" stroke-opacity="0.88"/>
	<text x="54" y="140" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" fill-opacity="0.88" letter-spacing="0.5">07</text>
	<text x="104" y="134" font-family="'BC Sans', -apple-system, sans-serif" font-size="15" font-weight="700" fill="#ededed" letter-spacing="-0.2">Owned code</text>
	<text x="104" y="154" font-family="'Noto Serif', Georgia, serif" font-size="13" font-style="italic" fill="#8a8a92">The candidate's Astro site — ours to run.</text>
	<line x1="64" y1="196" x2="88" y2="196" stroke="#10b981" stroke-width="2" stroke-opacity="0.76"/>
	<text x="54" y="200" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" fill-opacity="0.76" letter-spacing="0.5">06</text>
	<text x="104" y="194" font-family="'BC Sans', -apple-system, sans-serif" font-size="15" font-weight="700" fill="#ededed" letter-spacing="-0.2">FOSS tested, receipts kept</text>
	<text x="104" y="214" font-family="'Noto Serif', Georgia, serif" font-size="13" font-style="italic" fill="#8a8a92">Operational grounds, not philosophical.</text>
	<line x1="64" y1="256" x2="88" y2="256" stroke="#10b981" stroke-width="2" stroke-opacity="0.64"/>
	<text x="54" y="260" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" fill-opacity="0.64" letter-spacing="0.5">05</text>
	<text x="104" y="254" font-family="'BC Sans', -apple-system, sans-serif" font-size="15" font-weight="700" fill="#ededed" letter-spacing="-0.2">Paid partnership</text>
	<text x="104" y="274" font-family="'Noto Serif', Georgia, serif" font-size="13" font-style="italic" fill="#8a8a92">solidarity.tech, with active co-development.</text>
	<line x1="64" y1="316" x2="88" y2="316" stroke="#10b981" stroke-width="2" stroke-opacity="0.52"/>
	<text x="54" y="320" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" fill-opacity="0.56" letter-spacing="0.5">04</text>
	<text x="104" y="314" font-family="'BC Sans', -apple-system, sans-serif" font-size="15" font-weight="700" fill="#ededed" letter-spacing="-0.2">Architectural segregation</text>
	<text x="104" y="334" font-family="'Noto Serif', Georgia, serif" font-size="13" font-style="italic" fill="#8a8a92">PII fenced off, AI kept at the edges.</text>
	<line x1="64" y1="376" x2="88" y2="376" stroke="#10b981" stroke-width="2" stroke-opacity="0.44"/>
	<text x="54" y="380" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" fill-opacity="0.52" letter-spacing="0.5">03</text>
	<text x="104" y="374" font-family="'BC Sans', -apple-system, sans-serif" font-size="15" font-weight="700" fill="#ededed" letter-spacing="-0.2">Human-enforced discipline</text>
	<text x="104" y="394" font-family="'Noto Serif', Georgia, serif" font-size="13" font-style="italic" fill="#8a8a92">A creative director's held line.</text>
	<line x1="64" y1="436" x2="88" y2="436" stroke="#10b981" stroke-width="2" stroke-opacity="0.36"/>
	<text x="54" y="440" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" fill-opacity="0.48" letter-spacing="0.5">02</text>
	<text x="104" y="434" font-family="'BC Sans', -apple-system, sans-serif" font-size="15" font-weight="700" fill="#ededed" letter-spacing="-0.2">Change management</text>
	<text x="104" y="454" font-family="'Noto Serif', Georgia, serif" font-size="13" font-style="italic" fill="#8a8a92">No tool solves this.</text>
	<line x1="64" y1="496" x2="88" y2="496" stroke="#10b981" stroke-width="2" stroke-opacity="0.28"/>
	<text x="54" y="500" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="11" fill="#10b981" fill-opacity="0.44" letter-spacing="0.5">01</text>
	<text x="104" y="494" font-family="'BC Sans', -apple-system, sans-serif" font-size="15" font-weight="700" fill="#ededed" letter-spacing="-0.2">Accreted core</text>
	<text x="104" y="514" font-family="'Noto Serif', Georgia, serif" font-size="13" font-style="italic" fill="#8a8a92">Google · Asana · Zoom · Canva — eyes open.</text>
	<text x="584" y="560" text-anchor="end" font-family="'Noto Sans Mono', ui-monospace, monospace" font-size="10" fill="#8a8a92" letter-spacing="1">↓ default SaaS dependency</text>
</svg></a>

Sovereignty practice advances slowly. Every movement operation is standing on some rung at any given moment; the job is to know which one, know the ones above and below, and move deliberately when you can. Treating the whole thing as a posture — claiming it rather than working at it — is how you stop noticing the rung you're actually on.

<div class="callout">
<p>Movements that treat sovereignty as a practice will outlast the ones that treat it as a posture.</p>
</div>

The Avi Lewis for Leader campaign was one iteration of the practice. The next campaign will run on tools we can't predict and face platform changes we haven't imagined. What carries forward isn't the stack or the specific lines we held — it's the work of noticing what we got wrong and writing it down, so the next team has somewhere to start.

import { useState } from 'react'
import { SERVICES, SIDE, FEATURES, TOOLS } from './data'

// One reusable tab list. Used in the hero and the services section.
function Tabs({ items, active, onChange, className }) {
  return (
    <div role="tablist" className={className}>
      {items.map((t, i) => (
        <button key={t.label} role="tab" className="tab" aria-selected={i === active} onClick={() => onChange(i)}>
          <span className="ic" style={{ background: t.color }}>{t.icon}</span>{t.label}
        </button>
      ))}
    </div>
  )
}

function Nav() {
  return (
    <div className="band">
      <nav>
        <a className="logo" href="#"><span className="mark">A</span>Apex Pod</a>
        <div className="links">
          <a href="#services">Services</a><a href="#work">Work</a><a href="#stack">Stack</a><a href="#quote">Pricing</a>
        </div>
        <span className="sp" />
        <a className="btn" href="#work">View projects</a>
        <a className="btn light" href="#contact">Start a project</a>
      </nav>
      <div className="wrap" style={{ borderBottom: 0 }}>
        <div className="strip">Now booking our first client builds for 2027<a href="#quote">Get an estimate</a></div>
      </div>
    </div>
  )
}

function Hero() {
  const [i, setI] = useState(0)
  const s = SERVICES[i]
  return (
    <header className="band">
      <div className="wrap hero">
        <span className="pill">Student-led · design to deployment</span>
        <h1>Plan it right.<br />Then build it.</h1>
        <p>Apex Pod Innovation is a studio of CS and IT students. We design websites, system architecture and databases, and build them full stack, with the diagrams to prove it.</p>
        <a className="btn light" href="#contact">Start a project</a>
        <div className="sub">Also offering <u>code audits</u>, <u>API design</u>, and <u>database modeling</u></div>
        <Tabs className="seg" items={SERVICES} active={i} onChange={setI} />
        <div className="frame">
          <div className="win">
            <small>{s.name}</small>
            <h3>{s.blurb}</h3>
            <ul>{s.list.map(x => <li key={x}>{x}</li>)}</ul>
            <div className="chips">{s.chips.map(x => <span className="chip" key={x}>{x}</span>)}</div>
          </div>
        </div>
      </div>
    </header>
  )
}

function Marquee() {
  return (
    <section className="band">
      <div className="wrap marq">
        <p>Built with the tools professional teams use</p>
        <div className="track">{[...TOOLS, ...TOOLS].map((t, k) => <span key={k}>{t}</span>)}</div>
      </div>
    </section>
  )
}

function Services() {
  const [i, setI] = useState(0)
  return (
    <section className="band" id="services">
      <div className="wrap sec">
        <div className="top">
          <div>
            <div className="lab"><span className="ic" style={{ background: '#e8742a' }}>▲</span>What we do</div>
            <h2>Work in the tools<br />you already trust</h2>
          </div>
          <p>Pick a service to see what you get. Every project ships with documentation your own team can maintain after we hand it over.</p>
        </div>
        <div className="demo">
          <Tabs className="side" items={SIDE} active={i} onChange={setI} />
          <div className="frame" style={{ margin: 0, maxWidth: 'none' }}>
            <div className="win dark"><pre dangerouslySetInnerHTML={{ __html: SIDE[i].code }} /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section className="band" id="stack">
      <div className="wrap sec">
        <div className="top"><h2>Apex adapts to<br />the way you work</h2><p>One team covers design, data and deployment, so nothing gets lost between handoffs.</p></div>
        <div className="bento">
          <div className="card c4" style={{ minHeight: 290 }}>
            <h3>Your stack, not ours</h3>
            <p style={{ maxWidth: 330 }}>We build in Next.js, ASP.NET Core or Node, on PostgreSQL or SQL Server, and fit what your team can maintain.</p>
            <span className="float" style={{ left: 30, top: 150 }}>Next.js</span>
            <span className="float" style={{ left: 180, top: 190 }}>ASP.NET</span>
            <span className="float" style={{ right: 60, top: 60 }}>GitHub</span>
            <span className="float" style={{ right: 150, top: 150 }}>PostgreSQL</span>
            <span className="float" style={{ right: 30, top: 215 }}>Figma</span>
          </div>
          <div className="card c2 dict">
            <h3>Your own data dictionary</h3><p>Every table and field named and explained.</p>
            <div style={{ marginTop: 14 }}>Users</div><div>Inquiries</div><div>PortfolioProjects</div><div style={{ opacity: .4 }}>Services</div>
          </div>
          <div className="card c2"><h3>ERDs and API specs</h3><p>Diagrams and endpoint docs delivered with every build.</p></div>
          <div className="card c2"><h3>Responsive by default</h3><p>Tested on phones, tablets and laptops before launch.</p></div>
          <div className="card c2"><h3>Clear handoff</h3><p>Repo, docs and a walkthrough session for your team.</p></div>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="band" id="work">
      <div className="wrap sec">
        <div className="top"><h2>Selected work</h2><p>Capstone and course builds that show how we plan, design and ship. Open a project for the architecture behind it.</p></div>
        <div className="bento">
          <div className="card c3"><h3>ViaScholar</h3><p>Grant administration system for a research center: roles, applications, review workflow.</p>
            <div className="chips"><span className="chip">ASP.NET</span><span className="chip">SQL Server</span></div></div>
          <div className="card c3"><h3>Your project here</h3><p>We are taking on our first client builds. Tell us what you need and we will scope it.</p>
            <a className="btn" style={{ marginTop: 16 }} href="#contact">Request a quote</a></div>
        </div>
      </div>
    </section>
  )
}

function Estimator() {
  const [on, setOn] = useState([0])
  const toggle = i => setOn(o => (o.includes(i) ? o.filter(x => x !== i) : [...o, i]))
  const cost = on.reduce((s, i) => s + FEATURES[i].cost, 0)
  const weeks = Math.max(1, 2 + on.reduce((s, i) => s + FEATURES[i].weeks, 0))
  return (
    <section className="band" id="quote">
      <div className="wrap sec"><div className="est">
        <div>
          <div className="lab"><span className="ic" style={{ background: '#2f6fe0' }}>$</span>Scope estimator</div>
          <h2>See a rough price<br />in ten seconds</h2>
          <p style={{ marginTop: 16 }}>Toggle what you need. This is a starting range, and we confirm it after a short call.</p>
        </div>
        <div>
          <div className="opts">
            {FEATURES.map((f, i) => <button key={f.label} className="opt" aria-pressed={on.includes(i)} onClick={() => toggle(i)}>{f.label}</button>)}
          </div>
          <p>Estimated range</p>
          <div className="out">${cost} – ${Math.round(cost * 1.4)}</div>
          <p>About {weeks} weeks</p>
        </div>
      </div></div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const submit = e => { e.preventDefault(); setSent(true) } // later: POST to your API here
  return (
    <section className="band" id="contact">
      <div className="wrap sec" style={{ textAlign: 'center' }}>
        <h2>Tell us what<br />you want to build</h2>
        <p style={{ marginTop: 16 }}>We reply within two working days.</p>
        <form onSubmit={submit}>
          <input required placeholder="Your name" />
          <input required type="email" placeholder="Email" />
          <select><option>Web design and planning</option><option>System architecture</option><option>Full-stack app</option><option>Code audit</option></select>
          <textarea rows="4" placeholder="What are you trying to build?" />
          <button className="btn light" style={{ justifyContent: 'center' }}>Send request</button>
          {sent && <p style={{ textAlign: 'center' }}>Request sent. We will email you a project brief shortly.</p>}
        </form>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav /><Hero /><Marquee /><Services /><Stack /><Work /><Estimator /><Contact />
      <div className="wrap"><footer><span>Apex Pod Innovation</span><span>Built by CS and IT students</span></footer></div>
    </>
  )
}

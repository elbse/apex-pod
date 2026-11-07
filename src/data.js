// All page content lives here, so you edit text without touching components.
export const SERVICES = [
  { label: 'Web design', icon: 'W', color: '#e8742a', name: 'Web design and planning',
    blurb: 'Wireframes to a working design system.',
    list: ['Figma prototypes', 'Responsive layouts', 'Design systems', 'Front-end architecture'],
    chips: ['Figma', 'Tailwind', 'shadcn/ui'] },
  { label: 'Architecture', icon: 'S', color: '#7a4de0', name: 'System architecture',
    blurb: 'The blueprint before a single line of code.',
    list: ['Database models and ERDs', 'REST or GraphQL API design', 'Tech stack recommendation', 'Security baseline'],
    chips: ['PostgreSQL', 'SQL Server', 'Mermaid'] },
  { label: 'Full-stack', icon: 'F', color: '#2f6fe0', name: 'Full-stack development',
    blurb: 'Custom apps, dashboards and admin portals.',
    list: ['Auth and user roles', 'Payments and email', 'Admin dashboards', 'Third-party APIs'],
    chips: ['Next.js', 'ASP.NET Core', 'Node'] },
]

// Static strings written by us (not user input), rendered with dangerouslySetInnerHTML.
export const SIDE = [
  { label: 'Coding', icon: '</>', color: '#333', code:
`<b>export async function</b> createInquiry(req) {
  <b>const</b> { serviceType, budget, scope } = req.body;
  <b>const</b> row = <b>await</b> db.inquiries.insert({
    clientId: req.user.id,
    serviceType, budget, scope,
    status: <i>'pending'</i>
  });
  <b>await</b> mail.notify(row);
  <b>return</b> res.status(201).json(row);
}` },
  { label: 'System architecture', icon: '◫', color: '#7a4de0', code:
`Users ──< Inquiries >── Services
  id          id            id
  email       client_id     slug
  role        service_type  title
              status

PortfolioProjects
  slug · category · tech_stack(JSONB)` },
  { label: 'UI design', icon: '✎', color: '#e8742a', code:
`Home → Services → Portfolio → Quote

<b>Wireframe</b>  low fidelity, 3 screens
<b>Prototype</b>  clickable in Figma
<b>Handoff</b>    tokens + components` },
  { label: 'Security audits', icon: '✓', color: '#2a9d6f', code:
`<i>✓</i> Passwords hashed, sessions expire
<i>✓</i> Role checks on every API route
<i>✓</i> Inputs validated, queries parameterized
<i>✓</i> Secrets kept out of the repo
<b>!</b> Rate limit on the quote form` },
]

export const FEATURES = [
  { label: 'Design and planning', cost: 400, weeks: 1 },
  { label: 'Database and API design', cost: 600, weeks: 1 },
  { label: 'Auth and roles', cost: 700, weeks: 1 },
  { label: 'Payments', cost: 500, weeks: 1 },
  { label: 'Admin dashboard', cost: 900, weeks: 2 },
  { label: 'Rush delivery', cost: 600, weeks: -1 },
]

export const TOOLS = ['Next.js', 'Figma', 'GitHub', 'Postman', 'SSMS', 'Tailwind', 'PostgreSQL', 'Vercel', 'Azure']

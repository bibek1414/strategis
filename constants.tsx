
import { Service, TeamMember, Testimonial, FaqItem, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'strategy',
    title: 'Growth Strategy',
    description: 'Bespoke roadmaps for market leadership and scaling operations.',
    fullDetails: 'We embed with your leadership team to identify untapped market opportunities. Our approach combines rigorous data analysis with creative foresight to build resilient growth models.',
    icon: 'target',
    image: 'https://images.unsplash.com/photo-1454165833767-027eeef1596e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'financial',
    title: 'Financial Modeling',
    description: 'Precision capital structure and fundraising strategy.',
    fullDetails: 'From seed stage to Series B and beyond, we refine your unit economics and financial narrative. We ensure you are investor-ready with clear, data-backed projections.',
    icon: 'bar-chart-3',
    image: 'https://images.unsplash.com/photo-1554224155-16974a42588b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'digital',
    title: 'Systems & Ops',
    description: 'Modernizing technology stacks for operational efficiency.',
    fullDetails: 'We audit your current tech landscape to eliminate bottlenecks. By implementing modern SaaS architectures and automated workflows, we unlock 30%+ productivity gains.',
    icon: 'cpu',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Alex Tran',
    role: 'Managing Partner, Strategy & Finance',
    bio: 'Alex brings a decade of experience advising venture-backed startups on financial modeling and growth planning.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Maya Chen',
    role: 'Director of Systems & Ops',
    bio: 'Maya specializes in building lean, scalable systems for high-growth companies—transforming tech stacks into advantages.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Sophie Tran',
    role: 'Head of Strategic Initiatives',
    bio: 'Sophie leads cross-functional transformation efforts, aligning leadership teams around clear goals and KPIs.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Marcus Aurelius',
    role: 'CEO',
    company: 'Stellar Innovations',
    content: "Strategis didn't just clean up our numbers—they helped us tell a story that investors actually believed in. We secured our Series B within 3 months of our first engagement.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    author: 'Elena Vance',
    role: 'COO',
    company: 'GreenStream Tech',
    content: "The operational audit uncovered inefficiencies that were costing us millions. Their team embedded with ours and drove real change, not just slides.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  },
  {
    author: 'Julian Thorne',
    role: 'Managing Director',
    company: 'Summit Capital',
    content: "Precision is rare in this industry. Strategis provides the kind of clarity that allows for aggressive growth without the usual chaos.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'scaling-tech-infra',
    title: 'Scaling Tech Infrastructure Without Overengineering It',
    excerpt: 'Learn how to choose and implement systems that serve growth—without slowing your team down.',
    category: 'Insights',
    date: 'May 12, 2025',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    content: `A lot of tech stacks are built to impress—but few are built to run a business. At Strategis, we've reviewed hundreds of architectures and seen a consistent pattern: companies either overcomplicate or oversimplify. What they really need is a model that helps them answer real questions: Can I hire? Can I scale? When do I run out of capacity?

Here's how we help companies build systems that don't just look good—but actually work.

### Step 1: Audit for Bottlenecks
We begin by asking three key questions:
- What do you need this system to answer?
- Who will use it—and how often?
- Where are your current data gaps?`
  },
  {
    id: 'strategy-execution-fails',
    title: 'Why Strategy Fails Without Execution Support',
    excerpt: 'Even the best plans fall flat without clear ownership, tools, and follow-through—here\'s how we solve for that.',
    category: 'News',
    date: 'May 12, 2025',
    image: 'https://images.unsplash.com/photo-1454165833767-027eeef1596e?auto=format&fit=crop&q=80&w=1200',
    content: `A lot of strategic plans are built to impress investors—but few are built to run a business. At Strategis, we've reviewed hundreds of spreadsheets and seen a consistent pattern: founders either overcomplicate or oversimplify. What they really need is a model that helps them answer real questions: Can I hire? Can I scale? When do I run out of cash?

So here's how we help companies build models that don't just look good—but actually work.

### Week 1–2: Start With Questions, Not Tabs
We begin by asking three key questions:
- What do you need this model to answer?
- Who will use it—and how often?
- Where are your current data gaps?`
  },
  {
    id: 'financial-model-decisions',
    title: 'How to Build a Financial Model That Actually Supports Decisions',
    excerpt: 'A practical guide to creating a model that goes beyond investor decks—and helps you run your business smarter.',
    category: 'Insights',
    date: 'May 12, 2025',
    image: 'https://images.unsplash.com/photo-1554224155-16974a42588b?auto=format&fit=crop&q=80&w=1200',
    content: `Financial modeling is often treated as a chore for fundraising. But for a high-growth company, your model is your GPS. If it's too complex, you won't use it. If it's too simple, it'll lead you off a cliff.

We focus on building "living models" that update as your business does.`
  }
];

export const HISTORY = [
  { year: '2021', title: 'Strategis is founded', desc: 'A small team of advisors launches Strategis to offer a smarter, more embedded approach to consulting.' },
  { year: '2022', title: 'First $25M in client capital raised', desc: 'Within months, Strategis supports multiple clients through successful seed to Series B rounds.' },
  { year: '2023', title: 'Advisory team expands', desc: 'As demand grows, Strategis brings in experts across finance, systems, and growth strategy.' },
  { year: '2024', title: 'Embedded consulting model launched', desc: 'We formalize our embedded advisor structure—giving clients deep, on-demand expertise.' },
  { year: '2025', title: 'New markets, new sectors', desc: 'With clients now spanning SaaS, fintech, and consulting, Strategis continues to scale.' }
];

export const FAQS: FaqItem[] = [
  { q: "What sectors do you specialize in?", a: "We primarily work with high-growth SaaS, Fintech, and Professional Services firms. However, our strategic principles around operational scaling and financial clarity apply to any ambitious organization." },
  { q: "How long does a typical engagement last?", a: "Engagements range from 3-month intensive sprints to multi-year embedded partnerships. We tailor the duration to your specific business milestones and growth targets." },
  { q: "Do you assist with fundraising directly?", a: "While we aren't brokers, we help you prepare for fundraising by refining your financial narrative, building institutional-grade models, and readying your team for due diligence." },
  { q: "What makes your 'Embedded' model different?", a: "Unlike traditional consultants who deliver a report and leave, we sit in your weekly leadership meetings, manage your strategic KPIs, and take ownership of implementation alongside your team." }
];

// Single source of truth for all portfolio content.
// Image paths are absolute so they resolve from Vite's public/ root.

export const stats = [
  { value: 9.67, dec: 2, suffix: '', label: 'CGPA', sub: 'B.E. Computer Engineering' },
  { value: 7, dec: 0, suffix: '×', label: 'HACKATHON PODIUMS', sub: '2024 – 2026' },
  { value: 1, dec: 0, suffix: '', label: 'MICROSOFT AI-900', sub: 'Azure AI Fundamentals' },
]

export const education = [
  {
    period: 'AUG 2023 – PRESENT', detail: 'CGPA 9.67',
    degree: 'B.E. Computer Engineering',
    school: 'Thadomal Shahani Engineering College — TSEC, Mumbai',
  },
  {
    period: 'AUG 2021 – MAY 2023', detail: '92%',
    degree: 'HSC — Science',
    school: 'Pace Junior Science College, Borivali',
  },
]

// Console lines for the Operator live terminal panel.
export const consoleLines = [
  { k: 'agent.role', v: 'AI/ML Engineer' },
  { k: 'focus', v: 'Multi-Agent · Edge AI' },
  { k: 'council', v: 'Planner · Researcher · Critic · Synthesizer' },
  { k: 'deploy', v: 'on-device · offline · private' },
  { k: 'base', v: 'Mumbai, India (19.07°N)' },
]

export const skills = {
  LANGUAGES: [
    { n: 'C', s: 'c', c: 'A8B9CC', lvl: 80 },
    { n: 'C++', s: 'cplusplus', lvl: 85 },
    { n: 'Python', s: 'python', lvl: 95 },
    { n: 'JavaScript', s: 'javascript', lvl: 82 },
    { n: 'React.js', s: 'react', lvl: 85 },
    { n: 'Node.js', s: 'nodedotjs', lvl: 75 },
    { n: 'React Native', s: 'react', lvl: 78 },
    { n: 'HTML/CSS', s: 'html5', lvl: 88 },
    { n: 'Oracle/MySQL', s: 'mysql', lvl: 72 },
  ],
  'ML & DATA': [
    { n: 'PyTorch', s: 'pytorch', lvl: 90 },
    { n: 'TensorFlow', s: 'tensorflow', lvl: 85 },
    { n: 'Scikit-learn', s: 'scikitlearn', lvl: 88 },
    { n: 'Transformers', s: 'huggingface', lvl: 86 },
    { n: 'OpenCV', s: 'opencv', lvl: 80 },
    { n: 'Pandas', s: 'pandas', lvl: 92 },
    { n: 'NumPy', s: 'numpy', lvl: 92 },
    { n: 'Matplotlib', s: '', m: 'Mp', lvl: 84 },
    { n: 'Seaborn', s: '', m: 'Sb', lvl: 80 },
  ],
  TOOLS: [
    { n: 'GitHub', s: 'github', c: 'EDE8DC', lvl: 88 },
    { n: 'VS Code', s: '', m: 'VS', lvl: 90 },
    { n: 'Jupyter', s: 'jupyter', lvl: 86 },
    { n: 'Azure', s: '', m: 'Az', lvl: 70 },
    { n: 'Google Colab', s: 'googlecolab', lvl: 84 },
  ],
  CERTIFICATIONS: [
    { n: 'Azure AI-900', s: '', m: '900', lvl: 100 },
    { n: 'Udemy Gen AI', s: 'udemy', lvl: 100 },
    { n: 'PostgreSQL', s: 'postgresql', lvl: 100 },
  ],
}

export const stackAccents = ['var(--warm)', 'var(--cool)', 'var(--glow)', 'var(--gold)']

export const projects = [
  {
    id: '01', name: 'Aether: LLM Council', category: 'MULTI-AGENT AI',
    hook: 'A council of AI agents that reason together to reach better answers.',
    bullets: [
      'Engineered a multi-agent system — Planner, Researcher, Critic, Synthesizer — for collaborative reasoning.',
      'Built an orchestration pipeline for inter-agent communication and response validation.',
    ],
    metrics: [
      { k: 'AGENTS', v: '4' },
      { k: 'PIPELINE', v: 'orchestrated' },
      { k: 'OUTPUT', v: 'validated' },
    ],
    nodes: ['Planner', 'Researcher', 'Critic', 'Synthesizer'],
    stack: ['Python', 'LLM APIs', 'LangGraph', 'Multi-Agent'], code: 'https://github.com/niteshd05',
  },
  {
    id: '02', name: 'Offline RAG Mobile App', category: 'EDGE AI · ON-DEVICE',
    hook: 'Document Q&A that runs fully on your phone — no internet, no cloud.',
    bullets: [
      'Engineered an offline RAG app for on-device document querying with no internet dependency.',
      'Optimized local LLMs and vector embeddings for semantic search on 6GB-RAM phones.',
    ],
    metrics: [
      { k: 'RAM', v: '6 GB' },
      { k: 'NETWORK', v: 'offline' },
      { k: 'PRIVACY', v: 'on-device' },
    ],
    nodes: ['Embed', 'Index', 'Retrieve', 'Generate'],
    stack: ['React Native', 'Python', 'Local LLMs', 'Vector DB'], code: 'https://github.com/niteshd05',
  },
  {
    id: '03', name: 'DermAid', category: 'DUAL-AGENT · HEALTH AI',
    hook: 'Two agents — one for cosmetic skin analysis, one for medical triage.',
    bullets: [
      'Built a dual-agent system for cosmetic skin analysis and medical triage (acne, eczema, psoriasis).',
      'Designed an adaptive skincare engine with on-device inference, tuned for diverse skin tones.',
    ],
    metrics: [
      { k: 'AGENTS', v: '2' },
      { k: 'CONDITIONS', v: '3+' },
      { k: 'INFERENCE', v: 'on-device' },
    ],
    nodes: ['Cosmetic', 'Triage', 'Adaptive Engine'],
    stack: ['Next.js', 'TensorFlow.js', 'Python', 'Agentic AI'], code: 'https://github.com/niteshd05',
  },
]

export const achievements = [
  {
    title: 'Need For Code 4.0 — AIML Hackathon', venue: 'TSEC · NATIONAL', medal: 'gold',
    result: '1ST PLACE', sub: 'AIML Domain Winner', year: '2025',
    img: '/hackathon/NFC.jpeg',
    link: 'https://www.linkedin.com/posts/nitesh-domal_hackathon-machinelearning-artificialintelligence-activity-7359533566940049409-o9ag',
  },
  {
    title: 'Codeissance — AIML Hackathon', venue: 'TSEC · MUMBAI', medal: 'gold',
    result: '1ST PLACE', sub: 'AIML Domain Winner', year: '2025',
    img: '/hackathon/codeissance.jpeg',
    link: 'https://www.linkedin.com/posts/nitesh-domal_hackathon-aiml-mentalhealth-activity-7378031381194629120-x8p-',
  },
  {
    title: 'Techathon 2025', venue: 'VARTAK COLLEGE', medal: 'gold',
    result: 'WINNER', sub: 'AI/ML Domain', year: '2025',
    img: '/hackathon/vartak.jpeg',
    link: 'https://www.linkedin.com/posts/nitesh-domal_techathon2025-aihackathon-llmcouncil-activity-7407754109866467328-y5v3',
  },
  {
    title: 'DevHacks Hackathon', venue: 'ATHARVA UNIVERSITY, MUMBAI', medal: 'gold',
    result: 'WINNER', sub: 'AIML Domain', year: '2025',
    img: '/hackathon/atharva.jpeg',
    link: 'https://www.linkedin.com/posts/nitesh-domal_hackathon-ai-machinelearning-activity-7433139320552755200-XnCm',
  },
  {
    title: 'Hack Vision', venue: 'THAKUR COLLEGE', medal: 'silver',
    result: '1ST RUNNER-UP', sub: '', year: '2025',
    img: '/hackathon/hackvision.jpeg',
    link: 'https://www.linkedin.com/posts/nitesh-domal_hackvision-ai-machinelearning-activity-7421530432258850816-e20y',
  },
  {
    title: 'TSEC Hacks 2026', venue: 'TSEC, MUMBAI', medal: 'silver',
    result: '1ST RUNNER-UP', sub: '', year: '2026',
    img: '/hackathon/Tsec%20Hacks.jpeg',
    link: 'https://www.linkedin.com/posts/nitesh-domal_tsechacks2026-hackathonjourney-ai-activity-7425773608771256321-Xa81',
  },
  {
    title: 'm-Indicator 24-Hour National AI Hackathon', venue: 'VJTI · NATIONAL', medal: 'bronze',
    result: '2ND RUNNER-UP', sub: 'Edge AI', year: '2026',
    img: '/hackathon/m-indicator.jpeg',
    link: 'https://www.linkedin.com/posts/nitesh-domal_edgeai-ondeviceai-privacyfirst-activity-7434128130946097152-mPZX',
  },
]

export const leadership = [
  {
    role: 'Chairperson — Rotaract Club of Parleshwar',
    detail: 'Led inter-club sports across cricket, football and badminton — running brackets, logistics and turnout end to end.',
    tags: ['Leadership', 'Events', 'Sports'],
  },
  {
    role: "Secretary — TSEC Students' Council",
    detail: 'Planned and ran annual events; owned logistics and inter-department participation across the college.',
    tags: ['Operations', 'Coordination', 'Community'],
  },
]

export const experience = {
  role: 'Data Management Intern',
  company: 'Statdoc IT Solutions Pvt. Ltd.',
  period: 'JAN 2026 – APR 2026',
  mode: 'REMOTE',
  bullets: [
    'Collected, cleaned and organized data from multiple sources into reliable working sets.',
    'Maintained data accuracy, quality and consistency across pipelines.',
    'Assisted in data analysis and report preparation for stakeholders.',
    'Supported database management and documentation activities.',
    'Collaborated with the team to improve data workflows and processes.',
  ],
  cert: '/work_exp/internship.pdf',
}

export const resume = '/work_exp/Nitesh_Resume%20(1).pdf'

export const medalMeta = {
  gold: { color: 'var(--gold)', emoji: '🥇', label: 'GOLD' },
  silver: { color: 'var(--silver)', emoji: '🥈', label: 'SILVER' },
  bronze: { color: 'var(--bronze)', emoji: '🥉', label: 'BRONZE' },
}

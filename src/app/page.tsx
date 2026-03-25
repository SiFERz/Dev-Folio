import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import DiscordStatus from '@/components/DiscordStatus';
import basePath from '@/lib/basePath';

export const metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'Welcome to my creative portfolio building modern web applications.',
};

export default function PortfolioHome() {
  const languages = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'Lua', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg' }
  ];

  const frameworks = [
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' }
  ];

  const databases = [
    { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' },
    { name: 'MS Access', icon: `${basePath}/images/access.svg` },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' }
  ];

  const tools = [
    { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' }
  ];

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="hero-section container">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">Available for Work</div>
            <h1 className="hero-title animate-fade-in delay-1">
              Building <span>Slatt</span><br />Experiences.
            </h1>
            <p className="hero-subtitle animate-fade-in delay-2">
              I am a passionate Full-Stack Developer creating beautiful, scalable, and dynamic web applications that engage users and drive results.
            </p>
            <div className="hero-actions animate-fade-in delay-3">
              <Link href="/#about" className="btn btn-primary">About Me</Link>
              <Link href="/#contact" className="btn btn-outline">Let's Talk</Link>
            </div>
          </div>
          <div className="hero-image animate-fade-in delay-2">
            <img src={`${basePath}/images/profile.jpg`} alt="Profile" loading="lazy" />
          </div>
        </section>

        {/* Skills Marquee */}
        <section className="skills-section">
          <div className="marquee-container">
            <div className="marquee-group">
              <span className="skill-item">NEXT.JS</span>
              <span className="skill-item">REACT</span>
              <span className="skill-item">PYTHON</span>
              <span className="skill-item">UI/UX DESIGN</span>
              <span className="skill-item">JAVA</span>
              <span className="skill-item">JAVASCRIPT</span>
              <span className="skill-item">C/C#/C++</span>
              <span className="skill-item">PYTHON</span>
              <span className="skill-item">LUA</span>
            </div>
            
            <div className="marquee-group" aria-hidden="true">
              <span className="skill-item">NEXT.JS</span>
              <span className="skill-item">REACT</span>
              <span className="skill-item">PYTHON</span>
              <span className="skill-item">UI/UX DESIGN</span>
              <span className="skill-item">JAVA</span>
              <span className="skill-item">JAVASCRIPT</span>
              <span className="skill-item">C/C#/C++</span>
              <span className="skill-item">PYTHON</span>
              <span className="skill-item">LUA</span>
            </div>

            <div className="marquee-group" aria-hidden="true">
              <span className="skill-item">NEXT.JS</span>
              <span className="skill-item">REACT</span>
              <span className="skill-item">PYTHON</span>
              <span className="skill-item">UI/UX DESIGN</span>
              <span className="skill-item">JAVA</span>
              <span className="skill-item">JAVASCRIPT</span>
              <span className="skill-item">C/C#/C++</span>
              <span className="skill-item">PYTHON</span>
              <span className="skill-item">LUA</span>
            </div>
          </div>
        </section>

        {/* Technical Stack Section */}
        <section className="tech-stack-section container" style={{ padding: '4rem 2rem' }}>
          <ScrollReveal>
            <div className="section-header" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title">Technical Sandbox</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Tools and technologies I use to build things.</p>
            </div>
          </ScrollReveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            
            <ScrollReveal delay={0}>
              <div className="glass-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                  Programming Languages
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', gap: '1rem' }}>
                  {languages.map((lang, i) => (
                    <div key={lang.name} className={`skill-card-item`} data-name={lang.name}>
                      <img src={lang.icon} alt={lang.name} width="36" height="36" loading="lazy" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#0ea5e9' }}>
                  Frameworks & Libs
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', gap: '1rem' }}>
                  {frameworks.map((fw, i) => (
                    <div key={fw.name} className={`skill-card-item`} data-name={fw.name}>
                      <img src={fw.icon} alt={fw.name} width="36" height="36" loading="lazy" style={{ filter: fw.name === 'Next.js' ? 'invert(1)' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                  Databases
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', gap: '1rem' }}>
                  {databases.map((db, i) => (
                    <div key={db.name} className={`skill-card-item`} data-name={db.name}>
                      <img src={db.icon} alt={db.name} width="36" height="36" loading="lazy" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="glass-card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#10b981' }}>
                  Tools & Platforms
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', gap: '1rem' }}>
                  {tools.map((tool, i) => (
                    <div key={tool.name} className={`skill-card-item`} data-name={tool.name}>
                      <img src={tool.icon} alt={tool.name} width="36" height="36" loading="lazy" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container" style={{ padding: '6rem 2rem' }}>
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Who I am and my philosophy</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)' }}>Who am I?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                I am a passionate Full-Stack Developer creating beautiful, scalable, and dynamic web applications that engage users and drive results. I specialize in React, Next.js, and modern CSS techniques to build seamless digital experiences.
              </p>
              
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary)' }}>My Philosophy</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                I believe that great software must be intuitive, performant, and visually stunning. Constant learning, experimenting with new aesthetics like Glassmorphism, and optimizing performance are the core pillars of my workflow.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container" style={{ padding: '6rem 2rem 8rem' }}>
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Get In Touch</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Ready to start your next project? Drop me a message below!</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', alignItems: 'flex-start', maxWidth: '1000px', margin: '0 auto', marginTop: '3rem' }}>
            <ScrollReveal delay={100} style={{ flex: '1 1 320px', width: '100%', maxWidth: '380px' }}>
              <DiscordStatus />
            </ScrollReveal>

            <ScrollReveal delay={300} style={{ flex: '2 1 400px', width: '100%', margin: 0 }}>
              <div className="glass-card">
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Name</label>
                    <input type="text" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--surface-hover)', color: 'white', outline: 'none', transition: 'border 0.3s ease' }} placeholder="Your Name" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Email</label>
                    <input type="email" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--surface-hover)', color: 'white', outline: 'none', transition: 'border 0.3s ease' }} placeholder="you@email.com" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Message</label>
                    <textarea rows={5} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--surface-hover)', color: 'white', outline: 'none', resize: 'vertical', transition: 'border 0.3s ease' }} placeholder="How can I help you?"></textarea>
                  </div>
                  <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', borderRadius: '12px' }}>Send Message</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}

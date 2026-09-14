import { Mail } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDotnet,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandAzure, TbBrandAws } from "react-icons/tb";
import content from "./data/content.json";

const TECH_ICONS: Record<string, React.ReactNode> = {
  react: <SiReact size={11} />,
  "react native": <SiReact size={11} />,
  typescript: <SiTypescript size={11} />,
  "node.js": <SiNodedotjs size={11} />,
  python: <SiPython size={11} />,
  azure: <TbBrandAzure size={12} />,
  "c#": <TbBrandCSharp size={12} />,
  ".net": <SiDotnet size={11} />,
  "next.js": <SiNextdotjs size={11} />,
  aws: <TbBrandAws size={12} />,
  sql: <SiPostgresql size={11} />,
  docker: <SiDocker size={11} />,
  kubernetes: <SiKubernetes size={11} />,
};

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function AppStoreIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 384 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayStoreIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const work = content["work-experience"];

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "96px 40px 120px",
      }}
    >
      {/* ── Hero ───────────────────────────────────── */}
      <header style={{ marginBottom: "56px" }}>
        <h1
          className="fade-up"
          style={{
            fontFamily: "var(--font-martian), monospace",
            fontSize: "clamp(36px, 6vw, 52px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "var(--fg)",
            margin: 0,
          }}
        >
          {content.header.name}
        </h1>

        <p
          className="fade-up delay-1"
          style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            marginTop: "14px",
            marginBottom: 0,
          }}
        >
          {content.header.title}
        </p>

        <p
          className="fade-up delay-2"
          style={{
            fontFamily: "var(--font-martian), monospace",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.65,
            color: "var(--fg-muted)",
            marginTop: "28px",
            marginBottom: 0,
            maxWidth: "520px",
          }}
        >
          {content.header.tagline}
        </p>

        <nav
          className="fade-up delay-3"
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "28px",
            alignItems: "center",
          }}
        >
          {[
            {
              icon: <Mail size={15} strokeWidth={1.5} />,
              label: content.header.email,
              href: `mailto:${content.header.email}`,
            },
            {
              icon: <GithubIcon size={15} />,
              label: "github",
              href: content.header.github,
            },
            {
              icon: <LinkedinIcon size={15} />,
              label: "linkedin",
              href: content.header.linkedin,
            },
          ].map(({ icon, label, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="hover-accent"
              style={{
                color: "var(--fg-muted)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              {icon}
            </a>
          ))}
        </nav>
      </header>

      <Divider delay="delay-3" />

      {/* ── About ──────────────────────────────────── */}
      <CvRow label="about" delay="delay-4">
        <p
          style={{
            fontFamily: "var(--font-martian), monospace",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "var(--fg)",
            margin: 0,
          }}
        >
          {content.about.bio}
        </p>
      </CvRow>

      <Divider delay="delay-4" />

      {/* ── Experience ─────────────────────────────── */}
      <CvRow label="experience" delay="delay-5">
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {work.map((job) => (
            <div key={job.company}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      style={{
                        width: "22px",
                        height: "22px",
                        objectFit: "contain",
                        borderRadius: "4px",
                        opacity: 0.85,
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-martian), monospace",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "var(--fg)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {job.company}
                  </span>
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    color: "var(--fg-muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {job.start} — {job.end}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "12px",
                  marginTop: "2px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    color: "var(--fg-muted)",
                  }}
                >
                  {job.role}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "12px",
                    letterSpacing: "0.06em",
                    color: "var(--fg-muted)",
                    opacity: 0.7,
                  }}
                >
                  {job.location}
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-martian), monospace",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: "var(--fg)",
                  margin: "10px 0 10px",
                  opacity: 0.8,
                }}
              >
                {job.description}
              </p>

              <TagList tags={job.technologies} />
            </div>
          ))}
        </div>
      </CvRow>

      <Divider delay="delay-5" />

      {/* ── Projects ───────────────────────────────── */}
      <CvRow label="projects" delay="delay-6">
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {content.projects.map((project) => (
            <div key={project.name}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-martian), monospace",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--fg)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.name}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon size={13} />
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AppStoreIcon size={13} />
                    </a>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PlayStoreIcon size={13} />
                    </a>
                  )}
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-martian), monospace",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: "var(--fg)",
                  margin: "8px 0 10px",
                  opacity: 0.8,
                }}
              >
                {project.description}
              </p>

              <TagList tags={project.technologies} />
            </div>
          ))}
        </div>
      </CvRow>

      {/* ── Footer ─────────────────────────────────── */}
      <footer
        style={{
          marginTop: "80px",
          paddingTop: "32px",
          borderTop: "1px solid var(--divider)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "10px",
            letterSpacing: "0.1em",
            color: "var(--fg-muted)",
            opacity: 0.5,
            margin: 0,
          }}
        >
          lennart schaeffer · {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}

/* ── Sub-components ──────────────────────────────── */

function Divider({ delay }: { delay?: string }) {
  return (
    <div
      className={delay ? `fade-up ${delay}` : "fade-up"}
      style={{
        height: "1px",
        background: "var(--divider)",
        margin: "48px 0",
      }}
    />
  );
}

function CvRow({
  label,
  children,
  delay,
}: {
  label: string;
  children: React.ReactNode;
  delay?: string;
}) {
  return (
    <div
      className={`cv-grid ${delay ? `fade-up ${delay}` : "fade-up"}`}
      style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr",
        gap: "0 24px",
      }}
    >
      <div className="cv-grid-label" style={{ paddingTop: "4px" }}>
        <span
          style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            opacity: 0.65,
          }}
        >
          {label}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      {tags.map((tag) => {
        const icon = TECH_ICONS[tag.toLowerCase()];
        return (
          <span
            key={tag}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "var(--fg-muted)",
            }}
          >
            {icon && (
              <span
                style={{ opacity: 0.7, display: "flex", alignItems: "center" }}
              >
                {icon}
              </span>
            )}
            {tag}
          </span>
        );
      })}
    </div>
  );
}

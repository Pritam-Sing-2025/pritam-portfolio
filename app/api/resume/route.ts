export async function GET() {
  const resume = `
PRITAM
Computer Science Graduate | MERN Stack Developer

SUMMARY
Building modern web products with React, Node.js, Express, MongoDB, MySQL, Java, Python, and a strong focus on real-world problem solving, clean user experience, and thoughtful product execution.

CORE SKILLS
- React.js
- Node.js
- Express.js
- MongoDB
- MySQL
- JavaScript
- Python
- Java
- HTML/CSS
- APIs
- Git & GitHub
- Problem Solving

PROJECTS
- Sign Language Detection
- Plant Health Detector
- AI Mindmap

INTERESTS
- AI and intelligent products
- Premium interface design
- Modern product thinking
- End-to-end product development

This downloadable text resume is generated from the portfolio starter.
Replace it with your final PDF resume when ready.
`.trim();

  return new Response(resume, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Pritam-Resume.txt"',
      "Cache-Control": "no-store",
    },
  });
}

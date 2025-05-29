const post = {
    id: "openFOI",
    title: "OpenFOI: Freedom of Information Made Easy",
    publication: "Portfolio, 2025",
    date: "2025-05-28",
    summary: "An AI-powered platform for managing Freedom of Information requests.",
    video: "/videos/OpenFOI.mp4",
    content: `
  ## Overview
  
  Freedom of Information (FOI) requests are essential for public accountability, yet managing them is often inefficient and time-consuming. **OpenFOI** is a lightweight, AI-powered platform designed to streamline the FOI lifecycle — from drafting and redacting to exporting and tracking — helping journalists, civil society groups, and government bodies reduce overhead and improve transparency.
  
  ## Features
  
  - 🔍 AI-assisted draft generation for FOI responses  
  - ✂️ Smart redaction using named entity recognition (NER)  
  - 📄 One-click export to PDF and CSV formats  
  - 📊 Analytics dashboard for tracking request timelines and response rates  
  - 🧠 GPT-powered suggestions for common replies and flag detection  
  
  ## Technologies Used
  
  - **React** – frontend UI  
  - **FastAPI** – backend API  
  - **OpenAI (GPT-4)** – language generation  
  - **PostgreSQL** – data storage  
  - **spaCy** – for redaction and NER  
  - **Git LFS** – for media versioning  
  - **TailwindCSS** – for clean and responsive UI  
  
  ## Reflections
  
  OpenFOI was developed to explore how AI can reduce the administrative burden associated with public sector transparency. Building it deepened my understanding of language models in sensitive domains, full-stack system design, and user workflows in civic tech. It’s a compelling use case for AI in service of democratic accountability.
  `
  };
  
  export default post;
  
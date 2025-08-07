const post = {
  id: "openFOI",
  title: "OpenFOI: Freedom of Information Made Easy",
  publication: "Portfolio, 2025",
  date: "2025-05-28",
  summary: "An AI-powered platform for managing Freedom of Information requests.",
  content: `

## OpenFOI

Freedom of Information (FOI) requests are a mainstay of British institutions.
Freedom of Information (FOI) requests are vital for transparency and accountability — yet responding to them remains manually intensive and error-prone. OpenFOI is a streamlined, AI-powered tool for managing FOI workflows end-to-end. Built for journalists, public officials, and civil society organizations, it simplifies response drafting, redaction, export, and request tracking — all in a single interface.

### Video Walkthrough

<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/tyYoI61JAOo" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
></iframe>

### Features

- GPT-powered response drafting with integrated FOI exemptions  
- Manual and rule-based redaction with exemption tagging  
- Blackout-style redacted PDF + styled DOCX export  
- CSV upload for batch request ingestion  
- Request tracker with metadata, reference numbers, and response history  
- Session-based state saving for seamless navigation  
- Customisable exemptions system compliant with UK FOI Act 2000

### Technologies Used

- **Streamlit** – lightweight frontend for rapid UI development  
- **Python** – core backend logic and redaction tools  
- **OpenAI GPT-4** – for AI-assisted response generation and suggestions  
- **spaCy** – optionally used for named entity recognition (NER)  
- **FPDF + python-docx** – for redacted PDF and styled DOCX exports  
- **Git LFS** – for storing large media assets (e.g. video walkthroughs)

### Reflections

Tony Blair announced that *one of his biggest regrets from government was pushing through the FOI Act* (cite) — apparently it leads to a risk-averse culture in the civil service.  
As someone who *believes the civil service should encourage risk taking and increase the risk tolerance of its civil servants* (cite), maybe better work should go into trying to reverse the FOI Act instead of making it easier.  
As you may imagine, it is a relatively nebulous question as to how much FOI requests cost the central government each year. Estimates from 2010 state that central government expends £24.4 million per year solely on FOI, with local governments £11.1 million. (cite)

OpenFOI was built to explore how small civic tools can harness AI responsibly in high-stakes, bureaucratic domains. Working on it strengthened my understanding of document workflows, sensitive redaction logic, and user-centric design in the public sector. It’s a simple, extensible base for bringing machine learning to government transparency.

---

### Footnotes  
Citation for FOI cost: https://www.ucl.ac.uk/constitution-unit/sites/constitution-unit/files/cost-of-foi.pdf 

---
`
};

export default post;

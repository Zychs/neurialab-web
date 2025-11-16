# Neurialab | Neuralexica Portal

## Overview
A static website portal for the Neurialab | Neuralexica ecosystem - a living stack of doctrine, tools, and experiments for designing systems that reveal complexity in proportion to trust.

**Current State:** Fully functional and ready for deployment

## Project Structure

```
.
├── active/               # Main website content (served directory)
│   ├── index.html       # Portal homepage with entry vectors
│   ├── roadmap.html     # Master Roadmap v2.0
│   ├── axiom-trust-emergence.html  # Axiom of Trust Emergence
│   ├── reflexive-field.html        # The Reflexive Field
│   ├── fragment-07-brcc.html       # White Fragment 07 · BRCC
│   └── site.css         # Global styles
├── legacy/              # Legacy/archived content
├── server.py            # Python HTTP server for static files
└── .gitignore          # Git ignore rules
```

## Technology Stack
- **Frontend:** Static HTML5 + CSS3
- **Server:** Python 3.11 with built-in HTTP server
- **Deployment:** Replit Autoscale deployment

## Setup & Development

### Local Development
The project is configured to automatically run the webserver workflow, which serves the `active/` directory on port 5000.

The server includes cache-busting headers to ensure changes are immediately visible.

### Running Manually
```bash
python server.py
```
The server will start at `http://0.0.0.0:5000/`

## Deployment
This project is configured for **Autoscale** deployment:
- Deployment target: `autoscale` (for simple, stateless websites)
- Run command: `python server.py`
- Port: 5000

To deploy, click the "Deploy" button in Replit.

## Website Structure

### Portal (index.html)
Entry point with four "doors into the same field":
1. **Layer I - Structure:** Master Roadmap v2.0
2. **Layer II - Doctrine:** Axiom of Trust Emergence
3. **Layer III - Field:** The Reflexive Field
4. **Layer IV - Fragment:** White Fragment 07 · BRCC

### Design Philosophy
The site embodies the "Axiom of Trust Emergence" - revealing complexity in proportion to trust through progressive disclosure and reflexive design patterns.

## Recent Changes
- **2025-11-16:** Initial Replit setup
  - Installed Python 3.11
  - Created HTTP server with cache-control headers
  - Configured workflow for port 5000
  - Set up deployment configuration for autoscale
  - Added Python .gitignore entries

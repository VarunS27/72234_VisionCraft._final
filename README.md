# VisionCraft - P.I.S.H (Phishing Intelligence and Security Hub)

## Smart India Hackathon 2025 Project

## What Your Project Does

P.I.S.H (Phishing Intelligence and Security Hub) is an enterprise-grade, browser-extension–based phishing-detection and user-training system that addresses the evolving nature of phishing attacks across email, web, and mobile channels. The platform delivers a unified, scalable, multi-vector defense mechanism suitable for real-world deployment.

### Core System Components:

- **Browser Extension with Autonomous Detection**: Extracts text, attachments, links, QR codes, domains, and DOM-layout images from visited pages for comprehensive analysis
- **Hybrid AI Detection Pipeline**: Combines DistilBERT models, Graph Neural Networks, and reverse-engineering features to classify attack types and compute phishing scores
- **Efficient-B0 DOM Classifier**: High-speed, accurate image-based phishing assessment optimized for client-side environments
- **Backend-Free Database Infrastructure**: Low-latency, structured storage for user credentials, vulnerability profiles, risk scores, and honeypot markers
- **Mobile Dashboard Integration**: WhatsApp/SMS analyzer and call-analysis tool for comprehensive device ecosystem protection
- **Administrative Suite**: Indexed, tamper-resistant storage with user management, data visualization, and forensic capabilities
- **Personalized Training Module**: AI-crafted simulated phishing exercises based on user-specific vulnerabilities

## Problem Statement & Solution

**Problem Statement:** Real-Time AI/ML-Based Phishing Detection and Prevention System

**Problem Context**: Phishing continues to evolve across email, web, and mobile channels, demanding lightweight, multi-vector defense mechanisms suitable for real-world deployment. Conventional database-heavy solutions suffer from fragmented identity storage, shallow detection capabilities limited to text-only analysis, and inadequate mobile channel coverage. Traditional security measures fail to provide:
- Real-time, client-side detection without backend dependencies
- Multi-modal analysis combining text, links, images, and behavioral patterns
- Personalized user training based on actual vulnerability profiles
- Unified protection across browser and mobile ecosystems
- Transparent, tamper-resistant forensic logging

**Our Solution**: P.I.S.H delivers an enterprise-grade, unified defense ecosystem that achieves:

1. **Advanced Multi-Modal Detection**
   - Hybrid pipeline combining DistilBERT NLP, Graph Neural Networks, and Efficient-B0 visual classifiers
   - Autonomous extraction and analysis of text, links, attachments, QR codes, and DOM layouts
   - VirusTotal integration for link and attachment verification
   - Real-time threat scoring with comprehensive evidence logging

2. **Backend-Free Architecture**
   - Low-latency, structured database storage eliminating fragmented identity issues
   - Secure local authentication with controlled access to detection and forensic utilities
   - Performance optimization through load balancing, parallel processing, and federated-learning–based replication

3. **Unified Mobile Protection**
   - Synchronized mobile dashboard extending browser capabilities
   - WhatsApp/SMS analyzer evaluating messages under user consent
   - Call-analysis tool examining metadata and identifying vishing manipulation strategies
   - Compromised device isolation with forensic summaries

4. **Personalized Training & Administration**
   - AI-crafted phishing simulations based on user-specific vulnerabilities retrieved from database
   - Dynamic risk score adjustment based on user interactions
   - Full administrative suite with indexed storage, user management, and searchable forensics
   - Downloadable legal-format reports and one-click cyber crime reporting

5. **Operational Excellence**
   - Quarantine workflow for secure password resets
   - Real-time phishing news briefs and activity logging
   - Market-ready deployment with high accuracy, low latency, and streamlined integration

This solution surpasses existing tools in transparency, adaptability, and operational efficiency, establishing a scalable platform for enterprise-wide phishing defense.

## Features

### Detection & Analysis Engine
- 🤖 **Hybrid AI Detection Pipeline**: DistilBERT NLP model + Graph Neural Network + reverse-engineering features
- 🖼️ **Efficient-B0 DOM Classifier**: High-speed image-based phishing assessment for visual page analysis
- 🔍 **Autonomous Content Extraction**: Text, attachments, links, QR codes, domains, and DOM layouts
- ✅ **VirusTotal Integration**: Real-time link and attachment verification
- 📊 **Threat Scoring System**: Comprehensive phishing probability calculation with evidence logging
- 🚨 **Multi-Vector Detection**: Coverage across email, web, SMS, WhatsApp, and voice calls

### Database & Infrastructure
- 💾 **Backend-Free Architecture**: Low-latency, structured database without traditional backend dependencies
- 🔐 **Secure Identity Management**: User credentials, vulnerability profiles, risk scores, and honeypot markers
- ⚡ **Performance Optimization**: Load balancing, parallel processing, and federated-learning replication
- 🛡️ **Tamper-Resistant Storage**: Indexed, immutable forensic logging
- 📈 **Scalable Data Schema**: Eliminates fragmented identity storage issues

### Browser Extension
- 🌐 **Client-Side Detection**: Real-time analysis without server round-trips
- 🔒 **Secure Local Authentication**: Controlled access to detection and forensic utilities
- 🚫 **Automatic Threat Flagging**: Pages exceeding thresholds blocked with comprehensive evidence
- 🔄 **Quarantine Workflow**: Secure password reset procedures
- 📰 **Real-Time Updates**: Phishing news briefs and activity logging

### Mobile Dashboard
- 📱 **Synchronized Multi-Device**: Extends protection across device ecosystems
- 💬 **WhatsApp/SMS Analyzer**: Evaluates incoming messages under user consent
- 📞 **Call Analysis Tool**: Examines caller metadata and identifies vishing manipulation strategies
- 🔒 **Device Isolation**: Automatic quarantine of compromised devices
- 📊 **Forensic Summaries**: Detailed attack analysis and evidence transmission

### Administrative Suite
- 👥 **User Management**: Complete control over accounts and permissions
- 📊 **Data Visualization**: Interactive dashboards for threat intelligence
- 🔍 **Searchable Forensics**: Indexed incident history and evidence retrieval
- 📄 **Legal Reports**: Downloadable, court-ready documentation
- 🚔 **One-Click Reporting**: Direct integration with cyber crime reporting websites
- 📈 **Performance Metrics**: System health and detection accuracy monitoring

### Training & Education Module
- 🎯 **Personalized Simulations**: AI-crafted phishing exercises based on user vulnerabilities
- 📚 **Four-Phase Curriculum**: Progressive learning from introduction to advanced prevention
- 📊 **Dynamic Risk Scoring**: Adjusts based on user interactions and responses
- 🎓 **Vulnerability Assessment**: Retrieves and addresses user-specific weaknesses
- 📈 **Progress Tracking**: Individual improvement metrics and competency levels

### User Interface & Experience
- 🎨 **Modern React Architecture**: Component-based design with Vite for lightning-fast performance
- ✨ **Smooth Animations**: Framer Motion for enhanced user experience
- 📱 **Responsive Design**: Seamless operation across desktop, tablet, and mobile
- 🎭 **Matrix-Style UI**: Professional cybersecurity aesthetic
- 🔐 **Secure Authentication**: Login/signup with session management

## Technologies Used

### AI/ML Technologies
- **DistilBERT**: Natural language processing for text-based phishing detection
- **Graph Neural Networks (GNN)**: Link and relationship analysis for threat detection
- **Efficient-B0**: Lightweight CNN for DOM layout image classification
- **Federated Learning**: Distributed model training and database replication
- **Reverse Engineering Features**: Advanced pattern recognition for attack classification

### Frontend Technologies
- **React 19.2.0**: Modern UI framework for web applications
- **Vite 7.2.4**: Lightning-fast build tool and development server
- **Tailwind CSS 4.1.17**: Utility-first CSS framework for responsive design
- **React Router DOM 7.10.0**: Client-side routing and navigation
- **Framer Motion 12.23.25**: Advanced animation library for smooth UI transitions
- **Lucide React 0.555.0**: Modern icon library

### Browser Extension & Integration
- **Browser Extension APIs**: Chrome/Firefox extension development for client-side detection
- **VirusTotal API**: Link and attachment verification service
- **QR Code Scanner**: Integrated QR code extraction and analysis
- **DOM Parser**: Advanced DOM layout analysis and extraction

### Database & Backend
- **Structured Database**: Backend-free, low-latency data storage
- **IndexedDB/Local Storage**: Client-side data persistence
- **Federated Replication**: Distributed database synchronization

### Mobile Technologies
- **Mobile Dashboard**: Cross-platform mobile application
- **WhatsApp/SMS API Integration**: Message analysis under user consent
- **Call Metadata Analysis**: Vishing detection through caller information
- **Device Isolation Protocols**: Compromised device quarantine mechanisms

### Development Tools & Infrastructure
- **ESLint**: Code linting and quality assurance
- **Node.js & npm**: Package management and build tools
- **Git**: Version control system
- **Load Balancing**: Performance optimization infrastructure
- **Parallel Processing**: Multi-threaded analysis pipeline

### Programming Languages & Frameworks
- **JavaScript (ES6+)**: Primary application language
- **JSX/React**: Component-based UI development
- **Python**: ML model training and backend processing
- **CSS3**: Advanced styling and animations
- **HTML5**: Modern web standards

## System Architecture

### Detection Pipeline
please press (ctrl - )X2 for proper architectur preview 

```
User Browses Page → Extension Extracts Content → Hybrid Analysis Pipeline
                                                            ↓
                    ┌──────────────────────────────────────┴──────────────────────────────────┐
                    ↓                                      ↓                                   ↓
            Text Analysis                         Link/Attachment Analysis            DOM Image Analysis
         (DistilBERT NLP)                        (VirusTotal + GNN)                 (Efficient-B0 CNN)
                    ↓                                      ↓                                   ↓
                    └──────────────────────────────────────┬──────────────────────────────────┘
                                                            ↓
                                        Threat Score Calculation
                                                            ↓
                                    ┌──────────────────────┴───────────────────────┐
                                    ↓                                              ↓
                            Safe (Allow Access)                          Threat Detected
                                                                                   ↓
                                                            ┌──────────────────────┴────────────────┐
                                                            ↓                                       ↓
                                                    Block Page                            Log to Database
                                                    Show Warning                          Generate Forensics
                                                    Quarantine Workflow                   Update Risk Score
```

### Key Components

1. **Browser Extension Layer**
   - Content extraction engine
   - Real-time monitoring service
   - Local authentication module
   - UI overlay and warning system

2. **AI/ML Detection Layer**
   - DistilBERT for semantic text analysis
   - Graph Neural Network for relationship mapping
   - Efficient-B0 for visual DOM classification
   - Reverse engineering feature extractor
   - Ensemble scoring mechanism

3. **Data Management Layer**
   - Structured database schema
   - User profile management
   - Vulnerability tracking system
   - Forensic evidence storage
   - Federated replication service

4. **Mobile Integration Layer**
   - Synchronized dashboard
   - WhatsApp/SMS message analyzer
   - Call metadata processor
   - Device isolation controller
   - Cross-platform data sync

5. **Administration Layer**
   - User management console
   - Threat intelligence dashboard
   - Forensic search engine
   - Report generation system
   - Cyber crime reporting integration

6. **Training Layer**
   - Vulnerability assessment engine
   - AI phishing simulation generator
   - Risk scoring algorithm
   - Progress tracking system
   - Adaptive learning module

### Data Flow

1. **Detection Phase**: Extension extracts → AI analyzes → Score computed → Decision made
2. **Logging Phase**: Evidence collected → Database stored → Forensics indexed → Reports generated
3. **Training Phase**: Vulnerabilities identified → Simulations created → User tested → Scores updated
4. **Mobile Phase**: Messages scanned → Calls analyzed → Threats detected → Devices isolated

### Security Architecture

- **Client-Side Processing**: Reduces attack surface, enhances privacy
- **Local Authentication**: No credential transmission over network
- **Tamper-Resistant Logs**: Immutable forensic evidence
- **Encrypted Storage**: All sensitive data encrypted at rest
- **Quarantine Protocols**: Isolated environment for password resets
- **Consent-Based Mobile Analysis**: User control over message scanning


## Steps to Install and Run

### Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation Instructions

1. **Extract the project**
   ```bash
   # Extract the ZIP file to your desired location
                     or
   # Clone this repo to your desired location and follow next steps

   ```

2. **Navigate to the project directories**
   
   For the main portfolio website:
   ```bash
   cd portfolio
   ```
   
   For the next steps educational module:
   ```bash
   cd next_steps
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   This will download all required packages and dependencies.

4. **Run the development server**
   ```bash
   npm run dev
   ```
   The application will start and be accessible at `http://localhost:5173` (default Vite port)

5. **Build for production** (optional)
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist` folder.

6. **Preview production build** (optional)
   ```bash
   npm run preview
   ```

### Running Both Applications

The project contains two main applications:

1. **Portfolio Application** (`/portfolio`):
   - Main website with dashboard, login, and signup
   - Contains P.I.S.H macro files in `/public/products`
   - Run: `cd portfolio && npm install && npm run dev`

2. **Next Steps Application** (`/next_steps`):
   - Educational module with four phases
   - Interactive learning content
   - Run: `cd next_steps && npm install && npm run dev`
 

## Project Structure

```
72234_visioncraft.SIH final folder/
├── README.md (this file)
├── team_info.txt
├── portfolio/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MatrixBackground.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   │   └── products/
│   │       ├── P.I.S.H_Call_Phishing_Detection_.macro
│   │       └── P.I.S.H._Whatsapp-SMS_Phishing_Detection_.macro
│   ├── package.json
│   └── README.md
├── next_steps/
│   ├── src/
│   │   ├── components/
│   │   │   ├── phases/
│   │   │   │   ├── PhaseOne.jsx
│   │   │   │   ├── PhaseTwo.jsx
│   │   │   │   ├── PhaseThree.jsx
│   │   │   │   └── PhaseFour.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PishAdvertisement.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
└── P.I.S.H/
    └──index.html
    |       logo.png
    └── products/
        ├── P.I.S.H_Call_Phishing_Detection_.macro
        └── P.I.S.H._Whatsapp-SMS_Phishing_Detection_.macro
```

## Required Environment Variables

No environment variables are required for basic functionality. The project runs with default Vite configuration.

## Screenshots/Sample Inputs

The application provides:
- Interactive dashboard for monitoring phishing attempts
- Educational phases with visual content
- Login/Signup forms with validation
- Responsive navigation and footer
- Matrix-style animated backgrounds
- Product showcase pages

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Change the port in `vite.config.js` or stop the process using the port
   - Default port: 5173

2. **Dependencies not installing**
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and `package-lock.json`, then run `npm install` again

3. **Build errors**
   - Ensure Node.js version is 16 or higher: `node --version`
   - Update npm: `npm install -g npm@latest`

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## Testing

Run the linter to check code quality:
```bash
npm run lint
```

## Future Enhancements

### AI/ML Improvements
- Advanced transformer models (BERT, GPT-based) for deeper semantic analysis
- Real-time model retraining with federated learning across user base
- Behavioral biometrics for anomaly detection
- Zero-day phishing pattern recognition
- Multi-language NLP support for global deployment

### Platform Extensions
- Native mobile applications (iOS/Android) with offline capability
- Cross-browser extension support (Chrome, Firefox, Safari, Edge, Brave)
- Desktop application for endpoint protection
- API gateway for enterprise integrations
- Webhook support for SIEM/SOC integration

### Detection Enhancements
- Real-time threat intelligence feed integration
- Blockchain verification for email authenticity
- Deep packet inspection for network-level protection
- Homograph attack detection (IDN spoofing)
- Advanced social engineering pattern recognition
- Voice deepfake detection for call analysis

### Enterprise Features
- Multi-tenant architecture for organizations
- Role-based access control (RBAC) with granular permissions
- Single Sign-On (SSO) integration (SAML, OAuth 2.0)
- Compliance reporting (GDPR, HIPAA, SOC 2)
- Advanced analytics and predictive threat modeling
- Automated incident response workflows

### User Experience
- Gamification of security training with leaderboards
- AR/VR-based immersive phishing awareness training
- Voice-guided setup and tutorials
- Accessibility improvements (WCAG 2.1 AA compliance)
- Dark mode and theme customization
- Multi-language UI support (20+ languages)

### Performance & Scalability
- Edge computing deployment for lower latency
- CDN integration for global content delivery
- Horizontal scaling with Kubernetes orchestration
- Advanced caching strategies for ML inference
- WebAssembly for compute-intensive operations
- Progressive Web App (PWA) capabilities

## License

This project was developed for Smart India Hackathon 2025.

## Support

For issues or questions, please refer to the team_info.txt file for team contact details.

---

## Summary

This project delivers a unified, scalable, multi-vector phishing-detection and user-training ecosystem that achieves **high accuracy, low latency, strong personalization, and streamlined deployment**. The system's integration of browser, mobile, and administrative defenses establishes a **market-ready solution** that surpasses existing tools in:

- **Transparency**: Complete forensic logging and evidence trails
- **Adaptability**: Personalized training based on user-specific vulnerabilities  
- **Operational Efficiency**: Backend-free architecture with federated replication
- **Comprehensive Coverage**: Unified protection across email, web, SMS, WhatsApp, and voice calls

**Status**: Prototype developed for Smart India Hackathon 2025. The architecture is designed for enterprise deployment with modular components ready for production scaling and security hardening.

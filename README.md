# EduPath Europe - AI Educational Counselor

A comprehensive AI-powered platform designed to guide African students through the European university application and study visa process.

## Features

- **University Browser**: Explore 12+ European universities with detailed information on courses, fees, and requirements
- **Visa Guide**: Complete document checklist and interview preparation for study visa applications
- **Accommodation Finder**: Search for student housing options across major European cities
- **AI Counselor**: Interactive AI assistant providing personalized guidance on:
  - Course recommendations based on student profile
  - University selection advice
  - Visa application support
  - Scholarship information
  - Application timeline planning
- **Comprehensive Database**: Information on Bachelor, Master, MRes, and PhD programs across multiple fields

## Framework

Vanilla JavaScript with HTML5 and Tailwind CSS (CDN)

## Preview

This application is configured to run as a static website on any web server.

## Development

Simply open `index.html` in a web browser to run the application locally.

For a local development server:
```bash
python -m http.server 8080
```

Then visit: http://localhost:8080

## Theme

Clean Light theme with professional blue accent colors, designed for accessibility and clarity. The interface features:
- Soft gray backgrounds with white cards
- Blue primary color (#2563eb) for interactive elements
- Generous whitespace for readability
- Responsive design for mobile, tablet, and desktop
- Intuitive navigation with smooth scrolling

## Data

The application includes sample data for:
- 12 European universities across 8 countries
- Degree programs at all levels (Bachelor, Master, MRes, PhD)
- Tuition fees and requirements for each program
- Student accommodation options in major cities
- Comprehensive visa documentation guidelines

## User Profile

Student profiles are saved to browser localStorage, allowing personalized recommendations across sessions.

## Browser Compatibility

Works on all modern browsers supporting ES6+ JavaScript and localStorage.
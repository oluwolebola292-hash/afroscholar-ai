// University Data
const universities = [
  {
    id: 1,
    name: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    degrees: ["Bachelor", "Master", "PhD"],
    fields: ["Engineering", "Computer Science", "Natural Sciences"],
    tuitionFee: {
      Bachelor: "€0 (Semester fee: €144)",
      Master: "€0 (Semester fee: €144)",
      PhD: "€0 (Semester fee: €144)"
    },
    requirements: {
      Bachelor: "High school diploma, German proficiency (TestDaF/DSH), Entrance exam",
      Master: "Bachelor's degree, GPA 2.5+, German/English proficiency, Motivation letter",
      PhD: "Master's degree, Research proposal, Supervisor acceptance"
    },
    language: "German/English",
    ranking: "Top 50 Worldwide"
  },
  {
    id: 2,
    name: "University of Amsterdam",
    country: "Netherlands",
    city: "Amsterdam",
    degrees: ["Bachelor", "Master", "PhD"],
    fields: ["Social Sciences", "Business", "Arts", "Natural Sciences"],
    tuitionFee: {
      Bachelor: "€10,000 - €12,000/year",
      Master: "€12,000 - €18,000/year",
      PhD: "Fully funded"
    },
    requirements: {
      Bachelor: "High school diploma, IELTS 6.5+/TOEFL 90+, Motivation letter",
      Master: "Bachelor's degree, IELTS 7.0+/TOEFL 100+, GPA 3.0+, CV, References",
      PhD: "Master's degree, Research proposal, Publications (preferred)"
    },
    language: "English",
    ranking: "Top 60 Worldwide"
  },
  {
    id: 3,
    name: "Sorbonne University",
    country: "France",
    city: "Paris",
    degrees: ["Bachelor", "Master", "PhD"],
    fields: ["Arts", "Social Sciences", "Medicine", "Natural Sciences"],
    tuitionFee: {
      Bachelor: "€170/year",
      Master: "€243/year",
      MRes: "€380/year",
      PhD: "€380/year"
    },
    requirements: {
      Bachelor: "Baccalaureate, French proficiency (DELF B2), University entrance exam",
      Master: "Bachelor's degree, French/English proficiency, Academic transcripts",
      PhD: "Master's degree, Research proposal, Supervisor agreement"
    },
    language: "French/English",
    ranking: "Top 100 Worldwide"
  },
  {
    id: 4,
    name: "Politecnico di Milano",
    country: "Italy",
    city: "Milan",
    degrees: ["Bachelor", "Master", "PhD"],
    fields: ["Engineering", "Computer Science"],
    tuitionFee: {
      Bachelor: "€3,900/year",
      Master: "€3,900/year",
      PhD: "€0 + Scholarship"
    },
    requirements: {
      Bachelor: "High school diploma, IELTS 6.0+, Mathematics proficiency",
      Master: "Bachelor's degree in Engineering, IELTS 6.5+, GPA 2.8+",
      PhD: "Master's degree, Research proposal, Interview"
    },
    language: "Italian/English",
    ranking: "Top 150 Worldwide"
  },
  {
    id: 5,
    name: "University of Warsaw",
    country: "Poland",
    city: "Warsaw",
    degrees: ["Bachelor", "Master", "PhD"],
    fields: ["Social Sciences", "Business", "Natural Sciences", "Arts"],
    tuitionFee: {
      Bachelor: "€2,000 - €4,000/year",
      Master: "€2,500 - €4,500/year",
      PhD: "€3,000/year"
    },
    requirements: {
      Bachelor: "High school diploma, IELTS 6.0+/TOEFL 80+",
      Master: "Bachelor's degree, IELTS 6.5+, Transcripts, Motivation letter",
      PhD: "Master's degree, Research proposal, Interview"
    },
    language: "English/Polish",
    ranking: "Top 400 Worldwide"
  },
  {
    id: 6,
    name: "KTH Royal Institute of Technology",
    country: "Sweden",
    city: "Stockholm",
    degrees: ["Master", "PhD"],
    fields: ["Engineering", "Computer Science", "Natural Sciences"],
    tuitionFee: {
      Master: "€15,000/year",
      PhD: "Fully funded + Salary"
    },
    requirements: {
      Master: "Bachelor's degree, IELTS 6.5+/TOEFL 90+, GPA 3.0+, Transcripts",
      PhD: "Master's degree, Research proposal, Publications, Interview"
    },
    language: "English",
    ranking: "Top 100 Worldwide"
  },
  {
    id: 7,
    name: "IE Business School",
    country: "Spain",
    city: "Madrid",
    degrees: ["Bachelor", "Master"],
    fields: ["Business"],
    tuitionFee: {
      Bachelor: "€23,000/year",
      Master: "€35,000 - €75,000/year"
    },
    requirements: {
      Bachelor: "High school diploma, IELTS 7.0+, SAT/ACT scores, Essays",
      Master: "Bachelor's degree, GMAT 600+, IELTS 7.0+, Work experience, Essays"
    },
    language: "English/Spanish",
    ranking: "Top Business School"
  },
  {
    id: 8,
    name: "Vienna University of Technology",
    country: "Austria",
    city: "Vienna",
    degrees: ["Bachelor", "Master", "PhD"],
    fields: ["Engineering", "Computer Science"],
    tuitionFee: {
      Bachelor: "€726/semester",
      Master: "€726/semester",
      PhD: "€726/semester"
    },
    requirements: {
      Bachelor: "High school diploma, German proficiency, Mathematics exam",
      Master: "Bachelor's degree, German/English proficiency, GPA 2.5+",
      PhD: "Master's degree, Research proposal, Supervisor acceptance"
    },
    language: "German/English",
    ranking: "Top 200 Worldwide"
  },
  {
    id: 9,
    name: "Heidelberg University",
    country: "Germany",
    city: "Heidelberg",
    degrees: ["Bachelor", "Master", "PhD"],
    fields: ["Medicine", "Natural Sciences", "Social Sciences"],
    tuitionFee: {
      Bachelor: "€0 (Semester fee: €171)",
      Master: "€0 (Semester fee: €171)",
      PhD: "€0 (Semester fee: €171)"
    },
    requirements: {
      Bachelor: "High school diploma, German proficiency, Entrance exam (for Medicine)",
      Master: "Bachelor's degree, GPA 2.5+, Language proficiency",
      PhD: "Master's degree, Research proposal, Supervisor"
    },
    language: "German/English",
    ranking: "Top 70 Worldwide"
  },
  {
    id: 10,
    name: "Delft University of Technology",
    country: "Netherlands",
    city: "Delft",
    degrees: ["Bachelor", "Master", "PhD"],
    fields: ["Engineering", "Computer Science"],
    tuitionFee: {
      Bachelor: "€10,000/year",
      Master: "€18,750/year",
      PhD: "Fully funded"
    },
    requirements: {
      Bachelor: "High school diploma, IELTS 6.5+, Mathematics proficiency",
      Master: "Bachelor's degree, IELTS 7.0+, GPA 3.0+, Motivation letter",
      PhD: "Master's degree, Research proposal, Publications"
    },
    language: "English/Dutch",
    ranking: "Top 60 Worldwide"
  },
  {
    id: 11,
    name: "Karolinska Institute",
    country: "Sweden",
    city: "Stockholm",
    degrees: ["Master", "PhD"],
    fields: ["Medicine"],
    tuitionFee: {
      Master: "€15,000/year",
      PhD: "Fully funded + Salary"
    },
    requirements: {
      Master: "Bachelor's degree in Health Sciences, IELTS 7.0+, Transcripts",
      PhD: "Master's degree, Research experience, Publications, Interview"
    },
    language: "English",
    ranking: "Top Medical School"
  },
  {
    id: 12,
    name: "University of Barcelona",
    country: "Spain",
    city: "Barcelona",
    degrees: ["Bachelor", "Master", "PhD"],
    fields: ["Social Sciences", "Arts", "Natural Sciences", "Medicine"],
    tuitionFee: {
      Bachelor: "€2,500/year",
      Master: "€3,000 - €4,500/year",
      PhD: "€400/year"
    },
    requirements: {
      Bachelor: "High school diploma, Spanish proficiency (DELE B2), University entrance exam",
      Master: "Bachelor's degree, Language proficiency, Transcripts",
      PhD: "Master's degree, Research proposal, Supervisor"
    },
    language: "Spanish/English",
    ranking: "Top 200 Worldwide"
  }
];

// Accommodation Data
const accommodations = [
  {
    city: "Munich",
    type: "Student Dormitory",
    name: "Studentenwerk München",
    price: 350,
    features: ["Shared kitchen", "WiFi included", "Close to campus"],
    link: "https://www.studentenwerk-muenchen.de"
  },
  {
    city: "Amsterdam",
    type: "Shared Apartment",
    name: "Student Housing Amsterdam",
    price: 550,
    features: ["Private room", "Shared bathroom", "City center"],
    link: "https://www.student-housing.nl"
  },
  {
    city: "Paris",
    type: "Student Residence",
    name: "Cité Universitaire",
    price: 400,
    features: ["Furnished room", "Cafeteria", "Library access"],
    link: "https://www.ciup.fr"
  },
  {
    city: "Milan",
    type: "Shared Apartment",
    name: "Milano Student Housing",
    price: 480,
    features: ["Modern facilities", "WiFi", "Near metro"],
    link: "https://www.housing-milano.com"
  },
  {
    city: "Warsaw",
    type: "Student Dormitory",
    name: "University Dorms Warsaw",
    price: 250,
    features: ["Budget-friendly", "Campus location", "Shared facilities"],
    link: "https://www.uw.edu.pl"
  },
  {
    city: "Stockholm",
    type: "Private Studio",
    name: "Stockholm Student Apartments",
    price: 750,
    features: ["Private kitchen", "Bathroom", "Furnished"],
    link: "https://www.sssb.se"
  },
  {
    city: "Madrid",
    type: "Shared Apartment",
    name: "Madrid Student Flats",
    price: 500,
    features: ["Central location", "Modern", "WiFi included"],
    link: "https://www.uniplaces.com"
  },
  {
    city: "Vienna",
    type: "Student Residence",
    name: "OeAD Student Housing",
    price: 420,
    features: ["International students", "Furnished", "Community events"],
    link: "https://www.housing.oead.at"
  }
];

// User Profile Storage
let userProfile = {};

// Document Storage
let uploadedDocuments = [];
let documentOrders = [];

// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Update active nav link on scroll
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-blue-600', 'font-medium');
    link.classList.add('text-gray-600');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-blue-600', 'font-medium');
      link.classList.remove('text-gray-600');
    }
  });
});

// Load Universities
function loadUniversities(filteredUniversities = universities) {
  const grid = document.getElementById('universities-grid');
  
  if (filteredUniversities.length === 0) {
    grid.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500"><i class="fas fa-search text-4xl mb-4"></i><p>No universities found matching your criteria.</p></div>';
    return;
  }
  
  grid.innerHTML = filteredUniversities.map(uni => `
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
      <div class="flex items-start justify-between mb-3">
        <h3 class="text-lg font-semibold text-gray-900">${uni.name}</h3>
        <span class="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">${uni.ranking}</span>
      </div>
      <div class="space-y-2 mb-4">
        <p class="text-sm text-gray-600 flex items-center">
          <i class="fas fa-map-marker-alt text-blue-600 w-5"></i>
          ${uni.city}, ${uni.country}
        </p>
        <p class="text-sm text-gray-600 flex items-center">
          <i class="fas fa-language text-blue-600 w-5"></i>
          ${uni.language}
        </p>
        <p class="text-sm text-gray-600 flex items-center">
          <i class="fas fa-graduation-cap text-blue-600 w-5"></i>
          ${uni.degrees.join(', ')}
        </p>
      </div>
      <div class="border-t pt-3">
        <p class="text-xs text-gray-500 mb-2">Fields of Study:</p>
        <div class="flex flex-wrap gap-1 mb-3">
          ${uni.fields.map(field => `<span class="text-xs px-2 py-1 bg-gray-100 rounded">${field}</span>`).join('')}
        </div>
      </div>
      <button onclick="viewUniversityDetails(${uni.id})" class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
        <i class="fas fa-info-circle mr-2"></i>View Details
      </button>
    </div>
  `).join('');
}

// Apply Filters
function applyFilters() {
  const country = document.getElementById('country-filter').value;
  const degree = document.getElementById('degree-filter').value;
  const field = document.getElementById('field-filter').value;
  
  let filtered = universities;
  
  if (country) {
    filtered = filtered.filter(uni => uni.country === country);
  }
  
  if (degree) {
    filtered = filtered.filter(uni => uni.degrees.includes(degree));
  }
  
  if (field) {
    filtered = filtered.filter(uni => uni.fields.includes(field));
  }
  
  loadUniversities(filtered);
}

// View University Details
function viewUniversityDetails(id) {
  const uni = universities.find(u => u.id === id);
  if (!uni) return;
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
  
  modal.innerHTML = `
    <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
      <div class="sticky top-0 bg-blue-600 text-white p-6 flex justify-between items-start">
        <div>
          <h2 class="text-2xl font-bold mb-2">${uni.name}</h2>
          <p class="text-blue-100">${uni.city}, ${uni.country}</p>
        </div>
        <button onclick="this.closest('.fixed').remove()" class="text-white hover:text-gray-200">
          <i class="fas fa-times text-2xl"></i>
        </button>
      </div>
      
      <div class="p-6 space-y-6">
        <div>
          <h3 class="text-xl font-semibold mb-3">Available Degrees</h3>
          <div class="flex flex-wrap gap-2">
            ${uni.degrees.map(deg => `<span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">${deg}</span>`).join('')}
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-3">Fields of Study</h3>
          <div class="flex flex-wrap gap-2">
            ${uni.fields.map(field => `<span class="px-3 py-1 bg-gray-100 rounded">${field}</span>`).join('')}
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-3">Tuition Fees</h3>
          <div class="bg-gray-50 rounded-lg p-4 space-y-2">
            ${Object.entries(uni.tuitionFee).map(([degree, fee]) => `
              <div class="flex justify-between items-center">
                <span class="font-medium">${degree}:</span>
                <span class="text-blue-600 font-semibold">${fee}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-3">Requirements</h3>
          <div class="space-y-3">
            ${Object.entries(uni.requirements).map(([degree, req]) => `
              <div class="bg-gray-50 rounded-lg p-4">
                <p class="font-medium text-blue-600 mb-2">${degree}</p>
                <p class="text-sm text-gray-700">${req}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="bg-blue-50 rounded-lg p-4">
          <p class="text-sm text-gray-700"><strong>Language of Instruction:</strong> ${uni.language}</p>
          <p class="text-sm text-gray-700 mt-2"><strong>Global Ranking:</strong> ${uni.ranking}</p>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

// Search Accommodation
function searchAccommodation() {
  const city = document.getElementById('accommodation-city').value.trim();
  const budget = document.getElementById('accommodation-budget').value;
  
  let filtered = accommodations;
  
  if (city) {
    filtered = filtered.filter(acc => 
      acc.city.toLowerCase().includes(city.toLowerCase())
    );
  }
  
  if (budget) {
    const [min, max] = budget.split('-').map(b => parseInt(b.replace('+', '')) || Infinity);
    filtered = filtered.filter(acc => {
      if (budget.includes('+')) {
        return acc.price >= min;
      }
      return acc.price >= min && acc.price <= max;
    });
  }
  
  displayAccommodationResults(filtered);
}

// Display Accommodation Results
function displayAccommodationResults(results) {
  const container = document.getElementById('accommodation-results');
  
  if (results.length === 0) {
    container.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500"><i class="fas fa-home text-4xl mb-4"></i><p>No accommodation found. Try adjusting your filters.</p></div>';
    return;
  }
  
  container.innerHTML = results.map(acc => `
    <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
      <div class="flex items-start justify-between mb-3">
        <div>
          <h3 class="text-lg font-semibold text-gray-900">${acc.name}</h3>
          <p class="text-sm text-gray-600">${acc.city}</p>
        </div>
        <span class="text-xl font-bold text-blue-600">€${acc.price}</span>
      </div>
      <p class="text-sm text-gray-500 mb-3">${acc.type}</p>
      <ul class="space-y-1 mb-4">
        ${acc.features.map(feature => `
          <li class="text-sm text-gray-700 flex items-center">
            <i class="fas fa-check-circle text-green-600 mr-2"></i>${feature}
          </li>
        `).join('')}
      </ul>
      <a href="${acc.link}" target="_blank" class="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
        <i class="fas fa-external-link-alt mr-2"></i>Visit Website
      </a>
    </div>
  `).join('');
}

// Download Checklist
function downloadChecklist() {
  const checklistText = `
STUDY VISA DOCUMENT CHECKLIST FOR EUROPEAN UNIVERSITIES

Essential Documents:
☐ Valid Passport (valid for at least 6 months beyond your stay)
☐ University Admission Letter (official acceptance from your chosen institution)
☐ Proof of Financial Means (bank statements, scholarship letters, or sponsor documents)
☐ Health Insurance (coverage for the duration of your stay)
☐ Academic Transcripts (certified copies of previous educational records)
☐ Language Proficiency Certificate (IELTS, TOEFL, or relevant language certificate)
☐ Motivation Letter (statement of purpose for your studies)
☐ Accommodation Proof (confirmation of housing arrangements)
☐ Passport-sized Photos (usually 2-4 recent photos)
☐ Visa Application Form (completed and signed)
☐ Proof of Paid Visa Fee
☐ Travel Itinerary (if applicable)

Additional Documents (may be required):
☐ CV/Resume
☐ Letters of Recommendation (2-3 from academic or professional references)
☐ Birth Certificate
☐ Police Clearance Certificate
☐ Medical Certificate
☐ Proof of Previous Studies (diplomas, certificates)

Country-Specific Requirements:
Please check the specific requirements for your destination country as they may vary.

Important Notes:
- All documents must be original or certified copies
- Non-English/local language documents must be officially translated
- Keep multiple copies of all documents
- Organize documents in a clear folder for your interview

Generated by EduPath Europe
  `.trim();
  
  const blob = new Blob([checklistText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'visa-document-checklist.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// Start Interview Practice
function startInterviewPractice() {
  const questions = [
    "Why do you want to study in Europe?",
    "How will you finance your studies?",
    "What are your plans after graduation?",
    "Why did you choose this specific university and course?",
    "Tell me about your academic background.",
    "Do you have any family or friends in Europe?",
    "How will this degree benefit your career?",
    "What do you know about the country you're applying to?"
  ];
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
  
  let currentQuestion = 0;
  
  const updateQuestion = () => {
    const questionEl = modal.querySelector('#practice-question');
    questionEl.textContent = questions[currentQuestion];
    modal.querySelector('#question-number').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  };
  
  modal.innerHTML = `
    <div class="bg-white rounded-lg max-w-2xl w-full p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Interview Practice</h2>
        <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <div class="bg-blue-50 rounded-lg p-6 mb-6">
        <p class="text-sm text-gray-600 mb-2" id="question-number">Question 1 of ${questions.length}</p>
        <p class="text-lg font-medium" id="practice-question">${questions[0]}</p>
      </div>
      
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">Your Answer:</label>
        <textarea id="practice-answer" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Type your answer here..."></textarea>
      </div>
      
      <div class="flex space-x-3">
        <button onclick="this.closest('.fixed').querySelector('#practice-answer').value = ''; ${currentQuestion < questions.length - 1 ? 'this.click()' : ''}" id="next-question" class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Next Question
        </button>
        <button onclick="this.closest('.fixed').remove()" class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
          Finish
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  modal.querySelector('#next-question').addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      updateQuestion();
      modal.querySelector('#practice-answer').value = '';
    } else {
      alert('Practice complete! Keep refining your answers and practice with confidence.');
      modal.remove();
    }
  });
}

// Save Profile
function saveProfile() {
  userProfile = {
    name: document.getElementById('profile-name').value,
    country: document.getElementById('profile-country').value,
    education: document.getElementById('profile-education').value,
    desired: document.getElementById('profile-desired').value,
    field: document.getElementById('profile-field').value
  };
  
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
  
  const feedback = document.createElement('div');
  feedback.className = 'fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
  feedback.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Profile saved successfully!';
  document.body.appendChild(feedback);
  
  setTimeout(() => feedback.remove(), 3000);
}

// Load Profile
function loadProfile() {
  const saved = localStorage.getItem('userProfile');
  if (saved) {
    userProfile = JSON.parse(saved);
    document.getElementById('profile-name').value = userProfile.name || '';
    document.getElementById('profile-country').value = userProfile.country || '';
    document.getElementById('profile-education').value = userProfile.education || '';
    document.getElementById('profile-desired').value = userProfile.desired || '';
    document.getElementById('profile-field').value = userProfile.field || '';
  }
}

// AI Chat Functions
function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  
  if (!message) return;
  
  addChatMessage(message, 'user');
  input.value = '';
  
  setTimeout(() => {
    const response = generateAIResponse(message);
    addChatMessage(response, 'ai');
  }, 1000);
}

function quickQuestion(question) {
  document.getElementById('chat-input').value = question;
  sendMessage();
}

function handleChatKeypress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function addChatMessage(message, sender) {
  const chatMessages = document.getElementById('chat-messages');
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'flex items-start';
  
  if (sender === 'user') {
    messageDiv.innerHTML = `
      <div class="ml-auto flex items-start flex-row-reverse">
        <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 ml-3 flex-shrink-0">
          <i class="fas fa-user"></i>
        </div>
        <div class="bg-blue-600 text-white rounded-lg p-3 max-w-md">
          <p class="text-sm">${message}</p>
        </div>
      </div>
    `;
  } else {
    messageDiv.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3 flex-shrink-0">
        <i class="fas fa-robot"></i>
      </div>
      <div class="bg-gray-100 rounded-lg p-3 max-w-md">
        <p class="text-sm">${message}</p>
      </div>
    `;
  }
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // University recommendations
  if (lowerMessage.includes('recommend') || lowerMessage.includes('suggest') || lowerMessage.includes('university')) {
    if (userProfile.field && userProfile.desired) {
      const matches = universities.filter(uni => 
        uni.fields.includes(userProfile.field) && uni.degrees.includes(userProfile.desired)
      );
      
      if (matches.length > 0) {
        const topMatches = matches.slice(0, 3);
        return `Based on your interest in ${userProfile.field} for a ${userProfile.desired} degree, I recommend:\n\n${topMatches.map((u, i) => `${i + 1}. ${u.name} (${u.country}) - ${u.tuitionFee[userProfile.desired]}`).join('\n')}\n\nWould you like details about any of these universities?`;
      }
    }
    return "I'd be happy to recommend universities! Please save your profile first with your desired degree level and field of interest, then ask again.";
  }
  
  // Visa requirements
  if (lowerMessage.includes('visa') || lowerMessage.includes('document')) {
    return "For European study visas, you'll need:\n\n✓ Valid passport (6+ months validity)\n✓ University admission letter\n✓ Proof of financial means\n✓ Health insurance\n✓ Academic transcripts\n✓ Language proficiency test\n✓ Motivation letter\n✓ Accommodation proof\n\nClick 'Download Full Checklist' in the Visa Guide section for the complete list!";
  }
  
  // Scholarships
  if (lowerMessage.includes('scholarship') || lowerMessage.includes('funding') || lowerMessage.includes('finance')) {
    return "Great question! Scholarship opportunities include:\n\n• DAAD Scholarships (Germany) - Fully funded\n• Erasmus Mundus - EU-wide programs\n• Swedish Institute Scholarships\n• Holland Scholarship (Netherlands)\n• Eiffel Excellence Scholarship (France)\n\nMany universities also offer tuition waivers. German and French public universities have very low/no tuition fees!";
  }
  
  // Fees
  if (lowerMessage.includes('fee') || lowerMessage.includes('cost') || lowerMessage.includes('tuition')) {
    return "Tuition fees vary by country:\n\n• Germany: €0-€350/semester (public universities)\n• France: €170-€380/year (public universities)\n• Netherlands: €10,000-€18,000/year\n• Poland: €2,000-€5,000/year\n• Spain: €2,500-€4,500/year\n• Sweden: €15,000/year (PhD programs are often fully funded)\n\nCheck the Universities section for specific fees at each institution!";
  }
  
  // Accommodation
  if (lowerMessage.includes('accommodation') || lowerMessage.includes('housing') || lowerMessage.includes('dormitory')) {
    return "Student accommodation options:\n\n• University dormitories: €200-€400/month (most affordable)\n• Shared apartments: €300-€600/month\n• Private studios: €500-€900/month\n\nI recommend applying for university housing early as spots fill quickly. Check the Accommodation section for city-specific options!";
  }
  
  // Application timeline
  if (lowerMessage.includes('when') || lowerMessage.includes('deadline') || lowerMessage.includes('apply')) {
    return "Typical application timeline:\n\n• Winter intake (Sep-Oct start):\n  - Applications: November-March\n  - Decisions: March-May\n  - Visa: May-August\n\n• Summer intake (Feb-Mar start):\n  - Applications: August-November\n  - Decisions: November-January\n  - Visa: January-February\n\nStart preparing 12 months in advance for the best chances!";
  }
  
  // Language requirements
  if (lowerMessage.includes('language') || lowerMessage.includes('english') || lowerMessage.includes('ielts') || lowerMessage.includes('toefl')) {
    return "Language requirements:\n\n• English-taught programs: IELTS 6.5-7.0 or TOEFL 90-100\n• German programs: TestDaF 4x4 or DSH-2\n• French programs: DELF B2/DALF C1\n• Spanish programs: DELE B2\n\nMany universities offer English-taught programs, especially at Master's and PhD levels!";
  }
  
  // Default response
  return "I can help you with:\n• University recommendations\n• Visa requirements\n• Scholarship information\n• Tuition fees\n• Accommodation options\n• Application timelines\n• Language requirements\n\nWhat would you like to know more about?";
}

// Document Writing Service Functions
function startDocumentService(type) {
  const typeNames = {
    sop: 'Statement of Purpose',
    cv: 'Professional CV/Resume',
    cover: 'Cover Letter'
  };
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto';
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
  
  modal.innerHTML = `
    <div class="bg-white rounded-lg max-w-4xl w-full my-8">
      <div class="sticky top-0 bg-blue-600 text-white p-6 rounded-t-lg flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold">${typeNames[type]}</h2>
          <p class="text-blue-100 text-sm">AI-Powered Document Writing Service - $50</p>
        </div>
        <button onclick="this.closest('.fixed').remove()" class="text-white hover:text-gray-200">
          <i class="fas fa-times text-2xl"></i>
        </button>
      </div>
      
      <div class="p-6">
        <!-- Step 1: Upload Documents -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">1</span>
            Upload Supporting Documents
          </h3>
          <p class="text-gray-600 mb-4">Upload your transcripts, certificates, CV, or any documents that contain relevant information.</p>
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition">
            <input type="file" id="doc-upload-${type}" multiple accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png" class="hidden" onchange="handleDocumentUpload(event, '${type}')">
            <label for="doc-upload-${type}" class="cursor-pointer">
              <i class="fas fa-cloud-upload-alt text-5xl text-gray-400 mb-4 block"></i>
              <p class="text-gray-700 font-medium mb-2">Click to upload or drag and drop</p>
              <p class="text-sm text-gray-500">PDF, DOC, DOCX, TXT, JPG, PNG (Max 10MB each)</p>
            </label>
          </div>
          <div id="uploaded-files-${type}" class="mt-4 space-y-2">
            <!-- Uploaded files will appear here -->
          </div>
        </div>

        <!-- Step 2: Questionnaire -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">2</span>
            Tell Us Your Story
          </h3>
          <div class="space-y-4" id="questionnaire-${type}">
            ${getQuestionnaireForType(type)}
          </div>
        </div>

        <!-- Step 3: Additional Instructions -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">3</span>
            Additional Instructions
          </h3>
          <textarea id="additional-instructions-${type}" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Any specific requirements, word count preferences, or information you'd like to emphasize..."></textarea>
        </div>

        <!-- Payment & Submit -->
        <div class="bg-gray-50 rounded-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <p class="text-2xl font-bold text-gray-900">Total: $50</p>
              <p class="text-sm text-gray-600">One-time payment • Unlimited revisions • 48-hour delivery</p>
            </div>
          </div>
          
          <div class="border-t pt-6">
            <h4 class="font-semibold mb-4">Payment Information</h4>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                <input type="text" placeholder="John Doe" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                <input type="text" placeholder="MM/YY" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                <input type="text" placeholder="123" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              </div>
            </div>
            <button onclick="processDocumentOrder('${type}')" class="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
              <i class="fas fa-lock mr-2"></i>Pay $50 & Generate Document
            </button>
            <p class="text-xs text-gray-500 text-center mt-3">
              <i class="fas fa-shield-alt mr-1"></i>Secure payment processing • Your information is encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

function getQuestionnaireForType(type) {
  const questions = {
    sop: `
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Target University & Program</label>
        <input type="text" id="q-university-${type}" placeholder="e.g., Technical University of Munich - Master in Computer Science" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Why do you want to pursue this specific program?</label>
        <textarea id="q-why-program-${type}" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your motivation for choosing this program..."></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">What are your career goals?</label>
        <textarea id="q-career-goals-${type}" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your short-term and long-term career aspirations..."></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Key academic achievements or experiences</label>
        <textarea id="q-achievements-${type}" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Research projects, awards, relevant coursework, internships..."></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Why this university specifically?</label>
        <textarea id="q-why-university-${type}" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="What attracts you to this university? Specific professors, research centers, programs..."></textarea>
      </div>
    `,
    cv: `
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
        <input type="text" id="q-fullname-${type}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" id="q-email-${type}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input type="text" id="q-phone-${type}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
        <textarea id="q-summary-${type}" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Brief overview of your background, skills, and objectives..."></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Education Background</label>
        <textarea id="q-education-${type}" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Degrees, institutions, graduation dates, GPA, honors..."></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Work Experience / Internships</label>
        <textarea id="q-experience-${type}" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Job titles, companies, dates, key responsibilities and achievements..."></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Skills</label>
        <input type="text" id="q-skills-${type}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., Python, Data Analysis, Project Management, etc.">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Certifications, Awards, Publications (if any)</label>
        <textarea id="q-extras-${type}" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Additional achievements that strengthen your profile..."></textarea>
      </div>
    `,
    cover: `
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Target Position / Scholarship</label>
        <input type="text" id="q-position-${type}" placeholder="e.g., Research Assistant, DAAD Scholarship" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Institution / Organization Name</label>
        <input type="text" id="q-institution-${type}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Why are you applying?</label>
        <textarea id="q-why-applying-${type}" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your interest in this opportunity..."></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Relevant qualifications and experiences</label>
        <textarea id="q-qualifications-${type}" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="How your background makes you a strong candidate..."></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">What value will you bring?</label>
        <textarea id="q-value-${type}" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="How you can contribute to the program/organization..."></textarea>
      </div>
    `
  };
  
  return questions[type] || '';
}

function handleDocumentUpload(event, type) {
  const files = event.target.files;
  const container = document.getElementById(`uploaded-files-${type}`);
  
  Array.from(files).forEach(file => {
    if (file.size > 10 * 1024 * 1024) {
      alert(`${file.name} is too large. Maximum file size is 10MB.`);
      return;
    }
    
    const fileId = Date.now() + Math.random();
    uploadedDocuments.push({ id: fileId, name: file.name, type: type, file: file });
    
    const fileDiv = document.createElement('div');
    fileDiv.className = 'flex items-center justify-between bg-gray-50 p-3 rounded-lg';
    fileDiv.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-file-alt text-blue-600 mr-3"></i>
        <span class="text-sm font-medium">${file.name}</span>
        <span class="text-xs text-gray-500 ml-3">(${(file.size / 1024).toFixed(1)} KB)</span>
      </div>
      <button onclick="removeUploadedDocument(${fileId}, '${type}')" class="text-red-600 hover:text-red-800">
        <i class="fas fa-times"></i>
      </button>
    `;
    container.appendChild(fileDiv);
  });
  
  showDocumentManager();
}

function removeUploadedDocument(fileId, type) {
  uploadedDocuments = uploadedDocuments.filter(doc => doc.id !== fileId);
  const container = document.getElementById(`uploaded-files-${type}`);
  container.innerHTML = '';
  uploadedDocuments.filter(doc => doc.type === type).forEach(doc => {
    const fileDiv = document.createElement('div');
    fileDiv.className = 'flex items-center justify-between bg-gray-50 p-3 rounded-lg';
    fileDiv.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-file-alt text-blue-600 mr-3"></i>
        <span class="text-sm font-medium">${doc.name}</span>
      </div>
      <button onclick="removeUploadedDocument(${doc.id}, '${type}')" class="text-red-600 hover:text-red-800">
        <i class="fas fa-times"></i>
      </button>
    `;
    container.appendChild(fileDiv);
  });
}

function showDocumentManager() {
  const manager = document.getElementById('document-manager');
  const list = document.getElementById('uploaded-documents-list');
  const noDocsMsg = document.getElementById('no-documents-message');
  
  if (uploadedDocuments.length > 0) {
    manager.classList.remove('hidden');
    noDocsMsg.classList.add('hidden');
    
    list.innerHTML = uploadedDocuments.map(doc => `
      <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
        <div class="flex items-center">
          <i class="fas fa-file-alt text-blue-600 mr-3 text-xl"></i>
          <div>
            <p class="font-medium">${doc.name}</p>
            <p class="text-xs text-gray-500">Uploaded for ${doc.type.toUpperCase()} service</p>
          </div>
        </div>
        <button onclick="removeUploadedDocument(${doc.id}, '${doc.type}')" class="text-red-600 hover:text-red-800">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `).join('');
  } else {
    noDocsMsg.classList.remove('hidden');
  }
}

// Stripe configuration
let stripe;
let stripeElements;

// Initialize Stripe when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Note: Replace with your actual Stripe publishable key
  stripe = Stripe('pk_test_your_publishable_key_here');
  stripeElements = stripe.elements();
  
  // Create card Element
  const cardElement = stripeElements.create('card', {
    style: {
      base: {
        fontSize: '16px',
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  });
  
  // Mount card Element when needed
  cardElement = cardElement;
});

// Flutterwave Payment Configuration
const FLUTTERWAVE_PUBLIC_KEY = 'FLWPUBK_TEST-your_public_key_here'; // Replace with actual public key

// Function to get current exchange rate
async function getCurrentUSDToNairaRate() {
  try {
    // Use a free exchange rate API
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    const data = await response.json();
    return data.rates.NGN;
  } catch (error) {
    console.error('Failed to fetch exchange rate, using fallback', error);
    return 1500; // Fallback exchange rate
  }
}

function sendAccountDetailsRequest(email) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
  
  modal.innerHTML = `
    <div class="bg-white rounded-lg max-w-md w-full p-8">
      <div class="text-center mb-6">
        <i class="fas fa-envelope-open-text text-blue-600 text-4xl mb-4"></i>
        <h2 class="text-2xl font-bold mb-3">Request Account Details</h2>
        <p class="text-gray-600 mb-4">We'll send the account details to the email you provide.</p>
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
        <input type="email" id="account-details-email" value="${email || ''}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your email">
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">Brief Message (Optional)</label>
        <textarea id="account-details-message" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Any specific questions about account details?"></textarea>
      </div>
      
      <button onclick="submitAccountDetailsRequest()" class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        <i class="fas fa-paper-plane mr-2"></i>Send Request
      </button>
      
      <p class="text-xs text-gray-500 text-center mt-4">
        We'll respond to your email within 24 hours.
      </p>
    </div>
  `;
  
  document.body.appendChild(modal);
}

function submitAccountDetailsRequest() {
  const email = document.getElementById('account-details-email').value;
  const message = document.getElementById('account-details-message').value;
  
  if (!email) {
    alert('Please enter a valid email address');
    return;
  }
  
  // In a real-world scenario, this would trigger a backend email service
  const mailtoLink = `mailto:toyosisamuel9@gmail.com?subject=Account Details Request&body=Email: ${encodeURIComponent(email)}%0A%0AMessage: ${encodeURIComponent(message)}%0A%0ARequested Account Details for EduPath Europe Service`;
  
  window.location.href = mailtoLink;
  
  // Show success feedback
  const modal = document.querySelector('.fixed');
  if (modal) modal.remove();
  
  const successModal = document.createElement('div');
  successModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
  successModal.innerHTML = `
    <div class="bg-white rounded-lg max-w-md w-full p-8 text-center">
      <i class="fas fa-check-circle text-green-600 text-5xl mb-4"></i>
      <h2 class="text-2xl font-bold mb-3">Request Sent!</h2>
      <p class="text-gray-600 mb-4">We've opened your email client to send the request. You'll receive a response within 24 hours.</p>
      <button onclick="this.closest('.fixed').remove()" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Close
      </button>
    </div>
  `;
  
  document.body.appendChild(successModal);
}

async function processDocumentOrder(type) {
  const typeNames = {
    sop: 'Statement of Purpose',
    cv: 'Professional CV/Resume',
    cover: 'Cover Letter'
  };
  
  // Validation checks
  const additionalInstructions = document.getElementById(`additional-instructions-${type}`).value;
  const questionnaire = collectQuestionnaireData(type);
  
  if (!validateQuestionnaire(questionnaire)) {
    alert('Please fill out all required questionnaire fields.');
    return;
  }
  
  const orderId = 'ORD-' + Date.now();
  const fullName = document.getElementById(`q-fullname-${type}`)?.value || 'Anonymous User';
  const email = document.getElementById(`q-email-${type}`)?.value || 'user@example.com';
  
  // Get current exchange rate
  const exchangeRate = await getCurrentUSDToNairaRate();
  const basePrice = 50;
  const amountInNaira = Math.round(basePrice * exchangeRate);
  
  // Flutterwave Payment Configuration
  FlutterwaveCheckout({
    public_key: FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: orderId,
    amount: amountInNaira,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      name: fullName
    },
    customizations: {
      title: `EduPath Europe - ${typeNames[type]} Writing Service`,
      description: `$${basePrice} Document Writing Service (₦${amountInNaira} at current rate)`,
      logo: "https://yourwebsite.com/logo.png" // Replace with your logo
    },
    callback: function(payment) {
      // Verify payment on your backend
      if (payment.status === "successful") {
        // Create order object
        const order = {
          id: orderId,
          type: type,
          typeName: typeNames[type],
          date: new Date().toISOString(),
          status: 'processing',
          price: {
            usd: basePrice,
            ngn: amountInNaira,
            exchangeRate: exchangeRate
          },
          paymentReference: payment.transaction_id,
          documents: uploadedDocuments.filter(doc => doc.type === type),
          questionnaire: questionnaire,
          additionalInstructions: additionalInstructions,
          paymentDetails: payment
        };
        
        documentOrders.push(order);
        localStorage.setItem('documentOrders', JSON.stringify(documentOrders));
        
        // Show success modal
        showPaymentSuccessModal(typeNames[type], orderId, amountInNaira);
      }
    },
    onclose: function() {
      // Handle modal close
      console.log('Payment modal closed');
    }
  });
}

function showPaymentSuccessModal(typeName, orderId, amountInNaira) {
  const successModal = document.createElement('div');
  successModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
  successModal.innerHTML = `
    <div class="bg-white rounded-lg max-w-md w-full p-8 text-center">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-check-circle text-green-600 text-3xl"></i>
      </div>
      <h2 class="text-2xl font-bold mb-3">Payment Successful!</h2>
      <p class="text-gray-600 mb-6">Your ${typeName} is being generated by our AI. You'll receive it within 48 hours.</p>
      <div class="bg-gray-50 rounded-lg p-4 mb-6">
        <p class="text-sm text-gray-600 mb-1">Order ID</p>
        <p class="font-mono font-semibold">${orderId}</p>
        <p class="text-sm text-gray-600 mt-2">Amount Paid: ₦${amountInNaira}</p>
      </div>
      <div class="flex space-x-3">
        <button onclick="sendAccountDetailsRequest()" class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <i class="fas fa-university mr-2"></i>Request Account Details
        </button>
        <button onclick="this.closest('.fixed').remove();" class="flex-1 px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
          Close
        </button>
      </div>
      <p class="text-xs text-gray-500 mt-4">We'll send you an email when your document is ready for review.</p>
    </div>
  `;
  
  document.body.appendChild(successModal);
}

function showPaymentSuccessModal(typeName, orderId) {
  const successModal = document.createElement('div');
  successModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
  successModal.innerHTML = `
    <div class="bg-white rounded-lg max-w-md w-full p-8 text-center">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-check-circle text-green-600 text-3xl"></i>
      </div>
      <h2 class="text-2xl font-bold mb-3">Payment Successful!</h2>
      <p class="text-gray-600 mb-6">Your ${typeName} is being generated by our AI. You'll receive it within 48 hours.</p>
      <div class="bg-gray-50 rounded-lg p-4 mb-6">
        <p class="text-sm text-gray-600 mb-1">Order ID</p>
        <p class="font-mono font-semibold">${orderId}</p>
      </div>
      <button onclick="this.closest('.fixed').remove();" class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Close
      </button>
      <p class="text-xs text-gray-500 mt-4">We'll send you an email when your document is ready for review.</p>
    </div>
  `;
  
  document.body.appendChild(successModal);
}

// Existing helper functions remain the same
function collectQuestionnaireData(type) {
  const questionnaire = {};
  const questions = document.querySelectorAll(`#questionnaire-${type} input, #questionnaire-${type} textarea`);
  
  questions.forEach(q => {
    questionnaire[q.id] = q.value;
  });
  
  return questionnaire;
}

function validateQuestionnaire(questionnaire) {
  return Object.values(questionnaire).every(val => val.trim() !== '');
}

function collectQuestionnaireData(type) {
  // Collect all questionnaire data based on the type
  const questionnaire = {};
  const questions = document.querySelectorAll(`#questionnaire-${type} input, #questionnaire-${type} textarea`);
  
  questions.forEach(q => {
    questionnaire[q.id] = q.value;
  });
  
  return questionnaire;
}

function validateQuestionnaire(questionnaire) {
  // Basic validation - ensure no empty fields
  return Object.values(questionnaire).every(val => val.trim() !== '');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadUniversities();
  loadProfile();
  
  const savedOrders = localStorage.getItem('documentOrders');
  if (savedOrders) {
    documentOrders = JSON.parse(savedOrders);
  }
});
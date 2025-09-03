function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Sample Data
const scholarships = [
  { name: 'APSCHE UG Scholarship', eligibility: 'Any UG in AP', amount: '₹10,000', category: 'State', deadline: '30 Sept 2025' },
  { name: 'Institutional Merit Scholarship', eligibility: 'Top 10%', amount: '₹20,000', category: 'Private', deadline: '15 Oct 2025' },
  { name: 'National Talent Scholarship', eligibility: 'All UG Students', amount: '₹15,000', category: 'Central', deadline: '10 Oct 2025' }
];
const internships = [
  { role: 'Web Dev Intern', type: 'Part-time', paid: 'Paid', duration: '3 months', perks: 'Certificate', location: 'Hyderabad' },
  { role: 'Research Assistant', type: 'Full-time', paid: 'Unpaid', duration: '2 months', perks: 'Experience Letter', location: 'Bangalore' },
  { role: 'App Dev Intern', type: 'Full-time', paid: 'Paid', duration: '6 months', perks: 'Stipend + Goodies', location: 'Chennai' }
];
const clubs = [
  { name: 'Robotics Club Meetup', date: 'Friday 6 PM', fee: 'Free Entry', location: 'Hyderabad' },
  { name: 'Cultural Fest', date: '5th Sept, 10 AM', fee: '₹200', location: 'Bangalore' }
];
const workshops = [
  { name: 'AI & ML Workshop', date: 'Sat 10 AM', fee: '₹500', location: 'IIT Hyderabad' },
  { name: 'Design Thinking Workshop', date: '24th Aug', fee: 'Free', location: 'Online' }
];

// Populate Functions
function populateScholarships() {
  const container = document.getElementById('scholarshipCards');
  container.innerHTML = '';
  scholarships.forEach((s, i) => {
    container.innerHTML += `
      <div class="card" onclick="openModal('scholarship', ${i})">
        <h3>${s.name}</h3>
        <p>💰 ${s.amount}</p>
        <span class="badge ${s.category.toLowerCase()}">${s.category}</span>
      </div>`;
  });
}
function populateInternships() {
  const container = document.getElementById('internshipCards');
  container.innerHTML = '';
  internships.forEach((i, idx) => {
    container.innerHTML += `
      <div class="card" onclick="openModal('internship', ${idx})">
        <h3>${i.role}</h3>
        <p>📌 ${i.type} | ${i.paid}</p>
        <p>📍 ${i.location}</p>
      </div>`;
  });
}
function populateClubs() {
  const container = document.getElementById('clubCards');
  container.innerHTML = '';
  clubs.forEach((c, idx) => {
    container.innerHTML += `
      <div class="card" onclick="openModal('club', ${idx})">
        <h3>${c.name}</h3>
        <p>📅 ${c.date}</p>
        <p>📍 ${c.location}</p>
      </div>`;
  });
}
function populateWorkshops() {
  const container = document.getElementById('workshopCards');
  container.innerHTML = '';
  workshops.forEach((w, idx) => {
    container.innerHTML += `
      <div class="card" onclick="openModal('workshop', ${idx})">
        <h3>${w.name}</h3>
        <p>📅 ${w.date}</p>
        <p>📍 ${w.location}</p>
      </div>`;
  });
}

// Filters
function filterScholarships() {
  const cat = document.getElementById('scholarshipCategory').value;
  const container = document.getElementById('scholarshipCards');
  container.innerHTML = '';
  scholarships.forEach((s, i) => {
    if (!cat || s.category === cat) {
      container.innerHTML += `
        <div class="card" onclick="openModal('scholarship', ${i})">
          <h3>${s.name}</h3>
          <p>💰 ${s.amount}</p>
          <span class="badge ${s.category.toLowerCase()}">${s.category}</span>
        </div>`;
    }
  });
}
function filterInternships() {
  const type = document.getElementById('internshipType').value;
  const paid = document.getElementById('internshipPaid').value;
  const loc = document.getElementById('internshipLocation').value.toLowerCase();
  const container = document.getElementById('internshipCards');
  container.innerHTML = '';
  internships.forEach((i, idx) => {
    const okType = !type || i.type === type;
    const okPaid = !paid || i.paid === paid;
    const okLoc = !loc || i.location.toLowerCase().includes(loc);
    if (okType && okPaid && okLoc) {
      container.innerHTML += `
        <div class="card" onclick="openModal('internship', ${idx})">
          <h3>${i.role}</h3>
          <p>📌 ${i.type} | ${i.paid}</p>
          <p>📍 ${i.location}</p>
        </div>`;
    }
  });
}
function filterClubs() {
  const loc = document.getElementById('clubLocation').value.toLowerCase();
  const container = document.getElementById('clubCards');
  container.innerHTML = '';
  clubs.forEach((c, idx) => {
    if (!loc || c.location.toLowerCase().includes(loc)) {
      container.innerHTML += `
        <div class="card" onclick="openModal('club', ${idx})">
          <h3>${c.name}</h3>
          <p>📅 ${c.date}</p>
          <p>📍 ${c.location}</p>
        </div>`;
    }
  });
}
function filterWorkshops() {
  const loc = document.getElementById('workshopLocation').value.toLowerCase();
  const container = document.getElementById('workshopCards');
  container.innerHTML = '';
  workshops.forEach((w, idx) => {
    if (!loc || w.location.toLowerCase().includes(loc)) {
      container.innerHTML += `
        <div class="card" onclick="openModal('workshop', ${idx})">
          <h3>${w.name}</h3>
          <p>📅 ${w.date}</p>
          <p>📍 ${w.location}</p>
        </div>`;
    }
  });
}


// Modal Handling
function openModal(type, index) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  modal.style.display = 'block';
  
  if (type === 'scholarship') {
    const s = scholarships[index];
    modalBody.innerHTML = `
      <h2>${s.name}</h2>
      <p>📝 Eligibility: ${s.eligibility}</p>
      <p>💰 Amount: ${s.amount}</p>
      <p>📅 Deadline: ${s.deadline}</p>
      <button>Register</button>
    `;
  }
  if (type === 'internship') {
    const i = internships[index];
    modalBody.innerHTML = `
      <h2>${i.role}</h2>
      <p>📌 Type: ${i.type} | ${i.paid}</p>
      <p>⏳ Duration: ${i.duration}</p>
      <p>🎁 Perks: ${i.perks}</p>
      <p>📍 Location: ${i.location}</p>
      <button>Apply</button>
    `;
  }
  if (type === 'club') {
    const c = clubs[index];
    modalBody.innerHTML = `
      <h2>${c.name}</h2>
      <p>📅 Date: ${c.date}</p>
      <p>🎟 Fee: ${c.fee}</p>
      <p>📍 Location: ${c.location}</p>
      <button>Register</button>
    `;
  }
  if (type === 'workshop') {
    const w = workshops[index];
    modalBody.innerHTML = `
      <h2>${w.name}</h2>
      <p>📅 Date: ${w.date}</p>
      <p>🎟 Fee: ${w.fee}</p>
      <p>📍 Location: ${w.location}</p>
      <button>Register</button>
    `;
  }
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Load data initially
populateScholarships();
populateInternships();
populateClubs();
populateWorkshops();

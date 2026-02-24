
const initialJobs = [
  { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote • Full-time • $130,000 - $175,000", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "pending" },
  { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA • Part-time • $80,000 - $120,000", desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "pending" },
  { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA • Full-time • $125,000 - $165,000", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, Tableau, Power BI.", status: "pending" },
  { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA • Full-time • $140,000 - $180,000", desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "pending" },
  { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX • Full-time • $100,000 - $140,000", desc: "Create beautiful and intuitive user interfaces for our suite of products. Strong design skills and frontend development experience required.", status: "pending" },
  { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY • Full-time • $130,000 - $170,000", desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development.", status: "pending" },
  { id: 7, company: "TechNova", position: "Frontend Engineer", location: "San Francisco, CA • Full-time • $150,000 - $190,000", desc: "Develop responsive web apps using React and Vue. Collaborate with designers and backend teams.", status: "pending" },
  { id: 8, company: "ByteWorks", position: "Software Architect", location: "Remote • Full-time • $160,000 - $200,000", desc: "Design scalable software architectures for cloud-based systems. Experience with microservices required.", status: "pending" }
];

let jobs = [...initialJobs];

const container = document.getElementById("jobsContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");

let activeTab = "all";

function render() {
  container.innerHTML = "";

  const filtered = jobs.filter(job => activeTab === "all" || job.status === activeTab);

  filtered.forEach((job, index) => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `
      <div class="job-number">${index + 1}</div>
      <h3 class="text-2xl font-bold mb-1">${job.company}</h3>
      <p class="text-xl font-semibold mb-3">${job.position}</p>
      <p class="text-gray-600 mb-4">${job.location}</p>
      <div class="not-applied">NOT APPLIED</div>
      <p class="text-gray-700 leading-relaxed mb-6">${job.desc}</p>
      <div class="flex gap-4 flex-wrap">
        <button class="action-btn bg-emerald-500 hover:bg-emerald-600" onclick="toggleStatus(${job.id}, 'interview')">INTERVIEW</button>
        <button class="action-btn bg-red-500 hover:bg-red-600" onclick="toggleStatus(${job.id}, 'rejected')">REJECTED</button>
      </div>
    `;
    container.appendChild(card);
  });

  totalCount.textContent = jobs.length;
  interviewCount.textContent = jobs.filter(j => j.status === "interview").length;
  rejectedCount.textContent = jobs.filter(j => j.status === "rejected").length;
  tabCount.textContent = `${filtered.length} jobs`;
}

function toggleStatus(id, target) {
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  job.status = job.status === target ? "pending" : target;
  render();
}

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => {
      b.classList.remove("bg-blue-600", "text-white", "border-blue-800");
      b.classList.add("text-gray-600");
    });
    btn.classList.add("bg-blue-600", "text-white", "border-blue-800");
    activeTab = btn.dataset.tab;
    render();
  });
});
render();
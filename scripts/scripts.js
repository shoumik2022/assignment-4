const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobLabel = document.getElementById("jobLabel");
const noJobsAvailable = document.getElementById("noJobsAvailable");
const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");
let interview = 0;
let rejected = 0;
let currentFilter = "all";
function updateCounts() {
    const jobCards = document.querySelectorAll(".job-card");
    const totalJobs = jobCards.length;
    totalCount.innerText = totalJobs;
    jobLabel.innerText = totalJobs + " jobs";
    if (totalJobs === 0) {
        noJobsAvailable.style.display = "block";
    } else {
        noJobsAvailable.style.display = "none";
    }
}

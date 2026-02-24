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
function filterJobs(type) {
    currentFilter = type;
    const jobCards = document.querySelectorAll(".job-card");
    jobCards.forEach(card => {
        const status = card.querySelector(".applied-btn").innerText;
        if (type === "all") {
            card.style.display = "block";
        }
        else if (type === "interview") {
            card.style.display = status === "INTERVIEW" ? "block" : "none";
        }
        else if (type === "rejected") {
            card.style.display = status === "REJECTED" ? "block" : "none";
        }
    });
  [allBtn, interviewBtn, rejectedBtn].forEach(btn => {
        btn.classList.remove("btn-active");
    });
    if (type === "all") allBtn.classList.add("btn-active");
    if (type === "interview") interviewBtn.classList.add("btn-active");
    if (type === "rejected") rejectedBtn.classList.add("btn-active");
}
document.querySelectorAll(".interview-btn").forEach(button => {
    button.addEventListener("click", function () {
        const card = button.closest(".job-card");
        const statusBtn = card.querySelector(".applied-btn");
        if (statusBtn.innerText === "NOT APPLIED") {
            statusBtn.innerText = "INTERVIEW";
            statusBtn.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]");
            statusBtn.classList.add("bg-green-100", "text-green-600");
            interview++;
            interviewCount.innerText = interview;
            filterJobs(currentFilter);
        }
    });
});
document.querySelectorAll(".reject-btn").forEach(button => {
    button.addEventListener("click", function () {
        const card = button.closest(".job-card");
        const statusBtn = card.querySelector(".applied-btn");
        if (statusBtn.innerText === "NOT APPLIED") {
            statusBtn.innerText = "REJECTED";
            statusBtn.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]");
            statusBtn.classList.add("bg-red-100", "text-red-600");
            rejected++;
            rejectedCount.innerText = rejected;
            filterJobs(currentFilter);
        }
    });
});
document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", function () {
        const card = button.closest(".job-card");
        card.remove();
        updateCounts();
        filterJobs(currentFilter);
    });
});
allBtn.addEventListener("click", () => filterJobs("all"));
interviewBtn.addEventListener("click", () => filterJobs("interview"));
rejectedBtn.addEventListener("click", () => filterJobs("rejected"));
function filterJobs(type) {
    currentFilter = type;
    const jobCards = document.querySelectorAll(".job-card");
    let visibleCount = 0;
    jobCards.forEach(card => {
        const status = card.querySelector(".applied-btn").innerText;
        if (type === "all") {
            card.style.display = "block";
            visibleCount++;
        }
        else if (type === "interview") {
            if (status === "INTERVIEW") {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        }
        else if (type === "rejected") {
            if (status === "REJECTED") {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        }
    });

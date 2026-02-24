const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobLabel = document.getElementById("jobLabel");
const noJobsAvailable = document.getElementById("noJobsAvailable");
const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");
let currentFilter = "all";
function updateDashboard() {
    const jobCards = document.querySelectorAll(".job-card");
    let total = jobCards.length;
    let interview = 0;
    let rejected = 0;
    jobCards.forEach(card => {
        const status = card.querySelector(".applied-btn").innerText;
        if (status === "INTERVIEW") interview++;
        if (status === "REJECTED") rejected++;
    });
    totalCount.innerText = total;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
}
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
    jobLabel.innerText = visibleCount + " jobs";
    noJobsAvailable.style.display = visibleCount === 0 ? "block" : "none";
    [allBtn, interviewBtn, rejectedBtn].forEach(btn =>
        btn.classList.remove("btn-active")
    );
    if (type === "all") allBtn.classList.add("btn-active");
    if (type === "interview") interviewBtn.classList.add("btn-active");
    if (type === "rejected") rejectedBtn.classList.add("btn-active");
}
document.querySelectorAll(".interview-btn").forEach(button => {
    button.addEventListener("click", function () {
        const card = button.closest(".job-card");
        const statusBtn = card.querySelector(".applied-btn");
        const currentStatus = statusBtn.innerText;
        if (currentStatus !== "INTERVIEW") {
            statusBtn.innerText = "INTERVIEW";
            statusBtn.className = "applied-btn bg-green-100 text-green-600";
        }
        updateDashboard();
        filterJobs(currentFilter);
    });
});
document.querySelectorAll(".reject-btn").forEach(button => {
    button.addEventListener("click", function () {
        const card = button.closest(".job-card");
        const statusBtn = card.querySelector(".applied-btn");
        const currentStatus = statusBtn.innerText;
        if (currentStatus !== "REJECTED") {
            statusBtn.innerText = "REJECTED";
            statusBtn.className = "applied-btn bg-red-100 text-red-600";
        }
        updateDashboard();
        filterJobs(currentFilter);
    });
});
document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", function () {
        const card = button.closest(".job-card");
        card.remove();
        updateDashboard();
        filterJobs(currentFilter);
    });
});
allBtn.addEventListener("click", () => filterJobs("all"));
interviewBtn.addEventListener("click", () => filterJobs("interview"));
rejectedBtn.addEventListener("click", () => filterJobs("rejected"));
updateDashboard();
filterJobs("all");
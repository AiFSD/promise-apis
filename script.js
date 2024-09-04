document.addEventListener("DOMContentLoaded", () => {
  const homeTab = document.getElementById("home-tab");
  const githubTab = document.getElementById("github-tab");
  const questionsTab = document.getElementById("questions-tab");
  const contestsTab = document.getElementById("contests-tab");
  const homeContent = document.getElementById("home-content");
  const content = document.getElementById("content");
  const questionsContent = document.getElementById("questions-content");
  const contestsContent = document.getElementById("contests-content");

  function showContent(sectionToShow) {
    homeContent.classList.add("d-none");
    content.classList.add("d-none");
    questionsContent.classList.add("d-none");
    contestsContent.classList.add("d-none");

    sectionToShow.classList.remove("d-none");
  }

  homeTab.addEventListener("click", () => {
    showContent(homeContent);
  });

  githubTab.addEventListener("click", () => {
    showContent(content);
    fetch("https://api.github.com/users/github/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log("GitHub Data:", data);
        content.innerHTML = ""; 
        data.forEach((repo) => {
          const repoDiv = document.createElement("div");
          repoDiv.className = "card mb-3";
          repoDiv.innerHTML = `
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">${repo.description || "No description"}</p>
            </div>
          `;
          content.appendChild(repoDiv);
        });
      })
      .catch((error) => console.error("Error fetching GitHub data:", error));
  });

  questionsTab.addEventListener("click", () => {
    console.log("Programming Questions tab clicked"); 
    showContent(questionsContent);
    fetch(
      "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Stack Overflow Data:", data);
        questionsContent.innerHTML = "<h2>Programming Questions</h2>"; 
        if (data.items) {
          data.items.forEach((question) => {
            const questionDiv = document.createElement("div");
            questionDiv.className = "card mb-3";
            questionDiv.innerHTML = `
              <div class="card-body">
                <h5 class="card-title">${question.title}</h5>
                <a href="${question.link}" class="btn btn-primary" target="_blank">View Question</a>
              </div>
            `;
            questionsContent.appendChild(questionDiv);
          });
        } else {
          questionsContent.innerHTML += "<p>No questions found.</p>";
        }
      })
      .catch((error) =>
        console.error("Error fetching Stack Overflow data:", error)
      );
  });

  contestsTab.addEventListener("click", () => {
    console.log("Competitive Programming tab clicked"); 
    showContent(contestsContent);
    fetch("https://codeforces.com/api/contest.list?gym=false")
      .then((response) => response.json())
      .then((data) => {
        console.log("Codeforces Data:", data); 
        contestsContent.innerHTML = "<h2>Competitive Programming Contests</h2>";
        if (data.result) {
          data.result.forEach((contest) => {
            const contestDiv = document.createElement("div");
            contestDiv.className = "card mb-3";
            contestDiv.innerHTML = `
              <div class="card-body">
                <h5 class="card-title">${contest.name}</h5>
                <p class="card-text">Start Time: ${new Date(
                  contest.startTimeSeconds * 1000
                ).toLocaleString()}</p>
                <a href="https://codeforces.com/contest/${
                  contest.id
                }" class="btn btn-primary" target="_blank">View Contest</a>
              </div>
            `;
            contestsContent.appendChild(contestDiv);
          });
        } else {
          contestsContent.innerHTML += "<p>No contests found.</p>";
        }
      })
      .catch((error) =>
        console.error("Error fetching Codeforces data:", error)
      );
  });
});

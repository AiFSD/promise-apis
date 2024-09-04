This project is a programming dashboard that provides quick access to various resources and tools for programmers.
It includes sections for GitHub repositories, programming questions, and competitive programming contests.

Features
# GitHub Repositories: View and manage your GitHub repositories.
# Programming Questions: Access a list of programming questions for practice.
# Competitive Programming: Find and participate in competitive programming contests.



JavaScript Functionality
Overview
The JavaScript code in this project is responsible for handling user interactions with the navigation tabs, 
fetching data from external APIs, and dynamically updating the content of the dashboard. 
The script ensures that the correct content is displayed based on the user’s navigation choice.

File
script.js: Contains the JavaScript code that drives the dynamic functionality of the dashboard.
Functionality
DOM Content Loaded Event

The script listens for the DOMContentLoaded event to ensure the DOM is fully loaded before running the JavaScript code.
Element References

The script selects key HTML elements for interaction:
Navigation tabs (home-tab, github-tab, questions-tab, contests-tab).
Content sections (home-content, content, questions-content, contests-content).
showContent Function

This function hides all content sections and displays the specified section. It uses Bootstrap's d-none class to control visibility.
Navigation Tab Event Listeners

Home Tab (home-tab):
Displays the home content section and hides the other sections.
GitHub Tab (github-tab):
Fetches a list of repositories from the GitHub API and displays them in the content section.
URL: https://api.github.com/users/github/repos
Each repository is displayed with its name and description.
Programming Questions Tab (questions-tab):
Fetches the latest programming questions from Stack Overflow and displays them in the questions-content section.
URL: https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow
Each question is displayed with its title and a link to view the question on Stack Overflow.
Competitive Programming Tab (contests-tab):
Fetches information about upcoming competitive programming contests from the Codeforces API and displays them in the contests-content section.
URL: https://codeforces.com/api/contest.list?gym=false
Each contest is displayed with its name, start time, and a link to view the contest on Codeforces.

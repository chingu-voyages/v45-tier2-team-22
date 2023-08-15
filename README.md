# voyage-project-tier2-fireball

## Table of Contents

- [Overview](#overview)
- [General Instructions](#general-instructions)
- [Requirements & Specifications](#requirements-specifications)
- [Acknowledgements](#acknowledgements)
- [About Chingu](#about-chingu)

## Overview

[Meteorite strikes](https://rpubs.com/ag1712/1059267) occur when the orbit of a
meteorite travels close enough to the Earth to be captured by its gravity field.
The U.S. National Aeronautics & Space Administration
(NASA) maintains a dataset of all known (>45K) meteorite strikes and sponsors research
on these events.

![21st Century Meteorite Strikes](./assets/21st_century_meteorite_strikes.png)

Your Chingu Voyage team will be using this data to create an app that will help
anyone interested in these events explore this data in novel ways. Your app will
summarize this data and will allow users to select subsets of it for more
detailed analysis.

This will provide you with an opportunity to build Web Development experience
dealing with large volumes of data, data analysis using statistics, and user
queries.

## General Instructions

This project is designed to be worked on by a team rather than an individual
Chingu. This means you and your team will need to thoroughly read and
understand the requirements and specifications below, **_and_** define and
manage your project following the _Agile Methodology_ defined in the
[Voyage Handbook](https://chingucohorts.notion.site/Voyage-Guide-1e528dcbf1d241c9a93b4627f6f1c809).

As you create this project make sure it meets all of the requirements, but once
it reaches MVP, start implementing the optional features or get creative and
extend it in ways we haven't envisioned. In other words, use the power of
teamwork to make it distinctive and unique.

Take note that we haven't given specific direction on what your UI/UX should
look like. This is another area where you and your team can put your creativity
to work!

## Requirements & Specifications

### What You Need to Do

The following define the minimum requirements and ideas for features you may
implement to enhance this app, if time permits.

#### Structure

- [ ] This is a purely frontend application. No backend is required.
- [ ] You may use any languages, tools, or libraries you prefer when designing and building this app.
- [ ] You should use the [Public API](https://data.nasa.gov/resource/gh4g-9sfh.json) to retrieve meteorite strike data.
- [ ] You may **_NOT_** use AI-base solution generators like GitHub CoPilot.
- [ ] Useful links and resources:
  - [Meteorite Landings and Near Earth Objects](https://rpubs.com/ag1712/1059267)
  - [Public API](https://data.nasa.gov/resource/gh4g-9sfh.json)
  - [Charts.js](https://www.chartjs.org/)
  - [D3](https://d3js.org/)
  - [Nivo](https://nivo.rocks/)
  - [Geoapify](https://www.geoapify.com/reverse-geocoding-api)
  - [Radar](https://radar.com/documentation/maps/geocoding)

#### Styling

- [ ] Surprise us!!! Use your teams creativity to make this app distinctive.
- [ ] Add a footer containing a link to your teams GitHub repo
- [ ] In general, you will find these [UI design principles](https://www.justinmind.com/ui-design/principles) helpful.
- [ ] Recommend using this resource for [clean CSS](https://www.devbridge.com/articles/implementing-clean-css-bem-method/)

#### Functionality

- Your application should be performant. Even though you are working with a data set of over 45K rows users should not detect any noticable lag in response time, regardless of how many rows of data obtained by their searches.

- User can see a landing page containing at least the following components:

  - [ ] Search fields allowing them to customize the detail data display
  - [ ] A scrollable detail data display containing the meteorite strike history based on the search criteria.
  - [ ] A summary metrics component:

- Search Component

  - [ ] User will be able to filter data in the search component by any of the following:
    - Name
    - Year of strike
    - Meteorite composition (`recclass`)
    - Mass range (e.g. low to high, inclusive)
  - [ ] There should be a 'Clear' button that's part of the search component. When clicked this will clear any search criteria and reset the detail data display and summary metrics to use the entire data set.
  - [ ] There should be a 'Search' button in the search component to perform the search based on the user input. When the search finishes the detailed data display should be updated with the filtered results of the search operation.

- Detail Data Display Component

  - [ ] Displays one row for each meteorite strike in the data set.
  - [ ] If no search criteria has been selected then the summary metrics will be for all meteorite strikes.
  - [ ] Include a dynamically calculated column that converts the longitude and latitude of the meteorite strike into a location name using **_any_** reverse geolocation API.

- Summary Metrics Component
  - [ ] Displays the following metrics for the data that has been selected, plus any additional data items you decide to search for:
    - Total number of strikes
    - Average mass
    - Number of strikes by year
    - Number of strikes by meteorite composition (`recclass`).
  - [ ] You must display each data metric graphically using the chart type of your choice.
  - [ ] You may use **_any_** library of graphical components you wish (like Nivo, D3, etc.), or you may create graphics logic yourself.
  - [ ] If no search criteria has been selected then the summary metrics will be for all meteorite strikes.

### Extras (Not Required)

- Search Component
  - [ ] Allow search criteria to be saved across sessions and reselected from a dropdown
  - [ ] Implement an autocomplete option to display matching entries as the user types into search criteria text fields
- Detail Data Display Component
  - [ ] Display a clickable button in the column heading to allow the user to sort in ascending or descending sequence based on that column.
  - [ ] Display a clickable button in the column heading to display a popup dialog with a definition of what data is contained in the column.
- Summary Metrics Component
  - [ ] In addition to the metrics for the selected data, also display these metrics for the entire data set. This should be suppressed if there is no search criteria so the display isn't duplicated.
    - Total number of strikes
    - Average mass
    - Histogram showing number of strikes by year
    - Histogram showing number of strikes by meteorite composition (`recclass`).
  - [ ] If your team includes a Data Scientist get ideas from them on how to create inferences and predictions from this dataset. For example, what's the probability of a meteorite striking a specific country? Or, what's the probability of a meteorite strike at my location (based on Geolocation API)?
- General
  - [ ] Support dark/light mode
  - [ ] Allow the user options for customizing the font and font size

## Acknowledgements

Thanks to NASA and it's partners for open sourcing this data. You can find more
at [NASA Open Data Portal](https://data.nasa.gov/).

## About Chingu

If you aren’t yet a member of Chingu we invite you to join us. We help our
members transform what they’ve learned in courses & tutorials into the
practical experience employers need and want.

<br>
<br>
<br>

# :wrench: initial setup

1. Execute the git clone in the folder you will work on with this commande  
   `git clone https://github.com/chingu-voyages/v45-tier2-team-22.git`

2. Execute npm install  
   `npm install`

3. run the project in your local host  
   `npm start`

<br>
<br>

# :card_index_dividers: The workflow of github

1. Create a new branch for your work. Use 4 basic types of branches: bug, feature, refactor, and style to start with your branch's name. For example: `git checkout -b 'feature/welcome-page'`

- Don't forget to update your branch before pushing any changes
  `git pull origin <branch name>` (branch name should be "development" depending on your necessaries)

2. `git init` (only for the first time of this project)

3. `git add <filename>` or `git add .`(all of the files in your branch)

4. Commit to your branch using keywords: "feat, fix, style, refactor, docs" before your comment `git commit -m "keywords: <comment>"`. For example: `git commit -m "feat: Create footer section"`

5. `git remote add origin https://github.com/chingu-voyages/v45-tier2-team-22.git`(only for the first time of this project)

6. `git push origin <your branch name>`

7. Create a pull request and wait for review from other members.

8. After others have approved your changes, you should merge your branch with the development branch. Be sure to execute the following command to retrieve the most recent changes from the development branch: "git pull." If conflicts arise, be sure to address them promptly.

<br>
<br>
<br>

# useful git commands

- `git log`
  - You can see git logs
- `git checkout -b [branch name]`
  - You can create a new branch
- `git checkout [branch name]`
  - You can move to a different branch
- `git branch -d [branch name]`
  - You can delete your local branch. If you want to force delete, use `git branch -D [branch name]`.
- `git branch`
  - You can add view all existing branches.
- `git add -p`
  - You can commit only some of the changes.
- `git stash`
  - You can save their changes in a stash stack.

<br>
<br>
<br>

# voyage-tasks

Your project's `readme` is as important to success as your code. For
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point -
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx

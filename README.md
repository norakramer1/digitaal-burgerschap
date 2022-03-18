# Digitaal burgerschap Openbare Biblitheek van Amsterdam (Digital citizenship for the Public Library of Amsterdam)

## Table of contents
- [Interface](#interface)
- [Project description](#project-description)
- [User story](#user-story)
- [The API](#the-api)
- [Features](#features)
- [Install](#install)
- [Checklist](#check-list)
- [License](#license)

## Interface
![OBA Single Page App interface](https://github.com/norakramer1/project-1-2021/blob/main/spa/OBA/static/img/oba-screenshot.png?raw=true)

## Project description
This project is a Single Page Application using an API provided by the Public Library of Amsterdam. The goal of the app is making it easier for elderly citizens of Amsterdam to find, fill in and send digital documents to the municipality of Amsterdam. The API provides Activities they can attend to get help with these tasks. 

## User Story Digitaal Burgerschap (digital citizenship)

> As an older citizen, I want to learn how to find, complete and send digital forms from the municipality, in order to manage the digitization of society.

## The API
Besides Activities the API contains information about their entire collection of books. Some of the data you can work with is: title, description, cover-image, subject(s) of the book, authors, publishing dates and even availibility. 

## Features
Well, this is where I ran into some issues. My original plan was to organize the dates of the events better. So that elderly people where able to find some help with these digital tasks easier. I wanted a list of dates, times and location for every meeting, and eventually be able to filter. the issue is that the only time, location and date data comes out of the API like this `OBA Slotermeer2022-03-17T14:00:00Z2022-03-17T16:00:00Z`. I tried slicing it and eventually got just the date, backwards. I tried to `map` over the array and change the dates but sadly ran out of time. 

The app has only one feature at the moment. You can select one of two Activities 'Informatiepunt Digitale Overheid' and 'Eerste Hulp Bij Online' and see the upcoming dates for those activities in a list.

## Install
1. Clone this repo
2. Get your own API key and secret key from OBA [Openbare Bibliotheek van Amsterdam](https://www.oba.nl/).
3. Add API keys to the variables `key` and `secret`
4. Run a local server using localhost:'port' specefically
5. Ask temporary acces from the API (you will see a link to it as a warning message in the browser)
6. Start using the project!

## Checklist
- Filter and sort dates and locations
- Add states
- Use staging API to find additional learning materials and add to app
- Improve usability

## License 
This project uses the [MIT](https://github.com/norakramer1/digitaal-burgerschap/blob/main/LICENSE) license
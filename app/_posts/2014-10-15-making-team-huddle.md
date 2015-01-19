---
layout: post
title:  "Team Huddle"
date:   2014-10-15 11:09:38
categories: "works"
description: "A project management app I prototyped to improve the workflow of digital marketing agencies."
img:
  thumb:  teamhuddle-dash.png
---
# The Idea
There are a lot of things that just can't be organized using spreadsheets and generic content management systems. At the digital marketing agency where I used to work, we we're trying to track lots of related data, but despite our best efforts, the organization of it was an impenetrable mess. After looking at a bunch of tools that were either a) too generic or b) overcomplicated for our needs, I decided to try my hand at building a custom content management system for tracking our tasks and outreach activities. 

## The App
This project was a big learning experience because it was the first major project using a relational database and Ruby on Rails. Although Rails is daunting at first, the magic of *"convention over configuration"* when writing an application back end quickly became apparent. 

The app was basically a way to track:
a) which users had which tasks (and what the progress of each task was)
b) the assets (such as websites or directory listings) that belong to each client
c) the outreach activity done for each client. This data was correlated with the progress of each user's tasks.

## Building it
It was easy enough setting up CRUD (Create, Read, Update, Delete) interfaces for all these key functionalities. As it was my first Rails project, I steered away from using Gems/Plugins and implemented things like user authentication by hand. To make the interface more usable I added some nifty jQuery and AJAX updating to make using the CMS a breeze for our team. I also experimented with providing an API for third party tools and spreadsheet import/export functionality because we had a lot of spreadsheets sitting around with duplicated and fragmented data.

In the end, it wasn't the right time for the agency to invest in building out and maintaining a custom tool, but it was a great project to learn Ruby on Rails!
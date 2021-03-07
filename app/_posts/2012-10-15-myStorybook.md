---
layout: post
title: "My Storybook"
date: 2222-10-16 11:09:38
categories: "works"
permalink: :title
description: "I co-founded a startup for students and teachers to make and print their own storybooks. Now our community of authors have written over a million storybooks!"
img:
  thumb: mystorybook-lg.jpg
---

# The Idea

[MyStorybook.com](https://www.mystorybook.com) is a platform for making children's storybooks that was simple enough for kids and teachers.

<img src="{{ site.url }}/images/posts/mystorybook-lg.jpg" class="feature-image" width="100%" alt="my storybook preview">

Between the design, full stack development, and marketing strategy, it was a pretty huge undertaking. Since we launched, our community has grown organically to hundreds of thousands of users and over a million stories. We've also done some work to help teachers adopt the tool in their classrooms, and in 2015 we were given the award for “[best website for teaching and learning](http://www.ala.org/aasl/standards/best/websites/2015)” from the American Association of School Librarians.

<img src="{{ site.url }}/images/posts/mystorybook-lesson-modal.png" class="feature-image" alt="my storybook preview">

## A Tour of MyStorybook.com

When you go to [_My Storybook_](https://www.mystorybook.com/books/new/), you can add custom characters, images, text, and drawings. My Storybook is a blank canvas for creativity, and teachers around the world have used it for a huge variety of creative writing projects.

Although we have some cleaner designs that haven't been built out, the design has gone through a couple iterations and has achieved a good conversion rate for new users, combined with a high average of time spent writing stories.

## The Tech Stack

My Storybook was built on a fairly simple tech stack that has incurred very low maintenance cost over its years of operation.

When I started the concept, front end frameworks were not as widely adopted and vanilla javascript + jQuery seemed like the most obvious choice for building the site, but in retrospect I've looked into refactoring the front end using a javascript framework to enable quicker development and more delightful interactions.

Using Ruby on Rails along with with Heroku's PAAS hosting was a good decision as a startup, since it is relatively easy (and FAST) to get up and running with user authentication, administrative capabilities, Stripe for payment processing, etc.

### Marketing & SEO

Despite not spending nearly as much time as I would have liked to so far on the digital marketing side of things, the site was architected with SEO in mind, and we rank for all the search terms that we targetted in our initial keyword research.

Using Ruby on Rails with Heroku's hosting for the back end was definitely a good decision, since was is relatively easy to get up and running with user authentication, administrative capabilities, stripe for payment processing, etc.

#### Bootstrap is probably overkill

## My Storybook 2.0?

In my free time I've also taken a step back and started redesigning the site with a new strategy based on the state of the industry, our metrics, and the research we gathered. In particular, we're solving some problems around long term user retention, classroom integration, and some usability issues stemming from the site's architecture.

<img class="feature-image" src="{{ site.url }}/images/mystorybook-preview.png" width="50%">

Although MyStorybook.com is still profitable and growing, it is mostly in maintenance mode. There's always more to do, but it felt rewarding to launch a large website with such positive outcomes.

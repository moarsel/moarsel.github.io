---
layout: post
title:  "My Storybook"
date:   2014-10-16 11:09:38
categories: "works"
permalink: :title
description: "I co-founded a startup for students and teachers to make and print their own storybooks. It has been a great learning experience to design, develop, and market our feature-rich book making tool."
img:
  thumb:  mystorybook-lg.jpg
  large:  mystorybook-lg.jpg
---

# The Idea

[MyStorybook.com](https://mystorybook.com) is a platform for making and printing children's storybooks. Although the idea came up in 2013, over the summer of 2014 I built out most of the functionality as an experiment in building a service that was simple enough for kids and teachers to use and enjoy. Between the design, front end development, back end development, and marketing strategy, it was a pretty huge undertaking for a solo developer. While the project is still ongoing, I'm happy to say that in many ways it has been successful.

## A Tour of MyStorybook.com


I wanted the onboarding process for new users to be as easy and enticing as possible. By now we've iterated the design a couple times and have achieved a fairly low bounce rate for new users, and very high average time spent on the site.

When you go to [*My Storybook*](https://www.mystorybook.com/books/new/), you can start a new book right away without signing up. New users are brought through a tutorial that shows them how to use the most important tools right away. 

#### Gamifying children's apps

We could have "gamified" the storywriting process more, and it would probably improve our conversion rate, but at the end of the day we cared more about making a useful tool for children to explore storytelling in their own way. Overly gamified children's apps like Candy Crush might be fun for a while but they go against the Montessori philosophy of letting children guide their own learning. 

Since our audience includes teachers, parents, and students, it is important for us to gain their trust by being open and straightforward with issues like gamification, privacy, and safety.

## The Tech Stack

On the technology side of things, I started by building my own HTML5 canvas library for editing stories, but quickly discovered that [Kangax](https://twitter.com/kangax) had built a more robust, fully featured canvas library that already did 90% of what I needed. When I started, jQuery seemed the most obvious choice of javascript library, but several months later, I'm thinking about refactoring the front end using Backbone to help organize the increasingly complex codebase.

Using Ruby on Rails with Heroku's hosting for the back end was definitely a good decision, since was is relatively easy to get up and running with user authentication, administrative capabilities, stripe for payment processing, etc. 

#### Bootstrap is probably overkill

One thing that we did to give us a competitive edge was to make our website responsive so that students can use it on tablets. We used Twitter's bootstrap framework to get up and running quickly. Several months later, it feels like bootstrap is now adding unnecessary complexity and weight to the code, but it was definitely valuable while creating our minimum viable product. To mitigate the messy code that bootstrap creates, I was able to use the Sass version of bootstrap to pull a lot of the styling concerns out of the HTML markup (bootstrap puts the responsive grid declarations in inline html classes by default).

## Marketing & SEO

Despite not spending nearly as much time as I would have liked to so far on marketing and SEO, the site architecture was built with SEO in mind, and we are beginning to rank for all the search terms that we targetted in our initial keyword research. We outrank certain competitors on many keywords, and we're climbing the rankings on search terms like "make books online".

## Reception

MyStorybook.com is still continuing as a side project, with my fiancé taking over the marketing and community management but the minimum viable product has been very well received, and recent iterations of the design have improved usability significantly. 

The education technology community has been very positive, and many schools around the world are really enthusiastic about the site. Ed Tech industry leaders such as [Larry Ferlazzo](https://twitter.com/Larryferlazzo) [Richard Byrne](https://twitter.com/rmbyrne) reviewed the app [here](http://larryferlazzo.edublogs.org/2014/09/09/my-storybook-is-a-new-free-good-site-for-students-to-write-online/) and [here](http://www.freetech4teachers.com/2014/09/mystorybook-good-platform-for-creating.html).


There's always more to do, but it feels great to launch such a big website and get a positive reaction!
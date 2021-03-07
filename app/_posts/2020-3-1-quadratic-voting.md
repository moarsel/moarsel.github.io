---
layout: post
title: "Co-Up: Quadratic Voting in Home Ownership Associations"
date: 2020-10-15 11:09:38
order: 3
categories: "works"
description: "Designed and built an application to make the 'quadratic voting' attractive and intuitive for communities who want to improve their self-governance."
img:
  thumb: co-up.png
---

## Background

Co-Up was the winner of the GitxChange hackathon on “[Open-Source Package For Quadratic Funding And Voting In Ownership Associations](https://gitcoin.co/issue/RadicalxChange/GitxChange/1/100023819)” in June 2020.

Check out ([the Github repository](https://github.com/moarsel/co-up), or the [live demo](https://master.d37f8su7ed1a90.amplifyapp.com/)

The hackathon challenge was scoped to address the needs of specific ownership associations (such as Home Owner Associations). By focusing on the problems of these real world institutions, we are learning how some of the abstract ideas from RadicalxChange can be applied in practical settings.

# Co-Up

Co-Up takes a pragmatic approach that meets organizations where they are today (e.g. using fiat currency instead of cryptocurrency), and is subject to change based on feedback (especially feedback from people who are underserved by status quo solutions).

The problem space that Co-Up seeks to address is expansive and relatively unexplored, and there is lots of room to improve upon the status quo. Co-Up’s competition is traditional [association management software](https://en.wikipedia.org/wiki/Membership_software) as well as more traditional governance procedures that are used by associations, such as [Robert’s Rules of Order](https://en.wikipedia.org/wiki/Robert%27s_Rules_of_Order#:~:text=The%2012th%20and%20current%20edition,book%20was%20published%20in%202020.).

## Design

The fun part of this design process was playing around with multiple ways of doing the quadratic funding voting mechanism. How can we make quadratic price increases as intuitive as traditional one-person-one-vote?

<img src="{{ site.url }}/images/voting-iteration.png" class="feature-image">

I took a lot of inspiration from video game design, which has much more complex mechanics, but makes them fun (and even addictive...).

<img src="{{ site.url }}/images/video-games.png" width="340px">

<video controls autoplay muted src="{{ site.url }}/images/vote-micro-interaction.mp4" class="feature-image" >

Here's another quick concept:

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" class="feature-image" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FoGpPhZqV3peVKvbv6MLeOe%2FQuadratic-voting%3Fnode-id%3D2%253A110%26scaling%3Dmin-zoom" allowfullscreen></iframe>

## Product thesis

Although the current version of Co-Up does not meet the lofty long term goals, future versions could outperform competing products and processes in terms of fairness, inclusivity, transparency, and barriers to entry.

The first category of problem that Co-Up seeks to help its users with is the unfairness of traditional decision making processes. The problems with one-person-one-vote and majoritarian decision making are [well documented](https://chicagounbound.uchicago.edu/cgi/viewcontent.cgi?article=1649&context=law_and_economics) in the RadicalxChange community. The initial Co-Up prototype implemented a form of quadratic voting that partially solved the unfairness problem. However, one theme of the feedback on the app was the lack of clarity about how to use the voting mechanism (who should be included? How often? What type of proposal can be submitted, and by whom?). Voting doesn’t happen in a vacuum, but in the context of an agreed upon deliberation and decision making process.

_Robert’s Rules of Order_ are the most common codification of a group decision making process, and have been refined over [12 editions and 144 years](https://en.wikipedia.org/wiki/Robert%27s_Rules_of_Order#Changes_between_editions). Despite the maturity of this framework, there are several [opportunities for improvement](http://kronosapiens.github.io/blog/2019/05/08/against-voting.html) in this process. Namely, Robert’s rules assume a process of majoritarian decision making, then proceed to bake in several kludges to protect [the rights of minorities](https://en.wikipedia.org/wiki/Principles_of_parliamentary_procedure#Minority_rights) (but only in certain scenarios deemed important enough, such as introducing new proposals). Our goal with Co-Up is not necessarily to codify a complete replacement to Robert’s rules, but to embed quadratic voting within a robust decision making process that is consistent and clear.

The second category of problem Co-Up addresses is the exclusivity of traditional governance processes. By default, institutions that follow procedures like Robert’s rules of order exclude people by being inaccessible, inwardly focused, and opaque.

The system of rules is inaccessible due to the complexity and lack of plain language. This necessitates a certain level of education and background as a prerequisite to participation. Co-Up aims to dramatically simplify a subset of decision making processes by using plain language, and intuitive user interface design. The initial prototype made quadratic voting slightly more user friendly, but more design work is needed to make it more understandable and useful in context.

Traditionally, when boards make decisions, the format is inherently closed to the outside world, excluding valuable input. People may recognize the need to get outside input into decisions (and association software often has the ability to conduct opinion polls) but group input is not baked into the process, and it’s typically easier to skip that step. The feedback on the Co-Up prototype was that decision making bodies need to be able to make decisions in private as well as in public. In the future, it will be easier to open up input from outside of a group by default, but to also allow for internal decision making where necessary. The goal is to be able to layer multiple levels of decision making in a way that feels intuitive and happens organically.

Traditional decision making processes also tend to lack transparency. There is an opportunity for Co-Up to create a more transparent process by default. In contrast to traditional “meeting minutes”, a digital decision making process automatically records key decisions, and the results can be more easily publicized.

The last category of problem that Co-Up can help solve is the high barrier to entry when forming a governing body. There is a high logistical and financial cost when setting up sustainable group governance, limiting the number of groups that can form. A comparison can be made to other software platforms that lower start up costs, and subsequently increase the size of a given market (e.g. [Patreon](patreon.com), [Substack](https://substack.com/), and [Open Collective](https://opencollective.com/)).

Like traditional association management software, Co-Up can lower the costs of managing an association by providing membership management, fundraising, and collaboration tools. The current Co-Up prototype is limited to a single group within an organization, but designing a federated model will allow for more flexible and organic group formation. In the future, empowering these groups with fundraising capabilities and API integrations will enable Co-Up to enable more new organizations to proliferate.

## Next steps

The prototype was an experiment aimed at smashing these high level goals into our current reality to see what happened. Our user feedback shows that there is a long way to go but the playfulness and clarity of th prototype does show that it is possible to distill quadratic voting into a form that is at least understandable and intriguing to communities.

Although core features still need to be added, I'm still exploring the problem space with an eye on finding product-market fit. I believe we’re still early stages of this exploration, and the more real world examples we can test, the better chance we have of turning the ideas into reality.

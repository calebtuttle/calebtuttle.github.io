---
layout: post
title: Salience Maps of Affordances - Potential Applications in Psychology
---
# Saliency Maps of Affordances - Applications in Psychology

### Abstract
[This abstract makes the paper only kind of interesting. Go bigger: "saliency map of affordances" applies to all study of affordances (i.e., all perception/action).]
[No. Actually just stick with personality.]

The concept of a "saliency map of affordances" is mentioned in computer vision studies. However, to my knowledge, the concept has no mentions in the psychology [TODO: psychology of???] literature. This paper introduces the idea of a saliency map of affordances into personality psychology. I argue that personality should be defined not in terms of traits but in terms of saliency maps of affordances. I also explore other potential uses of the concept of saliency maps of affordances for psychology.

<hr/>

Abstract

I. Introduction.
    a. Personality theory is not detailed enough.
    b. Define "affordance" (including mental affordances)
    c. Define salience map
    d. My proposal: salience map of affordances
II. Methodology. How do we study physical and mental affordances?
    a. Language (i.e., big data text-mining with ML)
    b. Physiological markers (e.g., eye-tracking, long-term: reading minds/subvocalization, recording of potentiation)
III. Models and Simulations
    a. We could model this view with Active Inference [can we actually?!]. In the POMDP, the human agent's curiosity is triggered by different things. There are two ways we can thus differentiate agents. Either (a) each agent is in a different state space, or (b) each agent is in the same state space but is differently affected by the same states. These would be mathematically equivalent, I think. The difference is just where the mathematical difference is located. Either the numeric difference is in the state space (a), or the numeric difference is a result of operations within the policy function (b). 


## Introduction
### [Personality theory (i.e., Big Five) isn't detailed enough.]
[TODO]

### Saliency Map of Affordances
#### Affordance
[TODO]
From ([McClelland 2019](http://wrap.warwick.ac.uk/116500/2/WRAP-mental-affordance-hypothesis-McClelland-2019.pdf)): 
> "Affordances are opportunities for action. A teapot, for example, has the property of being grippable. When a subject grips the teapot, she exploits this affordance. The concept of affordances, introduced by the ecological psychologist J.J. Gibson (1966), has been applied extensively across a range of disciplines." 

#### Saliency map
[TODO]
From ([Niebur 2007](http://www.scholarpedia.org/article/Saliency_map)):
> The Saliency Map is a topographically arranged map that represents visual saliency of a corresponding visual scene. 

Example (of a salience map used in an ML application):
![image](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210722235025/Saliency-maps-generated-using-Grad-CAM-Grad-CAM-and-Smooth-Grad-CAM-respectively_W640.jpg)

#### Saliency map of affordances
[TODO: Make a really strong argument for the existence of affordance saliency maps!]
From a "menu" of affordances, some are more salient than others. We might say some affordances have greater weight than others. 

A number of factors can modulate the salience of an affordance. For the sake of this paper, the details of these modulations are unimportant. However, the fact that there are such modulations is interesting. On the physiological level, all of these factors are hormonal or neurological. 
[TODO: list physiological modulations of affordance salience]

Given that each person in each situation is presented with a set of affordances, some of which are more salient than others (i.e., have greater weight in the affordance saliency map), and that these affordances are modulated by physiological occurrences, it seems plausible that, even within an identical physical environment, one person's affordance saliency map will differ from anothers insofar as the relevant physiological items differ. In other words, perception of opportunities for action likely differs between people. 

It is an established empircal fact that two people can perceive the same object differently (see [TODO: insert citation for perceiving colors differently or something like that]). Given this, it seems intuitive that two people can unconsciously assign different weights to the same affordances.

I believe my claim is uncontroversial when we only consider affordances for bodily action but becomes more interesting when we consider affordances for mental action. [McClelland (2019)](http://wrap.warwick.ac.uk/116500/2/WRAP-mental-affordance-hypothesis-McClelland-2019.pdf) convincingly argues for the mental affordance hypothesis (MAH), which states that we are sensitive to affordances for mental action. If we extend my claim to mental affordances, then not only do people differently perceive physical affordances, but people also differently perceive conceptual, mathematical, recollective, imaginative, conversational, social, etc. affordances. 

[TODO]
Big idea, stated vaguely: Different categories/dimensions of reality *pop* for different people. I am more apt to notice *x*. You are more apt to notice *y*.




<hr/>

Comment:
Trait personality theories are somewhat naive. By emphasizing traits, these theories downplay the role of change, activity, and motion within personality. We might liken trait theories to an approach to the study of inanimate objects. In this approach, we would describe a bouncy ball by listing its color, size, material, and briefly mention that it can bounce, without describing how it bounces or the circumstances in which it is incapable of bouncing. But the situation with trait personality theories is even worse than this analogy suggests because all the interesting aspects of humans have to do with their bouncing! I want to know how the extravert *extraverts*, how the open person *bes open* ("bes", pronounced "beez", is the same as "is", just more connotative of activity), how the contientious person bes contientious--and why. Traits are static, not dynamic. They might be informative over time periods of weeks, months, or years, but they tell us little about what happens on a timescale of minutes. The "traits" observable on the scale of weeks are the product of actions taken on the scale of minutes and seconds. 

<hr/>

Define these terms:
- Saliency map
  - Review its uses in various fields (especially computer vision)
- Affordance
  - An affordance is a capacity for action. 
    - "The most vivid cases of affordance perception are those in which we experience an action not just as *available* but as positively *solicited*." "Perhaps the metaphor of solicitation can be cashed out in terms of the afforded action being strongly potentiated" (p. 9).
      - Source: [McClelland](http://wrap.warwick.ac.uk/116500/2/WRAP-mental-affordance-hypothesis-McClelland-2019.pdf)
      - NOTE: Maybe we think of the salience map as accounting for this? Not only are certain actions differently available to different people, but certain actions are differently inviting.
        - For example, the screaming baby solicits the mother's response more than a stranger's response.
  - Establish various kinds of affordances:
    - Affordances for physical action
    - Affordances for mental action
      - See: [McClelland, *The Mental Affordance Hypothesis*](http://wrap.warwick.ac.uk/116500/2/WRAP-mental-affordance-hypothesis-McClelland-2019.pdf)

With the above terms in mind, the following claim is meaningful. *Each person has a different saliency map of affordances*. Each person's default saliency map is different.

Why does this matter for psychology? Reframing personality in terms of affordance saliency maps allows for more granular interpretations of the data. It provides a framework for detailed portraits of differences between humans. These detailed portraits can be useful within technologies. For example, they might be used to help students determine what kind of careers they are interested in, what might motivate someone, etc.

I care about this because we can use this concept with technology. We can develop apps and devices that help us cultivate the affordance saliency maps we want, the ones that help us live the best lives.

<hr/>

(I will be saying "perception," but I have in mind the perception-action system. My conception of this system is inspired by--or maybe the same as, idk--the Markov Decision Process model used in Active Inference.)

In the same physical space, different people perceive different things. In the same conversation, different people talk along different conversational vectors. I can look at a book of Aristotle's and will be presented with a world of possible thoughts, of intriguing and inviting thoughts; someone else can look at a painting and will be presented with an equally rich world of possible perceptions. Yet when I look at a painting, I see a canvas with paint, nothing more, and when the other person looks at Aristotle's books, they see pages with words, nothing more. Just as the same environment has different affordances for different animals, so too an environment can contain different affordances for different humans--though this thought deserves more development.

> For me, a book of Aristotle's affords me great pleasure. When I look at it, I see the potential pleasure. I don't just see pages with words. That potential for great pleasure moves me to pick up the book and start reading--I want to see what's around the corner. Crucially, though, I don't even have to read the book to see the possibilities.

My contention is that everyone experiences this with something. For any person, when they look at __, they see a world of pleasurable possibilities. Seeing this world of pleasurable possibilities often leads them to act in pursuit of those possibilities.

The generalized version of this claim is that *each person has a distinct saliency map of affordances*. The average affordance saliency map for the whole population is not entirely noisy because some affordances (e.g., things that can be grasped with hands, social cues) are pressing by virtue of being affordances for humans. However, there are distinctions between individuals; the examples above illustrate this point.

A difference that will be very difficult to measure and is difficult to articulate has to do with affordances of thought. Not all affordances are physical. My environment does not only afford me the opportunity to pick up a book. It also affords me the opportunity to read the book and think thoughts I have never before thought. But affordances of thought apply to more than reading. Memories are affordances of thought. Imaginings are affordances of thought. Even these are on the affordance saliency map. People's attitude toward and perception of these vary. The saliency map of affordances thus includes: physical affordances, social affordances, imagination affordances, memory affordances (and others?).


By the way, note somewhere that emotions/affect/mood and other things (such as drugs, stress, physical touch with close humans) *modulate* perception at small timescales (i.e., seconds, minutes, maybe hours? Whatever timescale the chemicals involved opperate on is the timescale of the modulations).


<hr/>

Big idea: different people perceive different things, and different people perceive the same things differently, and perception translates into action differently between different people.

If we run with this idea, we might be able to arrive at a framework that can accomodate:
- Personality: Different "personality traits" are just differences in *what* people perceive and how their perceptions influence action. 
  - For example, if I see a library, I want to go in and read the books; for someone else, if one of their friends has just gone through a breakup, the person wants to ask questions. I don't care to ask questions in the second instance, and the second person might not care about books in libraries. The emergent "traits" that we lump together and call "personality" arise from, in these examples, how perception influences into action. I--the nerd--*see* a world of intriguing possibilities in books, while the other person *sees* a world of intriguing possibilities in personal relationships, drama, etc. (I don't really know what they see; I am using this person as a contrast to myself). These different perceptions of possibilities and the valence of these possibilities influence action. If we were both "moved" by the same things, we would be the same person.
  - (Comment on personality theory today: Mathematically, current theories of personality are irritatingly reductive and simple. The options are "categorical" and "dimensional" theories. A categorical theory--Myers-Briggs, say--is mathematically just sixteen binary values--16 possible values! A dimensional theory--the big five, say--is just five continuous variables--5 variables! Categorical approaches are basically one-hot encoding. Dimensional approaches are better, but we need more than 5 variables to account for the complex differences between people: we need linear algebra.)
- Creativity: Creativity is synthesis. Creativity increases as facility with the most granular parts of a domain of activity increases. Facility with granular parts of a domain of activity is impossible without first the *perception* of the granular parts of the domain.
  - Easiest example: Painting artists are creative. They grasp, with little effort compared to non-painters, the most granular details. Grasping--perceiving--these details allows them to combine the details. For example, while the painter perceives the smallest differences between shades of color, I have trouble differentiating between certain shapes. My creativity in this domain constists of my ability to combine simple shapes and simple colors--the combinatorics is uninspring: There are probably very, very few possible unique paintings that can be created with my skills. The combinatorics for someone with greater facility with both noticing and creating more granular differences are much more awe-invoking: They perceive colors and shapes with possibly 10x greater accuracy and detail than I do. Their activity of painting becomes a search problem within this enourmous search space. Because they have such facility with every detail and with knowledge of how details combine, they navigate this search space with ease.
    - The same is true for musicians: It is no wonder that Mozart's first "great work" is considered to be one written after he had been composing for over 10 years. He was talented, yes, but he had gained such facility with melody, harmony, dynamics, various instruments, etc. that these tiny different components could bounce around in his head to produce something that seemed so great and new.
  - (This definition of creativity allows us to say that novelty is just the combination of small parts from many different things. Anyone can take Cmaj and combine it with Gmaj. Not anyone can do what Mozart and other great artists did: the subconscious of the non-creative is incapable of producing such granular differences.)
  - (This idea of creativity seems to be analogous to Assembly Theory in chemistry. I'll leave the exploration of this for another day.)
- Autism: If personality is just differences in perception and how perception translates into action, then autism is part of personality.
  - This coheres with Simon Baron-Cohen's claim that "the whole population is shot through with autistic traits" and that the autism spectrum does not end with people we categorize as autistic but instead extends through the whole population.
- Motivation: If perception of different things is differently motivating depending on the person, we have a framework for thinking about how to motivate people.
  - This is helpful for education and school.
- Intelligence: Intelligence is the ability to perceive certain things.
  - This broadens intelligence beyon IQ. "Emotional intelligence" can be included. We can link this to Howard Gardner's multiple intelligences theory--though we will abandon the categorical approach for a linear algebra one.


TODO: Aren't you just describing ActInf (i.e., using ActInf as a framework for a general theory of psychology)?

<hr/>

(Previous title: "Sentimentalism, Personality, and Affordances")

To have a personality is to have a distinct salience map of affordances.

In other words, if two people are in the same situation, we say their personalities are different to the degree that they experience different affordances.

An individual within an ecology experiences a salience map of affordances. For example, as I sit at my desk, I can do many things: continue typing these words, reach for my water bottle, reach for my phone, reach for my pen, reach for one of my notebooks, reach for a piece of gum, open Spotify to continue listening to music, navigate to Wikipedia, etc. But some of these possible actions are more pressing, more salient, and more available to my conscious experience. (In fact, that some actions came to my mind before others suggests that some have more "affordive weight" for me at this moment.) Each affordance has a weight. For any affordance, we say its "affordive weight" is the probability that it will be acted out (actualized).

If two people are placed in the same physical situation and if they are placed in the same place (or nearly the same place) in the physical situation, then we say their personalities differ to the extent that one person's affordive weights differ from another person's affordive weights.

Affordive weights can probably be gauged via language. In some context, one person will use language a certain way and, more importantly, will simply talk about some things more than others. In the same context, another person will talk about other things and in different ways. Sometimes, two people talk about the same things in the same ways: these people are more likely to be friends [or at least more likely to get married: I'm pretty sure there's research suggesting likes attract rather than the opposite].

Physical actions also indicate affordive weights. An introvert stands closer to the walls, an extravert closer to other people.

Tied to physical actions, physiological signals can likely "color" an affordance map. They can influence it. For example, compared to someone whose adrenaline is low, someone whose adrenaline is high will more likely hit back in the event that another individual physically attacks them.

The example of returning a strike brings several things to my mind. First, Aristotle's notion of courage: The courageous person is the person who is courageous for its own sake, the warrior who leads the charge in battle but remains level-headed enough so as to not be rash. Second, sentimentalism: Passions--and therefore hormones--guide behavior more than rational thought, and this is how things ought to be. So, to my current thinking, we have an example that relates to ideas from Aristotle, sentimentalism, physiology, ecological psychology (with affordance), and topped off with a metaphor from AI (i.e., the metaphor of a salience map of affordances).

(If an affordance's weight is the probability of enacting the affordance, then hormones might be said to be weights of affordances' weights.)

Affordances are pragmatic and epistemic. That is, some capacities for action involve physical movement at the level observable to humans and on timescales greater than, say, 1 second (these are pragmatic); other capacities for action involve thought and speech over physical movement (these are epistemic). [Note: tihs characterization only makes claims about the timescale of seconds and minutes. It says nothing about the timescale of months and years or of milliseconds.]



To relate these thoughts to what actually matters in life, we might be able to live better lives by deliberately tuning our affordance salience maps. In fact, Aristotle's conception of a happy life as one consisting of living well and acting well, of being correctly disposed toward feelings, etc. includes, we might say, "tuning of affordance salience maps." But even more interesting is that we might be able to get help from technology. In fact, we already are. You can buy a device that shocks you when you do something wrong. But we often don't need something so violent. We could use eye-tracking to see where our eyes are drawn (are we looking at ads?). We could use eye-tracking with tracking of web activity to see what we spend our time looking at (are we on Wikipedia or Netflix? If both, are we actually reading Wikipedia?). We could use EEG to see how focused we are when we are doing school or working (i.e., is our salience map so intense in one spot that all non-productive affordances are basically imperceptible?). 



Note to self: The idea of an "affordive weight" is present in this paper on autonomous driving: https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9656596. It is also present here as "affordance weight": https://www.google.com/books/edition/Principles_and_Practice_of_Multi_Agent_S/CKP6_JD8msYC?hl=en&gbpv=1&dq=%22affordance+weight%22&pg=PA316&printsec=frontcover. It is probably present in many other AI papers.

---
layout: post
title: Notes on practical science
---

## Introduction
"Just as designing algorithms for computers was originally a subject that fell into the cracks between disciplines--an odd hybrid of mathematics and engineering--so, too, designing algorithms for humans is a topic that doesn't have a natural disciplinary home." -- Brian Christian and Tom Griffiths in _Algorithms to Live By_

I think we can give this topic a home. We might name it "pracitical science" after Aristotle's usage. 

I think the pieces of psychology, economics, and computer science are coming together in a way that might make an extremely in-depth and robust practical science possible. And I think we can get far by subsuming findings from these disciplines under [Aristotle's virtue ethics](https://plato.stanford.edu/entries/aristotle-ethics/).

#### Why it matters
A practical science is important because it would mean we can programmaticly define our goals as individuals and as a species. We could use this programmatic definition to get all our tools/machines/computers on the same page and directed toward _our_ goals.

Goals are in every moment of human action. We get hungry, so the goal of eating forms within us and motivates us to pursue food. I walk to my car with my keys because I want to unlock my door and start my car because I want to drive to a restaurant because I'm hungry--I'm only able to eat because I've layered many goals within the one goal of satiating my hunger. Or we want a different job, so we work on developing certain skills; while developing these skills--programming, say--we develop some before others: we learn syntax, then basic data structures and algorithms, then frameworks and libraries, then complex data structures and algorithms, and then we learn how to put all of these together into a big project. We do all of this for a different job, which we probably want because we want to be happier, to experience more enjoyment at work, and a different job will help us achieve this goal.

So this business of having all our machines work with us toward our goals is important.


## Virtue Ethics in Markov Decision Processes
From Wikipedia:

> A Markov decision process is a 4-tuple (_S_, _A_, _P<sub>a</sub>_, _R<sub>a</sub>_), where:
> * _S_ is a set of states called the state space,
> * _A_ is a set of actions called the action space (alternatively, _A<sub>s</sub>_ is the set of actions available from state _s_),
> * _P<sub>a</sub>_(_s_, _s'_) = Pr(_s<sub>t + 1</sub>_ = _s'_ ∣ _s<sub>t</sub>_ = _s_, _a<sub>t</sub>_ = _a_) is the probability that action _a_ in state _s_ at time _t_ will lead to state _s'_ at time _t_ + 1,
> * _R<sub>a</sub>_(_s_, _s'_) is the immediate reward (or expected immediate reward) received after transitioning from state _s_ to state _s'_, due to action _a_
> ...
> 
> A policy function pi is a (potentially probabilistic) mapping from state space (_S_) to action space (_A_).

This simple formulation of a decision process is a terrific starting point for modelling agents in environments. It's so powerful that it captures features of human decision-making that have been discussed at least since Aristotle. 

The state space (_S_) and the reward function (_R<sub>a</sub>_(_s_, _s'_)) are especially interesting in light of Aristotle's virtue ethics.

* Policy maps to character (and habit)
* _S_ ...
* _A_ ...
* _P<sub>a</sub>_(_s_, _s'_) ...
* _R<sub>a</sub>_(_s_, _s'_) maps to pleasures and pains


## Virtue Ethics and Loss Functions
I want to reflect on a similarity between virtue ethics and AI research. Specifically, there's an analogy between the virtuous ideal talked about by virtue ethicists and the concept of a loss function in machine learning. The [sage](https://en.wikipedia.org/wiki/Sage_(philosophy)) provides an ideal against which we can determine whether we err with respect to virtue just as a model's [loss function](https://en.wikipedia.org/wiki/Loss_function) determines how much the model errs with respect to meeting whatever goal it happens to have.

[Virtue ethics](https://en.wikipedia.org/wiki/Virtue_ethics) locates moral worth in the _character_ of the actor. This differs from [consequentialist ethics](https://en.wikipedia.org/wiki/Consequentialism), which locates moral worth in the consequences of an action, and from [deontological ethics](https://en.wikipedia.org/wiki/Deontology), which locates moral worth in the fulfillment of some duty.

To see the analogy between the work of a virtue ethicist and an AI researcher, we need to answer the question: What does the virtue ethicist do? Since Aristotle provided the first complete account of virtue ethics, let's consider his work to answer our question.

(Before talking about Aristotle's _Nicomachean Ethics_, I should mention: I prefer that you read the whole _Nicomachean Ethics_ rather than anything I've written about it. I cannot do justice to Aristotle's genius. Nonetheless, what follows is some of what I've written about the _Nicomachean Ethics_.)

The first line of Aristotle's _Nicomachean Ethics_ reads:

    Every art and every inquiry, and likewise every
    action and choice, seems to aim at some good, 
    and hence it has been beautifully said that 
    the good is that at which all things aim.

In the rest of the _Ethics_, Aristotle discusses what the good is and how to reach it.

Aristotle observes that everyone agrees happiness is the good. But what is happiness? Is it wealth? status? pleasure? virtue? His answer includes all of these but emphasizes the last one: virtue. The happy person is the virtous person who does not suffer significant misfortunes, has some wealth and status, has good friends, and derives pleasure from being virtuous.

After setting the goal, Aristotle discusses how one might cultivate virtue. His solution involves habit. How do you know which habits to cultivate? You want to cultivate virtuous habits; you want to be temperate, courageous, generous, etc. Each virtue is a middle way between two extremes (e.g., courage is between cowardice and rashness). To achieve the virtue of generosity, for example, Aristotle suggests that a stingy person be extra generous until his character is closer to the middle way of generosity.
(Interestingly, this is analogous to the process of gradient descent whereby a neural net's weights are adjusted--sometimes over-adjusted--so that error is eventually minimized, i.e., the middle way is reached.)

By the end of the _Nicomachean Ethics_, the reader has an outline of what Aristotle considers the ideal human being. Aristotle identified many domains of virtue and indicated what it looks like when one deviates from the virtuous golden mean.

In other words, the _Nicomachean Ethics_ provides a loss function for the human being. A person becomes virtuous by avoiding the extremes, by minimizing error. 

The effects of minimizing error persist in a person just as they do in an artificial neural net. A stingy person who wants to become generous will find it easier and easier to be generous as they perform more and more generous acts. This is analogous to the weights of a neural net, which become increasingly stable as the loss function is minimized.

Another point of contact: Consider the second sentence in the Wikipedia entry for AI:

    Leading AI textbooks define the field as the 
    study of "intelligent agents": any system that 
    perceives its environment and takes actions 
    that maximize its chance of achieving its goals.

AI studies intelligent agents--things which act towards goals within an environment. The AI researcher, then, is someone who crafts things which act toward goals. The successful AI researcher is someone who can clearly articulate an agent's goal and who understands the mechanisms of the agent well enough to guide the agent. This researcher also happens to have the ability to define the agent's mechanisms.

To my ears, this sounds almost like a description of virtue ethics. The virtue ethicist is someone who has identified the ultimate goal for a human, understands the mechanisms of human behavior and psychology, and who uses this understanding to guide the human toward the goal. Unlike the AI researcher, however, the virtue ethicist cannot define a human's biological mechanisms.

The analogy I'm trying to draw is this: Aristotle, in his discussions of virtue and happiness and how to optimize for them, outlines what might be thought of as a human's loss function. Aristotle's ideal gives an individual something against which they can measure themselves and determine how to change direction to minimize error. In fact, if we define AI as the study of how to optimize agents to meet goals (and how to define these goals), and if virtue ethics is the study of identifying and optimizing for an ideal life, virtue ethics is a subspecialty of AI. The agents studied by virtue ethics just happen to be humans.

If this analogy holds, what can virtue ethicists learn from AI researchers and vice versa? Might we be able to codify (in actual code) a human's loss function, the thing which guides one to a good life?

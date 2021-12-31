---
layout: post
title: Notes on practical science
---

## Introduction
I haven't found a good heading for these ideas. "Practical science" is the best I can do for now. I also feel that the ideas here are connectable (e.g., the biology of hunger can be connected to philosophy of action and the philosophy of action connected to psychology of pleasure, to ethics, and to Markov Decision Processes, and all of this seems to be relavent for discussions of forming and automating goals to live the kind of life one wants to live), but due to time constraints, I haven't been able to try to connect them, even if to only see _whether_ they relate to each other in ways it would be fruitful to consider. With that...

I want to consider _pracitical science_ in the context of modern science and AI.

I think the pieces of psychology, economics, computer science, and even biological sciences are coming together in a way that might make an extremely in-depth and robust practical science possible. (We even see parts of a practical science in places such as [the _Huberman Lab_ podcast](https://www.youtube.com/channel/UC2D2CMWXMOVWx7giW1n3LIg).) And I think we can get far by subsuming findings from these disciplines under [Aristotle's ethics](https://plato.stanford.edu/entries/aristotle-ethics/).

A clarification of the Aristotelian sense of "practical science" from the _[Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/aristotle/)_:

> (ii) [Practical sciences] deal with conduct and action, both individual and societal. Practical science thus contrasts with theoretical science, which seeks knowledge for its own sake, and, less obviously, with the productive sciences, which deal with the creation of products external to sciences themselves. Both politics and ethics fall under this branch.

A significant portion of Aristotle's _Nicomachean Ethics_ is dedicated to _psychological_ and _biological_ mechanisms that influence action. Although Aristotle is sometimes referenced in contemporary psychological literature, I don't think the well's run dry--I think we can stil learn from him. We can learn from Aristotle's integration of both _how_ the human being works and _what_ the human being is directed toward (or should be directed toward).

With the amazing work from the sciences, we can upgrade Aristotle's views of mechanisms and better service (and maybe even define) our goals.

#### Why it matters
A practical science is important because it would mean we can programmaticly define our goals as individuals and as a species. We could use this programmatic definition to get all our tools/machines/computers on the same page and directed toward _our_ goals. But creating powerful computers and programmatically instantiating our goals is not the difficulty here. We've done that, for the most part. The greater difficulty is identifying our goals, figuring out what we should actually tell the machines to do. We could frame this as [the alignment problem](https://en.wikipedia.org/wiki/AI_control_problem#Alignment), but the problem of identifying our goals and creating tools to meet those goals is as old artifacts themselves. The alignment problem is just a more pronounced version. Anyway, identifying our goals/values is an urgent one but also an ancient one. The ancient conception of a practical science that identifies humanity's goals and uses understanding of intra-human mechanisms to turn humans toward these goals might benefit us in the 21st century.

Goals are in every moment of human action. We get hungry, so the goal of eating forms within us and motivates us to pursue food. I walk to my car with my keys because I want to unlock my door and start my car because I want to drive to a restaurant because I'm hungry--I'm only able to eat because I've layered many goals within the one goal of satiating my hunger. Or we want a different job, so we work on developing certain skills; while developing these skills--programming, say--we develop some before others: we learn syntax, then basic data structures and algorithms, then frameworks and libraries, then complex data structures and algorithms, and then we learn how to put all of these together into a big project. We do all of this for a different job, which we probably want because we want to be happier, to experience more enjoyment at work, and a different job will help us achieve this goal.

Goals are everywhere, and it would be great to have our machines work with us. (I'm far from the first person to make this claim.)


## Virtue Ethics in Markov Decision Processes

... TOOD: Draw analogy between inverse reinforcement learning and the role of the Stoic sage (which, for Aristotle, seems to be referenced only as "the practically wise person") in virtue ethics ...

From [Wikipedia](https://en.wikipedia.org/wiki/Markov_decision_process):

> A Markov decision process is a 4-tuple (_S_, _A_, _P<sub>a</sub>_, _R<sub>a</sub>_), where:
> * _S_ is a set of states called the state space,
> * _A_ is a set of actions called the action space (alternatively, _A<sub>s</sub>_ is the set of actions available from state _s_),
> * _P<sub>a</sub>_(_s_, _s'_) = Pr(_s<sub>t + 1</sub>_ = _s'_ ∣ _s<sub>t</sub>_ = _s_, _a<sub>t</sub>_ = _a_) is the probability that action _a_ in state _s_ at time _t_ will lead to state _s'_ at time _t_ + 1,
> * _R<sub>a</sub>_(_s_, _s'_) is the immediate reward (or expected immediate reward) received after transitioning from state _s_ to state _s'_, due to action _a_
> ...
> 
> A policy function π is a (potentially probabilistic) mapping from state space (_S_) to action space (_A_).

This simple formulation of a decision process is a terrific starting point for modelling agents in environments. It's so powerful that it captures features of human decision-making that have been discussed at least since Aristotle. 

The reward function (_R<sub>a</sub>_(_s_, _s'_)) and policy (π) are especially interesting in light of Aristotle's virtue ethics.

**Reward function**

The reward function is interesting because it _motivates_ the agent, and Aristotle spends much time thinking about human motivation. We might even say the reward function _moves_ the agent--just like food moves the hungry person. The reward function tells the expected value of a state. States with higher expected values are more motivating, more inviting than states with lower expected values. 

For Aristotle, virtue entails being pleased and pained by the right things. For example, the temperate person enjoys eating just the right amount, not more, not less. The temperate person is moved by the right foods in just the right way. When standing in the kitchen in between the food pantry and refrigerator, the hungry temperate person is moved by the foods that will healthfully satiate them. If, while standing in this kitchen, the possible actions for the temperate person are (1) eat three birthday cakes, (2) eat something that is proper for them specifically at this specific time, or (3) eat nothing, the temperate person will choose (2) and will have zero internal strife about the decision. They will not have to convince themselves to not eat the birthday cakes, and they won't have to convince themselves to eat something. The motivation is baked into their reward function.

And this example brings up a point about Aristotle's hypothetical reward function...

The reward function for Aristotle is more a function of both the action and the state. It might look like this: _R_(_a_, _s_, _s'_) where the action is given much more weight than either state. Why? Because the outcome is important but out of our control, and being a good person should depend more on how we act than on what happens. 

(I also think assigning more value to actions than states is a better way of dealing with uncertainty. By consistently making good decisions, one maximizes one's chances--in every circumstance--of bringing about desirable states, even if there are extremely rare cases in which such an action causes an undesirable state. Valuing states more than actions might be good for an omniscient agent, but... humans aren't omniscient.)


**Policy**

Policy maps to habit, character.


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

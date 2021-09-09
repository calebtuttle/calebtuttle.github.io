---
layout: post
title: Virtue ethics and loss functions
---

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

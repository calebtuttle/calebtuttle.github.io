---
layout: post
title: Notes on the analogy between Aristotle’s potency-activity coupling and functions in programming
---

In English translations, the Greek word _dunamis_ is translated "power," "potency," "potentiality," "ability," etc. The word _energeia_ is most often translated "activity" or "actuality," but Joe Sachs often translates it as "being-at-work" (which is probably the better translation because, for English speakers, it does not present the illusion of being an easily understood term from everyday English). In Aristotle, potency and being-at-work are always coupled. A potency is always a potency _for_ something, and a being-at-work is always an actualization _of some potency_. For example, the potency of my body to move my arm is my body's potency _to move my arm_. When I move my arm, my body's move-arm potency is no longer just a potency but an _active_ capacity, a being-at-work. This potency (as this potency) is not a potency for any other act. Again, potency and being-at-work are coupled.

A potency usually precedes its being-at-work in time. In every instance of being-at-work, there is potency; but there is not being-at-work in every instance of potency.

This potency-activity coupling, and the precedence (in time) of potency to being-at-work is remarkably similar to something computer programmers use all the time: functions. The simplist function is something which has the capacity to act in a certain way and, when invoked, acts in the specified way. Consider f(x) (written in Python):

    def f(x):
        return x + 1

This function encapsulates the _potency_ to add 1 to some specified number. If we invoke the function, the function runs. What is a running function but a being-at-work, an actualization of some potency? Once the function is finished, it goes back to being a mere potency. It is only at work while it's running.

(This description of functions in programming deserves much more space, but I'm going to skip over the details because that's what my mind did when presenting this idea to me.)

We have, then, an analogy between the coupled components of Aristotle's thought (potency and being-at-work) and computer functions. Any potency for an activity _is_ a function.

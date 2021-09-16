---
layout: post
title: Hash tables and Russell's theory of descriptions
---

This is only a loose analogy, but...

Bertrand Russell's [theory of descriptions](https://plato.stanford.edu/entries/descriptions/#RusTheDes) foreshadowed the use of [key-value](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) representations of identity. 

Every web company has a _users_ table where they store data about their users. The table is a key-value store where an identifier (e.g., Socrates#0001) maps to all the data about the person associated with that identifier. 

Socrates' entry in a simple users table might look like this:

{Socrates#0001 :<br />
&nbsp;&nbsp;&nbsp;&nbsp;"philosopher",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"ugly",<br />
&nbsp;&nbsp;&nbsp;&nbsp;{recent_google_search: "how to drink hemlock and not die"}<br />
}

Again, every company does this. And this idea of using a hash table to represent users has likely (maybe?) been around since the idea of a [hash map was discovered in the 1950s](https://en.wikipedia.org/wiki/Hash_table#History).

The fundamental idea is that a username (i.e., identifier) is only a container for the data about the user.

This idea is not far from Russell's conception of the meaning of names, [which he introduced in 1905](https://en.wikipedia.org/wiki/On_Denoting).

For Russell, a name stood for a description. A name is meaningless, empty without a description.

For example, on Russell's view, "Aristotle" does not refer to the guy who wrote the _Nicomachean Ethics_ and who in some possible world did not write the book. "Aristotle" is a stand-in for the descriptions "author of the _Nicomachean Ethics_", "Plato's student", "Alexander's tutor", and so on. 

The word "Aristotle" is like a bucket for descriptions. "Aristotle" denotes only the thing which is described by all the descriptions in the bucket.

A programmer adding Aristotle to a user table might say something similar.




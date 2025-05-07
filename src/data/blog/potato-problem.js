// src/data/blog/potato-problem.js
const post = {
    id: "potato-problem",
    title: "The Potato Problem",
    publication: "Personal Blog, 2025",
    date: "2025-05-07",
    summary: "The optimal amount of cuts to objects such that they're relatively similar weights.",
    content: `
## Cutting Potatoes

I was recently cooking dinner for me and my girlfriend. 
Upon opening a pack of New Potatoes, ready with boiling water, I saw that many of the potatoes were small and many were large.
As a self-professed inexperienced cook, there are few things I know for sure when stepping up to the cooker.
One such thing that I know, is that, when boiling things, you should want them to be all similar shape.

Hence, not wanting to waste any potatoes, I began to cut the larger potatoes in half, until they all seemed about the right size.

This action inspired the mathematical problem, described below, which provided great distraction for me for the rest of the night.

Suppose you have some number of potatoes, and some amount of tolerance in the difference between the sizes of the potatoes. 
What is the minimum amount of cuts (given that we always cut a potato in half) such that you know that the difference between.

## Formalisation 

Let us begin to formalise this:

Suppose you have $n$ objects.

Each of these objects has $x_i$ weight.

You also have some tolerance $\\epsilon$.

You want to ensure that all the difference between the weight of all objects is less than the tolerance $\\epsilon$, that is

$$ \\forall i , j \\in  [1,n] ,|x_i-x_j| \\leq  \\epsilon $$

And the only operation you have is to 'cut an object in half'. e.g:

$$ x_i \\rightarrow \\frac{1}{2} x_i, \\frac{1}{2} x_{n+1} $$

The above notation is a bit clunky. The main idea you should get is that after 'cutting' an object, we get two new objects each with weight half of the original objects weight.

## Proof of Proof

Firstly, let us try to prove that it is _even possible to solve this problem_.

Here I present a 'brute force' solution:

Suppose we can order our objects:

$ x_1,  x_2,  x_2 , \\dots,  x_n \\text{ where } x_n \\geq x_{n-1} \\geq \\dots \\geq x_2 \\geq x_1 $ 

We then know that the maximum difference between objects is:

$x_n - x_1$.

For all $\\epsilon > 0$, there exists a value $k$, such that 

$ (\\frac{1}{2})^k (x_n - x_1) \\leq \\epsilon $.

That is, there is always an amount of cuts such that, when halfing both the smallest and the largest object, the difference between them will be lesser than $\\epsilon$.

If we apply this amount of cuts to every object, then we can guarantee that all of the differences will be lesser than thet greatest difference, and also that this greatest difference will be less than $\\epsilon$.

That is, we have:

$ x_1,  x_2,  x_2 , \\dots,  x_n \\text{ where } x_n \\geq x_{n-1} \\geq \\dots \\geq x_2 \\geq x_1 $ 

Such that 

$\\text{max}(x_i-x_j) \\{\\forall i,j \\in [1,n] \\text{ such that } i > j\\} = (x_n - x_1)$

Hence 

$ \\forall  i,j \\in [1,n],  (x_i - x_j) < (x_n - x_1) $

So 

$ \\forall  i,j \\in [1,n], \\forall k > 1,  (\\frac{1}{2})^k (x_i - x_j) < (\\frac{1}{2})^k (x_n - x_1) $

And, as we previously established that 

$ \\exists k \\text{ such that  } (\\frac{1}{2})^k (x_n - x_1) \\leq \\epsilon $ 

Hence, 

$ \\forall  i,j \\in [1,n], \\forall k > 1,  (\\frac{1}{2})^k (x_i - x_j) < (\\frac{1}{2})^k (x_n - x_1) \\leq \\epsilon$

Okay, great, we have a basic proof that we can always cut the objects in such a way that they are all relatively similar weights. A much more wordy and less mathematical description of the proof we have provided above is that, we should find the maximum difference between objects, find the value of $k$ such that when we half $k$ times, we make this difference less than our tolerance $\\epsilon$, and then apply this many cuts (halfings) to all of our objects.

This seems... non-optimal.

Further, how many cuts are involved?

We cut each object $k$ times. But, remember, each time we cut an object, we produce double as many objects. Cutting one object produces 2, 2 produces 4 etc.

    `
  };
  
  export default post;
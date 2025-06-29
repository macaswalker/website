# An Intuitive Introdution to Diffusion Models

## Where to begin...

> *“The real table, if there is one, is not immediately known to us at all,  
> but must be an inference from what is immediately known.”*  
> — Bertrand Russell, *The Problems of Philosophy* (1912)


Diffusion models have shown great ability across a wide array of tasks: image generation, protein structure and text generation to name a few. But how do they actually work? 

I want to try and show that these models are a natural fit for the problems we are trying to solve. 

Just as convolutions are the intuitive operations for us to consider image analysis, so should be diffusion models for generative models. 

Let us consider a problem. Suppose we are thinking about the image space pertaining to all $32 \times 32$ images of dogs. Suppose further that we restrict this problem, with each image grayscale, and each pixel only allowed to take on a discrete integer value between $0$ and $255$

ATTACH SOME IMAGES HERE

An enhaustive list of all images in this space would be a set images containing $256^{32\times32}=256^{1024}=2^{8192}$ different possible permutations. For comparison, there are roughly $2^{260}$ atoms in the universe.

Let us denote  a singular image as $z$. Formally, this image is part of the set of all matrices: $z \in \mathbb{R}^{32 \times 32}$. Without any loss of generality, we may flatten this matrix, and state that any image in our set can be formalised as a point in $1024$-dimensional space. Hence, $z \in \mathbb{R}^{1024}$.

Suppose we wanted to **generate** one of these images. Genuinely think about this for a moment - what would that look like? Would one begin to draw a dog, as best he could, roughly sketching the nose, the ears, the tongue. What process is occuring here?

This process, that we have learnt to draw an image of a dog, is to follow a set of ascribed "rules". We should have a face, with ears and a tongue, apart from if its a pug etc etc. But how would you rigourously compute these rules? These rules are not explicit; they're learned, abstracted from examples, generalised over time.

We assume, in fact, that there is some underlying **true distribution** of which every image we have ever seen is merely a sample. As Russell states, these images are not absolute objects - but appearances, sense-data. It is from these numerous projections from which the "real" structure is inferred.

So we begin by thinking about these probability distributions. In our example, consider the probability distribution associated with the image space. For each vector in $1024-\text{dimensional}$ space, there will be some likelihood value associated with "how likely this image is a dog".

An important thing to note here therefore, is seemingly, to generate **an entirely new image of a dog**, we merely need to **sample a value from this probability distribution** which has high enough likelihood. The main task of diffusion models, is how to learn this distribution.

> This question is equivalent to: suppose we start with some known probability distribution. How can we learn the process, or transformation, that takes our **known probability distribution** to the **target probability distribution**.

## A More General Formulation...

We wish to be able to generate any object–not just images of dogs–using a formulation. Hence, we suppose we merely wish to sample from $D$-dimensional space. Each individual point from this space, we denote as $z$. Here are some very lenient assumptions:

- We have access to $N$ training points. That is, points from which we _know_ have high likelihood under the target distribution: $z_1, z_2, \dots z_N \sim p_{target}$. Continuing our example, these would be images of dogs of the size $32$ width and $32$ height.
- We have access to a known probability distribution, $p_{init}$, which we can readily sample from (an _extremely_ common choice is the Gaussian, $\mathcal{N}(0, I_D)$). In our example, we have a $1024$-dimensional Gaussian distribution: $\mathcal{N}(0, I_{1024})$)

Hence, we have multi-dimensional probability distributions. We wish to use a process to convert a known probability distribution to our target distribution using _only_ known training samples. This inspires the problem behind diffusion!

## Transforming Between Probability Distributions: An Intutive Feel

We now have a good feel for what our problem entails. We have some **known samples** which we presume to be drawn from our **target distribution**. We have an **initial distribution** from which we can readily draw from. We wish to describe a process through which we may transform our **initial distribution** into our **target distribution** using our **training samples**. 

Taking a step back, let us consider what it may even mean to transformer between probability distributions. Further, what working definition of a probability distribution will best serve us down this path?

A good (intuition pump)(link) for this process would be to imagine a discretised probability distribution, in $2$ dimensions. That is, for any two points $x_1$ and $x_2$, our probability distribution defines a function that produces a value, $p_1 \in [0,1]$.

IMAGE HERE

Now let us consider a different probability distribution, similarly constructed:

IMAGE HERE

To transform $p_1$ into $p_2$, you could imagine considering the value of $x_1$ and $x_2$ in $p_1$ and $x_1$ and $x_2$ in $p_2$ 






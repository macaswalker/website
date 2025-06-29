# Diffusion

Here are my notes, taken from a set of different places, pertaining to diffusion - the class of models widely used in AI4Science and media generation.


They have found a huge amount of success in multiple different avenues, including image generation, protein modelling and text generation.

But what exactly is diffusion? Let us begin with some basics...


## What is diffusion?

At it's core, diffusion about gradually unnoising and noising data - and learning this process. 

### A Long Winded Introduction

Let us consider the different modalities that we wish to generate. What does modalities even mean? We consider here that different modalities offer us different formulations - that is, invariant structure that remain the same whilst their constituent parts change.

Consider a grayscale image, of size $32 \times 32$. 

In each pixel, we are allowed an intensity. This intensity can range, traditionally, from $0 - 255$. Hence, suppose we have any image that fits these constraints - that is, it is grayscale and of size $32 \times 32$. Let us denote this image as $z$, and we may say that this image falls into the space:

$$
z \in \mathbb{R}^{32\times32}
$$

Suppose we wanted to consider _all_ images. For each of our $32 \times32  = 1024$ pixels, we can have a pixel intensity rangnin from $0 - 255$. Hence, we have $256$ options for each pixel. Using the fact that for each of our pixels, we have $256$ options, we have $256^{1024}$ different images in this space, or $2^{8192}$ different images. For scale, there are roughly $2^{260}$ atoms in the universe.

We imagine, quite rightly, that there is some underlying, lower-dimensional manifold, upon which the set of "reasonable" images falls. That is - that image A falls outside of that manifold, and image B is within that [manifold](https://scikit-learn.org/stable/modules/manifold.html) 

We would like to be able to learn that manifold - for many reasons. We can intuitively think of learning the manifold as learning the underlying distribution that produced the image. If we could learn the underlying distribution, we can endlessly sample from this distribution - e.g. unlimited images/proteins/video.

Of course, learning this distribution is incredibly hard. Try and even explain your answer. Describe the distribution that produces an image of a cat without it being circular or leaving out edge cases. 

Diffusion models, are a generative ML model, which attempts to gain an understanding of this distribution, and utilise it for generation.

We will begin our dissection here. Before we continue, for ease of mathematics, we will state, without loss of generality, that all of our modalities (be they image, video or protein folding), are able to flattened from their matrix structure into a vector space.

What this means, according to our previous example, is the process:

$$
z \in \mathbb{R}^{32\times32} \rightarrow z \in \mathbb{R}^{1024}
$$

Hence, we may imagine that all images of the form described previous lie in $1024$-dimensional space, and each image we observe is merely an element of that space. 

Of course, we suppose that some images are _more likely_ to occur from the space. That is, we suppose that there exists some probability distribution that models this space.

Let us denote this generally as $p_{data}$. Formally, therefore, we may say that generating an object is modelled as sampling from this data distribution:

$$
z \sim p_{data}
$$

Whilst we consider our example to be discrete (each pixel may only be between $0 - 255$), we can of course extend this to consider an continuous range of pixel intensities. 

Hence, we have our set up our problem. We have a probability distribution over our object space, and we wish to use it by sampling from this probability distribution. It would be great if we had access to this ground truth - if anyone has it let me know!

Otherwise, we will have to try and attain a decent approximation of such a probability distribution. To do this, we wish to _train_ a _model_ on a a set of _training samples_. Hence, we should continue our formalisation:

We consider a dataset with a finite number of samples:

$$
z_1, \dots , z_N \sim p_{data}
$$


Therefore, we can summarise our formalisation as follows:

We have a set of training points in our object space, which we wish to use to train a model that approximates the probability distribution that produced such points, so that we are able to sample from this probability distribution and _generate new points_.

We have $N$ training points $z_1, \dots , z_N, z \in \mathbb{R}^D$, which we wish to use to train a model $p_{data}$.

TextBox:
Conditional generation:
$$
z \sim p_{data}( . | y)
$$
Hence, we sample from the conditional data distribution.

---

# Flow and Diffusion Models

## Flow Models

Let us consider an equivalence. Suppose we wish to be able to learn the probability distribution that has constructed some vector. We state here, without proof (or confidence) that this process can be equivalently stated as beginning with a known probability distribution, and learning the process through we transform our known probability distribution into the target distribution.

That is, consider we begin with a multi-dimensional Gaussian $\mathcal{N}(0, I_d)$, which we describe as $p_{init}$, and suppose we want to transform this into $p_{data}$, the true underlying probability distribution.

How good a protein is $\approx$ how likely is it under the data distribution that produces the protein?

## An Intro to ODE's

What is the fundamental object of a flow? _a trajectory_.

A trajectory is a function of time, given a time point t, gives you a vector X_t

$$
X: [0,1] \rightarrow \mathbb{R}^D, t \rightarrow X_t
$$

A vector field has a spatial component and time component. We have a vector x at time t, and returns a direction. Gives you directions at every point.

$$
u: \mathbb{R}^D \times [0,1] \rightarrow \mathbb{R}^D, (x,t) \rightarrow u_t(x)
$$

Now let us define an ordinary differential equation (ODE), we can consider it as moving through the trajectory defined by a vector field, pinned to a singular starting point by an initial condition.

$$
\frac{d}{dt} X_t = u_t(X_t), X_0 = x_0 
$$

The flow is a collection of trajectories that follow the ODE. E.g. for every initial conditon, we want this be a solution to our ODE. 

$$
\psi: \mathbb{R}^D \times [0,1] \rightarrow \mathbb{R}^D, (X_0, t) \rightarrow \psi(x_0) \\
\psi_0(x_0) = x_0 \\
\frac{d}{dt} \psi_t (x_0) = u_t(\psi_t(x_o))
$$

Hence, this is very important: **a flow is a collection of solutions to an ODE, each defined by their initial conditions**. 

According the the Picard-Lindelof Theorem, if the vector filed is continuously differentiable with bounded derivatives, then a unique solution to the ode exists. That is, a flow map exists. **For all intents and purposes for machine learning, unique solutions to the ODES/flows exist.**

Let us work through an example. 

### Linear ODE

Suppose we have a simple vector field, defined by 

$$
u_t(x) = -\theta x, (\theta>0)
$$

We wish to find the flow of such a vector field.

We suppose that the flow is given by:

$$
\psi_t(x_0) = \text{exp}(-\theta t) x_0
$$

Without loss of generality, we have that the initial conditon is:

$$
\psi_t(x_0) = \text{exp}(0) x_0 = x_0
$$

and the ODE:

$$
\frac{d}{dt} \psi_t(x_0) = \frac{d}{dt} (\text{exp}(-\theta t)x_0) = -\theta \text{exp}(-\theta t)x_0 \\
= -\theta \psi_t(x_0) = u_t(\psi(x_0))
$$

Hence, the flow is given by 

$$
\psi_t(x_0) = \text{exp}(-\theta t) x_0
$$

But - this is not always so easy...

Why don't we just simulate it instead?

The general idea of the Euler form is that we just move along the vector field every small time step.

We now have established what a **flow** model is.

We state that a core aim of generative AI is to transform a initialised probability distribution into a data distribution.

**In a flow matching model, we wish to use an ODE to make this transformation**

Hence:

### Flow Model

We wish to transform $p_{init}$ to $p_{data}$ using an ODE. We will actually use a neural network to approximate this ODE. 

We define our neural network as:

$$
u_t^{\theta}: \mathbb{R}^D \times [0,1] \rightarrow \mathbb{R}^D, \theta: \text{parameters}
$$

We take a random initialisation from our $p_{init}$:

$$
X_0 \sim p_{init}
$$

And simulate our ODE through:

$$
\frac{d}{dt} X_t = u_t^{\theta}(X_t)
$$

What is the goal? The endpoint, $X_1$, has the distribution $p_{data}$.

We model the vector field as a neural network and simulate iuts flow via an ODE solver.

## Diffusion Models

We extend the problems we just discussed, except for SDE's!

Let us define SDE's

### Stochastic Differential Equations

We have a random variable $X_t$, where we use by convention that $(0\leq t \leq 1)$.

Where:

$$
X: [0,1] \rightarrow \mathbb{R}^D, t \rightarrow X_t
$$

The collection and likelihood of these trajectories is a stochastic process.

We also need a vector field, as before: A vector field has a spatial component and time component. We have a vector x at time t, and returns a direction. Gives you directions at every point.

$$
u: \mathbb{R}^D \times [0,1] \rightarrow \mathbb{R}^D, (x,t) \rightarrow u_t(x)
$$

AND we need a diffusion coefficient:

$$
\sigma: [0,1] \rightarrow \mathbb{R}, t \rightarrow \sigma_t
$$

The diffusion coefficient is the injection of randomness/stochasticity into our


A stochastic differential equation:

$$
X_0 = x_0 \text{(initial condition)} \\
dX_t = u_t(X_t)dt + \sigma_t dW_t
$$

The change of $X_t$ is equivalent to the chnage in our vector field plus some random noise.

Hence, we should think of $X_t$ as an ODE but with extra noise.

### But what is $W_t$?

Brownian motion!

We have this definition of Brownian motion, $W = (W_t)_{t \geq 0}$:

- $W_0 = 0$
- Gaussian increments: $W_t - W_s \sim \mathcal{N}(0, (t-s)I_d)$ (given that $(0 \leq s < t)$
- Independent increments: $W_{t_1} - W_{t_0}, \dots W_{t_n} - W_{t_{n-1}}$ are independent for $(0 \leq t_0 \leq \dots < t_n)$

We now have enough tools in our arsenal to describe the $dX_t$ notation.

Describe an ODE in a form that doesn't rely on derivatives:

$$
\frac{d}{dt} X_t = u_t (X_t) \leftrightarrow X_{t+h} = X_t + h u_t(X_t) + h R_t(h), \\ \text{,with  } 
lim_{h\to 0} R_t(h) = 0
$$

Hence, what we are saying is that:

$$
\frac{d}{dt}X_t = u_t(X_t) \leftrightarrow lim_{h \to 0} \frac{X_{t+h}-X_t}{h} = u_t(X_t)
$$

As we can't define the derivative of a stochastic process, we use the above to find a term that approaches the derivative.

The above is for a deterministic ODE.

We will now follow a similar process for an SDE:

$$
\frac{d}{dt} X_t = u_t (X_t) + \sigma dW_t
$$

Hence:

$$
\frac{d}{dt} X_t = u_t (X_t) + \sigma dW_t 
\\ \leftrightarrow X_{t+h} = X_t + h u-t(X_t) + \sigma_t(W_{t+h}-W_t) + h R_t
(h)
$$

Hence

$$
lim_{h \to 0} \sqrt{\mathbb{E[\lvert \lvert {R_t(h)} \lvert\lvert^2 ]}} = 0
$$

Sum-up:

ODE's have trajectories as their solution, whilst SDE's have stochastic processes as their solution.

Again, we always assume that there is a unique and existing solution to the SDE (which is, as stated, a stochastic differential equation.)

So we have an Ohrnstein-Uhlenbeck Process:

$$
dX_t = -\theta X_t dt + \sigma dW_t
$$

Now we have all of the ingredients to define a diffusion model!

Diffusion Model:

We want to convert $p_{init}$ to $p_{data}$, using an SDE.

We use the neural network as the vector field: $u_t^{\theta}: \mathbb{R}^D \times [0,1] \rightarrow \mathbb{R}^D$.

We have a random initialisation:

$X_0 \sim p_{init}$

SDE: $ dX_t = u_t^{\theta} (X_)t dt + \sigma_t dW_t
$

with a diffusion coefficient: $\sigma_t$.
















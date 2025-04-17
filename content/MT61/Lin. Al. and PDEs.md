---
title: Linear Algebra and Partial Differential Equations
---

![[Linal.jpeg]]

>[!Danger] Rant 
>**This paper in my opinion is grave warcrime.** I have a large inherent respect for the idea of linear Algebra and have taken many classes on it before in my engineering courses as well as at the wonderful summer camp conducted jointly by TIFR-CAM and JNP and have done plenty of independent study into the field for the sake of my pet projects which may play an integral role in future works, hence I can make a *claim to competency* when I assert that this paper is very poorly designed for UnderGraduate uses. 
>
>You are bound to discover severe deficiencies if you decide to study Quantum Mechanics or Abstract Mathematics further, I suggest arming yourself with a good textbook like  [Strang's](https://students.aiu.edu/submissions/profiles/resources/onlineBook/Y5B7M4_Introduction_to_Linear_Algebra-_Fourth_Edition.pdf) or [Linear Algebra Done Right by Sheldon Axler](https://linear.axler.net/LADR4e.pdf) if you want to do anything serious within this field. I have negative opinions on the college prescribed textbook, yet I shall provide screenshots of it throughout the place just for continuity and compliance.

# Linear Algebra
---
I highly recommend looking up my [SWIM notes](https://swim-23-lecture-series-gsh47.vercel.app/) for better reference : 
- [2nd half of the LEC4 Vectorspace](https://swim-23-lecture-series-gsh47.vercel.app/swim/lec4/lecture-iv/)
- [LEC 6 span and identity ](https://swim-23-lecture-series-gsh47.vercel.app/swim/lec6/lecture-vi/)
- [LEC 8 Basis dimension and independence](https://swim-23-lecture-series-gsh47.vercel.app/swim/lec8/lecture-viii/)
- [LEC 10 Transforms](https://swim-23-lecture-series-gsh47.vercel.app/swim/lec10/lecture-x/)
- [LEC 13 Rank, Nullsapce and Matrices](https://swim-23-lecture-series-gsh47.vercel.app/swim/lec13/lecture-xiii/)

## Introduction
**Liny Algi** is a beautiful idea with crazy applications and has a profound impact on your life very now. The AI (C-GPT if you're a noob or Grok if you're 'special that way') you use is basically just basic linear algebra with more spicy mathematical algorithms dumped on it. You can see several important and ignorant people treat it like some messiah and make an utter fool of themselves with this.

![[Pasted image 20250417132826.png|400]] 

AI is literally used to fire people under the US Govt, and is also taking jobs away at scummy job factories like Infosys (Let's face it, if a computer algorithm can do your job better than you - it wasn't a job for humans in the first place.. it is high time we stopped the rise of meaningless jobs like 'Data Liason Officer ')

SO, let's get our intuition sorted out. **You are not a child, so please stop imagining vectors as straight pointy arrows** 


![[maggie.png|400]] 

So what are vectors then ? 

$$
\begin{aligned}
\text{Vectors are things that behave like good old fashioned vectors }\\
\text{\small- Dr Vasan, TIFR-ICTS, at SWIM'23}
\end{aligned}
$$
LITERALLY ANYTHING CAN BE A VECTOR ! A shopping list, python dicts, a recipe even your wardrobe is a vector as long you define a proper Vectorspace. 

![[Pasted image 20250417134817.png|300]]  

Is a good way to get started. Consider salt, it can be scaled as in 2 Tsp salt is twice as much as 1Tsp salt, but it also a vector as salt is different from urad dal (*udhdhu* in Kannada) which can also be scaled and combined along with several other ingredients (or **basis vectors**)   to make a delicious Dosa (*Dhosé* in Kannada ) which I unfortunately haven't eaten for breakfast today. 

![[Screenshot from 2025-04-17 13-52-21.png|300]] 
*Don't fool me, I know a vector when I see one !* 
Source : Hebbar's Kitchen. 

- Now if I gave you a menu card, with many other dishes made from similar ingredients - that is a **Vectorspace** !
- And if you order multiple dishes (or vectors), your order is a **tensor** of ingredients ! 


## College portions
Now with this in hand, let's proceed into the dull numbing syllabus we have been fed. 

- A vector resides in a [[Vectorspace]] which canbe split into [[Subspaces]]. 
- A vector can be a [[Linear Combination]] of vectors from said vectorspace. 
- If this combination is made from a [[Linearly Independent]] set of vectors and this set [[Span]] the entire vectorspace, then it's called a [[Basis]]. You get to play around with [[Replacement theorem]].
- [[Rank Nullity Theorem]] is like literally why compression algorithms work.
-  Similar to functions, we have this cool thing called [[Transormation]] just for vectors. The co-domain of said Transformation forms a [[Rangespace]] and the set of inputs which lead to the identity element on the output space is called the [[Nullspace]] of this transformation.
- Potentially risking abuse of notation, we introduce [[Ordered basis]] and [[coordinate vectors]] wrt to some given [[basis]]. 
- Now there is some problem solving which I can't make justice to in the form of a website so please ask a friend. 
# Partial Diff Eqs 
---
Now let's look at PDE's 

>[!danger] Rant
>I am very sorry to disappoint you by saying the chances of you actually doing something with what has been taught in class so far is less than 0.005%. Once again, blame extremely poor syllabus setting and resources. 
>
>Do not get me wrong PDEs are extremely powerful and elegant, but after a brief survey / discussion with most of who's going into academia among you - 22PM shift 1&2,  I can say the closest most of you will ever get to using it in your careers is simply handled by the humble `diff()` and `dsolve()`. 
>
>To make matters worse, the syllabus mostly consisted of 'step 1,step 2, .. bada bing bada boom answer' and I don't think anyone really understood what the beginning, end or even the process signifies. It's a slight consolation to see [Spectral methods](https://en.wikipedia.org/wiki/Spectral_method) making a cameo in the lab as part of 'Heat Equations' and 'Wave equations' but I really wish we saw more of that in theory class. BECAUSE c'mon.. what is life but a mathematical approximation made from daring assumptions of our perspective of reality. 
>
>That said you'll still need it if you're going to play with anything related to surface or fluid-fields (MHD) and so on.. You just need to be good at modelling and reading books from what I've heard from others in their own fields. 


![[WhatsApp Video 2025-04-17 at 19.37.25(1).mp4]]

Wouldn't life be so much better if we had more of these things ??!!


Alright, there isnt much ground to cover here at promised 14 hrs. It'd be shame to make an introduction to such a hazy list of topics. 

As my friend keeps saying : $\text{Fcuk it, We ball !! }$ 

## College portions 
- First we check [[Condition of Integrability]] and then go into [[Simultaneous Equations]]. 
- We understand how to [[create PDEs]] and then switch to Lagrange's Linear Equations. 
 - Then we look at how [[Charpit's method]] is used to solve [[First order Non Linear PDEs]]
 - And then we look at 4 other methods, A BIG BLUNDER IS CALLING THEM $I,II,II,IV$ instead of their actual names like [[Clairaut's]] or [[Nathani's]]
 - Classification of [[2nd order PDEs]] and 
 - [[Solution of Homogeneous Equations in two variables with constant coeffs ]]
Yes, I don't see any coherent flow of logic or structure in the way this is formatted. Drink some coffee and come sit with me and my [47](https://youtu.be/9X5UQxRd_pk) other personalities and figure it out. 

You should have a decent idea of what's happening at the moment. 
![[Linal.jpeg]]

>[!Danger] Rant 
>**This paper in my opinion is grave warcrime.** I have a large inherent respect for the idea of linear Algebra and have taken many classes on it before in my engineering courses as well as at the wonderful summer camp conducted jointly by TIFR-CAM and JNP and have done plenty of independent study into the field for the sake of my pet projects which may play an integral role in future works, hence I can make a *claim to competency* when I assert that this paper is very poorly designed for UnderGraduate uses. You are bound to discover severe deficiencies if you decide to study Quantum Mechanics or Abstract Mathematics further, I suggest arming yourself with a good textbook like  [Strang's](https://students.aiu.edu/submissions/profiles/resources/onlineBook/Y5B7M4_Introduction_to_Linear_Algebra-_Fourth_Edition.pdf) or [Linear Algebra Done Right by Sheldon Axler](https://linear.axler.net/LADR4e.pdf) if you want to do anything serious within this field. I have negative opinions on the college prescribed textbook, yet I shall provide screenshots of it throughout the place just for continuity and compliance.

# Introduction
---
I highly recommend looking up my [SWIM notes](https://swim-23-lecture-series-gsh47.vercel.app/) for better reference : 
- [2nd half of the LEC4 Vectorspace](https://swim-23-lecture-series-gsh47.vercel.app/swim/lec4/lecture-iv/)
- [LEC 6 span and identity ](https://swim-23-lecture-series-gsh47.vercel.app/swim/lec6/lecture-vi/)
- [LEC 8 Basis dimension and independence](https://swim-23-lecture-series-gsh47.vercel.app/swim/lec8/lecture-viii/)
- [LEC 10 Transforms](https://swim-23-lecture-series-gsh47.vercel.app/swim/lec10/lecture-x/)
- [LEC 13 Rank, Nullsapce and Matrices](https://swim-23-lecture-series-gsh47.vercel.app/swim/lec13/lecture-xiii/)
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


***
Now with this in hand, let's proceed into the dull numbing syllabus we have been fed. 
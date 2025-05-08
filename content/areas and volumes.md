
We are familiar with the idea of finding area under a curve by definite integrals. we shall do the same again : 

![[AreaUnderCurve.mp4]]

The school version of this is simply 

$$Area=\int_{0.5}^{1.5}x^{2}dx$$

But now that we are grownups and have to flex deeper knowledge, given the function $f(x)=y$ , and setup limits as what the $y$ value is at the start and end of your integral. As in this function we are integrating from $x=0.5\to x=1.5$ we can write it as 

$$
\int_{e^{0.5}}^{e^{1.5}}\int_{0}^{x^{2}}1\quad dxdy
$$

the benefit of this method is that we can integrate much easily between curves ... or lines. 

![[AreaBetweenCurves.mp4]]


 You must realise that your limits act as lines or bounds. depending on the coord system youre in, you have either computed teh volume of a cube, cylinder or a sphere. 

>[!tip] REMEMBER
> - If you're computing an area or a volume, OUTER INTEGRAL LIMITS ARE CONSTANTS
> - INNER INTEGRAL LIMITS ARE A DEPENDENT FUNCTIONS
> sanity check -  teh output is a positive number. 
> 
> 
> If your integrand (the thing being integrated) is $1$:
> 1. You're computing area if it's a double integral
> 2. You're computing volume if it's a triple integral. 
> 
> If your integrand is a fucntion
> 3. You're computing 'volume under a surface $f(x,y)$' if it's a double integral 
> 4. you're computing the quantity of something in a given volume like charge or mass etc. 

![[DoubleIntegralVolume.mp4]]


![[Pasted image 20250508174717.png]]

To be fair, coordinate systems are mathematical constructs (Though the idea of poles and origins are very much natural) you must pick teh one that suits your needs. Lookup [[Switching coordinate systems]] 

> In the words of a wise Prof. who gave me assignments that pushed my imagination to newer heights : "Do the Math however you like, The Physics does not care" *(with articulate hand movements)*   

Sometimes it's easier to switch the function you're given to calculate stuff easier, you can do that by 

# Evaluation of double integral by changing of orders 

You rewrite the variables in the form of other 
$$
\int ^{x_{2}}_{x_{1}}\int ^{f_{2}(x)}_{f_{2}(x)} f(x,y)\, dy  \, dx\longrightarrow \int ^{y_{2}}_{y_{1}}\int ^{f_{2}(y)}_{f_{2}(y)} f(x,y)\, dx  \, dy 
$$
---

>Now personally I like referring to Jay Cumming's textbook and I'll try to spam you with his proofs whenever I can.. (can does a lot of heavy lifting here)

# Darboux's Lower and Upper Sum

Let $f:[a,b]\to \mathbb{R}$ be a bounded function bounded from $a\to b$  COnsider $n$ partitions to be $\{ x_0,x_1,x_2,\dots x_{i}\dots,x_n \}$ 


Lower sum:  Let $m_{i}$ be the infimum for the interval $(f(x_{i-1}),f(x_{i}))$.
Then the upper Darboux sum for function $f(x)$ with respect to partition $P$ is$$L(P,f)=\sum_{i=0}^{n} m_{i}\cdot\Delta x_{i}$$![[Pasted image 20250508191750.png]]


Upper sum: Let $M_i$ be the supremum of $[x_{i-1},x_{i}]$. Then the upper Darboux sum for function $f(x)$ with respect to partition $P$ is 

$$U(P,f)=\sum^{n}_{i=0}M_{i}\Delta x_{i}$$

![[Pasted image 20250508191818.png]] 

note that **the width of the rectangles $\Delta x_{i}$ does not have to be uniform.** 

# Darboux lower integral 

Supremum of all lower sums taken over all partitions $P$ of the closed interval $[a,b]$ , it is denoted by 
$$
\int_{\underline{a}}^bfdx=\sup(L(P,f))
$$
# Darboux Upper integral 
Infimum of all uppersums taken over all partitions $P$ of the closed interval $[a,b]$ , it is denoted by 
$$
\int_{\underline{a}}^bfdx=\inf(L(P,f))
$$


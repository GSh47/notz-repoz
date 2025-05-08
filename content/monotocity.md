# Monotocity 

A function is said to be monotonic if it is either monotonically increasing or decreasing 
## Increasing
let $a\subseteq \mathbb{R}$ then the function is monotonously increasing if $f(x_{2})\geq f(x_{1})$ for all $x_{2}\geq x_{1}$. or $f$ increases with $x$ 
## Decreasing
let $a\subseteq \mathbb{R}$ then the function is monotonously decreasing if $f(x_{2})\leq f(x_{1})$ for all $x_{2}\geq x_{1}$. or $f$ increases with $x$ 

#proof **Monotonic functions are integrable** 

A non const monotonic function $f:[a,b]\to \mathbb{R}$ is integrable.. We may first assume $f$ is monotonically increasing and $p$ be any partition $x_{0},x_{1},\dots x_{n}$ 
Let $m_{i}=\inf f(x)=f(x_{i-1}):x_{i-1}\leq x\leq x_{i}$
Let $M_{i}=\sup f(x)=f(x_{i}):x_{i-1}\leq x\leq x_{i}$

$$
\begin{aligned}
U(p,f)=&\sum M_{i}\Delta x_{i}\\=&\sum f(x_{i})\Delta x_{i}\\P(p,f)=&\sum m_{i}\Delta x_{i}\\=&\sum f(x_{i-1})\Delta x_{i}\\ \\ U(p,f)-L(p,f)=&\sum(f(x_{i})-f(x_{i-1}))\Delta x_{i} \\ <&\sum(f(x_{i})-f(x_{i-1}))\delta  \\ <&[(f(x)-f(x_{0}))+(f(x_{2})-f(x_{1}))+(f(x_{3})-f(x_{2}))\dots f(x_{n})-f(x_{n-1})] \delta\\ <&f(x_{n})-f(x_{0})\delta \\ \\ &\text{Let $\delta=\frac{\epsilon}{f(x_{n}-f(x_{0}))}$ }\\ \implies U(p,f)-L(p,f)< & f(x_{n})-f(x_{0}) \frac{\epsilon}{f(x_{n}-f(x_{0}))} \\<\epsilon
\end{aligned}
$$

 for any value of $\delta$ lower than this, the function is integrable.. ? Suppose $\epsilon>0$ is given, then we have to find $\delta > 0$ with $\mu(p)<\delta$ in this case we choose a $\delta$ as above to ensure that $P$ has enough points so that $\Delta x_{i}\leq \mu(P)\leq\delta$ hence $f$ is integrable. 

Similarly, for a decreasing function : 
let $f$ be a monotonically decreasing function, then $-f$ is an increasing function i.e integrable as shown, thus $-(-f)$ must also be integrable as we saw integrability of $f\implies$ integrability of $kf$ 

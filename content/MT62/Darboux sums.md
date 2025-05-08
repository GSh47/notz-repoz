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

[[Darboux integrability theorem]]

### Show that $f(x)=x:(0,1)\int f \, dx=\frac{1}{2}$ 


First we have, 
$P_{n}=\left\{  0, \frac{1}{n}, \frac{2}{n},\dots_{1}  \right\}$ 

Giving us 

$$
\begin{aligned}
m_{i}: \inf(f(x))=\inf(x) &=x_{i-1} =\frac{i-1}{n}\\
M_{i}: \sup(f(x))=\sup(x) &=x_{i} =\frac{i}{n} \\
L(P_{n},f) =& \sum_{i=1}^n m_{i}\Delta x_{i}\\&\sum_{i=1}^n \frac{i-1}{n}\cdot \frac{1}{n}\\ &\frac{1}{n^{2}}\sum_{i=1}^n i-1\\& \frac{1}{n^{2}} \left( \frac{n(n+1)}{2}-1 \right)\\  \int_{0}^1 f \, dx =&\lim_{ n \to \infty } \frac{1}{n^{2}} \left( \frac{n\left( 1-\frac{1}{n} \right)n}{2} \right)\\=&\frac{1}{2}
\end{aligned}
$$


now for upper sum, 

$$
\begin{aligned}
U(P_{n},f) =& \sum_{i=1}^n M_{i}\Delta x_{i}\\&\sum_{i=1}^n \frac{i}{n}\cdot \frac{1}{n}\\ &\frac{1}{n^{2}}\sum_{i=1}^n i\\& \frac{1}{n^{2}} \left( \frac{n(n+1)}{2} \right)\\  \int_{0}^1 f \, dx =&\lim_{ n \to \infty } \frac{1}{n^{2}} \left( \frac{n\left( 1+\frac{1}{n} \right)n}{2} \right)\\=&\frac{1}{2}
\end{aligned}
$$

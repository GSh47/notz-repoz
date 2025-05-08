# Greens Theorem
Double integral over a plain region can be transformed into a line integral over a boundary of the region and conversely

If $R$ is closed region bounded by simple clsoed curve C and $m(x,y)$ and $n_{x,y}$ are two functions having continuous partial derivatives in $R$ then
$$
\oint_{C}Mdx+Ndy=\iint_{R} \left( \frac{ \partial N }{ \partial x } -\frac{ \partial M }{ \partial y }  \right)dxdy  
$$
integrated in anti clockwise direction 
## proof

Let $C$ be a simple closed curcve in the xy plane with the property that  lines parallel to the coord axis meets the boundary of the curve C, at no more than $2$ points *in other words, the curve does not contain any segment / arc parallel to our coord axes*. 
![[Pasted image 20250508180007.png]]

- The figure shows that $C$ is made up of two path $C_{1}:y=f_{1}(x),C_{2}:y=f_{2}(x)$ between the points $a,b$ .
- now for any $x$ between $a,b$ we integrate  $\frac{ \partial M }{ \partial y }$ with $y$ from $y=f_{1}(x)$ to $f_{2}(x)$ i.e
   $$\int _{f_{1}(x)}^{f_{2}(x)}\frac{ \partial M }{ \partial y } \, dy$$
   
   and let the integral be $\mathbb{M}(x,y)|_{f_{1}(x)}^{f_{2}(x)}=\mathbb{M}(x,f_{2}(x))-\mathbb{M}(x,f_{1}(x)$ 
and we integrate it again with $x$ from $a,b$ i.e
 $$\int _{a}^b \, \mathbb{M}(x,y)|_{f_{1}(x)}^{f_{2}(x)}dx$$
 
 or 
$$
\begin{align}

\int _{a}^b \, \mathbb{M}(x,f_{2}(x))-\mathbb{M}(x,f_{1}(x))dx = &
\int _{a}^b \, \mathbb{M}(x,f_{2}(x))dx+\int _{b}^a \mathbb{M}(x,f_{1}(x))dx \\=& - \int _{b}^a \, \mathbb{M}(x,f_{2}(x))dx-\int _{a}^b \mathbb{M}(x,f_{1}(x))dx \\
=&-\left[ \int_{c_{1}}M(x,f_{1}(x) +\int_{c_{2}}M(x,f_{2}(x))\right] \\
=& - \oint_{c}M(x,y)dx
\end{align}
$$
implies 

$$
\int_a^b\int_{f_{1}(x)}^{f_{2}(x)}\frac{ \partial M }{ \partial y } dydx=\oint M(x,y)dx
$$

Similarly along for $N$ we see two curves $C_{1}':x=g_{1}(y)$ and $C_{2}'=g_{2}(y)$ for $c\leq y\leq d$ 
we integrate $\frac{ \partial N }{ \partial x }$ along the curves
$$
\begin{aligned}
\int _{c}^d \int _{g_{1}(y)}^{g_{2}(y)} \frac{ \partial N }{ \partial x }  \, dx \, dy =&\int _{c}^d \mathbb{N}(g_2(y),y)-\mathbb{N}(g_{1}(y),y) \, dy\\
=&\int _{c}^d \mathbb{N}(g_2(y),y)dy+\int _{d}^c\mathbb{N}(g_{1}(y),y) \, dy
\\=& \int_{c_{1}}N(y,g_{1}(y))+\int_{c_{2}}N(y,g_{2}(y))
\\=& \oint N(x,y)dy
\end{aligned}
$$
thus by subtracting M's line integral from N's line integral, we have 

$$
\begin{align}
\oint N(x,y)dy-(-M(x,y)dx)=&\int _{c}^d \int _{g_{1}(y)}^{g_{2}(y)} \frac{ \partial N }{ \partial x }  \, dx \, dy - \int_a^b\int_{f_{1}(x)}^{f_{2}(x)}\frac{ \partial M }{ \partial y } dydx \\
\oint_{c}Ndy+Mdx=&\iint_{R}\left( \frac{ \partial N}{ \partial x }-\frac{ \partial M }{ \partial y }   \right)
\end{align}
$$

Boom, done. 


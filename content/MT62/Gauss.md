
If $V$ is a volume bounded by closed surafce $S$ and $\vec{F}$ is a vector point function with continuous derivatives in $V$ then $$\iint\vec{F}\cdot \hat{n}ds=\iiint \nabla \cdot \vec{F}dV$$ where $\hat{n}$ is the outward normal vector  to the surface $S$

#proof 
Let $\vec{F}=F_{1}\hat{i}+F_{2}\hat{j}+F_{3}\hat{k}$  and their derivatives are continuous at all points in $V$ Now, 
$\nabla \cdot \vec{F}=\left( \frac{ \partial F_{1} }{ \partial x } \right)+\frac{ \partial F_{2} }{ \partial y }+\left( \frac{ \partial F_{3} }{ \partial z } \right)$ 

and on other side, 
$\iint \vec{F}\cdot \hat{n}ds=\iint(F_{1}\hat{i}\cdot \hat{n}+F_{2}\hat{j}\cdot \hat{n}++F_{3}\hat{k}\cdot \hat{n})ds$ or

Let $S$ be a closed surface such that any line parallel to any coord axis cuts the surface $S$ in atmost $2$ points. Let $R$ be the orthogonal projection of the surface $S$ on the $xy$ plane. 


![[Pasted image 20250508224907.png]]

A line through the point $x,y,0$ of $R$ meets teh boundary of $S$ at two points Let the $Z$ coordinates of these points be $z_{1}=f_{1}(x,y),z_{2}=f_{2}(x,y)$  Let us denote the position of the surface $S$ corresponding to $z=f_{1}(x,y),z=f_{2}(x,y)$ as $S_{1},S_{2}$ respectively

Let $\hat{n_{1}},\hat{n}_{2}$ be the unit normal drawn outward to $S_{1},S_{2}$ such that

$$dxdy=-\hat{k}\cdot \hat{n_{1}}ds_{1}=\hat{k}\cdot \hat{n_{2}}ds_{2}$$

Consider the integral $\iiint \frac{ \partial F_{3} }{ \partial z }dxdydz$ , we have 

$$
\begin{aligned}
\iiint_{z_{1}=f_{1}(x,y)}^{{z_{2}=f_{2}(x,y)}}\frac{ \partial F_{3} }{ \partial z }dxdydz= \iint  \ F_{3} |_{f_{1}(x,y)}^{f_{2}(x,y)}dydz\\
\iint_{R}F_{3}(x,y,f_{2})-F_{3}(x,y,f_{1})dydx\\
\iint_{S_{2}}F_{3}\hat{k}\cdot \hat{n}ds+\iint_{S_{1}}F_{3}\hat{k}\cdot \hat{n}ds
\end{aligned}
$$

Remember the $-$ sign from $dxdy$ definition above !

$$
\begin{align}
\iint_{S_{2}}F_{3}\hat{k}\cdot \hat{n}ds+\iint_{S_{1}}F_{3}\hat{k}\cdot \hat{n}ds\\
=\iint_{S} F_{3}ds =\iiint_{V}\frac{ \partial F_{3} }{ \partial z }dxdydz 
\end{align}
$$
similar in the $yz$ plane and $xz$ plane

$$
\begin{align}
\iiint_{V}\frac{ \partial F_{1} }{ \partial x } dxdydz=\iint_{S}F_{1}\hat{i}\cdot\hat{n} ds \\
\iiint_{V}\frac{ \partial F_{2} }{ \partial y } dxdydz=\iint_{S}F_{2}\hat{j}\cdot\hat{n} ds
\end{align}
$$

So now just add em up to get

$$
\iint_{S}(F_{1}\hat{i}+F_{2}\hat{j}+F_{3}\hat{k)}\cdot\hat{n} ds=\iiint_{V} \left( \frac{ \partial F_{1} }{ \partial x } +\frac{ \partial F_{2} }{ \partial y } +\frac{ \partial F_{3} }{ \partial z } \right) dxdydz
$$

$$
\fbox{$\iint_{S}\vec{F}\cdot \hat{n}ds=\iiint_{V}\nabla \cdot \vec{F}dV$}
$$


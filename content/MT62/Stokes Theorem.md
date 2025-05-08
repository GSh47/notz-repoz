# Stokes’ Theorem

Is a relation between line and surface integral. Very popular in fluid dynamics context



### Statement:

If $S$ is a surface bounded by a simple closed curve $C$, and if $\vec{F}$ is a vector function whose components have continuous first-order partial derivatives on $S$, then:

$$
\oint_C \vec{F} \cdot d\mathbf{r}  = \iint_S \left(\nabla \times \, \vec{F}\right) \cdot \hat{n} \, ds
$$

Where $\ha\vec{F}he unit normal vector.  
Where:   

$$
\begin{align}
\hat{n} \, ds = dy \, dz \, \hat{i} + dz \, dx \, \hat{j} + dx \, dy \, \hat{k}, \\ d\mathbf{r} = dx \, \hat{i} + dy \, \hat{j} + dz \, \hat{k}, \\ \vec{F} = F_1 \, \hat{i} + F_2 \, \hat{j} + F_3 \, \hat{k}
\end{align}
$$




---

## Proof:


![[stokes 1.png|400]]


Let $S: z = f(x, y)$ be a surface such that its projection on $xy$, $yz$, and $zx$ planes are regions bounded by a simple closed curve.

## To prove:

$$
\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot \hat{n} \, ds = \iint_{S} (\nabla \times (F_{1}\hat{i}+F_{2}\hat{j}+F_{3}\hat{k}) \cdot \hat{n} ds 
$$

We first consider:

$$
\iint_S (\nabla \times \mathbf{F_{1}}) \cdot \hat{n} \, ds
$$

The curl is:

$$
\begin{align}
\nabla \times \mathbf{F} =&
\begin{vmatrix} 
\hat{i} & \hat{j} & \hat{k} \\ 
\partial / \partial x & \partial / \partial y & \partial / \partial z \\ 
F_1 & 0& 0
\end{vmatrix} \\& = \hat{i} \left( 0-0 \right) - \hat{j} \left( 0-\frac{ \partial F_{1} }{ \partial z }  \right) + \hat{k} \left( 0-\frac{ \partial F_{1} }{ \partial y }  \right) \\
\nabla \times F=&\frac{ \partial F_{1} }{ \partial z } \hat{j}-\frac{ \partial F_{1} }{ \partial y } \hat{k}
\end{align}
$$


we thus have 

$$
\iint_{S}\left(\frac{ \partial F_{1} }{ \partial z } \hat{j}-\frac{ \partial F_{1} }{ \partial y } \hat{k}\right) \cdot \hat{n} ds 
$$

(Eq 1)

Let the position vector of $P$ and 

$$
\mathbf{\vec{r}} = x \, \hat{i} + y \, \hat{j} + z \, \hat{k}$
$$

$$
\begin{align}
\frac{ \partial \vec{r} }{ \partial y }  =&\hat{j}+\frac{ \partial z }{ \partial y } \hat{k} \\
\frac{ \partial \vec{r} }{ \partial y } \cdot \hat{n} =&\hat{j} \cdot \hat{n}+\frac{ \partial z }{ \partial y } \hat{k}  \hat{n}
\end{align}
$$

$\frac{ \partial r }{ \partial y }$ is the tangent at $P$ and $\hat{n}$ is the normal at $P$ thus the dotproduct of perpendicular vectors is 0. thus $\frac{ \partial r }{ \partial y }\cdot\hat{n}=0$

$$
\begin{align}
\frac{ \partial \vec{r} }{ \partial y } \cdot \hat{n} =&\hat{j} \cdot \hat{n}+\frac{ \partial z }{ \partial y } \hat{k}  \hat{n}=0 \\
j\cdot \hat{n}=-\frac{ \partial z }{ \partial y } \hat{k} \cdot \hat{n}
\end{align}
$$

substitute this in the Eq 1


$$
\begin{align}
\iint_S (\nabla \times \mathbf{F_{1}}) \cdot \hat{n} \, ds=&\iint_{S}\left(\frac{ \partial F_{1} }{ \partial z } \hat{j}-\frac{ \partial F_{1} }{ \partial y } \hat{k}\right) \cdot \hat{n} ds  \\
=&\iint_{S}\left(\frac{ \partial F_{1} }{ \partial z } \hat{j}\cdot \hat{n}-\frac{ \partial F_{1} }{ \partial y } \hat{k}\cdot \hat{n}\right)  ds  \\
=&\iint_{S}\left(\frac{ \partial F_{1} }{ \partial z } \left[ -\frac{ \partial z }{ \partial y } \hat{k} \cdot \hat{n}\right]-\frac{ \partial F_{1} }{ \partial y } \hat{k}\cdot \hat{n}\right)  ds   \\
=&\iint_{S}\left(-\frac{ \partial F_{1} }{ \partial z } \frac{ \partial z }{ \partial y }+\frac{ \partial F_{1} }{ \partial y } \right)  \hat{k}\cdot \hat{n}ds \\
=&-\iint_{S}\left(\frac{ \partial F_{1} }{ \partial z } \frac{ \partial z }{ \partial y }-\frac{ \partial F_{1} }{ \partial y } \right)  \hat{k}\cdot \hat{n}ds  
\end{align}
$$

Since $F_{1}$ is a function of $x,y,z$ and $z=f(x,y)$ and now differentiating $F_{1}$ wrt $y$ partially, 

$$
\begin{align}
\frac{ \partial F_{1} }{ \partial y } =\frac{ \partial F_{1} }{ \partial x } \frac{ \partial x }{ \partial y } +\frac{ \partial F_{1} }{ \partial y } \frac{ \partial y }{ \partial y } +\frac{ \partial F_{1} }{ \partial z } \frac{ \partial z }{ \partial y }  \\
\frac{ \partial F_{1} }{ \partial y } =0+\frac{ \partial F_{1} }{ \partial y }  +\frac{ \partial F_{1} }{ \partial z } \frac{ \partial z }{ \partial y }
\end{align}
$$

Substitute this in previous equation, 


$$
\iint_S (\nabla \times F_{1}) \, \hat{n} \, ds = \iint_S \frac{\partial F_{1}}{\partial y} \,\hat{k} \cdot \hat{n} \, ds.
$$

In the $xy$ plane, $\hat{k} \cdot \hat{n} = 1$

$$
\iint_S (\nabla \times F_1 \hat{i}) \, \hat{n} \, ds = \iint_S \frac{\partial F}{\partial y} dxdy
$$

By Green's theorem, we have:

$$
\oint_C Mdx + Ndy = \iint_F \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) \, dx \, dy.
$$

Substitute $M=F_1, N=0$:

$$
\oint_C F_1 \, dx = \iint_R \frac{-\partial F_1}{\partial y} \, dx \, dy 
$$

Substitute:

$$
\iint (\nabla \times F_{1} \hat{i}) \, \hat{n} \, ds = \oint_C F_1 \, dx \, 
$$

in the $xy$ plane. 

Similarly we have

$$
\iint_S (\nabla \times F_2 \hat{j}) \, \hat{n} \, ds = \oint_C F_2 \, dy 
$$

in yz plane

$$
\iint_S (\nabla \times F_3 \hat{k}) \, \hat{n} \, ds = \oint_C F_3 \, dz
$$

in $xz$ plane

adding the equations from all planes

$$
\begin{align}
\iint_S \nabla \times( F_{1}\hat{i}+F_{2}\hat{j}+F_3 \hat{k}) \, \hat{n} \, ds = \oint_C (F_1 \, dx+F_{2}dy+F_{3}dz)  \\
\iint(\nabla \times \vec{F})\hat{n}\cdot ds=\oint_{c}\vec{F} \cdot d\vec{r}
\end{align}
$$

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
Also called switching variables.. 


# Double integration by change of variables
Sometimes it's easier to integrate in a different coordinate system, like the polar coordinate system. 
We can switch with $x=r\cos\theta$ and $y=r\sin\theta$ 
and we must compute the jacobian when switching to a different coordinate system like cartesian, polar, sphereical, cylindrical etc 
$$
J=\begin{vmatrix}
\frac{ \partial x }{ \partial r }  & \frac{ \partial x }{ \partial \theta } \\
\frac{ \partial y }{ \partial r } &\frac{ \partial y }{ \partial \theta }  
\end{vmatrix}
$$
giving us $dxdy=Jdrd{\theta}$ which is $rdr{\theta}$

# Triple integral 
A triple integral can be evaluated by changing the variable $x,y,z$ to some new variables related to $x,y,z$. as long as the Jacobian is not zero
$$
\iiint f(x,y,z) dx dydz \to \iiint g(u,v,w) \,\,|J| \,\,dudvdw
$$
there are two particular trasofrmations : 
1. Cylindrival polar coords $(x,y,z)\to(r,\theta,z)$ 
	by the relation $(x=r\cos\theta,y=r\sin\theta,z=z)$ 
2. Sphereical polar coords $(x,y,z)\to(r,\phi,\theta)$ by the relation $(x=r\sin \phi \cos \theta,y=r\cos\theta \sin \phi,z=r\cos \phi)$

$$
\begin{aligned}
J&=\begin{vmatrix}
\frac{\partial x}{\partial r} &
\frac{\partial y}{\partial r} &
\frac{\partial z}{\partial r} \\
\frac{\partial x}{\partial \theta} &
\frac{\partial y}{\partial \theta} &
\frac{\partial z}{\partial \theta} \\
\frac{\partial x}{\partial \phi} &
\frac{\partial y}{\partial \phi} &
\frac{\partial z}{\partial \phi}
\end{vmatrix} \\&=
\begin{vmatrix}
\sin{\theta}\cos{\phi} &
\sin{\theta}\sin{\phi} & \cos{\theta} \\
r\cos{\theta}\cos{\phi} &
r\cos{\theta}\sin{\phi} & -r\sin{\theta} \\
-r\sin{\phi}\sin{\theta} &
r\cos{\phi}\sin{\theta} & 0
\end{vmatrix}\\&=r^{2}\sin\phi
\end{aligned}
$$
Q **Evaluate $\iiint\sqrt{ x^{2}+y^{2} }dxdydz$ using cylindrical coordinates where $R$ is a region lying between cylinder $x^{2}+y^{2}=16$ and planes $z:-5,4$**

it can be rewritten as an integral in cylindrical coords 
$$
\begin{aligned}
\to \int _{-5}^4 \int _{0}^4 \int _{0}^{2\pi} \,r d\theta \, dr \, dz \\=\int _{-5}^4 \int _{0}^4 2\pi \, rdr \, dz \\=\int _{-5}^4  \frac{2\pi \,r^{2}}{2} |_{0}^4 \, dz=\int _{-5}^4  \pi \cdot{1}6 \, dz\\=\int _{-5}^4  \pi \cdot{1}6 \, dz\\ =  \pi \cdot{1}6z|_{-5}^4\\=\pi \cdot 16 \cdot{9}\\ 
\end{aligned}
$$
**Evaluate $\int _{-1}^1 \int _{-\sqrt{ 1-x^{2} }}^{\sqrt{ 1-x^{2} }}\int _{0}^2 \sqrt{ x^{2}+y^{2} }\, dz \, dy\, dx$**

# Important limits when integratng 
1. Spherically 
$$
\begin{matrix}
r & 0\to a \\
\theta & 0\to{2}\pi \\
\phi  & 0\to 0\to \pi
\end{matrix}
$$

2. SemiSphere
$$
\begin{matrix}
r & 0\to a \\
\theta & 0\to{2}\pi \\
\phi  & 0\to 0\to \frac{\pi}{2}
\end{matrix}
$$


**Find volume of the Sphere $x^{2}+y^{2}+z^{2}=a^{2}$** 
by changing to sphereical polar coords 
- First find Jacobian = $r^{2}\sin \phi$ 
- rhus vol = 
$$
\int^{a} _{0}\int^{\pi} _{0}\int^{2\pi} _{0} r^{2}\sin \phi d\theta d\phi\ dr 
$$
is obviously $\frac{4}{3}\pi a^{3}$ where $\int r^{2}\to \frac{a^{3}}{3}$ ;  $\int\sin \phi\to \cos \phi|_{0}^{\pi}\to1-(-1)=2$ and we just get $2\pi$ from the theta integral 
![[SphericalIntegral.mp4]]
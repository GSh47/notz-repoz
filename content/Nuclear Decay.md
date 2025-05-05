# Theory of succesive disintegration.
In nuclear decay, parent always decays into a daughter nucleus $A\to B\to C$ which inturn decays into grandaughter till a stable nucleus is obtained. Example : Uranium series, Actinium series, Thorium series. (Find the decay scheme for one or two of them ). 
- The number of parent atoms $A$ at time $t=0$ is $N_{0}$
- The number of parent atoms $A$ at time $t=t$ is $N_{A}$
- The number of daughter atoms $B$ at time $t=t$ is $N_{B}$
- The number of grand daughter atoms $C$ at time $t=t$ is $N_{C}$ 
and so on, 
The rate of disintegration of parent element is given by the formula 

$$\frac{dN_{A}}{dt}=-\lambda_{1}N_{A}$$

(this implies rate of formation of the daughter nuclei $B$ is $+\lambda_{1}N_{A}$ )


Similarly, the rate of disintegration of daughter nuclei is $-\lambda_{2}N_{B}$ 
Therefore net rate of formation of $B$ nuclei is given by 

$$\frac{dN_{B}}{dt}=\lambda_{1}N_{A}-\lambda_{2}N_{B}$$
therefore we can logically deduce : 
$$
\begin{align*}
\frac{dN_{B}}{dt}+\lambda_{2}N_{B}=&\lambda_{1}N_{0} e^{-\lambda_{1}t} \\\text{multiply $e^{\lambda_{2}t}$ on both sides:}\\
\frac{dN_{B}}{dt} e^{\lambda_{2}t}+\lambda_{2}N_{B}e^{\lambda_{2}t}=&\lambda_{1}N_{0} e^{-\lambda_{1}t}e^{\lambda_{2}t}= \lambda_{1}N_{0} e^{(\lambda_{2}-\lambda_{1})t} \\
\text{By inspection method :}\\
\frac{d(N_{B}e^{\lambda_{2}t})}{dt}=&\lambda_{1}N_{0} e^{(\lambda_{2}-\lambda_{1})t} \\\text{Integrate to get :}\\ N_{B}e^{\lambda_{2}t}=&\lambda_{1}N_{0} \frac{e^{(\lambda_{2}-\lambda_{1})t}}{(\lambda_{2}-\lambda_{1})}+C\\{@t=0: N_{B}=0}\implies C=&-\frac{\lambda_{1}N_{0}}{(\lambda_{2}-\lambda_{1})} \\
\implies N_{B}e^{\lambda_{2}t}=&\lambda_{1}N_{0} \frac{e^{(\lambda_{2}-\lambda_{1})t}}{(\lambda_{2}-\lambda_{1})}-\frac{\lambda_{1}N_{0}}{(\lambda_{2}-\lambda_{1})}\\N_{B}e^{\lambda_{2}t}=& \frac{\lambda_{1}N_{0}}{(\lambda_{2}-\lambda_{1})}\left[e^{(\lambda_{2}-\lambda_{1})t}-1\right] \\ \\\implies\fbox{ $N_{B}= \frac{\lambda_{1}N_{0}}{(\lambda_{2}-\lambda_{1})}\left[e^{-\lambda_{1}t}-e^{-\lambda_{2}t}\right]$}
\end{align*}
$$

Yeah Latex redering is a bit wonky online.. sowwy !
# Radioactive equilibrium
## Secular or Permanent Equilibrium
In this case we assume that $\lambda_{2}\gg\lambda_{1}$ implies that mean life of parent is much greater than daughter. Implies $\lambda_{2}-\lambda_{1}\approx\lambda_{2}$ similary $e^{-\lambda_{1}t}\sim 1$ is therefore, $N_{2}=N_{0}\frac{\lambda_{1}}{\lambda_{2}}$ after a long time. Nut $N_{0}\approx N$ as lifetime of parent is very large. $N_{2}\approx \frac{\lambda}{\lambda_{2}}$ this implies formation and disintegration of daughter nucleus becomes equal called as secular equilibrium.  
## Transient Equilibrium 
When $\lambda_{2}\geq\lambda_{1}$ implies that the mean life of the parent is not too different from that of the daughter nucleus. 
$e^{-\lambda_{2}t}$ decays faster 
something $$N_{2}=\frac{\lambda_{1}N_{1}}{(\lambda_{2}-\lambda_{1})}$$ this implies both parent and daughter decay at the rate so that $\frac{N_{2}}{N_{1}}$ remains constant in a Transient Equilibrium. 

$$
^X_{Z}X\to ^{X-4}Y+^4_{2}He
$$
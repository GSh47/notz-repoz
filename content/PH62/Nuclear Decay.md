![[Fallout 4 Official Main Theme by Inon Zur.mp3]]

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


In this case, we assume that $\lambda_2 \gg \lambda_1$. This implies the mean life of parent is much greater than daughter’s since 
$$
T_{\text{mean}} = \frac{1}{\lambda_1}
$$
$$
\lambda_2 - \lambda_1 \approx \lambda_2
$$

and 
$$
e^{-\lambda_1 t} \approx 1
$$

Therefore,
$$
N_2 = \frac{\lambda_1}{\lambda_2} N_1 \left[1 - e^{-\lambda_2 t}\right]
$$

After a long time,
$$
N_2 = \frac{\lambda_1}{\lambda_2} N_1 \left[1 - e^{-\lambda_2 t}\right]
$$

But $N_0 \sim N_1$, as the lifetime of parent is very large.

Thus,
$$
N_2 = \frac{\lambda_1}{\lambda_2} N_1
$$

or
$$
\lambda_1 N_2 = \lambda_2 N_1
$$

Thus, in secular equilibrium, formation and disintegration of daughter nucleus become equal.

## Transient Equilibrium 
When $\lambda_2 > \lambda_1$, i.e., the difference between them isn’t too large,  

$$
e^{-\lambda_2 t} \text{ tends to } 0 \text{ faster than } e^{-\lambda_1 t}
$$

$$
\Rightarrow N_2 = \frac{\lambda_1}{\lambda_2 - \lambda_1} N_0 e^{-\lambda_1 t}
$$

But $N_1 = N_0 e^{-\lambda_1 t}$  

Therefore,
$$
N_2 = \frac{\lambda_1}{\lambda_2 - \lambda_1} N_1
$$

$\Rightarrow$ Daughter disintegrates with the decay constant of parent.

$$
\frac{N_2}{N_1} = \frac{\lambda_1}{\lambda_2 - \lambda_1} = \text{constant}
$$

$\therefore$ Both parent and daughter decay at a rate such that $\frac{N_2}{N_1}$ is a constant.

# Geiger Nuttal Law.

It relates half life of an element to the type of radiation emitted.

Geiger showed that Range $\propto V_{0} ^{3}$ If the initial energy of $\alpha$ particle is in $MeV$, then it is related by $E=(2.08\times{1}0^{14})bE_{0}^{3/2}$ where $b=3.18\times{1}0^{-3}$ . 
It is observd that nuclei with shorter half life $T_{\frac{1}{2}}$ emit $\alpha$ particles with high energies implies there is a relation between rnage and half life of hte nucleus emitting the radiation. 


This law mathematically expressed as $\log(\lambda) =A\log(R)+B$

**Note** te const $A$ has almost same value for all radioactive series but $B$ has different value for different series. 

The value can also be expressed as $\log(\lambda)=\frac{3}{2}A\log(E)+B'$  
Characteristics of $\alpha$ spectrum. It has been observed by use of strong magnetic fields that nuclei emit $\alpha$ particles with different energies within a narrow range. 

Gamov  - alpha beta gamma 

![[Queen - Don_t Stop Me Now (Best Quality).m4a]]
# Alpha scattering

- Since $\alpha$ particles are just helium nuclei : they are indeed affected by magnetic fields 
## Gamow's Theory of Alpha decay

Due to the high potential barrier arising from the Coulomb field around the nucleus, nuclei of radioactive substances do not immediately give α-particle emission. This is due to insufficient KE of the α-particle.

Classically, if an α-particle has to come out from the nucleus, it has to overcome a Coulomb barrier of potential as shown.

![[Nuclear Models 2025-05-06 19.22.37.excalidraw.png]]


⇒ At the Coulomb barrier,

$$
V(r) = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r}
$$
$$
= \frac{1}{4\pi\epsilon_0} \frac{(Z-2)e \cdot 2e}{r}
$$
$$
= \frac{1}{4\pi\epsilon_0} \frac{2(Z-2)e^2}{r}
$$

For $_{92}^{238}U$,

$$
V(r) = \frac{8.99 \times 10^9 \times 2 \times 90 \times (1.6 \times 10^{-19})^2}{10^{-14}}
$$

$$
V(r) \approx 26 \, MeV
$$

This implies that α-rays should have a minimum KE ≥ 26 MeV, but typical energies of α-particles are about 4 MeV. Hence, Gamow suggested that α-particles emerge out of the nucleus due to quantum tunneling, and this effect is called **the tunnel effect**.

## Alpha Particle Disintegration Energy

When an α-particle is emitted from a nucleus, the nucleus recoils. This happens due to conservation of linear momentum.

$$
m_{\alpha} v_{\alpha} = M_{\text{nucleus}} v_{\text{nucleus}}
$$

where:
- $m_{\alpha}$: mass of α
- $v_{\alpha}$: velocity of α

---

The $\alpha$-particle disintegration energy is defined to be the sum of the kinetic energy (KE) of the $\alpha$-particle and the KE of the recoiled nucleus.

$$
E = \frac{1}{2} m_{\alpha} v_{\alpha}^2 + \frac{1}{2} M_{\text{nucleus}} v_{\text{nucleus}}^2
$$
$$
= \frac{1}{2} m_{\alpha} v_{\alpha}^2 + \frac{1}{2} M_{\text{nucleus}} \left( \frac{m_{\alpha} v_{\alpha}}{M_{\text{nucleus}}} \right)^2
$$
$$
\fbox{$E = \frac{1}{2} m_{\alpha} v_{\alpha}^2 \left(1 + \frac{m_{\alpha}}{M_{\text{nucleus}}}\right)$}
$$



# Beta decay
## Types 
### Negatron emission Ordinary beta emission 
  $_{Z}^AX\to _{Z+1}^AY+_{-1}^0e+\bar{\nu_{e}}$
  Example: $_{1}^3H\to_{2}^3He+_{-1}^0e+\bar{\nu_{e}}$
  Energy released in $\beta^-$ process is $Q=[M_{n}(A_{1}Z)-M_{n}(A_{1}ZH)-m_{e}]c^{2}$
### Positron emisson 
   $_{Z}^AX\to _{Z-1}^AY+_{1}^0e+\nu_{e}$
  Example: Find one.

  $\beta+$ emission is possible only when mass of parent is greater than parent by atleast 1.022MeV 
### Orbital electron capture 
  When an unstable proton rich nucleus is present with the coulomb barrier prevents emission of a proton. this implies that the nucleus can become stable only by transforming a proton into a neutron by capturing an orbital electron, hence Orbital electron capture
  Sinc the K shell electron that is close to the  nucleus is ususally captured - it is also called K capture. The effective process in this case is 
  $_{1}^1p+_{-1}^0n+\nu_{e}$  

## Characteristic of Beta spectrum

- Total energy emitted during $\beta$ decay is equal to th mass difference between parent and daughter nuclei which is equal to kinetic energy of $\beta$ particle 
- Large portoin of $\beta$ spectrum exhibits continuous energy unlike $\alpha$ particles which show discrete energy

Typical $\beta$ spectrum ahs the following properties. 
1. A continuous spectrum with energies ranging from origin to some maxima, no sharp peaks are seen. 
2. A line spectrum consisting of a numeber of discrete energues namely $c$ on the continuous spectrum
## Theoretical problems with Beta spectrum

1. X ray and $\gamma,\alpha$ ray from a source shows line spectrum, but $\beta$ is continuous.  
2. Law of conservation of energy and angular momentum seems to violated since the effective reaction is ... each particle has a spin angular momentum$=\frac{1}{2}\hbar$
3. Total spin of $RHS$ and $LHS$, we have non conservation of ang momentum
4. Conservation of linear momentum also seems to be violated ??

### Solution to the problem :
Pauli postulate that along with $\beta-$ particle, another particle called the anti neutrino $\bar{\nu}$ is produced to preserve ang mom. Hence reaction should be :

$$^A_{Z}X -^{\beta-}\longrightarrow _{Z+1}^AY+^0_{-1}e+\bar{\nu}_{e}$$


Follows fermi dirac statistics and has half integer spin. 
Along with $\beta^-$ we have a anti-neutrino is emitted, and with $\beta^+$ we have a neutrino

End point energy is shared between the daughter nucleus, beta particle and neutrino. 

$\bar{\nu}$ and $\nu$ differ from each other by a virtue of their spins. 

![[Nirvana - Come As You Are (Official Music Video) (1).m4a]]

- Note on [Rydberg atoms](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://en.wikipedia.org/wiki/Rydberg_atom&ved=2ahUKEwiHm5qe6o-KAxVMjGMGHYTrFrkQFnoECBwQAw&usg=AOvVaw0Gd8FHTFpOB7HYFCjp-WoH) 
- Line defects and molecular what placing aoms in uni cells

Order of sizes : Atoms - $1\sim 10 A^{\circ}$  while nucleus is $\sim 10^{-15}$ Fermi 

Notation : 

![[Pasted image 20250506215030.png|300]]

subscript is charge and superscript is number of nucleons in the entity  

Rule of thumb - the object must be a quarter of the interacting wavelength. 

Find mass of electron in energy units, $\frac{m_{e}c^{2}}{e}\to 0.5$MeV !

1. Made up of neutrons and protons
2. Rutherford in scattering experiments observed that $\alpha$ particles ($^4_{2}He$) approach teh nucleus to a distance of $\sim 3\times 10^{-15}m$ 
3. Nucleus does not have a definite sharp boundary
4. Nucleus is modeled as a sphere of posititve charge. but since there is no definite boundary - if we perform a scattering experiment with electrons then we will see a range of cross sections and the average is considered.

# Properties 
Nuclear density $\rho=\frac{ \text{Atomic mass Z}}{\text{Volume V}} \sim const.$ 
implies $V\propto Z$
$$
\begin{aligned}
V=kZ\\ \frac{4}{3}\pi r^{3}=kZ\\\implies r=KZ^{1/3}
\end{aligned}
$$
THe mass is assumed to be uniformly distributed throughout nuclear volume. therefore uclear charge densitty is approx a constant throughout the nuclear volume. 
Implies distribution of nuclear charge follows the saame pattern as mass distribution. 
Implies radius can also be measured on the basis of nuclear charge. This is called charge radius of the nucleus. 

Experimentally nuclear size can be estimated in two ways. 
1. Nuclear force method 
   Based on range of nuclear forces and is probed by scattering method
   Example : Rutherford $\alpha$ scattering, isotope shift in line spectra, $\alpha$ decay etc.  
2. Electrical method
   Based on Electric field, charge distribution, 
   Example - electron scattering, mirror nuclei method, muonic xray method. 
# Mirror nuclei method 

> Mirror nuclei has the same number of nucleons but the number of protons in one nucleus is going to be equal to the number of neutrons in the other nucleus. 
> Example $^{11}_{6}C:^{11}_{6}B$


Existence of protons in the nuclei gives rise to coulomb repulsive forces and hence nuclear coulomb energy 
Let $\rho=$ charge density. $\frac{Ze}{\frac{4}{3}\pi r^{3}}$
Assume that at one instant of time - we have a spherical ball of radius $x$
 This implies charge $q_{1}$ of the sphere is going to be equal to $\rho \times\frac{4}{3}\pi x^{3}$ 
 The ball is surrounded by sphereical shell of thickness $dx$ and radius $x$. The charge inside the shell is $q_{2}=\rho \cdot{4}\pi x^{2}dx$ 
 Implies that the total potential energy $d\cdot E_e=\frac{1}{4\pi\epsilon_{0}}\left( \frac{q_{1}q_{2}}{x} \right)$ 
 $$
\begin{aligned}
E_{e}=\int \frac{1}{4\pi\epsilon_{0}}\left( \frac{16\pi^{2}\rho^{2}}{3} \right)x^4   \, dx 
\end{aligned}
$$
for **two adjacent mirror nuclei** (differ by $Z=1$) having charges $Ze$ and $(Z+1)e$ but having same radius $R$ 
$$
\begin{aligned}
\Delta E_{c}=\frac{1}{4\pi\epsilon_{0}} \frac{3}{5} \frac{1}{R} ((Z+1)^{2}-Z^{2})e^{2}
\\=\frac{1}{4\pi\epsilon_{0}} \frac{3}{5} \frac{1}{R} e^{2}(2Z+1)
\end{aligned}
$$
now $2Z+1=A$ which is atomic mass. giving us 
$$
\Delta E_{e}=\frac{1}{4\pi\epsilon_{0}} \frac{3}{5} \frac{e^{2}}{R} A
$$
And we use it as 

$$R=\frac{1}{4\pi\epsilon_{0}} \frac{3}{5} \frac{e^{2}}{\Delta E_{c}}A$$  
given two atoms $$^{29}_{14}Si,^{29}_{15}P$$ 
When we are estimating the nuclear radius using the formula $R=R_{0}A^{1/3}$ we are assuming that **nuclear mass density is constant**  and hence we are estimation the mass distribution radius of the nucleus. 

When using $\Delta E_{c}$ formula, we are assuming that **nuclear charge is distributed uniformly** and we estimate the nuclear charge radius

## important data 

$$
\begin{matrix}
electron & m_{0}c^{2}=511KeV \\
1amu&931 MeV\\hc&1240MeV\cdot fm
\end{matrix}
$$

# Electron scattering method 

Assume that a partially coherent beam of electrons gets scatered from the nucleus. 
Example -  Electrons are scattered from $^{10}O$ further assume that the energy of the incident electrons =$420$ MeV. Under such situation the intensity of the scattered radiation as a function of angle $\theta$ can be estimated and exhibits a graph as shown below. 
![[Pasted image 20250505223710.png]]

1. If the incident electron is scattered from the electrons bound to the atom, then electrons have very less energy. this implies we can use electronic circuitry to veto such electrons. 
2. If incident electrons are scattered from a heavy nucleus then it's energy will be very high as very little energy is transferred to the nucleus. 
3. Rough calculation ; 
   Treat the nucleus as a circular aperture
   treat electrons as coherent waves incident on aperture
under these assumptions, from optics - we can see that $$I=\text{intensity of scattered electrons}\left(  \frac{\sin^{2}(\beta)}{\beta^{2}} \right)$$ 
the brcket term is 'sinc squared function' and $\beta=\frac{\pi}{\lambda}D\sin\theta$ (path diff ?) and we see that $I=0$ when $D\sin\theta=\lambda,2\lambda\dots$ or $\sin\theta \sim 1.22\frac{\lambda}{D}$ 

If we make the nucleus analogus to the circular disk, and noting that  from the diffraction pattern from oxygen - minima happens when $\theta$ is around 45 deg, then we get 
$$
\begin{aligned}
\sin43=1.22 {\frac{\lambda}{ D}}
\end{aligned}
$$
can we get the second minima from oxygen 10 nucleus ?

# Determination of nuclear mass using mass spectrometer. 

![[Pasted image 20250109101024.png]]


## ion source
- produces beam of ionised atoms or molecules that 
- often a vapour of the material being studied is ionise by bombarding with electrons or spark discharge coated with material under study
- ions emerging from the ion source will have range of velocities and a range of masses 
## Velocity selector 
- Here we allow ions having one particular velocity to go out of this cahmber 
- THis is achieved by using mutually perpendicular $\vec{E},\vec{B}$ 
	- $\vec{E}$ tries to deflect the ions in the upward direction as per the formula $$\vec{F}=q\vec{E}$$
	- $\vec{B}$ tries to deflect the particle downwards as per the formula $$\vec{F}_{B}=q(\vec{v}\times \vec{B})$$
	- We select only those ions of particular velocity correspoding to $$qE=qvB$$$$\therefore v= \frac{E}{B}$$
## Momentum selector, 
These selected ions are sent to momentum selector, where the $\vec{B}$ is directed opposite to the $\vec{B}$ in velocity selector
In this region we have the particles bent in a uniform $\vec{B}$ field. 
$$
\begin{aligned}
\frac{mv^{2}}{r}&=qvB\\
m&=\frac{qBr}{v} =\frac{qBr}{\left( \frac{E}{B} \right)}\\m&=\frac{qB^{2}}{E}r
\end{aligned}
$$
Note : Due to sensitivity issues we usually try to find those atoms and molecules with low  masses with 
 
# Nuclear shape 
When we use the equation $r=r_{0}A^{1/3}$ we assume that the nucleus is a sphere. 
Many nuclei has however an intrinsic quadrupole moment in addition to magnetic moment. This is due to elliptical distribution of charge inside the nucleus. $q=\frac{1}{2}(3z^{2}-r^{2})$ where $r$ is the avg radius (avg of semi minor and semi major axis) of nucleus and $z$ = spin axis.   
- Nuclear quadrupole moment is possible only when the total angular momentum or nuclear spin or isospin $(I)\geq 1$ 
- Depending upon the nuclear shape, with referfence to the spin axis, the nucleus can be called as either prolate or oblate depending on whether $q=\frac{1}{2}(3z^{2}-r^{2})$ is positive prolate or negative oblate. 

# Nuclear forces
Properties : 
1. Nuclear forces are strongly attractive. They are ususally $10^{21}$ stronger than electrostatic forces
2. Nuclear forces are charge independent forces, 
3. They are short range forces, typically dies down rapidly after a distance of few fermis
4. They are saturated forces. Implies binding energy per nucleon in approx a constant. implies each nucleon interacts only with a limited number of other nucleons. 
5. Nuclear forces are spin dependent forces. 
6. At extremely short distances $\sim 0.4F$ they are repulsive. ![[Pasted image 20250505223556.png]]


## Yukawa's theory of exchange forces to explain nuclear forces :
According to yukawa, the nuclear forces between nucleon arise due to exchange particles called muon $\mu-$meson having mass $\sim 200m_{e}$.
later it was discovered that it is due to $\pi-$meson exchange and there are 3 different types of $\pi-$mesons, $\pi^0,\pi^+,\pi^-$ 
1. $\pi^+$ exchanged between proton-proton
2. $\pi^-$ is exchanged between proton-neutron
3. $\pi^0$ is exchanged between neutron-neutron

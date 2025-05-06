# Gas Detector 

Similar to an alcohol cloud chamber, these work the same way, 

The process is quoted from given notes as : 
1. High energy particle collides with molecules in a medium, energy is transferred to the atom/molecule 
2. The energy is absorbed by electrons in outer shell, which is excited and leaves the atom/molecule creating a free electron and an ion
3. A large number of such pairs are created as the high energy particle passes through the medium
4. The electric field within the tube is in such a way that the electrons and ions are attracted to anode and cathode respectively
5.  The potential drop at Load resistor is created by the accumulation of electrons at the electrode.The electrons complete the circuit and get absorbed by the ions again making them neutral thus constituting a pulse 

More energy a particle has, bigger the pulse. 

The pulses recorded depend on :
1. incident radiation
2. Applied voltage

Types of counters are given as follows

- Ionisation counter
- Proportional counter (primary and secondary ionisation)
- Geiger Muller Counter (Townsend Avalanche effect)

These are pretty much the same device but at different voltages as seen below 

![[Pasted Image 20250107111727_504.png]]

### Ionisation region
it's constant across applied voltge but gives different reading for different ionisation energy
### Proportional region

the count increses proportionally with voltage 

### Geiger region
Plateau region - It does not discriminate wrt $\alpha,\beta,\gamma$ 
A single incidence creates a townsend Avalanche leading to saturated pulse 

# Geiger Counter
## Construction
Abridged from shared pdf : 
It consists of the GM tube which is a hollow metallic cylinder and it contains some kind of a gaseous medium - usually a mixture of 90% Ar and 10% alcohol of some kind. This tube is the Cathode, connected to the negative terminal of a high-tension battery $\sim 3000 V$. Along the centre of the cylinder is  the Anode - a tungsten electrode connected to a load resistance connected to the positive terminal of the battery. Connected parallel to the load resistance is the amplifier and/or a pulse counter to determine potential drop that happens across $R_L$ while also measures the amount of current associated with it. The system is also associated with some kind of a counter that can count that number of events over a period of time.

## Working 
summarized by GPT

1. **Radiation Entry & Ionization**
       - An external nuclear particle (alpha, beta, or gamma) enters the GM tube.
    - This particle ionizes the gas inside, creating free electrons and positive ions.
2. **High Voltage Acceleration**
    - A high voltage (1,000–3,000V) is applied across the tube.
    - Free electrons accelerate towards the anode (central electrode).
    - Positive ions move toward the cathode (metallic cylinder wall).
3. **Avalanche Effect (Townsend Avalanche)**
    - Accelerated electrons collide with gas molecules, causing further ionization.
    - This leads to a chain reaction, producing more electrons and ions.
    - The process rapidly multiplies ionization filling the entire tube, resulting in a discharge.
4. **Signal Detection & Counting**
	-  The accumulated electrons reach the anode, completing the circuit.
    - A potential drop is detected across a resistor (RL).
    - The electronic system registers this as one count, indicating radiation detection.
5. **Dead Time**
    - During discharge, the GM tube cannot detect new particles.
    - This recovery phase is called "dead time" (200–400 microseconds).
6. **Recombination & Resetting**
     - Electrons and ions recombine at the electrodes, restoring neutral gas molecules.
    - The GM tube returns to its original state, ready for the next detection.
7. **Quenching (Preventing False Counts)**
    -  Secondary photon emissions may trigger unwanted ionization.
    - To prevent this, quenching agents (e.g., alcohol) absorb excess energy as rotational or vibrational energy
    - This stabilizes the tube and ensures accurate radiation detection.




# Scintillation detectors 

- A typical photomultiplier has multiplication factor of $10^6$ electrons, i.e each electron creates million electrons 
- There are $n$ stages in a dynode, of multiplication factor of $m$. Giving us total multiplication factor of $m^n$ 
- Not ll photoelectrons create electrons
- Energy of incident ionising particle ($E_{i}$) and the average energy of emmitted electrons is $E_{\nu}$. The conversion efficeincy is given as $\eta$. the number of emitted electrons $N_{1}$ is given by : 
$$
N_{1}=\eta\frac{E_{i}}{E_{\nu}}
$$
- If $N_{2}$ is the number of incident photons, then $\alpha$ is called the fraction of fraction of total number of photons falling on the photocathode and $T$ is photocathode transparency, we have.
$$
N_{2}=\alpha TN_{1}
$$

- These photons are then converted into photoelectrons with efficiency of $\eta_{e}$ The number of photoelectrons produced by photocathode is 
$$ 
N=\eta_{e}N_{2}
$$
- If $D$ is the fraction of photoelectrons reaching the first dynode, and $m$ is the multiplication factor of each dynode, then the number of eletrons collected at anode is 
$$
N_{e}=DNm^n
$$
- The total charge is 
$$
Q=\left( \eta   \frac{E_{i}}{E_{\nu}} \right)(\alpha TN_{1})(DNm^n)e
$$
and the pulse height is 
$$
\begin{aligned}
V&=\frac{Q}{C}\\&= \left( \eta   \frac{E_{i}}{E_{\nu}} \right)(\alpha TN_{1})(DNm^n)e
\end{aligned}
$$
  
 ![[Scint.png]]

## Formulas : 

E field in a tube
$$
E=\frac{V_{0}}{r\log_{e}\left( \frac{b}{a} \right)}
$$
Mean free path $\lambda$
$$
\lambda E=V_{IP}
$$
Gas multiplication factor for prop counters 
$$m=\frac{\text{$\sum$ ion pairs collected }}{\text{$\sum$ ion pairs created }}$$ 


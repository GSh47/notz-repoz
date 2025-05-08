
# First form of Fundamental theorem of calculus 
Let $f:[a,b]\to R$ ve a n integrable function and $F:[a,b]\to R$ ve defined such that $F(x)=\int_{a}^b f{(x)dx}$. If $f$ is continuous at $c$ then $F$ is differentiable at $c$ and $F'(c)=f(c)$

**Proof**

We will show that
$$
F'(c) = \lim_{h \to 0} \frac{F(c + h) - F(c)}{h} = f(c),
$$
i.e., we will show that given an $\epsilon > 0$, $\exists \, \delta > 0$ such that
$$
\left| \frac{F(c + h) - F(c)}{h} - f(c) \right| < \epsilon \quad \text{for} \quad |h| < \delta.
$$

By the continuity of $f$ at $c$, we know that $\exists \, \delta > 0$ such that
$$
|f(x) - f(c)| < \epsilon \quad \text{when} \quad |x - c| < \delta
$$

If we let $|h| < \delta$ and $x \in [c, c + h]$, then
$$
|x - c| < |c + h - c| = |h| < \delta.
$$

$$
\implies |f(x) - f(c)| < \epsilon \quad \forall x \in [c, c + h],
$$
$$
\implies f(c) - \epsilon \leq f(x) \leq f(c) + \epsilon.
$$

$$
\int_c^{c + h} (f(c) - \epsilon) \, dx \leq \int_c^{c + h} f(x) \, dx \leq \int_c^{c + h} (f(c) + \epsilon) \, dx,
$$

$$
\implies [f(c) - \epsilon](c + h - c) \leq \int_c^{c + h} f(x) \, dx \leq [f(c) + \epsilon](c + h - c),
$$

$$
\implies [f(c) - \epsilon] h \leq \int_c^{c + h} f(x) \, dx \leq [f(c) + \epsilon] h.
$$

Dividing inequality by $h$,
$$
f(c) - \epsilon \leq  \int_c^{c + h} \frac{f(x)}{h} \, dx \leq f(c) + \epsilon. \tag{*}
$$
Now, 
$$
\begin{align}
\frac{F(c+h)-F(c)}{h}=\frac{\left( \int_{a}^{c+h}f-\int_{a}^c f \right)}{h}\\= \frac{\left( \int_{a}^{c}f+\int_{c}^{c+h}f-\int_{a}^c f \right)}{h} \\
\frac{\int_{c}^{c+h}f}{h}
\end{align}
$$
Substitute in $*$ 

$$
\begin{align}
f(c) - \epsilon \leq  \frac{F(c+h)-F(c)}{h} \leq f(c) + \epsilon \\
|\frac{F(c+h)-F(c)}{h}-f(c)|\leq \epsilon \text{ as }h\leq\delta\\
F'(c)=f(c)
\end{align}
$$

# Second Form of Fundamental Theorem of Calculus 

If $F: [a, b] \to \mathbb{R}$ is an integrable function and let $F$ be the primitive of $f$ (i.e., $f(x) = F'(x)$ for $x \in [a, b]$).
**Proof**

Let $P = \{x_0, x_1, \dots, x_n\}$ be a partition of $[a, b]$. Since $F$ is differentiable in each subinterval from $x_{i-1}$ to $x_i$, it is also continuous. So, by Lagrange's Mean Value Theorem, there exists $u_{i} \in [x_{i-1}, x_i]$ such that:

$$
\frac{F(x_i) - F(x_{i-1})}{x_i - x_{i-1}} = F'(u_{1})
$$
$$F(x_i) - F(x_{i-1}) = F'(u_i) \Delta x_i$$

$$m_i = \inf \{ f(x) \} \quad M_i = \sup \{ f(x) \}  $$


$$
\begin{align}
m_i \leq& f(u_i) \leq&& M_i \\
m_i \Delta x_i \leq& f(u_i) \Delta x_i \leq&& M_i \Delta x_i\\
\sum_{i=1}^{n} m_i \Delta x_i \leq& \sum_{i=1}^{n} F'(u_i) \Delta x_i \leq&& \sum_{i=1}^{n} M_i \Delta x_i\\
L(P, f) \leq& \sum_{i=1}^{n} F(x_i) - F(x_{i-1}) \leq&& U(P, f)\\
\leq& [ F(x_1) - F(x_0) + F(x_2) - F(x_1) + F(x_3) - F(x_2) + \ldots + F(x_n) - F(x_{n-1}) ]  \\
L(P, f) \leq& F(b) - F(a) \leq&& U(P, f)

\end{align}
$$







By taking the limit as $\mu(P) \to 0$ we get
$$
\begin{align}

\int_{a}^{b} f \leq F(b) - F(a) \leq \int_{a}^{b} f \\

\implies F(b) - F(a) = \int_{a}^{b} f
\end{align}
$$

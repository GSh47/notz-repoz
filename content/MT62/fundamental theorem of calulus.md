
# First form of Fundamental theorem of calculus 


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

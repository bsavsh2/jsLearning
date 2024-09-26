
// ------------ Comparisons --------------------
/*
 == vs ===
 latter does not allow coercion when comparing values.
 gotcha
 */
console.log(NaN === NaN); // false
console.log(0 === -0); // true

// All object values are held by reference;
/*
Coercion means a value of one type being converted to its respective representation in another type.

== - better name is coercive equality
== does the same thing as === by checking type and value but before that it does coercion if needed so both values have the same type.
 */

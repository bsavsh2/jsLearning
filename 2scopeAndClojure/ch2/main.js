/*
Chapter 2: Illustrating Lexical Scope

Scope is determined during code compilation.
But actual scope is created during runtime.
Scope is a place where things are can be used (variables, function etc.)



idea is that scope and variables, functions are tied. Meaning at runtime whenever code executes it doesn't need to
 lookup for variable it just knows where it is and which variable is being used at the moment.

 bucket and things in bucket.
 You can nest buckets but only inner buckets have access to outer bucket variables not otherwise.
 Scope Manager is basically linking scopes to variables. And at runtime let it know and enforces rules to which
  variables are accessible in currently executed part of your program.



 */
/*
Chapter 8: The Module Pattern

The goal of encapsulation is the bundling or co-location of
information (data) and behavior (functions) that together serve a common
purpose.

A module is a collection of related data and functions (often referred to as
methods in this context), characterized by a division between hidden
private details and public accessible details, usually called the "public
API."

The idea is to group alike program bits together, and selectively limit
programmatic access to the parts we consider private details. What's not
considered private is then marked as public, accessible to the whole
program.
The natural effect of this effort is better code organization. It's easier to
build and maintain software when we know where things are, with clear
and obvious boundaries and connection points. It's also easier to maintain
quality if we avoid the pitfalls of over-exposed data and functionality.

Modules (Stateful Access Control)

 */


/*
Example of "classic module" from early 2000s.
Singleton
 */
var Student = (function defineStudent(){
    var records = [
        { id: 14, name: "Kyle", grade: 86 },
        { id: 73, name: "Suzy", grade: 87 },
        { id: 112, name: "Frank", grade: 75 },
        { id: 6, name: "Sarah", grade: 91 }
    ];
    var publicAPI = {
        getName
    };
    return publicAPI;
// ************************
    function getName(studentID) {
        var student = records.find(
            student => student.id == studentID
        );
        return student.name;
    }
})();

/*
Module Factory (Multiple Instances)
Rather than specifying defineStudent() as an IIFE, we just define it as a
normal standalone function, ("module factory")


Classic module
 */

/*
Node CommonJS Modules
CommonJS modules are file-based and they are singletons
Look for other files in this directly
 */

/*
Modern ES Modules (ESM)
ESM is file-based, and module instances are singletons, with everything
private by default. One notable difference is that ESM files are assumed to
be strict-mode, without needing a "use strict"
 */
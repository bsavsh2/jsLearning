var Student = require("/nodejsCommonJsModuleExportExample");
Student.getName(73);


/*
if you want to access only part of the public api of a module
use this
var getName = require("/path/to/student.js").getName;
// or alternately:
var { getName } = require("/path/to/student.js");
 */
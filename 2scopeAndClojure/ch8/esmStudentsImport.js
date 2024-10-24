import {getName} from "./esmStudents";
// import { getName as getStudentName } from "/path/to/students.js";

/*
If getName is a "default export" of the module, we can import it like this:
import getName from "/path/to/students.js";


everything above is
"named import"


everything below is
"namespace import"
import * as Student from "/path/to/students.js";

 */
getName(100);
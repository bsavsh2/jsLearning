/*
How Prototypes work in JS
They are behind the scenes but it's important to know



One of the main reasons this supports
dynamic context based on how the function is called is so that
method calls on objects which delegate through the prototype
chain still maintain the expected this.


Prototype delegation. I need to look at it more deeply.
But from what I know 'class' in js is build on top of prototype.
 */

var homework = {
    study() {
        console.log(`Please study ${this.topic}`);
    }
}

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study();

var javaHomework = Object.create(homework);
javaHomework.topic = "Java";
javaHomework.study();

/*
       look for img.png in this directory
 */




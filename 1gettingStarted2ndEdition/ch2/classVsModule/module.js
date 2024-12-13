function Publication(title, author, pubDate) {
    var publicAPI = {
        print() {
            console.log(`
                Title: ${title}
                Author: ${author}  
                PubDate: ${pubDate}
            `);
        }
    };
    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(bookDetails.title, bookDetails.author, bookDetails.publishedOn);
    var publicAPI = {
        print() {
            pub.print();
            console.log(`
                Publisher: ${bookDetails.publisher}
                ISBN: ${bookDetails.ISBN}
            `)
        }
    };

    return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
    var pub = Publication(title, author, pubDate);
    var publicAPI = {
        print() {
            pub.print();
            console.log(URL)
        }
    };

    return publicAPI;
}

var YDKJS = Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
})

YDKJS.print();

var forAgainsLet = BlogPost(
    "For and agains let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-agains-let"
)
forAgainsLet.print();

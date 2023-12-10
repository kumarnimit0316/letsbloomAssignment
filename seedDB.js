const Book = require("./schema/bookSchema");

const seedDB = async () => {
    try {
        let dummyData = [];
        for (let i = 0; i < 5; i++) {
            const title = `Book${i}`;
            const author = `Author${i}`;
            const edition = `1.0`;
            const isbn = `${i}-${i}-${i}-${i}`;
            let book = {
                title,
                author,
                edition,
                isbn
            };
            dummyData.push(book);
        }
        const book = await Book.find();
        if (book.length === 0) {
            Book.insertMany(dummyData);
            console.log("Database seeded! :)");
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = seedDB;
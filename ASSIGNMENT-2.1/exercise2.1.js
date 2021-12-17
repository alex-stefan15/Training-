const books = [{
    title: 'How to win friends and influence people',
    authors: ['Dale Carnegie'],
    publisher: 'Pocket Books',
    year: '1936'
  }, {
    title: 'Management: tasks, responsibilities, practices',
    authors: ['Peter F. Drucker'],
    publisher: 'Harper Business',
    year: '1985'
  }, {
    title: 'Strength finder 2.0',
    authors: ['Tom Rath'],
    publisher: 'Gallup Press',
    year: '2007'
  }, {
    title: 'In search of excellence: Lessons from America\'s best-run companies',
    authors: ['Thomas Peters', ' Robert H. Waterman'],
    publisher: 'Harper Collins',
    year: '1982'
  }, {
    title: 'Built to last: Successful habits of visionary companies',
    authors: ['James C. Collins', 'Jerry I. Porras'],
    publisher: 'Harper Collins',
    year: '1994'
  }, {
    title: 'Reengineering the corporation: A manifesto for business revolution',
    authors: ['Michael Hammer', 'James A. Champy'],
    publisher: 'Harper Collins',
    year: '1993'
  }, {
    title: 'Competitive advantage: Creating and sustaining superior performance',
    authors: ['Michael E. Porter'],
    publisher: 'Free Press',
    year: '1998'
  }, {
    title: 'Crossing the chasm: Marketing and selling technology products to mainstream customers',
    authors: ['Geoffrey A. Moore', 'Regis McKenna'],
    publisher: 'Pocket Books',
    year: '1936'
  }, {
    title: '7 habits of highly effective people: Powerful lessons in personal change',
    authors: ['Stephen R. Covey'],
    publisher: 'Simon and Shuster',
    year: '1990'
  }, {
    title: 'The Six Sigma Way',
    authors: ['Peter S. Pande et al', 'Robert P. Neuman', 'Roland R. Cavanagh'],
    publisher: 'McGraw Hill',
    year: '2000'
  }, {
    title: 'The innovator\'s dilemma: When new technologies cause great firms to fail',
    authors: ['Clayton M. Christensen'],
    publisher: 'Harvard Business School Press',
    year: '1997'
  }, {
    title: 'The Essential Drucker',
    authors: ['Peter F. Drucker'],
    publisher: 'Harper Business',
    year: '2001'
  }];

// 1. Using console.log list the book titles in alphabetical order
console.log('<<<<<<2.1>>>>>>');

const bookTitles = books.map((item) => item.title);
console.log(bookTitles.sort());

//2. Generate a new array from the one above containing only the title and authors and display it in the console
console.log('<<<<<<2.2>>>>>>');

function deleteProps (books, keys){
  return books.map( x=>
    Object.fromEntries(
      Object.entries(x)
      .filter(([k])=> !keys.includes(k))
    )
  )
}
console.log(deleteProps(books,['publisher','year']));


// 3. Using console.log list only the the books published by Harper Collins and sort them by the year of publishing (newer first)
console.log('<<<<<<2.3>>>>>>');784475

const publishedByHP = books.filter (published => published.publisher == 'Harper Collins');
const pubYear = publishedByHP.sort((a,b)=>{
  const yearA = new Date(a.year), yearB = new Date(b.year)
  return yearB - yearA
})
console.log(pubYear);

// 4. Using console.log list only the books published after the year 1990
console.log('<<<<<<2.4>>>>>>');

const millenialBooks = books.filter (millenial => millenial.year > '1990');
console.log(millenialBooks);

// 5. Using console.log list all books written by Peter F. Drucker or Stephen R. Covey and published after the year 1990
console.log('<<<<<<2.5>>>>>>');

const peterOrStephen = millenialBooks.filter (writer => writer.authors == 'Peter F. Drucker'||'Stephen R. Covey' );
console.log(peterOrStephen);

// 6. Using console.log list all the books containing companies or people in the title
console.log('<<<<<<2.6>>>>>>');

const keyWords = ['people','companies'];
const result = books.filter(({title})=> keyWords.some(keyword => title.includes(keyword)));
result.forEach(({title})=> console.log(title));

// 7.Generate an new array from the existing one containing all the author names and display it in the console using console.log
console.log('<<<<<<2.7>>>>>>');
const names = books.map((item) => item.authors);
console.log(names);

// Requirements: console.log should only be called once per exercise, so you will have to store the result of your operations in a new array which you will log in the console. 
// All the code should be stored in a single file and try to use functions for operations that can be reused, like filtering items published after a certain year for example.

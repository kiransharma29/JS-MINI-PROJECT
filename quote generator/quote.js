var quotes =["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
              "Be yourself; everyone else is already taken.",
              "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
              "So many books, so little time.",
              "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
              "A room without books is like a body without a soul.",
              "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
              "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
              "You only live once, but if you do it right, once is enough.",
              "Be the change that you wish to see in the world.",
              "In three words I can sum up everything I've learned about life: it goes on.",
              "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
              "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
              "No one can make you feel inferior without your consent.",
              "If you tell the truth, you don't have to remember anything.",
              "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
              "A friend is someone who knows all about you and still loves you."
]

function newQuote()
{
    var random_num = Math.floor(Math.random() * (quotes.length));
    document.getElementById('Displayquote').innerHTML = quotes[random_num];
}
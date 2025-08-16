 let btn = document.querySelector("#btn");
      let quote = document.querySelector(".quote");
      let person = document.querySelector(".name");

      const quotes = [
        {
          quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
          person: `Marilyn Monroe`,
        },
        {
          quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
          person: `Albert Einstein`,
        },
        {
          quote: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
          person: `Bernard M. Baruch`,
        },
        {
          quote: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
          person: `William W. Purkey`,
        },
        {
          quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
          person: ` Dr. Seuss`,
        },
        {
          quote: `Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend`,
          person: `Albert Camus `,
        },
        {
          quote: `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .`,
          person: `C.S. Lewis, The Four Loves `,
        },
        {
          quote: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
          person: `William W. Purkey`,
        },
      ];

      btn.addEventListener('click' , () => {
        let random = Math.floor(Math.random() * quotes.length);

        quote.innerText = quotes[random].quote;
        person.innerText = quotes[random].person;
      });
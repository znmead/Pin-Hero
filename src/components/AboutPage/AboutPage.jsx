import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
      <p>
            >>> import this <br></br>

            The Zen of Python by Tim Peters

            <hr></hr>
            <br></br>

            Beautiful is better than ugly.<br></br>
            Explicit is better than implicit.<br></br>
            Simple is better than complex.<br></br>
            Complex is better than complicated.<br></br>
            Flat is better than nested.<br></br>
            Sparse is better than dense.<br></br>
            Readability counts.<br></br>
            Special cases aren't special enough to break the rules.<br></br>
            Although practicality beats purity.<br></br>
            Errors should never pass silently.<br></br>
            Unless explicitly silenced.<br></br>
            In the face of ambiguity, refuse the temptation to guess.<br></br>
            There should be one-- and preferably only one --obvious way to do it.<br></br>
            Although that way may not be obvious at first unless you're Dutch.<br></br>
            Now is better than never.<br></br>
            Although never is often better than *right* now.<br></br>
            If the implementation is hard to explain, it's a bad idea.<br></br>
            If the implementation is easy to explain, it may be a good idea.<br></br>
            Namespaces are one honking great idea -- let's do more of those!<br></br>
          </p>

          <br></br>

          <p>
            Zen Of Javascript by Clayton Gulick

            <hr></hr>
            <br></br>

            Build functionality, not architecture.<br></br>
            Build small things that work<br></br>
            and glue them together to make big things.<br></br>
            Clear is better than clever,<br></br>
            but graceful beats both.<br></br>
            Comments are good, even if you're Dutch.<br></br>
            Asychronous is better than synchronous
            except for when it isn't
            but your code should work on both.<br></br>
            Convention is better than definition,
            if you have good docs.<br></br>
            Keep it loose, but build good tests.<br></br>
          </p>

          <br></br>
          <hr></hr>
          <br></br>

          <p>
            "I am faster than 80% of all snakes." - Dwight Shrute
          </p>

      </div>
    </div>
  );
}

export default AboutPage;

Submission: SafeLink Reverter
===========================
Done
------------
- Cross-platform Outlook add-in to convert safe links to original links
- Side panel to show results (number of links in email, safe links converted, link texts)
- Convert safe links to original links
- Tested locally (the button took a minute to appear but it worked)

Not Done
------------
- Replace safe links with original links in the email (I am still stuck on modifying the DOM of the email versus the DOM of my add-in side panel)
- Implement other safe link decryption methods 
- Test the add-in on desktop and mobile
- Deploy the add-in to a web server

Result
------------
You can see in the screenshot that there is a button to click on to use the add-in. Once the button is clicked, the side bar will appear along with the results. You can see at the left bottom corner that the link embedded in the text is still the safe link as I have yet to figure that out.

Reference
------------
https://docs.microsoft.com/en-us/outlook/add-ins/quick-start?tabs=visual-studio


Assignment: JavaScript Game
===========================

For this project, you will use JavaScript to create an interactive browser game. For inspiration, think about card games, dice games, board games, simple strategy games, or even casual mobile games.

Requirements
------------

For all but a 'C' grade, your game needs to use some form of graphics. You can use the [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) to render your game, or you can  manipulate DOM elements directory (e.g., creating and positioning styled `<div>` or `<button>` elements). You can also create and manipulate [SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG) (e.g., `<circle>`, `<rectangle>`) in the same way you manipulate the DOM. You can also use external libraries to make this easier, such as [Raphael.js](http://dmitrybaranovskiy.github.io/raphael/) for SVG elements, or [three.js](https://threejs.org/) for 3D graphics.

Your game will be interactive and respond to user actions in some way. Responding to clicks on different DOM elements or at different locations on a  Canvas is sufficient, but you can also support using the mouse to click-and-drag or let the user hit keys on the keyboard.

- You will need to register event listeners to support this interactivity. As a general approach, have your event callback modify the *game state* (e.g., what game elements are positioned where), and then *re-render* the game's display to show the updated state in preparation for the next set of user inputs
- The game's interaction should be pleasant and frictionless. For example, there shouldn't be delays between the user input and the game's response.

Be sure to include instructions on how to play the game.

Since this is a game, there should be some way to "win" (or at least to achieve a high score before losing!). As such, your game must include some form of scoring system and a way to determine wether that score "wins". Additionally, your game should keep track of the amount of time elapsed that the player has been playing. This can be used as part of the score (e.g., your score can be how long you've kept from losing), or can be an independent value.

The timer should start when the player explicitly begins (either by clicking a "play" button or some other action), and should stop when the player either wins or loses. Both the current time elapsed and the current score should be displayed to the user. Each value must be displayed as a individual DOM elements (not just printed on a Canvas): for example, you can have a "scoreboard" at the top of the page. You should display the time elapsed in a human-readable format (e.g., 5 seconds), updating regularly (every second is fine). The [Moment.js](http://momentjs.com/) library can help with managing and formatting time. You could even display the score as a [progress bar](https://getbootstrap.com/docs/4.0/components/progress/)

Additionally, when the game is over, you will need to notify the user if they won or lost using a modal window with a simple message (like "You won!") and a button that the user can click to play again.

Your game may be client-side only, but if it has to handle two or more players then a server-side component may be needed.

Prerequisites
-------------

1. You've uploaded all the files for your game.
1. You've provided a URL to a working copy of your game. You may be able to host this using GitHub Pages, codepen.io, or some other solution. **URL**:
1. Your implementation includes instructions, the current time and current score, and a final modal window.
1. For a 'C', you've implemented a simple game such as tic-tac-toe or a memory or guessing game, using basic HTML and CSS.
1. For a 'B', you've implemented a graphical game, which might still be quite simple.
1. For an 'A', you've added one or more forms of game complexity, such as:
    - Support for more than one player, with logins and high scores
    - Expanded features, such as "power ups"
    - Additional visual flourishes (fancy transitions or animations)
    - An opponent AI that does more than make random moves
    - Screen reader support


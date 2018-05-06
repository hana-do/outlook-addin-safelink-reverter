Outlook Add-in: SafeLink Reverter
===========================
Work
------------
- Cross-platform Outlook add-in to convert safe links to original links
- Task pane to show results (number of links in email, safe links converted, link texts)
- Convert safe links to original links
- Tested on Outlook Windows and Outlook Web
- Deployed the add-in to a web server --> Download the manifest SafelinkReverter/SafelinkReverterManifest/SafelinkReverter.xml and add to Outlook to use

Not Work
------------
- Replace safe links with original links in the email (I am still stuck on modifying the DOM of the email versus the DOM of my add-in task pane --> UPDATE: cannot modify the DOM in Read mode as bound by Office object so users only have one choice to click on the links in the task pane)
- Convert links in plain text emails in local Outlook (not Outlook Web App) as Outlook does something strange to the body text and JavaScript methods like indexOf, substr, search don't work as we would expect 

Future
------------
- Implement other safe link decryption methods 
- Test the add-in on mobile 

Result
------------
You can see in the screenshot that there is a button to click on to use the add-in. Once the button is clicked, the side bar will appear along with the results. You can see at the left bottom corner that the link embedded in the text is still the safe link as the DOM cannot be modified in Read mode in this approach.

![Screenshot](https://github.com/it483-spring-18/assignment-15-javascript-game-hana-do/blob/master/Screenshot.png)

Reference
------------
https://docs.microsoft.com/en-us/outlook/add-ins/quick-start?tabs=visual-studio
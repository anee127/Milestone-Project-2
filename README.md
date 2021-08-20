# Flag Memory Game

![Flag Memory Game](/assets/images/responsive-design-ms2.png)\

**Live Page**: https://anee127.github.io/Milestone-Project-2/

**This game is part of the second Milestone Project carried out through the Code Institute.**

This webpage was created to launch a simple memory card game that people of all ages can play. The purpose it to match pairs of cards together with the same country’s flag design. The website itself is an example of my skills in HTML, CSS and JavaScript. 

## <u>Table of Contents</u>
[**User Experience (UX)**](#user-experience-ux)
+ [Purpose](#purpose)
+ [User Stories](#user-stories)
+ [Design](#design)
+ [Wireframes](#wireframes)
[Features](#features)
+ [Existing Features](#exsiting-features)
+ [Features left to Include](#features-left-to-include)
[Technologies](#technologies)
+ [Languages](#languages)
+ [Frameworks, Libraries and Programs](#frameworks-libraries-and-programs)
[Deployment](#deployment)
+ [Deploy to Github](#deploy-to-github)
+ [Accessing Code](#accessing-code)
[Testing](#testing)
+ [Testing User Stories](#testing-user-stories)
+ [Validator Checks](#validator-checks)
+ [Responsive Design](#responsive-design)
+ [Additional Testing](#additional-testing)
+ [Bugs](#bugs) 
[Credits](#credits)
+ [Content](#content)
+ [Media](#media)
+ [Acknowledgements](#acknowledgements) 
[Contact](#contact)

## **User Experience (UX)**
### Purpose
The second milestone project idea is to create a memory game webpage for users of all ages to play. With the use of flag images to help users learn the different patterns and colours of flags.

### User Stories
As a user I want to:
1.	easily navigate through a well-designed game through the webpage.
2.	Have access to game rules that are easy to understand.
3.	Test my memory skills and check the time and number of turns taken to match all cards.
4.	Be able to see my score results after completing the game. 
5.	Have the chance to play again.
6.	use the website on any device without problem. 
### Design
**Structure**
-	I opted for a simple webpage design structure with a single title and footer, pop-up modal windows and relevant images for the front face and back face of the cards. I opted for a historical style colour scheme to make the flags stand out more.  
**Colour Scheme**
-	A neutral, washed-out colour scheme in contrast to both dark and light text accordingly to make the buttons and scoring stand out. 
-	The key colours being white, beige, brown and black.
-	The colours used will tie in with the colours of the back image of cards to keep the scheme throughout the website.
![Colour Scheme](assets/colour-scheme-1.png)
Source: [Coolors]( https://coolors.co/8b5527-30150b-e2c6aa-aa8963-ffffff)
**Typography**
The Smythe font is used throughout the webpage, a font that suits the overall historical theme of the webpage. Bold, coloured text is used for emphasis on the heading and for buttons. Sans-serif is the backup font in case the original font does not load onto the website. 
**Images**
A relevant image was used for the back-face of the cards. An old compass design drawn on top of a vintage map. The flag images were taken from a website called [Flagpedia](https://flagpedia.net/download/api) to insert the flags API into the code to render them onto the card faces of the game.
###Wireframes
At the start of the project, I designed the wireframes using Balsamiq. These initial designs made it easier to plan the overall design and structure of the webpage. Some elements of the final webpage are fairly different from these original wireframes.
[Wireframes link] (assets/pdf/MSP2-wireframes.pdf)
## **Features**
### Existing Features
**Game Score Area**
-	The game score area that records the time taken and steps taken while flipping over the cards. The time starts as soon as the user clicks a card. The number of steps is recorded at each click. 
**Memory Game Grid Area**
-	The game area where the matching of cards takes place. There are 16 cards within the grid each showing the compass back-face image, until the user clicks on a card to show a flag image. There are 8 pairs of flags in a random order to match. 
-	When all cards have been matched a modal window will pop-up to congratulate the user completing the game, displaying their score and allowing them to start again by clicking the restart button. 
**Game Buttons Area**
-	The reset button is there to refresh the grid area, the timer and the number of steps, as well as reshuffling the cards. 
-	The how to play button allows a modal where a pop-up message is shown to the user containing information on game instructions. As well as a close button to remove the modal. 
### Features Left to Include
**Future features**
-	To allow users to have a choice between multiple difficulty levels where the number of card increase. 
-	To save game results on a scoreboard so users can compare their own scores to themselves or other users. 
-	To create a flip animation where cards are flipped in a more fun way, to make it more pleasing for users.  
## Technologies Used
### Languages
-	HTML5
-	CSS3
-	JacaScript
###Frameworks, Libraries and Programmes
-	Bootstrap4
-	Fontawesome
-	Github
-	Gitpod
-	Visual Studio Code
-	Balsamiq
-	Google Fonts
-	Coolors 
-             jQuery
#deployment
###deploy-to-github
1. Log in to GitHub and locate the GitHub Repository. 
2. At the top of the Repository (not top of page), locate the "Settings" button on the menu. 
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.
[Link] ()
#testing
###testing-user-stories
- Upon entering the site, users are automatically greeted with the memory game page.
-  The heading is large and readable and contrasts well with the background colour.
- the game rules are easy to access, read and understand. 
- the games timer and steps are readable and remain between the heading and the game grid. 
- the matching of cards is simple and fun for users, it tests their memory skills.
- there is a pop-up window after game is completed with users results so that they can play again to beat their score. 
.

###Testing Usability of Webpage
-This site is primarily for computers but uses Bootstrap to make the layout easier to design and accessible on iPads and phones.
- Viewport tag included in the head of HTML files to tell the browser how to respond to different resolutions, particularly mobile ones.

- Media queries used in the CSS file to target larger devices.

- [**HTML Validator**](https://validator.w3.org/nu/#textarea)

  One warning message received;

> Warning: The document is not mappable to XML 1.0 due to two consecutive hyphens in a comment.
    
Code not altered as hyphens have been used to help structure my HTML code. Six hyphens used for headings with two for sub-headings.

- [**CSS Validator**](https://jigsaw.w3.org/css-validator/#validate_by_input)

  No error or warning messages received.
###additional-testing
The Website was tested on Google Chrome, Internet Explorer and Safari browsers.

- The website was viewed on a variety of devices including Laptop, Macbook, Ipad and IPhones (Version 6,8).

- Friends and family members were asked to review the site to point out any bugs, user experience issues and/or suggestions.
  - Feedback action:
    - 
###bugs

#credits
###content
Bootstrap 4.5: Bootstrap Library used throughout the project, components used include the grid System, carousel, timeline and form templates.
- [Code Institute's](https://codeinstitute.net/) 
- [W3schools.com](https://www.w3schools.com/): 

###media
- hero image was taken from [freepik]( https://www.freepik.com)
- The mock-up image provided at the top of the README.md was created using [About Am I Responsive](http://ami.responsivedesign.is/)
#acknowledgements
- My Mentor for continuous help and support throughout the project.
 - The [Code Institute](https://codeinstitute.net/) Slack Community.
- A friend who has given me continuous support throughout the project.
#contact
Created by @aneesakhan
If you would like to contact me, please use the email below:
Aneesa.khan97@gmail.com
Thanks for visiting.
Aneesa Khan
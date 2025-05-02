# Documentation
For Website page, mainly created to fulfill creative task from university class.

## Files
- index.html
- style.css  

photo exchanging mask - unmask on hover mby

backup for button:
#Menu button {
    width: 125px; /* Clickable area */
    height: 125px; /* Clickable area */
    position: relative; /* Allows for child elements to be positioned */
    overflow: hidden; /* Prevents overflowing content from being clickable */
    background-color: white; /* Just an example */
    border-bottom: 10px solid black; z-index: 5;
}

#Menu button::before {
    content: "";
    position: absolute; top: 0; left: 0; z-index: 6;
    width: 360px; /* Original icon size */
    height: 550px; /* Original icon size */
    background-image: url("./images/Reading.png");
    background-size: cover; /* Makes sure the image is fully visible */
    background-position: center;
    transform: scale(0.5); /* Reduces size to half */
    /*transform-origin: top left; /* Ensures proper scaling reference */
}


---
#### Sources:
<a href="https://iconscout.com/icons/deadpool" class="text-underline font-size-sm" target="_blank">Deadpool</a> by <a href="https://iconscout.com/contributors/iconifyit" class="text-underline font-size-sm" target="_blank">Scott Lewis</a>  

<a href="https://www.reddit.com/r/deadpool/comments/1enr96i/fav_deadpool_quote/">*Quotes*</a>  
<a href="https://xmenmovies.fandom.com/wiki/X-Force"> X-Force pictures</a> 
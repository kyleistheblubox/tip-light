Tip-light
=========

This is a lightweight JS tooltip plugin. I plan on returning to this project in the near future and giving it a complete make-over as well as add a pure CSS version.

Installation is simple, include Font-Awesome in your project, and add the following html structure:
```html
<!-- currently js looks for a <I class=’fa-info-circle’> for our trigger --> 
<i class='fa fa-info-circle fa-2x'>
  <span class='tool-content'>Your text goes here</span>
</i>
<!-- This is simply a blank container for the mobile version. In the future, I will be adding code that will automatically take care of this, but for now, go ahead and include it. -->
<div class='thumb-tip'></div>
```

After you have included the above html, include the tooltip.css and tooltip.js, or simply copy and paste the contents in to one of your own css or js files.

To view a demo goto <a href='http://www.kyleschneiderman.com/examples/tooltip'>http://www.kyleschneiderman.com/examples/tooltip</a>

<h2>Rich text Editor + Shortcuts</h2>
<br>
<br>
<h3> Why I created?</h3>
<p>
The creation of this project aims to help beginners in programming with a readable and simple code for understanding.</p>

<h3>Design<h3>
<br>
<a href="https://getbootstrap.com/">Bootstrap 4.4</a><br>
<a href="https://jquery.com/">Jquery</a>
<br>
<h3>Shortcuts</h3>
<h4>ALT + 1</h4>  <p>font 1</p>
<h4>ALT + 3</h4>  <p>font 3</p>
<h4>ALT + 4</h4>  <p>font 4</p>
<h4>ALT + 5</h4>  <p>font 5</p>
<h4>ALT + 7</h4>  <p>font 7</p>
<br>
<h4>ALT + b</h4>  <b>font BOLD</b>
<h4>ALT + I</h4>  <i>font Italic</i>
<h4>ALT + u</h4>  <u>font Underline</u>
<h4>ALT + s</h4>  <p>font Strike throught</p>
<br>
<h4>ALT + l</h4>  <b>text align left</b>
<h4>ALT + I</h4>  <b>text align center</b>
<h4>ALT + u</h4>  <b>text align right</b>
<br>
<h3>How add new Shortcuts?</h3>
Get <b>KeyCode</b> at key, you can find <a href="https://keycode.info/">here.</a>

Now go to <i>shortcuts.js</i> in <b>const keyboard</b> you add:


keyCode : {
        id: 'id', 
        method:'bold',
        data: null,
        active: false
}

<b>ID</b> : <p>Id of button at HTML</p>
<b>METHOD</b> : <p>you can find more <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document/execCommand">here.</a></p>
<b>data</b> : <p>If have one argument or not, if you'll change the font Size  by exemple you can use <b>data: 1</b> if not you can leave <b>Null</b> </p>

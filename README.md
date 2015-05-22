Type to filter list JQuery plugin
======

##Example Usage

### Function
Filters a list with the entered keyword. It searches through the `<a>`tag given text.

### Demo
Downdload this repo and doubleclick on index.html.

### HTML
One `<input>` field, one `<ul>` tag and as many `<li><a>text</a></li>` tags as you wish. A container to wrap everything up.

    <div class="typeAndFilter">
        <div>
              <input data-origin-value="displayed example" value="displayed example" class="" type="text" />
        </div>
        <ul>
            <li class=""><a href="/example-1/">example 1</a></li>
            <li class=""><a href="/example-2/">example 2</a></li>
            <li class=""><a href="/example-3/">example 3</a></li
        </ul>
    </div>

### JQuery
Use the plugin as follows.

    $('.typeAndFilter').typeToFilter();

### Options
Enter a custom message for the no-result message or turn it off with one of the values `false`, `null` or `''`.

    $('#anyClassOrID').typeToFilter({
        zeroResultMessage: 'Custom Message' <!-- default: ... can not be found! -->
    });

### CSS
The plugin doesn't access any css selectors for it to traverese.

Elements not containing the search key will be assigned with the class `hidden`.

    <li class="hidden"><a href="example">example</a></li>

Add to your css `.hidden{ display: none; }` to hide all tags that are not in the range.

The no result message has the class `noResults`.

    <li class="noResults">Message</li>

### Installation
Download the file and add to your project.

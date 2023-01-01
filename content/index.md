---
title: Default template
layout:
    hide_sidebar: true
---

# Default template

This template is based on [Bulma css](https://bulma.io/). The official courses [documentation page](http://antonmeskildsen.github.io/courses) also uses this template.

## Template files

...

## Built-in shortcodes

### Figure

{{ figure(url=cat.jpg, width="80%", caption="This is my image") }}

Produces a figure for the webpage and a regular markdown image for the notebook.

**Syntax:**
`{{ figure(url=cat.jpg, width="80%", caption="This is my image") }}`

**Parameters:**

- `url`: Path to the image. Relative to the `resources/` folder.
- `width` (optional): Css width property. Any valid css width is valid here.
- `caption`: Figure caption.

**Markdown/notebook output:**
For notebooks, this shortcode produces a regular markdown image code. The template code is:

```markdown
\![{{caption}}]({{project.url_prefix}}/resources/{{url}})
```

### Message

{% message(color=info, title="Optional title") %}
Message box
{% end %}

A box with a title and message. Useful for drawing attention to something.

**Syntax:**

```html
{% message(color=info, title="Optional title") %}
Message box
{% end %}
```

**Parameters:**

- `color`: Bulma color class to use for the box. Bulma is the css library used for the default layout. See
  the [Bulma documentation](https://bulma.io/documentation/overview/colors/) for a list of valid values.
- `title` (optional): Box title. If not provided, the title will be a capitalized version of the `color` value.


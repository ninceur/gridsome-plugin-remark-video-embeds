# Gridsome Remark Video Embeds Plugin

This is a plugin for [Gridsome](https://gridsome.org/)'s chosen markdown engine, [Remark](https://remark.js.org/), and allows you to, currently, embed [YouTube](https://www.youtube.com/) and [Vimeo](https://vimeo.com) videos in [markdown](https://daringfireball.net/projects/markdown/) files.

## Installation

Not currently available on npm, testing/personal use for the moment. See [ryland/gridsome-plugin-remark-youtube](https://github.com/rylandg/gridsome-plugin-remark-youtube) for a solid working Youtube embed implementation for Gridsome. 

## Loading

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        remark: {
          plugins: [
            ['gridsome-plugin-remark-video-embeds']
          ]
        }
      }
    }
  ]
}
```

## Options

There are options to change width of the video, and whether the video is left aligned or centred:

- **width** Default `100%`.  Set to any valid CSS width.
- **align** Default `0`.  The default left aligns the video. Set to `auto` to align the video centrally.

Loading with options:

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        remark: {
          plugins: [
            ['gridsome-plugin-remark-video-embeds', {width: '500px', align: 'auto'}]
          ]
        }
      }
    }
  ]
}
```


## Usage

This plugin borrows the syntax used in the Gatsby Instagram Embed plugin, and my in-progress instagram embed plugin (paused due to Facebook) of using Markdown image alt tags `![youtube](video-id)` to embed posts.

```markdown
`![youtube](dQw4w9WgXcQ)`

Vimeo

`![vimeo](dQw4w9WgXcQ)`
```

## Output

### Video

This is how the video should appear on the screen:

<div style="width: 100%; margin: 0 auto;"><div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe></div></div>

## Generated HTML

This is the HTML that is being generated by the plugin and injected into the page:

```html
<div style="width: 100%; margin: 0 auto;"><div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe></div></div>
```

## License

MIT

## Credit

This plugin is a combination of the [Gatsby Instagram](https://github.com/pamo/gatsby-remark-instagram-embed) embed syntax and [Gridsome Remark Youtube plugin](https://github.com/rylandg/gridsome-plugin-remark-youtube) for handling the Gridsome specific implementation. 

function timeline(args, content) {
    content = hexo.render.renderSync({text: content, engine: 'markdown'})
    // console.log(content)
    content = `<div class="post-timeline">${content}</div>`
    return content
}

hexo.extend.tag.register('timeline', timeline, { ends: true })

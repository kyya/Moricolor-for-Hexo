const Prism = require('node-prismjs');
var hljs = require('highlight.js/lib/highlight')
var titlecase = require('titlecase')

const regex = /<pre><code class="(.*)?">([\s\S]*?)<\/code><\/pre>/igm;
const map = {
    '&#39;': '\'',
    '&amp;': '&',
    '&gt;': '>',
    '&lt;': '<',
    '&quot;': '"'
}
/**
 * Unescape from Marked escape
 * @param {String} str
 * @return {String}
 */
function unescape(str) {
    if (!str || str === null) return ''
    const re = new RegExp('(' + Object.keys(map).join('|') + ')', 'g')
    return String(str).replace(re, (match) => map[match])
}
function formatLine(line, lang) {
    let parsedLine = ''
    if (Prism.languages[lang]) {
        parsedLine = Prism.highlight(line, Prism.languages[lang])
      } else {
        parsedLine = line
      }
    return `<span class="line">${parsedLine}</span>`
}
function MoriPlugin(data) {
    data.content = data.content.replace(regex, (origin, lang, code) => {
        const startTag = `<figure class="highlight code" data-language="${titlecase(lang)}"><pre class="language-${lang}">`
        const endTag = `</pre></figure>`;
        code = unescape(code);
        code = code.trim().split("\n").map(e=>formatLine(e, lang)).join("\n")
        parsedCode = code
        return startTag + parsedCode + endTag;
      });
    return data;
}
hexo.extend.filter.register('after_post_render', MoriPlugin)

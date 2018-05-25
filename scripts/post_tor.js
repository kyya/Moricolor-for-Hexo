hexo.extend.helper.register('post_tor', function(content) {
    let f = ""
    let pattern = /<h[1-5] .*?>(.*?)<\/h[1-5]>/g
    let tor_i = content.match(pattern)

    tor_i.map(tor => {
        // console.log(tor)
        let to = tor.replace(/<a .*?>.*?<\/a>/, "")
        f += to
    })

    f = f.replace(/<h1 .*?>/g, `<span class="tori">`)
    f = f.replace(/<\/h1>/g, `</span><br>`)
    f = f.replace(/<h2 .*?>/g, `<span class="torii">`)
    f = f.replace(/<\/h2>/g, `</span><br>`)
    f = f.replace(/<h3 .*?>/g, `<span class="toriii">`)
    f = f.replace(/<\/h3>/g, `</span><br>`)
    f = f.replace(/<h4 .*?>/g, `<span class="toriiii">`)
    f = f.replace(/<\/h4>/g, `</span><br>`)
    f = f.replace(/<h5 .*?>/g, `<span class="toriiiii">`)
    f = f.replace(/<\/h5>/g, `</span><br>`)
    //this.log(f)
    return `<p>${f}</p>`
});
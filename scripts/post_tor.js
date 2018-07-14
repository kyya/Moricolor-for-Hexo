hexo.extend.helper.register('post_tor', function(content) {
    let f = []
    let header_pattern = /<h([1-5]) .*?<\/h[1-5]>/g
    let data_pattern = /<h([1-5]) id="(.*?)"><a href=".*?" class="headerlink" title=".*?"><\/a>.*?<\/h[1-5]>/
    let headers = content.match(header_pattern)

    headers.map(header => {
        let data = header.match(data_pattern)
        if (data[1]!= undefined && data[2] != undefined)
            f.push({ type: data[1], id: data[2]})
        else throw Error("EmptyHeaderException")
    })

    //console.log(f) // 考虑做成API
    let out = ""
    for (one of f) {
        let tor_class = 'tor' + 'i'.repeat(one.type)
        out += `<a href="#${one.id}" class="${tor_class}">${one.id}</a><br>`
    }
    return out
});

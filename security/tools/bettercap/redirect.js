function onResponse(req, res) {
    if (res.ContentType.indexOf('text/html') == 0) {
        var body = res.ReadBody();
        if (body.indexOf('</head>') != -1) {
            res.Body = body.replace(
                '</head>',
                '<script>window.location.href="http://www.w3schools.com";</script></head>'
            );
        }
    }
}
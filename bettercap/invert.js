function onResponse(req, res) {
    if (res.ContentType.indexOf('text/html') == 0) {
        var body = res.ReadBody();
        if (body.indexOf('</head>') != -1) {
            res.Body = body.replace(
                '</head>',
                '<style>body {transform: scaleX(-1);}</style></head>'
            );
        }
    }
}
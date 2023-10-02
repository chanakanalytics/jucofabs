function callMedia(inputId) {
    var InputBox = document.getElementById(inputId)
    console.log(inputId, InputBox);
    var frame = wp.media({
        title: "Select Image",
        button: { text: "Use Image" },
        multiple: false,
    });
    frame.on("select", function () {
        var attachment = frame
            .state()
            .get("selection")
            .first()
            .toJSON();
        console.log(attachment);
        var attachment_data = {
            title: attachment.title,
            filename: attachment.filename,
            url: attachment.url,
            link: attachment.link,
            alt: attachment.alt,
            author: attachment.author,
            description: attachment.description, 
            caption: attachment.caption,
            name: attachment.name
        };
        InputBox.value = JSON.stringify(attachment_data);
        console.log(JSON.stringify(attachment_data));
        var img = document.querySelector(`.${inputId} img`);
        img.src = attachment.url;
    });
    frame.open();
}
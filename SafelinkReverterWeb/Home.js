var app = (function () {
    "use strict";

    var app = {};

    // Common initialization function (to be called from each page)
    app.initialize = function () {
        $('body').append(
            '<div id="notification-message">' +
            '<div class="padding">' +
            '<div id="notification-message-close"></div>' +
            '<div id="notification-message-header"></div>' +
            '<div id="notification-message-body"></div>' +
            '</div>' +
            '</div>');

        $('#notification-message-close').click(function () {
            $('#notification-message').hide();
        });


        // After initialization, expose a common notification function
        app.showNotification = function (header, text) {
            $('#notification-message-header').text(header);
            $('#notification-message-body').text(text);
            $('#notification-message').slideDown('fast');
        };
    };

    return app;
})();

(function () {
    "use strict";

    // The Office initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();
            Office.context.mailbox.item.body.getAsync("html", processHtmlBody);
        });
    };


    function processHtmlBody(asyncResult) {
        var htmlParser = new DOMParser().parseFromString(asyncResult.value, "text/html");
        var links = htmlParser.getElementsByTagName("a");
        var safeLinkCount = 0;
        var normalLinkCount = 0;
        $.each(
               links,
               function (i, v) {
                    var regExp = new RegExp('/+$');
                    var vInnerText = v.innerText.toLowerCase().trim().replace(regExp, "");
                    var hrefText = v.href.toLowerCase().trim().replace(regExp, "");;
                    var isSafeLink = (hrefText.search('https://na01.safelinks.protection.outlook.com/') != -1);
                    var end = hrefText.search('&data=');
                    var hrefTextConverted = "";

                    if (hrefText.search('http') != -1) {
                        if (isSafeLink) {
                            safeLinkCount++;
                            hrefTextConverted = decodeURIComponent(hrefText.substr(51, end - 51));
                            $("#links-table").append("<div class='ms-Table-row ms-font-xs ms-bgColor-redDark ms-font-color-white'>" +
                                "<span class='ms-Table-cell safe-link'>" + vInnerText + "</span>" +
                                "<span class='ms-Table-cell safe-link'>" + hrefTextConverted + "</span>" +
                                "</div>");
                            app.showNotification("Success", "Converted successfully");
                        }
                        else {
                            normalLinkCount++;
                            $("#links-table").append("<div class='ms-Table-row ms-font-xs ms-font-color-white'>" +
                                "<span class='ms-Table-cell normal-link'>" + vInnerText + "</span>" +
                                "<span class='ms-Table-cell normal-link'>" + hrefText + "</span>" +
                                "</div>");
                        }
                    }
                }
            );

        $('#result').append("Number of links found in this email: " + (normalLinkCount + safeLinkCount) + "<br/>Number of safe links converted (green): " + safeLinkCount);
    }

})();

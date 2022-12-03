var $ = require( "jquery" );

$(function () {

    $("#landing").each(function () {
        var container = $(this);
        var roles_list = container.find("#roles-list");

        if (roles_list.length) {
            roles_list.hide();

            var roles = $.map(roles_list.find("li"), function(role) {
                return $(role).text();
            });

            var roles_display = $("<span>");
            roles_list.after($("<p>")
                .addClass("roles-display")
                .addClass("mb-3")
                .text("I'm\xa0")
                .append(roles_display));

            var i = 0;
            var deleting = false;

            function step() {
                var full_text = roles[i];
                var dt;

                var text_length = roles_display.text().length;

                if (deleting) {
                    text_length--;
                } else {
                    text_length++;
                }

                roles_display.text(full_text.substring(0, text_length));

                if (!deleting && text_length == full_text.length) {
                    dt = 2000;
                    deleting = true;
                } else if (deleting && text_length == 0) {
                    deleting = false;
                    i = (i + 1) % roles.length;
                    dt = 1000;
                } else {
                    dt = 100 - Math.random() * 50;
                    if (deleting) { dt /= 4; }
                }

                setTimeout(step, dt);
            };

            step();

        }

    });

});

$(function () {

    renderTree();

    $('.tree li:has(ul)').addClass('parent_li').find(' > div.card').attr('title', 'Collapse this branch');

    // Expand Children
    $('.tree li.parent_li > div.card > .general >.user-card >.expand-fld').on('click', function (e) {
        var parent = $(this).parents().eq(2);
        var children = $(this).parents().eq(3).find(' > ul > li');
        if (children.is(":visible")) {
            console.log("cacac")
            children.hide('fast');
            parent.attr('title', 'Expand this branch').find(' .user-card .expand-fld').addClass('fa-plus-square').removeClass('fa-minus-square');
        } else {
            console.log("saaxax")
            children.show('fast');
            parent.attr('title', 'Collapse this branch').find(' .user-card .expand-fld').addClass('fa-minus-square').removeClass('fa-plus-square');
        }
        e.stopPropagation();
    });

    // Expand Info
    $('.coords>.expand-info').on('click', function (e) {
        console.log("Expand more info");

        var parentOfExpandInfo = $(this).parents().eq(3);

        if (parentOfExpandInfo.hasClass('toggle-open')) {
            parentOfExpandInfo.removeClass("toggle-open").addClass('toggle-close');
            $(this).addClass('fa-angle-double-right').removeClass('fa-angle-double-left');

        } else {
            parentOfExpandInfo.addClass("toggle-open").removeClass('toggle-close');
            $(this).addClass('fa-angle-double-left').removeClass('fa-angle-double-right');
        }
    });
});

// Render & Draw Tree
function renderTree() {
    $(".tree").html(to_ul(treeObj.verticalTree, 0));
}

// Show all Info checkbox
function toggleShowInfo() {
    var checkBox = document.getElementById("toggleCheckBox");
    if (checkBox.checked == true) {
        // Open All Info
        $('.tree li div.card').addClass("toggle-open").removeClass('toggle-close');
        $('.coords>.expand-info').addClass('fa-angle-double-left').removeClass('fa-angle-double-right');
    } else {
        // Close All Info
        $('.tree li div.card').removeClass("toggle-open").addClass('toggle-close');
        $('.coords>.expand-info').addClass('fa-angle-double-right').removeClass('fa-angle-double-left');
    }
}


// Html Tree Node
function to_ul(childrens, index = 1) {
    var html = "";
    var branch;
    var expand_fld_logo = "<i class='expand-fld fa fa-minus-square'></i>";
    var vertical_sep_line = "<span class='line'></span>";
    html = "<ul>";

    console.log("How many c>>", childrens)
    for (var i = 0, n = childrens.length; i < n; i++) {
        branch = childrens[i];

        if (!branch.childrens) {
            expand_fld_logo = "";
            vertical_sep_line = "";
        }

        html += "<li>" +
            "<div class='card'>" +
            "<div class='general'>" +
            "<div class='user-card'>" +
            expand_fld_logo + vertical_sep_line +
            "<i class='fa fa-user-circle'></i>" +
            "<span class='username-txtfield'>" + branch.name +
            "</span>" +
            "</div>" +
            "</div>" +
            "<div class='additional'>" +
            "<div class='more-info'>" +
            "<div class='coords' style='float:left;'>" +
            "<span>ID: </span>" +
            "<span>" + branch.spn_id + "</span>" +
            "</div>" +
            "<div class='coords' style='float:right;'>" +
            "<span>" + branch.status + "</span>" +
            "<i class='expand-info fa fa-angle-double-right'></i>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";

        if (branch.childrens) {
            html += to_ul(branch.childrens);
        } else {
            html += "</li>";
        }
    }

    html += "</li></ul>";
    return html;
}

// sample json 
var treeObj = {
    "verticalTree": [{
        "id": "1",
        "name": "Loo",
        "spn_id": "M100000782",
        "status": "Active",
        "childrens": [{
            "id": "2",
            "name": "Lim",
            "spn_id": "M200000783",
            "status": "Active",
            "childrens": [{
                "id": "3",
                "name": "YC",
                "spn_id": "M300000784",
                "status": "Active",
            }, {
                "id": "4",
                "name": "Koo",
                "spn_id": "M400000786",
                "status": "Active",
            }]
        }, {
            "id": "5",
            "name": "Peter",
            "spn_id": "M500000789",
            "status": "Deactive",
        }]
    }]
};
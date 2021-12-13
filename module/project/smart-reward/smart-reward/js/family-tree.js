$(function () {

    renderTree();

    $('.myfr-tree li:has(ul)').addClass('parent_li').find(' >.member-tree-card').attr('title', 'Collapse this branch');

    // Expand Children
    $('.myfr-tree li.parent_li > div.member-tree-card > .more-info > .expand-fld').on('click', function (e) {
        var parent = $(this).parents().eq(1);
        var children = $(this).parents().eq(2).find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            parent.attr('title', 'Expand this branch').find(' .more-info .expand-fld').addClass('fa-custom-plus-icons').removeClass('fa-custom-minus-icons');
        } else {
            children.show('fast');
            parent.attr('title', 'Collapse this branch').find(' .more-info .expand-fld').addClass('fa-custom-minus-icons').removeClass('fa-custom-plus-icons');
        }
        e.stopPropagation();
    });
});

// Render & Draw Tree
function renderTree() {
    $(".myfr-tree").html(to_ul(treeObj.verticalTree, 0));
}


// Html Tree Node
function to_ul(childrens, index = 1) {
    var html = "";
    var branch;
    var expand_fld_logo = "<i class='expand-fld fa fa-custom-minus-icons'></i>";
    // var expand_fld_logo = "<img class='bolder-expand-icons' src='assets/images/icons/bolder-minus.svg' alt='Bolder Minus'>";

    html = "<ul>";

    console.log("How many c>>", childrens)
    for (var i = 0, n = childrens.length; i < n; i++) {
        branch = childrens[i];

        if (!branch.childrens) {
            expand_fld_logo = "";
        }

        html += "<li>" +
            "<div class='member-tree-card'>" +
            "<div class='d-flex more-info align-items-center'>" +
            expand_fld_logo+
            "<div class='left-content mr-auto text-left pl-3'>" +
            "<span class='txt-orange font-weight-bold'>" + branch.name + "</span>" + "<br>" +
            "<span>" + "ID : " + branch.member_id + "</span>" +
            "</div>" +
            "<div class='right-content text-right'>" +
            "<span>" + branch.date + "</span>" + "<br>" +
            "<span class='txt-green font-weight-bold'>" + branch.point + "</span>" +
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
        "name": "Jessy Yong",
        "member_id": "M100000782",
        "date": "01/05/2020",
        "point": "+10 Point",
        "childrens": [{
            "id": "2",
            "name": "Lim",
            "member_id": "M200000783",
            "date": "01/05/2020",
            "point": "+10 Point",
            "childrens": [{
                "id": "3",
                "name": "YC",
                "member_id": "M300000784",
                "date": "01/05/2020",
                "point": "+10 Point",
            }, {
                "id": "4",
                "name": "Koo",
                "member_id": "M400000786",
                "date": "01/05/2020",
                "point": "+10 Point",
            }]
        }, {
            "id": "5",
            "name": "Peter",
            "member_id": "M500000789",
            "date": "01/05/2020",
            "point": "+10 Point",
        }]
    }]
};
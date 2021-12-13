function cd_panel(cd_panel_dataObj) {
    var html_panel = "";
    var cd_data;
    for (var i = 0, n = cd_panel_dataObj.sidePanel.length; i < n; i++) {
        cd_data = cd_panel_dataObj.sidePanel[i];
        if (cd_data) {
            html_panel += '<div class="cd-panel cd-panel--from-right js-cd-panel-main">' +
                '<header class="cd-panel__header">' +
                '<a href="#0" class="cd-panel__close js-cd-close">Close</a>' +
                '</header>' +
                '<div class="cd-panel__container">' +
                '<div class="cd-panel__content">' +
                '<div class="exp-info-data">' +
                '<div class="exp-txt-color">' +
                '<div class="exp-center info-header">' +
                '<h2>Profile</h2><br><br>' +
                '<div class="cardheader"> </div>' +
                '<figure class="exp-legend-chart" data-percent="100">' +
                '<figcaption>' +
                '<span class="' + cd_data.rank_txt_color + ' legend-txt">' + cd_data.rank_txt + '</span>' +
                '</figcaption>' +
                '<img class="badge ' + cd_data.rank_circle + '" src="' + cd_data.rank_img + '">' +
                '<svg width="200" height="200">' +
                '<circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />' +
                '</svg>' +
                '</figure>' +
                '</div><br>' +
                '<div class="info-details-container">' +
                '<div class="exp-center">' +
                '<h2 style="margin: 0; color:#E5E5E3;">' + cd_data.distr_name + '</h2>' +
                '<span style="color:#E5E5E3; font-size: 13px;">- ' + cd_data.distr_id + ' -</span>' +
                '<br>' +
                '<span style="color:#7B7776;">' + cd_data.distr_cnty + '</span>' +
                '<div class="row" style="padding-top: 30px;">' +
                '<div class="column">' +
                '<h3 style="margin: 0; color:#E5E5E3;">' + cd_data.ttl_mbr + '</h3>' +
                '<span style="font-size: 13px; color:#7B7776;">TOTAL MEMBERS</span>' +
                '</div>' +
                '<div class="column">' +
                '<h3 style="margin: 0; line-height: normal; letter-spacing: normal; color:#E5E5E3;">' + cd_data.sponr_id + '</h3>' +
                '<span style="font-size: 13px; color:#7B7776;">SPONSOR ID</span>' +
                '</div>' +
                '<div class="column">' +
                '<h3 style="margin: 0; line-height: normal; letter-spacing: normal; color:#E5E5E3;">' + cd_data.join_date + '</h3>' +
                '<span style="font-size: 13px; color:#7B7776;">DATE</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<hr><br><br><br>' +
                '<div class="row">' +
                '<div class="column" style="text-align: left;">' +
                '<span style="color:#E5E5E3;">SPONSOR NAME</span>' +
                '</div>' +
                '<div class="column" style="text-align: right;">' +
                '<span style="color:#E5E5E3;">' + cd_data.sponr_name + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="column" style="text-align: left;">' +
                '<span style="color:#E5E5E3;">TOTAL ACTIVE CS</span>' +
                '</div>' +
                '<div class="column" style="text-align: right;">' +
                '<span style="color:#E5E5E3;">' + cd_data.ttl_active_cs + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="column" style="text-align: left;">' +
                '<span style="color:#E5E5E3;">TOTAL SPONSOR</span>' +
                '</div>' +
                '<div class="column" style="text-align: right;">' +
                '<span style="color:#E5E5E3;">' + cd_data.ttl_sponr + '</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
        } else {
            console.log("cd_data >> EMPTY !!") 
        }
    }
    return html_panel;
}

// render Side Panel
function renderCdSidePanel() {
    console.log($("#cd-side-panel").html(cd_panel(cd_panel_dataObj)));
    $("#cd-side-panel").html(cd_panel(cd_panel_dataObj));
}
// end of render Side Panel

function to_ul(childrens, index = 1) {
    var html = "";
    var branch;
    var info_u = "";
    var info_p = "";
    if (index == 0) {
        html = "<ul id='org' style='display:none;'>"
    } else {
        html = "<ul>";
    }

    for (var i = 0, n = childrens.length; i < n; i++) {
        branch = childrens[i];
        if (branch.data != "empty") {
            // fornt info u / p icon
            if (branch.frnt_info_u) {
                info_u = "<img src='" + branch.frnt_info_u + "' height='18' width='18' style='margin: 5px;'>";
            }
            if (branch.frnt_info_p) {
                info_p = "<img src='" + branch.frnt_info_p + "' height='18' width='18' style='margin: 5px;'>";
            }
            // end of fornt info u / p icon

            // drawing circle node container
            html += "<li>" +
                "<div class='circle-container' data-id=" + branch.id + ">" +
                "<img src='img/info.svg' height='30' width='30' style='cursor: pointer;' class='cc-fliped-icon'>" +
                "<div class='outer-ring'></div>" +
                "<div class='card'>" +
                "<div class='front'>" +
                "<img src='" + branch.frnt_rank_img + "' height='70' width='70' style='margin-top: 18px; cursor: pointer;' class='js-cd-panel-trigger " + branch.rank_hlgt + "' data-panel='main'>" +
                "<br>" +
                "<span style='font-size:15px; color: #FFFFFF;' >" + branch.frnt_info_distr_name + "</span>" +
                "<br>" +
                "<span style='font-size: 12px; color: #7B7776;'>" + branch.frnt_info_distr_id + "</span>"
                + "<br>" + info_u + info_p +
                "<br>" +
                "<div class='plus-minus-toggle'></div>" +
                "</div>" +
                "<div class='back' style='line-height: 0.5'>" +
                "<div style='margin-top:36px;'>" +
                "<p style='font-size: 18px; color:#E5E5E3; margin-bottom: 5px;'>" + branch.bck_info_distr_name + "</p>" +
                "<p style='font-size: 12px; color:#7B7776; margin-bottom: 18px;'>" + branch.bck_info_cnty + "</p>" +
                "<p style='font-size: 9px; color:#7B7776; margin-bottom: 5px;'>TOTAL MEMBERS</p>" +
                "<p style='font-size: 12px; color:#E5E5E3; margin-bottom: 5px;'>" + branch.bck_info_ttl_mbr + "</p>" +
                "<p style='font-size: 9px; color:#7B7776; margin-bottom: 5px;'>SPONSOR ID</p>" +
                "<p style='font-size: 12px; color:#E5E5E3; margin-bottom: 5px;'>" + branch.bck_info_sponr_id + "</p>" +
                "<p style='font-size: 9px; color:#7B7776; margin-bottom: 5px;'>DATE</p>" +
                "<p style='font-size: 12px; color:#E5E5E3; margin-bottom: 5px;'>" + branch.bck_info_join_date + "</p>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>";
            // end of drawing circle node container

        } else {
            // empty circle node container - register node
            html += "<li>" +
                "<div class='circle-container'>" +
                "<div class='outer-ring'></div>" +
                "<div class='card-register'>" +
                "<div class='front' style='background-image:url(img/register.png); background-repeat: no-repeat; background-position: center; '>" +
                "<a class='btn btn-sm animated-button thar-two'>Register</a>" +
                "</div>" +
                "</div>" +
                "</div>";
            // end of node container - register node
        }

        if (branch.childrens) {
            html += to_ul(branch.childrens);
        } else {
            html += "</li>";
        }
    }

    html += "</li></ul>";
    return html;
}

// render and draw tree
function renderTree() {
    $("#tree").html(to_ul(treeObj.familyTree, 0));
}
// end of render and draw tree

// Sample Json data
function addNewJsonObject(dataId) {
    const data = [{
        "id": "8",
        "rank_hlgt": "gold",
        "frnt_rank_img": "img/gold.png",
        "frnt_info_distr_name": "Logan",
        "frnt_info_distr_id": "M100000027",
        "bck_info_distr_name": "Logan",
        "bck_info_cnty": "MY",
        "bck_info_ttl_mbr": "3767",
        "bck_info_spon_id": "M100000785",
        "bck_info_join_date": "2018/08/08",
        "childrens": []
    }, {
        "id": "9",
        "rank_hlgt": "gold",
        "frnt_rank_img": "img/gold.png",
        "frnt_info_distr_name": "YI JIA",
        "frnt_info_distr_id": "M100000027",
        "bck_info_distr_name": "YI JIA",
        "bck_info_cnty": "MY",
        "bck_info_ttl_mbr": "3767",
        "bck_info_spon_id": "M100000785",
        "bck_info_join_date": "2018/08/08",
        "childrens": []
    }];

    var resultJson = findById(treeObj, dataId, data);
    renderTree();
}
// end of Sample json data

function findById(treeObj, dataId, data) {
    var result;
    for (var p in treeObj) {
        if (treeObj.id === dataId) {
            for (let x in data) {
                treeObj.childrens.push(data[x]);
            }
            return treeObj;
        } else {
            if (typeof treeObj[p] === 'object') {
                result = findById(treeObj[p], dataId, data);
                if (result) {
                    return result;
                }
            }
        }
    }
    return result;
}

function toggleShowInfo() {
    var checkBox = document.getElementById("toggleCheckBox");
    if (checkBox.checked == true) {
        flipback();
    } else {
        flipfront();
    }
}

function goTop() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}

function goBottom() {
    console.log("Call Bottom Web Service");
}

function goDownLeft() {
    console.log("Call Down Left Web Service");
}

function goDownRight() {
    console.log("Call Down Right Web Service");
}

// function reloadTree() {
//     (document.getElementById("sipnner-loading")).style.display = "block";
//     $("#family-tree-chart").empty();

//     setTimeout(function () {
//         addNewJsonObject();
//         $("#org").jOrgChart({
//             chartElement: '#family-tree-chart',
//         });
//         (document.getElementById("sipnner-loading")).style.display = "none";

//     }, 2000);
// }



//----- Sample Json -----//

// sample json SidePanel
var cd_panel_dataObj = {
    "sidePanel": [{
        "rank_txt": "Platinum",
        "rank_txt_color": "platinum-txt-color",
        // member-txt-color, bronze-txt-color, silver-txt-color, gold-txt-color
        "rank_circle": "platinum-circle",
        // member-circle, bronze-circle, silver-circle, gold-circle
        "rank_img": "img/platinum.png",
        "distr_name": "MILLIONAIRE",
        "distr_id": "M100000027",
        "distr_cnty": "Malaysia, Kuala Lumpur",
        "ttl_mbr": "3767",
        "sponr_id": "M100000785",
        "join_date": "2018/08/08",
        "sponr_name": "Mohamad Azhar Bin Tukiran",
        "ttl_active_cs": "9683",
        "ttl_sponr": "0"
    }]
}
// end of sample json SidePanel

// sample json tree Family Tree
var treeObj = {
    "familyTree": [{
        "id": "1",
        "rank_hlgt": "platinum",
        "frnt_rank_img": "img/platinum.png",
        "frnt_info_distr_name": "MILLIONAIRE",
        "frnt_info_distr_id": "M100000027",
        "frnt_info_u": "img/letter-u.png",
        "frnt_info_p": "img/letter-p.png",
        "bck_info_distr_name": "MILLIONAIRE",
        "bck_info_cnty": "MY",
        "bck_info_ttl_mbr": "3767",
        "bck_info_sponr_id": "M100000785",
        "bck_info_join_date": "2018/08/08",
        "childrens": [{
            "id": "2",
            "rank_hlgt": "gold",
            "frnt_rank_img": "img/gold.png",
            "frnt_info_distr_name": "Sammy",
            "frnt_info_distr_id": "M100000027",
            "frnt_info_u": "",
            "frnt_info_p": "",
            "bck_info_distr_name": "Sammy",
            "bck_info_cnty": "MY",
            "bck_info_ttl_mbr": "3767",
            "bck_info_sponr_id": "M100000785",
            "bck_info_join_date": "2018/08/08",
            "childrens": [{
                "id": "3",
                "rank_hlgt": "silver",
                "frnt_rank_img": "img/silver.png",
                "frnt_info_distr_name": "Alice",
                "frnt_info_distr_id": "M100000027",
                "frnt_info_u": "img/letter-u.png",
                "frnt_info_p": "",
                "bck_info_distr_name": "Alice",
                "bck_info_cnty": "MY",
                "bck_info_ttl_mbr": "3767",
                "bck_info_sponr_id": "M100000785",
                "bck_info_join_date": "2018/08/08",
                "childrens": [{
                    "id": "4",
                    "rank_hlgt": "bronze",
                    "frnt_rank_img": "img/bronze.png",
                    "frnt_info_distr_name": "Mike",
                    "frnt_info_distr_id": "M100000027",
                    "frnt_info_u": "",
                    "frnt_info_p": "",
                    "bck_info_distr_name": "Mike",
                    "bck_info_cnty": "MY",
                    "bck_info_ttl_mbr": "3767",
                    "bck_info_sponr_id": "M100000785",
                    "bck_info_join_date": "2018/08/08",
                    "childrens": [{
                        "data": "empty",
                    }, {
                        "data": "empty",
                    }]
                }, {
                    "id": "5",
                    "rank_hlgt": "member",
                    "frnt_rank_img": "img/member.png",
                    "frnt_info_distr_name": "Iris",
                    "frnt_info_distr_id": "M100000027",
                    "frnt_info_u": "",
                    "frnt_info_p": "img/letter-p.png",
                    "bck_info_distr_name": "Iris",
                    "bck_info_cnty": "MY",
                    "bck_info_ttl_mbr": "3767",
                    "bck_info_sponr_id": "M100000785",
                    "bck_info_join_date": "2018/08/08",
                    "childrens": [{
                        "data": "empty",
                    }, {
                        "data": "empty",
                    }]
                }]
            }, {
                "id": "6",
                "rank_hlgt": "silver",
                "frnt_rank_img": "img/silver.png",
                "frnt_info_distr_name": "Kim",
                "frnt_info_distr_id": "M100000027",
                "frnt_info_u": "",
                "frnt_info_p": "img/letter-p.png",
                "bck_info_distr_name": "Kim",
                "bck_info_cnty": "MY",
                "bck_info_ttl_mbr": "3767",
                "bck_info_sponr_id": "M100000785",
                "bck_info_join_date": "2018/08/08",
                "childrens": [{
                    "data": "empty",
                }, {
                    "data": "empty",
                }]
            }]
        }, {
            "id": "7",
            "rank_hlgt": "gold",
            "frnt_rank_img": "img/gold.png",
            "frnt_info_distr_name": "Peter",
            "frnt_info_distr_id": "M100000027",
            "frnt_info_u": "img/letter-u.png",
            "frnt_info_p": "img/letter-p.png",
            "bck_info_distr_name": "Peter",
            "bck_info_cnty": "MY",
            "bck_info_ttl_mbr": "3767",
            "bck_info_sponr_id": "M100000785",
            "bck_info_join_date": "2018/08/08",
            "childrens": [{
                "data": "empty",
            }, {
                "id": "10",
                "rank_hlgt": "member",
                "frnt_rank_img": "img/member.png",
                "frnt_info_distr_name": "YAP",
                "frnt_info_distr_id": "M100000027",
                "frnt_info_u": "",
                "frnt_info_p": "",
                "bck_info_distr_name": "YAP",
                "bck_info_cnty": "MY",
                "bck_info_ttl_mbr": "3767",
                "bck_info_sponr_id": "M100000785",
                "bck_info_join_date": "2018/08/08",
                "childrens": []
            }]
        }]
    }]
};
// end of sample json Family Tree




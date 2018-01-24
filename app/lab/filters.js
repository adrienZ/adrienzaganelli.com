var tech_stacks = [];
var type_stacks = [];
var years_stacks = [];
var role_stacks = [];
var duration_stacks = [];
var partners_stacks = [];
var error_message = '<p style="width:100%;color:white;text-align:center;line-height:95vh;font-size:3em">NO RESULT</p>'



var DomManipulator = function () {
  this.id = function (id) {
      return document.getElementById(id);
  }
  this.el = function (el) {
      return document.querySelector(el);
  }
  this.class = function (elClass) {
      return document.getElementsByClassName(elClass);
  }
  this.tag = function (tag) {
      return document.getElementsByTagName(tag);
  }
  this.all = function(els) {
      return document.querySelectorAll(els);
  }
}

var $ = new DomManipulator();

//
// $.id('close_projects_explorer').addEventListener('click', function(e) {
//     e.preventDefault();
//     $.el('.project-explorer').classList.add('hide');
//     $.el('body').style= '';
// });
// [].forEach.call($.class('btn-all-works'), function(btn) {
//     btn.addEventListener('click', function(e) {
//         e.preventDefault();
//         $.el('.project-explorer').classList.remove('hide');
//         $.el('body').style = 'overflow:hidden';
//
//     });
// });


for (var project_name in projects) {
    // skip loop if the property is from prototype
    if (!projects.hasOwnProperty(project_name)) continue;

    var p = projects[project_name];
    console.log(p);

    //build grid
    var template_thumbnail =
        '<div>' +
        '<a href="focus.html#' + p.id + '">' +
        '<img src="src/img/' + p.id + '.jpg" alt="' + p.name + '">' +
        '</a>' +
        '<div class="infos">' +
        '<p class="title">' + p.name + '</p>' +
        '<a href="focus.html#' + p.id + '" class="go-to">Details</a>' +
        '</div>' +
        '</div>';
    $.el('.project-explorer .content .grid-projects').innerHTML += template_thumbnail;

    //build chekboxes
    //years
    if (years_stacks.indexOf(p.year) === -1) {
        years_stacks.push(p.year);
        $.el('.project-explorer aside .years').innerHTML += '<input data-category="years" id="choice_' + p.year + '"type="checkbox" value="' + p.year + '" >  <label for="choice_' + p.year + '">' + p.year + '</label><br>';
    }
    //duration
    if (duration_stacks.indexOf(p.duration) === -1) {
        duration_stacks.push(p.duration);
        $.el('.project-explorer aside .duration').innerHTML += '<input data-category="duration" id="choice_' + p.duration + '" type="checkbox" value="' + p.duration + '" >  <label for="choice_' + p.duration + '">' + p.duration + '</label><br>';

    }
    //role
    if (role_stacks.indexOf(p.role) === -1) {
        role_stacks.push(p.role);
        $.el('.project-explorer aside .role').innerHTML += '<input data-category="role" id="choice_' + p.role + '" type="checkbox" value="' + p.role + '" >  <label for="choice_' + p.role + '">' + p.role + '</label><br>';

    }
    //tools
    p.tools.map(function(tool) {
        if (tech_stacks.indexOf(tool) === -1) {
            tech_stacks.push(tool);
            $.el('.project-explorer aside .tech').innerHTML += '<input data-category="tool" id="choice_' + tool + '" type="checkbox" value="' + tool + '" >  <label for="choice_' + tool + '">' + tool + '</label><br>';

        }
    });
    //partners
    p.partners.map(function(partner) {
        if (partners_stacks.indexOf(partner) === -1) {
            partners_stacks.push(partner);
            $.el('.project-explorer aside .partner').innerHTML += '<input data-category="partner" id="choice_' + partner + '" type="checkbox" value="' + partner + '" >  <label for="choice_' + partner + '">' + partner + '</label><br>';

        }
    });
    //tags
    p.tags.map(function(type) {
        if (type_stacks.indexOf(type) === -1) {
            type_stacks.push(type);
            $.el('.project-explorer aside .type').innerHTML += '<input data-category="type" id="choice_' + type + '" type="checkbox" value="' + type + '" >  <label for="choice_' + type + '">' + type + '</label><br>';

        }
    });

}
$.el('.project-explorer .filters').style.height = ($.el('.project-explorer .content .grid-projects').clientHeight + 75) + "px";
$.el('.project-explorer .content .grid-projects').style.height = ($.el('.project-explorer .content .grid-projects').clientHeight) + "px";
window.onresize = function() {
    $.el('.project-explorer .filters').style.height = ($.el('.project-explorer .content .grid-projects').clientHeight + 75) + "px";
    $.el('.project-explorer .content .grid-projects').style.height = ($.el('.project-explorer .content .grid-projects').clientHeight) + "px";


};


function buildExplorerGrid(items) {
    var tech_temp = [];
    var type_temp = [];
    var years_temp = [];
    var role_temp = [];
    var duration_temp = [];
    var partners_temp = [];
    $.el('.project-explorer .content .grid-projects').innerHTML = "";

    for (var project_name in items) {
        // skip loop if the property is from prototype
        if (!items.hasOwnProperty(project_name)) continue;

        var p = items[project_name];


        //build grid
        var template_thumbnail =
            '<div class="fadeInLeft project_thumb">' +
            '<a href="focus.html#' + p.id + '">' +
            '<img src="src/img/' + p.id + '.jpg" alt="' + p.name + '">' +
            '</a>' +
            '<div class="infos">' +
            '<p class="title">' + p.name + '</p>' +
            '<a href="focus.html#' + p.id + '" class="go-to">Details</a>' +
            '</div>' +
            '</div>';
        $.el('.project-explorer .content .grid-projects').innerHTML += template_thumbnail;
    }
}



var c = $.all('[data-category]');


function initFilters() {
    var params = [];
    var arr = Object.keys(projects).map(function(key) {
        return projects[key];
    });
    projects = arr;

    [].forEach.call(c, function(input) {
        if (input.checked) {

            var category = input.getAttribute("data-category");
            switch (category) {
                case "partner":
                    category = "partners";
                    break;
                case "tool":
                    category = "tools";
                    break;
                case "type":
                    category = "tags";
                    break;
                case "years":
                    category = "year";
                    break;
            }
            one_param = {
                category: category,
                value: input.value,
            }
            params.push(one_param);
        }
    });

    var result = projects.map(function(p) {
        for (var j = 0; j < params.length; j++) {
            if (typeof p[params[j].category] === "object" && p[params[j].category].indexOf(params[j].value) >= 0 )
                return p;
                if (typeof p[params[j].category] === "number" && p[params[j].category] === parseInt(params[j].value) )
                return p;

        }
    }).filter(function(item){
      return item !== undefined
    })
    if(result.length > 0)
      buildExplorerGrid(result);
    else
    $.el('.project-explorer .content .grid-projects').innerHTML =error_message;

}


[].forEach.call(c, function(input) {
    input.onchange = initFilters;
});


console.log(projects);

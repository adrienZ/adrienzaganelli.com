var DomManipulator = function() {
  this.id = function(id) {
    return document.getElementById(id);
  }
  this.el = function(el) {
    return document.querySelector(el);
  }
  this.class = function(elClass) {
    return document.getElementsByClassName(elClass);
  }
  this.tag = function(tag) {
    return document.getElementsByTagName(tag);
  }
  this.all = function(els) {
    return document.querySelectorAll(els);
  }
}

var $ = new DomManipulator();

function Grid(projects) {
  this.data = projects;
  this.$ = {};
  this.$.container = $.el('.grid .container');

  this.renderLabel = function(key) {
    return [
      '<div class="label-projects '+key.toLowerCase().replace(' ', '-').replace(' ', '-') +'">',
      '<img src="img/' + key.toLowerCase().replace(' ', '-').replace(' ', '-') + '.jpg" alt="" class="icon">',
      '<h3 class="label-name">' + key + ' projects\'s</h3>',
      '</div>'
    ].join('');
  }
  this.renderItem = function(obj) {
    return [
      '<div class="item">',
      '<ul class="tags">',
      (function(tags){
          var res = '';
          tags.forEach(function(t){
              res += '<li>'+t+'</li>'
          });
          return res;
      })(obj.tags),
      '</ul>',
      '<a target="_blank" rel="noopener noreferrer" href="'+obj.url+'">',
      '<div class="illu" style="background: url(img/'+obj.name.toLowerCase().replace(' ', '_').replace(' ', '_').replace(' ', '_')+'.jpg) center center no-repeat"></div>',
      '</a>',
      '<div class="text">',
      '<h5 class="truncate">'+obj.name+'</h5>',
      '<a target="_blank" rel="noopener noreferrer" href="'+obj.url+'">visit</a>',
      '</div>',
      '</div>'
    ].join('');
  }

  for (key in this.data) {
    var l = this.data[key];

    var section = document.createElement('section');
    section.className = 'project-group';

    section.innerHTML += this.renderLabel(key);
    this.$.container.appendChild(section);

    var grid = document.createElement('div');
    grid.className = 'label-grid';

    for (name in l) {
      var p = l[name];
      grid.innerHTML += this.renderItem(p);
    }
    section.appendChild(grid);

  }

}

var grid = new Grid(projects);
console.log(grid);

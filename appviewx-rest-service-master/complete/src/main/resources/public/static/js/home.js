$(document).ready(function () {
	
	jQuery("time.timeago").timeago();
	
	function makeUL(lst) {
		var html = [];                
		html.push('<ul>');
		$(lst).each(function() { html.push(makeLI(this)) });
		html.push('</ul>');      
		return html.join("\n");
	}
					
	function makeLI(elem) {
		var html = [];                
		html.push('<li><i class="far fa-circle" style="color:red"></i>&nbsp;&nbsp;<i class="far fa-square"></i>');
		html.push(elem.name);
		if (elem !== null && typeof(elem)=="object")
			html.push('<div>' + makeUL(elem.objects) + '</div>');
		html.push('</li>');
		return html.join("\n");
	}
	var content = $("#collapse-example");
	
	$.getJSON("http://localhost:8080/group/all")
    .done(function(data) {
        //console.log(" Data >>"+data);
		$.each(data, function () {
		var html = '<br/>';
		html += '<div class="card" id="page"'+this.id+'>';
		html += '<div class="progress-bar" role="progressbar" style="width: 100%; height: 5px;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>'
		html += '<h7 class="card-header"><a data-toggle="collapse" href=#'+this.name+' aria-expanded="true" ';
		html += 'aria-controls=#'+this.name+' id="heading-example" class="d-block"><i class="fa fa-chevron-down ';
		html += 'pull-right"></i>'+this.name+'</a>';
		html += '</h7>';
		html += '<div id=' + this.name;
		html += ' class="collapse show "';
		html += 'aria-labelled by="heading-example"><div class="card-body">';        
		content.append(html + makeUL(this));
		content.append('</div>');
    });
	
	}) ;
	
	//Filter/Search group and objects
	$("#searchInput").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#collapse-example *").filter(function() {
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	
	//Pagination controller
	$('#paginationUl').twbsPagination({
	   totalPages: 5,
	   startPage: 1,
	   visiblePages: 5,
	   initiateStartPageClick: true,
		hideOnlyOnePage: false,
		href: false,
		pageVariable: '{{page}}',
		totalPagesVariable: '{{total_pages}}',
		page: null,
		first: 'First',
		prev: 'Previous',
		next: 'Next',
		last: 'Last',
		loop: false,
		beforePageClick: null,
		onPageClick: function (event, page) {
		$('.page-active').removeClass('page-active');
		$('#page'+page).addClass('page-active');
	  },
		paginationClass: 'pagination',
		nextClass: 'page-item next',
		prevClass: 'page-item prev',
		lastClass: 'page-item last',
		firstClass: 'page-item first',
		pageClass: 'page-item',
		activeClass: 'active',
		disabledClass: 'disabled',
		anchorClass: 'page-link'  
	});
	
});

//Sample json response
/*var jsondata = [
				{
				  "id": 1,
				  "text": "Default",
				  "children": [
					{
					  "id": 3,
					  "text": "Obj3",
					  "status": "ENABLED",
					  "colorCode": "GREEN",
					  "children": [
						{
						  "id": 10,
						  "text": "Obj1",
						  "status": "ENABLED",
						  "colorCode": "GREEN",
						  "children": null
						},
						{
						  "id": 20,
						  "text": "Obj2",
						  "status": "ENABLED",
						  "colorCode": "GREEN",
						  "children": null
						}
					  ]
					},
					{
					  "id": 5,
					  "text": "Obj5",
					  "status": "DISABLED",
					  "colorCode": "RED",
					  "children": [
						{
						  "id": 4,
						  "text": "Obj4",
						  "stat	us": "DISABLED",
						  "colorCode": "RED",
						  "children": null
						}
					  ]
					}
				  ]
				},
				{
				  "id": 10,
				  "text": "GroupOne",
				  "children": [
					{
					  "id": 3,
					  "text": "Obj3",
					  "status": "ENABLED",
					  "colorCode": "GREEN",
					  "children": [
						{
						  "id": 10,
						  "text": "Obj1",
						  "status": "ENABLED",
						  "colorCode": "GREEN",
						  "children": null
						},
						{
						  "id": 20,
						  "text": "Obj2",
						  "status": "ENABLED",
						  "colorCode": "GREEN",
						  "children": null
						}
					  ]
					},
					{
					  "id": 5,
					  "text": "Obj5",
					  "status": "DISABLED",
					  "colorCode": "RED",
					  "children": [
						{
						  "id": 4,
						  "text": "Obj4",
						  "stat	us": "DISABLED",
						  "colorCode": "RED",
						  "children": null
						}
					  ]
					}
				  ]
				}				
			];  */
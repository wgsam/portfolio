function cdSidePanel() {
	// Slide In Panel - by CodyHouse.co
	var panelTriggers = document.getElementsByClassName('js-cd-panel-trigger');

	if (panelTriggers.length > 0) {
		for (var i = 0; i < panelTriggers.length; i++) {
			(function (i) {
				var panelClass = 'js-cd-panel-' + panelTriggers[i].getAttribute('data-panel'),
					panel = document.getElementsByClassName(panelClass)[0];

				// open panel when clicking on trigger btn
				panelTriggers[i].addEventListener('click', function (event) {
					event.preventDefault();
					addClass(panel, 'cd-panel--is-visible');
				});

				//close panel when clicking on 'x' or outside the panel
				panel.addEventListener('click', function (event) {
					if (hasClass(event.target, 'js-cd-close') || hasClass(event.target, panelClass)) {
						event.preventDefault();
						removeClass(panel, 'cd-panel--is-visible');
					}
				});
			})(i);
		}
	}
}

function hasClass(el, className) {
	if (el.classList) return el.classList.contains(className);
	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
function addClass(el, className) {
	if (el.classList) el.classList.add(className);
	else if (!hasClass(el, className)) el.className += " " + className;
}
function removeClass(el, className) {
	if (el.classList) el.classList.remove(className);
	else if (hasClass(el, className)) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ');
	}
}

// highlight ranking function
function deselectedAllRank() {
	$('.circle-container').each(function () {
		if ($(this).hasClass('box-highlight') && $(this).hasClass('bounce-effect')) {
			$(this).removeClass('box-highlight bounce-effect');
		}
	});
}

function showRankPlatinum() {
	$('.js-cd-panel-trigger').each(function () {
		if ($(this).hasClass('platinum')) {
			$(this).parents(".circle-container").addClass('box-highlight bounce-effect');
		} else {
			$(this).parents(".circle-container").removeClass('box-highlight bounce-effect');
		}
	});
}

function showRankGold() {
	$('.js-cd-panel-trigger').each(function () {
		if ($(this).hasClass('gold')) {
			$(this).parents(".circle-container").addClass('box-highlight bounce-effect');
		} else {
			$(this).parents(".circle-container").removeClass('box-highlight bounce-effect');
		}
	});
}

function showRankSilver() {
	$('.js-cd-panel-trigger').each(function () {
		if ($(this).hasClass('silver')) {
			$(this).parents(".circle-container").addClass('box-highlight bounce-effect');
		} else {
			$(this).parents(".circle-container").removeClass('box-highlight bounce-effect');
		}
	});
}

function showRankBronze() {
	$('.js-cd-panel-trigger').each(function () {
		if ($(this).hasClass('bronze')) {
			$(this).parents(".circle-container").addClass('box-highlight bounce-effect');
		} else {
			$(this).parents(".circle-container").removeClass('box-highlight bounce-effect');
		}
	});
}

function showRankMember() {
	$('.js-cd-panel-trigger').each(function () {
		if ($(this).hasClass('member')) {
			$(this).parents(".circle-container").addClass('box-highlight bounce-effect');
		} else {
			$(this).parents(".circle-container").removeClass('box-highlight bounce-effect');
		}
	});
}

// end of highlight ranking function


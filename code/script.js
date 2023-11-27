console.clear();

function initNav(categories) {
	document.getElementById("navigation").innerHTML = categories.map(c => `<a href="#${c}"><i class="icon fa-${catIcon.get(c)}"></i>${c}</a>`).join("");
}

function specialKey(key) {
	switch (key) {
		case 'left':
			return '<i class="icon fa-arrow-left"></i>'
		case 'right':
			return '<i class="icon fa-arrow-right"></i>'
		case 'up':
			return '<i class="icon fa-arrow-up"></i>'
		case 'down':
			return '<i class="icon fa-arrow-down"></i>'
		case 'Windows':
			return '<i class="icon fa-windows"></i>';
		default:
			return key;
	}
}

function printShortcutKeys(shortcutKeys) {
	return shortcutKeys
		.map((e, i) => `<kbd>${specialKey(e)}</kbd> ${i !== shortcutKeys.length - 1 ? '+ ' : ''}`)
		.join("");
}

function printShortcut(shortcut) {
	return `<div class="shortcut">
	<span class="shortcut-name">${shortcut.name}</span>
	<span class="shortcut-cmd">${printShortcutKeys(shortcut.shortcut)}</span>
	</div>`;
}

function groupShortCut(list) {
	const result = {};
	list.map((e) => {
		e.categories.forEach(cat => {
			if (result[cat]) {
				result[cat].push(e);
			} else {
				result[cat] = [e];
			}
		})
	});
	return result;
}

function drawList(filter) {
	const dataDiv = document.getElementById("data");
	// clear preview list
	dataDiv.innerHTML = "";

	// Filter shortcut
	const filteredShortcut = shortcuts.filter(el => !filter ||
		el.categories.find(cat => cat.search(new RegExp(filter, 'i')) !== -1) ||
		el.name.search(new RegExp(filter, 'i')) !== -1);

	// Group by category
	const categories = groupShortCut(filteredShortcut);

	const catKeys = Object.keys(categories).sort((a, b) => a.localeCompare(b))
	// Init navigation
	initNav(catKeys);

	catKeys.map(cat => {
		const catHtml = categories[cat]
			.sort((a, b) => a.name.localeCompare(b.name))
			.map(el => printShortcut(el))
			.join("")

		dataDiv.innerHTML += `<section class="section" id="${cat}">
		<h1 class="section-title section-title_${cat}"><i class="icon fa-${catIcon.get(cat)}"></i>${cat}</h1>
		<div class="section-list">${catHtml}</div>
		</section>`;
	})
}
// First draw
drawList();

// redraw on search
function search() {
	drawList(document.searchForm["searchValue"].value);
}

function resetForm() {
	document.searchForm.reset();
	drawList();
}
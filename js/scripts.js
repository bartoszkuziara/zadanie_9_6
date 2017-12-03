var list = document.getElementById('list');
	add = document.getElementById('addElem');
	add.addEventListener('click', addLi);

function addLi() {
	

	var li = list.getElementsByTagName('li');
		ile = li.length;
		element = document.createElement('li');
		element.innerHTML = 'item '+ ile;	

		list.appendChild(element);

	
}


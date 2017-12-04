var list = document.getElementById('list');
	add = document.getElementById('addElem');
	add.addEventListener('click', addLi);

function addLi() {
	

	var li = list.getElementsByTagName('li');
		
		element = document.createElement('li');
		element.innerHTML = 'item '+ li.length;	

		list.appendChild(element);

	
}


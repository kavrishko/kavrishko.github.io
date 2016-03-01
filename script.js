function goto_resultPage(obj) 
{
    var n1 = Number(obj.number1.value),
        oper = String(getOperation(obj)),
        n2 = Number(obj.number2.value),
        res = getResult(n1, n2, oper),
        page = window.open("result.html?" + n1 + "&" + oper + "&" + n2 + "&" + res, '_self');
}

function getOperation(obj) 
{
    var selected = "",
        rbuttons = document.getElementsByName("operation"),
        i = 0;
	for (; i < rbuttons.length; i++) 
    {
		if (rbuttons[i].type === "radio") 
        {
			if (rbuttons[i].checked) 
            {
				selected = rbuttons[i].value;
				break;
			}
		}
	}
	return selected;
}

function getResult(n1, n2, oper) 
{
	var res = 0;
	if (oper === "+") res = n1 + n2; 
    else
		if (oper === "-") res = n1 - n2;
		else
			if (oper === "*") res = n1 * n2;
			else
				if (oper === "/") 
                {
					if (n2 === 0) res = null;
					else
						res = n1 / n2;
				}
	return res;
}

function setInfo(obj) 
{
	var params = location.search.substring(1).split("&"),
        n1 = params[0],
        oper = params[1],
        n2 = params[2],
        res = params[3];
    
    var n1Cell = document.getElementById('n1');
        n1Cell.innerText = n1;
        n1Cell.innerHTML = n1;
    
    var operCell = document.getElementById('oper');
        operCell.innerText = oper;
        operCell.innerHTML = oper;
    
    var n2Cell = document.getElementById('n2');
        n2Cell.innerText = n2;
        n2Cell.innerHTML = n2;
    
    var resCell = document.getElementById('res');
        resCell.innerText = res;
        resCell.innerHTML = res;
}

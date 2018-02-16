function Mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;

	if( edad<13)
	{
		alert("niño");
	}
	if(edad>12 && edad<18)
	{
		alert("adolescente");
	}
	if(edad>17)
	{
		alert("mayor");
	}

}//FIN DE LA FUNCIÓN





//if(edad<13)
//{
//	alert("niño");
//}
//else
//{
//	if(edad>17)
//	{
//		alert("mayor");
//	}
//	else
//	{
//		alert("adolescente");
//	}
//}

// es el 6 resulto de obra forma mas correcta. para tener en cuenta.
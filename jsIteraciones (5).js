function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	while(sexo!="m" && sexo! = "f")
	{
		sexo=prompt("error,ingrese f o m");
	}
	if(sexo == "f")
	{
		sexo="femenino";
	}else
	{
		sexo="masculino";
	}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN

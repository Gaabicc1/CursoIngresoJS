function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = Math.floor(Math.random() * 10) +1;

	if(nota > 8)
	{
		alert("excelente"+nota);
	}
	else
	{
		if(nota > 3)
		{
		alert("aprobo"+nota);
		}else
		{
		alert("Vamos, la proxima se puede"+nota);
		}
	}		
	
}//FIN DE LA FUNCIÓN


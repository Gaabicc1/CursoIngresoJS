function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivo= positivo+numero;
		}else
		{
			if(numero<0)
			{
				negativo=negativo*numero;
			}
		}
		respuesta=prompt("para continuar, si");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN

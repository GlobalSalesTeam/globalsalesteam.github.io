DataUrl= "https://script.google.com/macros/s/AKfycbwdTmnT9UyD4FN3ahW7-TA_fp093QX28uWkHTAfXxQveoHsIro-/exec";

traerTexto= async function traerTexto() {
	kv= await fetch(DataUrl+"?l="+col).then( res => { return res.json() } );
	//A: traje el texto de la hoja
	console.log("KV",JSON.stringify(kv,null,1));
	return kv;
}

traerPlantilla= async function traerPlantilla(url) {
	url= url || "plantilla.html";
	plantilla= await fetch(url).then( res => { return res.text() } );
	return plantilla;
}

generar= async function generar(plantilla,kv) {
	renderer= Handlebars.compile(plantilla);
	rendered= renderer(kv);
	return rendered;
}



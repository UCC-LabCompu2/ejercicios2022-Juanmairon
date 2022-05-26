function calcularSuma(){
    let num1, num2;
    num1 = Number(document.getElementById("nums1").value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementById("totalS").innerHTML = num1 + Number(num2);
}

function calcularResta(){
    let num1, num2;
    num1 = Number(document.getElementById("numr1").value);
    num2 = Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerHTML = num1 - num2;
}

function calcularMultiplicacion(){
    let num1, num2;
    num1 = Number(document.getElementById("numm1").value);
    num2 = Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerHTML = num1 * num2;
}

function calcularDivision(){
    let num1, num2;
    num1 = Number(document.getElementById("numd1").value);
    num2 = Number(document.getElementById("numd2").value);
    document.getElementById("totalD").innerHTML = num1 / num2;
}

/**
 * Conversión de unidades de metros, pies, yardas y pulgadas
 * @method conversionUnidades
 * @param {String} id - Id de los inputs del formulario
 * @param {Number} valor - El valor de los inputs del formulario
 */
function conversionUnidades(id, valor){
    let metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor = valor.replace(",", ".");
    }

    if(isNaN(valor)){
        alert("Se ingresó un valor incorrecto");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id=="metro"){
        metro = valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
        pulgada = 39.3701*valor;
    }else if(id=="pulgada"){
        pulgada = valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
        metro = 0.0254*valor;
    }else if(id=="pie"){
        pie = valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
        metro = 0.3048*valor;
    }else if (id=="yarda"){
        yarda = valor;
        pulgada = 36*valor;
        pie = 3*valor;
        metro = 0.9144*valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = yarda.toFixed(2);
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
}

function convertirGR(id){
    let grad, rad;

    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;

}

function mostrar_ocultar(valorMO){
    if (valorMO=="val_mostrar"){
        document.getElementById("unDiv").style.display = 'block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("unDiv").style.display = 'none';
    }
}

function cargarWeb(){
    let cantidad, unidad, urlComp;

    cantidad = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cantidad + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado(){
    let cantidad, unidad, urlComp;

    urlComp = window.location.href;
    urlComp = urlComp.split("#");
    console.log(urlComp);

    cantidad = urlComp[1];
    unidad = urlComp[2];

    document.getElementById("dist").value = cantidad + " " + unidad;
}

function guardarLocalStorage(){
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('2_web.html');
}

function cargarLocalStorage(){
    let cantidad, unidad;
    cantidad = localStorage.getItem("distanciaLS");
    unidad = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cantidad + " " + unidad;
}
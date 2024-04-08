let empleados=Array(
    {
        id:1,
        nombre:"Mariangel Moscoso Uribe",
        cargo:"Jefe",
        telefono:"3225766825",
        correo:"mariangeluribe0604@gamil.com",
        salario:5000000,
        ContactoEmergencia:"30539055",
        foto:"./img/empleado1.jpg"
    },
    {
        id:2,
        nombre:"kandy uribe",
        cargo:"gerente",
        telefono:"3135010421",
        correo:"uribekandy785@gamil.com",
        salario:3000000,
        ContactoEmergencia:"324156172",
        foto:"./img/empleado2.jpg"
    },
    {
        id:3,
        nombre:"Miguel Angel Moscoso",
        cargo:"contador",
        telefono:"3254748584",
        correo:"migueluribe45@gamil.com",
        salario:25000000,
        ContactoEmergencia:"301745286",
        foto:"./img/empleado3.jpg"
    },
    {
      
        id:4,
        nombre:"leidy restrepo",
        cargo:"asistente",
        telefono:"3142572",
        correo:"restrepoleidy@gamil.com",
        salario:2000000,
        ContactoEmergencia:"324213541",
        foto:"./img/empleado4.jpg"
    },
    {
    id:5,
    nombre:"sofia ruiz",
    cargo:"asesora",
    telefono:"3125124551",
    correo:"sofiruizz@gamil.com",
    salario:1000000,
    ContactoEmergencia:"32145511",
    foto:"./img/emplado5.jpg"
    },
    {
        
        id:6,
        nombre:"karen vazco",
        cargo:"directora ejecutiva",
        telefono:"31541551",
        correo:"vazcokaren@gmail.com",
        salario:4000000,
        ContactoEmergencia:"324128972",
        foto:"./img/empleado6.jpg"
    },
    {
        
        id:7,
        nombre:"gabriel lujan",
        cargo:"supervisor",
        telefono:"3246114564",
        correo:"76gabilujan@gamil.com",
        salario:2000000,
        ContactoEmergencia:"3456252521",
        foto:"./img/empleado7.jpg"
    },
    {
    id:8,
    nombre:"yuri alzate",
    cargo:"operaria",
    telefono:"3054150251",
    correo:"yuriaalzate85@gamil.com",
    salario:500000,
    ContactoEmergencia:"34854128",
    foto:"./img/empleado8.jpg"
    },
    {
        
        id:9,
        nombre:"maria rodriguez",
        cargo:"chef",
        telefono:"32255811",
        correo:"rodriguezmaria14@gamil.com",
        salario:5000000,
        ContactoEmergencia:"3415212651",
        foto:"./img/empleado9.jpg"
    },
    {
        
        id:10,
        nombre:"johana ramirez",
        cargo:"auxiliar",
        telefono:"3135010421",
        correo:"johar245@gamil.com",
        salario:3000000,
        ContactoEmergencia:"324156172",
        foto:"./img/em,pleado10.jpg"
    },
    {
        
        id:11,
        nombre:"mariany sanchez",
        cargo:"logistica",
        telefono:"3135010421",
        correo:"marianysa@gamil.com",
        salario:5000000,
        ContactoEmergencia:"324156172",
        foto:"./img/empleado11.jpg"
    },
    {
        
        id:12,
        nombre:"jose eduardo gaitan",
        cargo:"lider de ventas",
        telefono:"325658421",
        correo:"joseegaitan@gamil.com",
        salario:6000000,
        ContactoEmergencia:"321784547",
        foto:"./img/empleado12.jpg"
    },
    {
        
        id:13,
        nombre:"jesus manuel medrano",
        cargo:"celador",
        telefono:"3135010425",
        correo:"jesusmmedrano@gamil.com",
        salario:2000000,
        ContactoEmergencia:"324414112",
        foto:"./img/empleado13.jpg"
    },
    {
        
        id:14,
        nombre:"daniel suaza",
        cargo:"transportador",
        telefono:"3135024355",
        correo:"danielsuaza32@gamil.com",
        salario:3000000,
        ContactoEmergencia:"325642152",
        foto:"./img/empleado14.jpg"
    },
    {
        
        id:15,
        nombre:"maria jose ballesteros",
        cargo:"bodega",
        telefono:"31351648521",
        correo:"majoballesteros@gamil.com",
        salario:1000000,
        ContactoEmergencia:"322544852",
        foto:"./img/empleado15.jpg"
    },
    {
        
        id:16,
        nombre:"carlos quinchia",
        cargo:"mesero",
        telefono:"31350154251",
        correo:"carlosquinchia@gamil.com",
        salario:3000000,
        ContactoEmergencia:"3225475894",
        foto:"./img/empleadp16.jpg"
    },
    {
        
        id:17,
        nombre:"carolina ospina",
        cargo:"control de gestion",
        telefono:"311452658",
        correo:"caroospina@gamil.com",
        salario:3000000,
        ContactoEmergencia:"320156172",
        foto:"./img/empleado17.jpg"
    },
    {
        
        id:18,
        nombre:"andres uribe",
        cargo:"asistente administrativo",
        telefono:"3135040215",
        correo:"uribeandres@gamil.com",
        salario:2000000,
        ContactoEmergencia:"32415269",
        foto:"./img/empleado18.jpg"
    },
    {
        
        id:19,
        nombre:"katerin velasquez",
        cargo:"produccion",
        telefono:"3135014521",
        correo:"velasquezk@gamil.com",
        salario:4000000,
        ContactoEmergencia:"324156178",
        foto:"./img/empleado19.jpg"
    },
    {
        
        id:20,
        nombre:"mariana cordoba",
        cargo:"direccion de gerencia",
        telefono:"31152655",
        correo:"maricordoba@gamil.com",
        salario:3000000,
        ContactoEmergencia:"324156452",
        foto:"./img/empleado20.jpg"
    },
    
 )



 //crenado una referencia al contenedor de empleados
 let contenedor=document.getElementById("contenedor")

 //pasos para crear una lista dinamica de elementos
 
 //1.Debo recorrer la base de datos del problema:
empleados.forEach(function(empleado){
    let columna=document.createElement("div")
    columna.classList.add("col")


    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")



    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto



    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    let cargo=document.createElement("h3")
    telefono.textContent=empleado.cargo

    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono
    
    let correo=document.createElement("h3")
    correo.textContent=empleado.correo
    
    let salario=document.createElement("h3")
    salario.textContent=empleado.salario

    
    //se asocian las estructuras en orden logico
    
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)
    


})

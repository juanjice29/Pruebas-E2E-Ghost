const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const {options } = config;
async function executeTest(){
    let resultInfo = {"func1":{"esc1":{},"esc2":{},"esc3":{}},"func2":{"esc1":{},"esc2":{}},"func4":{"esc1":{},"esc2":{},"esc3":{},"esc4":{},"esc5":{}}}
    let datetime = new Date().toISOString().replace(/:/g,".");
    let ejecuciones={"funcionalidades":{
        "func1":{
          "esc1":6,    
          "esc2":6,
          "esc3":6      
        }, 
        "func2":{
            "esc1":8,
            "esc2":10          
        },
        "func4":{
            "esc1":8,
            "esc2":5,
            "esc3":7,
            "esc4":12,
            "esc5":13
        },   
    }}
    if (!fs.existsSync(`./results/${datetime}`)){
        fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }
    for(let i in ejecuciones.funcionalidades){
        for(let j in ejecuciones.funcionalidades[i]){
            for(let k=1;k<=ejecuciones.funcionalidades[i][j];k++){

                const data = await compareImages(
                    fs.readFileSync(`./screenshots/${i}/v-4/${j}/e${k}.png`),
                    fs.readFileSync(`./screenshots/${i}/v-3.41.1/${j}/e${k}.png`),
                    options
                );
                resultInfo[i][j][k] = {
                    isSameDimensions: data.isSameDimensions,
                    dimensionDifference: data.dimensionDifference,
                    rawMisMatchPercentage: data.rawMisMatchPercentage,
                    misMatchPercentage: data.misMatchPercentage,
                    diffBounds: data.diffBounds,
                    analysisTime: data.analysisTime
                }
                fs.writeFileSync(`./screenshots/compare/${i}/${j}/compare-e${k}.png`, data.getBuffer());
            }            
        }       
    }
    let navigationBar=createNavigation(ejecuciones.funcionalidades);
    for(let i in ejecuciones.funcionalidades){
        for(let j in resultInfo[i]){
        fs.writeFileSync(`./results/${datetime}/report_${i}_${j}.html`, createReport(datetime, resultInfo[i][j],i,j,navigationBar));
        
        }
        
    }
    fs.copyFileSync('./results/report.css', `./results/${datetime}/report.css`);
    
    
}

(async ()=>console.log(await executeTest()))();
function createNavigation(resInfo){
    let html=`<div class="navbar">`
    let funcionalidad=1;
    for(let i in resInfo){
        html=html+`<div class="dropdown">
                    <button class="dropbtn">Funcionalidad ${funcionalidad}
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">`
        let escenario=1;
        for(let j in resInfo[i]){
            html=html+`<a href="report_${i}_${j}.html">Escenario ${escenario}</a>`
            escenario++;
        }
        html=html+`</div></div>`
        funcionalidad++;
    }
    html=html+"</div>"
    return html
}
function createReport(datetime, resInfo,funcionN,escN,navigationBar){
    let escenarios="";
    for(let i in resInfo){        
            escenarios=escenarios+`<div class="browser" id="test0">
                <div class=" btitle">
                    <h2>Funcionalidad - ${funcionN.split('').pop()} - Escenario - ${escN.split('').pop()}</h2>
                    <h3>Pantallazo: ${i}</h3>
                    <p>Data: ${JSON.stringify(resInfo[i])}</p>
                </div>
                <div class="imgline">
                <div class="imgcontainer">
                    <span class="imgname">Reference</span>
                    <img class="img2" src="../../screenshots/${funcionN}/v-3.41.1/${escN}/e${i}.png" id="refImage" label="Reference">
                </div>
                <div class="imgcontainer">
                    <span class="imgname">Test</span>
                    <img class="img2" src="../../screenshots/${funcionN}/v-4/${escN}/e${i}.png" id="testImage" label="Test">
                </div>
                </div>
                <div class="imgline">
                <div class="imgcontainer">
                    <span class="imgname">Diff</span>
                    <img class="imgfull" src="../../screenshots/compare/${funcionN}/${escN}/compare-e${i}.png" id="diffImage" label="Diff">
                </div>
                </div>
            </div>`
        
    }
    console.log(resInfo)
    return `
    <html>
        <head>
            <title> Ghost Report </title>
            <link href="report.css" type="text/css" rel="stylesheet">
        </head>
        <body>
        ${navigationBar}
            <h1>Reporte Ghost 3.41.1 vs Ghost 4.44.0</h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">            
            ${escenarios}
            </div>
        </body>
    </html>`
}
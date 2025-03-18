function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Heat Transfer in Combined Mode</h5>
        <p>Learning Objective: Find heat transfer and temperature at the outside surface</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act2();' id='temp-btn-20' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act2() {
    let temp_btn = document.getElementById('temp-btn-20');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Problem Statement", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <h5></h5>

        <h5>In a furnace the temperature of the hot gas is (T<sub>1</sub>) ${a2_gas_temp}&deg; C. Ambient temperature is (T<sub>2</sub>) ${a2_env_temp}&deg; C. Heat flow by the radiation from hot gases to inner surface of wall is (Q<sub>radi</sub>) ${a2_q_radi} kw/m<sup>2</sup>. Inner heat transfer coefficient (h<sub>i</sub>) = ${a2_h_inner} w/m<sup>2</sup>-k. The thermal resistance of the wall is (R<sub>cond</sub>) ${a2_r_cond} m<sup>2</sup>-k/w and heat radiated by the external surface is (Q<sub>rado</sub>) ${a2_q_rado} kw/m<sup>2</sup>. Temperature of inner wall (T<sub>s1</sub>) is ${a2_inner_wall_temp}. Find the external wall temperature (T<sub>s2</sub>) & heat transfer coefficient (h<sub>2</sub>). Surface Are a (A) = ${a2_a} m<sup>2</sup>  </h5>
        <br>
        <br>

        <div style='text-align: center;'>
            <img src='./images/dg2.webp' style='width: 30vw;' />
            <img src='./images/dg1.webp' style='width: 30vw;' />
        </div>

        <br>

       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='a2_sol2();'  id='temp-btn-200' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function a2_sol2() {
    let btn_text = get_collapse_btn_text("Convective heat flow at inner surface", "tb2-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st2'>


        <p> 
                Convective resistance at the inside surface 
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{ci} = \\frac{1}{h_i A} $$
                </span>
        </p>
        
         <p style='text-align: center;'> 
                R<sub>ci</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp20' /><span id='dsp2-inp20'></span></span> m<sup>2</sup>-k/w
        </p>

        <p> 
                Heat flow due to convection at inner side  
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q_{ci} = \\frac{T_1 - T_s1}{R_{ci}} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                Q<sub>ci</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp21' /><span id='dsp2-inp21'></span></span> w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol2();'  id='temp-btn-22' >Verify</button></div>


    </div>

    `;
    a2_r_ci = 1 / (a2_h_inner * a2_a);
    a2_q_ci = (a2_gas_temp - a2_inner_wall_temp) / a2_r_ci;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol2() {
    let btn = document.getElementById('temp-btn-200');
    console.log(a2_r_ci, a2_q_ci);
    let inp1 = document.getElementById('a2-inp20');
    let sp1 = document.getElementById('dsp2-inp20');
    let inp2 = document.getElementById('a2-inp21');
    let sp2 = document.getElementById('dsp2-inp21');
    if (!verify_values(parseFloat(inp1.value), a2_r_ci)) {
        alert('R_ci is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2_q_ci)) {
        alert('Q_ci is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a2_r_ci).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a2_q_ci).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    a2_sol3();
}
function a2_sol3() {
    let btn_text = get_collapse_btn_text("Temperature at outer surface", "tb2-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st3'>


        <p> 
                Net heat transfer at inner side
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q = Q_{ci} + Q_{radi} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                Q = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp30' /><span id='dsp2-inp30'></span></span> w
        </p>

        <p> 
               Temperature at outer surface
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q = \\frac{T_{s1} - T_{s2}}{R_{cond}} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ T_{s2} = -Q R_{cond} + T_{s1} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                T<sub>s2</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp31' /><span id='dsp2-inp31'></span></span>&deg; C
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol3();'  id='temp-btn-23' >Verify</button></div>


    </div>

    `;
    a2_q = a2_q_ci + (a2_q_radi * 1000);
    a2_t_s2 = (-1 * a2_q * a2_r_cond) + a2_inner_wall_temp;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol3() {
    let btn = document.getElementById('temp-btn-23');
    console.log(a2_q, a2_t_s2);
    let inp1 = document.getElementById('a2-inp30');
    let sp1 = document.getElementById('dsp2-inp30');
    let inp2 = document.getElementById('a2-inp31');
    let sp2 = document.getElementById('dsp2-inp31');
    if (!verify_values(parseFloat(inp1.value), a2_q)) {
        alert(' is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2_t_s2)) {
        alert('R2 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a2_q).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a2_t_s2).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    a2_sol4();
}
function a2_sol4() {
    let btn_text = get_collapse_btn_text("Heat transfer coefficient", "tb2-st4");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st4'>


        <p> 
                Heat flow at outer surface (Q<sub>co</sub>)
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q = Q_{co} + Q_{rado} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q_{co} = Q - Q_{rado} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                Q<sub>co</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp40' /><span id='dsp2-inp40'></span></span> w
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q_{co} = h_2 A (T_{s2} - T_2) $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ h_2 = \\frac{Q_{co}}{A (T_{s2} - T_2)} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                h<sub>2</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp41' /><span id='dsp2-inp41'></span></span> w/m<sup>2</sup>-k
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol4();'  id='temp-btn-24' >Verify</button></div>


    </div>

    `;
    a2_q_co = a2_q - (a2_q_rado * 1000);
    a2_h2 = a2_q_co / (a2_a * (a2_t_s2 - a2_env_temp));
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st4'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol4() {
    let btn = document.getElementById('temp-btn-24');
    console.log(a2_q_co, a2_h2);
    let inp1 = document.getElementById('a2-inp40');
    let sp1 = document.getElementById('dsp2-inp40');
    let inp2 = document.getElementById('a2-inp41');
    let sp2 = document.getElementById('dsp2-inp41');
    if (!verify_values(parseFloat(inp1.value), a2_q_co)) {
        alert('Q_co is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2_h2)) {
        alert('h2 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a2_q_co).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a2_h2).toFixed(4)}`;
    alert('Your entered values are correct!!');
    alert("Experiemnt Completed!!");
    btn.style.display = 'none';
}
//# sourceMappingURL=activity2.js.map
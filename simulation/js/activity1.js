let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Heat Transfer in Combined Mode</h5>
        <p>Learning Objective: Find combine heat transfer coefficient.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Problem Statement", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>A metal surface with dimension (L x W) ${a1_l} m x ${a1_b} m at a temperature ${a1_surface_temp}&deg; C has surrounding temperature ${a1_env_temp}&deg; C. Convective heat transfer coefficient (h) is ${a1_h} w/m<sup>2</sup>-k & emissivity of surface is (&epsilon;) ${a1_epsilon}. Take value of Boltzmann Constant as ${boltzmann_constant / 1e-8} x 10<sup>-8</sup> w/m<sup>2</sup>-k<sup>4</sup></h5>


        <h5>
            T<sub>1</sub> = (${a1_surface_temp} + 273) K<br>
            T<sub>2</sub> = (${a1_env_temp} + 273) K<br>
            
        </h5>

        <h5>
            Calculate
        </h5>

        <ol type='1' >
            <li>Heat loss by hte convection</li>
            <li>Heat Loss by the radiation</li>
            <li>Combined heat transfer coeffcient</li>

        </ol>

        <br>

       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='sol1();'  id='temp-btn-0' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function sol1() {
    let temp_btn = document.getElementById('temp-btn-0');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Heat loss by convection", "tb1-st1");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st1'>


        <p> 
                Area
        </p>

       <p style='text-align: center;'> 
                A = (L x W) = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp10' /><span id='dsp-inp10'></span></span> m<sup>2</sup>
        </p>

        <p>
            Heat loss by convection
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q_c = hA(T_1 - T_2) $$
                </span>
        </p>

        <p style='text-align: center;'> 
                Q<sub>c</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp11' /><span id='dsp-inp11'></span></span> w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol1();'  id='temp-btn-11' >Verify</button></div>


    </div>

    `;
    a1_qc = a1_h * a1_a * (a1_t1 - a1_t2);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st1'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    temp_btn.remove();
}
function verify_sol1() {
    let btn = document.getElementById('temp-btn-11');
    console.log(a1_a, a1_qc);
    let inp1 = document.getElementById('a1-inp10');
    let sp1 = document.getElementById('dsp-inp10');
    let inp2 = document.getElementById('a1-inp11');
    let sp2 = document.getElementById('dsp-inp11');
    if (!verify_values(parseFloat(inp1.value), a1_a)) {
        alert('A is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a1_qc)) {
        alert('Qc is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_a).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a1_qc).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    sol2();
}
function sol2() {
    let btn_text = get_collapse_btn_text("Heat loss by radiation", "tb1-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st2'>


        <p> 
                Heat Loss by radiation
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q_r = \\sigma A \\epsilon (T_1^4 - T_2^4) $$
                </span>
        </p>


        <p style='text-align: center;'> 
                Q<sub>r</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp2' /><span id='dsp-inp2'></span></span> w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol2();'  id='temp-btn-12' >Verify</button></div>


    </div>

    `;
    a1_qr = boltzmann_constant * a1_a * a1_epsilon * ((Math.pow(a1_t1, 4)) - (Math.pow(a1_t2, 4)));
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol2() {
    let btn = document.getElementById('temp-btn-12');
    console.log(a1_qr);
    let inp1 = document.getElementById('a1-inp2');
    let sp1 = document.getElementById('dsp-inp2');
    if (!verify_values(parseFloat(inp1.value), a1_qr)) {
        alert('Qr is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_qr).toFixed(4)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol3();
}
function sol3() {
    let btn_text = get_collapse_btn_text("Combined heat transfer coefficient", "tb1-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st3'>


        <p> 
                Total heat loss
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q_{total} = Q_c + Q_r $$
                </span>
        </p>

        <p style='text-align: center;'> 
                Q<sub>total</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp30' /><span id='dsp-inp30'></span></span> w
        </p>

         <p> 
                Combined heat transfer coefficient 
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q_{total} = h_{total} A (T_1 - T_2) $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ h_{total} = \\frac{Q_{total}}{A (T_1 - T_2)} $$
                </span>
        </p>


        <p style='text-align: center;'> 
                h<sub>total</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp31' /><span id='dsp-inp31'></span></span> w/m<sup>2</sup>-k
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol3();'  id='temp-btn-13' >Verify</button></div>


    </div>

    `;
    a1_qt = a1_qc + a1_qr;
    a1_ht = a1_qt / (a1_a * (a1_t1 - a1_t2));
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol3() {
    let btn = document.getElementById('temp-btn-13');
    console.log(a1_qt, a1_ht);
    let inp1 = document.getElementById('a1-inp30');
    let sp1 = document.getElementById('dsp-inp30');
    let inp2 = document.getElementById('a1-inp31');
    let sp2 = document.getElementById('dsp-inp31');
    if (!verify_values(parseFloat(inp1.value), a1_qt)) {
        alert('Q_total is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a1_ht)) {
        alert('h_total is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_qt).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a1_ht).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map
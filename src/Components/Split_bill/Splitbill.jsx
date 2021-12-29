import React, { useState } from 'react';

const Splitbill = () => {
    const [tippercent, updatetip] = useState("");
    const [amount, updateamount] = useState();
    const [person, updateperson] = useState();
    const [totalamount, updatedamount] = useState();
    const [clicked, updateclick] = useState(false);
    const getpercent = (e) => {
        if (person == undefined || amount == undefined) {

            alert("this is invalid");
        }
        else {
            const tip = ((amount * parseInt(e.target.innerHTML)) / 100) / person
            const totalvalue = (amount / person) + ((amount * parseInt(e.target.innerHTML)) / 100) / person
            updatetip(tip.toFixed(2))
            updatedamount(totalvalue.toFixed(2))

            const btns = document.querySelectorAll('.tip_button');
            e.target.classList.add('active_tip');
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function() {
                    var current = document.getElementsByClassName("active_tip");
                    
                    if (current.length > 0) {
                        current[0].className = current[0].className.replace(" active_tip", "");
                      }
                      this.className += " active_tip";
                      updateclick(false);
                });
              }

        }
    }
    const getamount = (e) => {
        updateamount(e.target.value)
    }
    const getperson = (e) => {
        updateperson(e.target.value)
    }
    const reset = () => {
        updatetip("");
        updatedamount("")
        updateperson("");
        updateamount("");
        updateclick(false);
        const btns = document.querySelectorAll('.tip_button');
        btns.forEach((el)=>{
             el.classList.remove('active_tip')
        })

    }
    const getcustompercent = (e) => {
        if (person == undefined || amount == undefined) {
            e.target.value = "";
            alert("this is invalid");
        }
        else {
            const utip = ((amount * (e.target.value) / 100) / person)
            const uamount = (amount / person) + ((amount * (e.target.value)) / 100) / person
            updatetip(utip.toFixed(2))
            updatedamount(uamount.toFixed(2))

        }
    }

    return (
        <div class="splitbill">
            <div className="split_bill_title">split-bill</div>
            <div className="splitbillsection">
                <div className="tipcalculator">
                    <div className="inputsec"><i class="fa fa-inr" aria-hidden="true"></i><input type="text" placeholder="enter amount" value={amount} class="amount_input" onChange={getamount}></input></div>
                    <div className="tip_percentage" id="tip_percentage">
                        <div className="tip_button" onClick={getpercent}>5%</div>
                        <div className="tip_button" onClick={getpercent}>10%</div>
                        <div className="tip_button" onClick={getpercent}>15%</div>
                        <div className="tip_button" onClick={getpercent}>20%</div>
                        <div className="tip_button" onClick={getpercent}>25%</div>
                        {clicked ? <input className="input_tip" type="text" onChange={getcustompercent} ></input> : <div className="tip_button" onClick={() => updateclick(true)}>custom</div>}
                    </div>
                    <div className="inputsec">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <input type="text" placeholder="person" class="amount_input" onChange={getperson} value={person}></input>
                    </div>
                </div>

                <div className="amountperperson">
                    <div className="tipprice"> <span>tip per person</span> <div>{tippercent}</div></div>
                    <div className="tipprice">  <span>total per person</span> <div>{totalamount}</div></div>

                    <div className="reset" onClick={reset}>Reset</div>

                </div>
            </div>
        </div>
    )
}

export default Splitbill

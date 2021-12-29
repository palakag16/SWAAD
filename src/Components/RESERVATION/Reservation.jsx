import React, { useState, useEffect } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { enableRipple } from '@syncfusion/ej2-base';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Reservation = () => {
    const [select, setselected] = useState();
    const [peoplevalue, updatepeople] = useState();
    const [formdata,updateFormdata] = useState({date:"", time: "", people: "", email: ""});
    const handleClick = (day) => {
        const date = day.toLocaleDateString();
        updateFormdata({...formdata, date : date})
        setselected(day)

    }
    enableRipple(true);

    const getpeople = (e) => {
        var a = e.target.value;
        var patt = new RegExp("^([0-9]*)$");
        var res = patt.test(a);
        console.log(res);

        if (res === true && a > 0) {
            updatepeople(a)
            updateFormdata({...formdata, people:a})
            
        }
        else if (a == "") {
            updatepeople(a)
        }
        else {
            alert("plz input a valod no")
            a = "";
            updatepeople(a)
        }

    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_mdlvqdz', 'template_qsxfq9f', formdata, 'user_yISX1nzt09kHBe2yNdrhl')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        toast.success('Reservation Confirmed !! check your mail..!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            updatepeople("");
            formdata.email="";
            formdata.time="";
            setselected("");
      };

      const getTime = (e)=>{
         const time = e.target.value;
         var dtime = time.toLocaleTimeString();
         updateFormdata({...formdata,time:dtime})
      }

      const getEmail = (e)=>{
          const email = e.target.value;
          updateFormdata({...formdata,email:email})
      }
    return (
    <>
            <div className="reservation_tag"> make your reservation now</div>
        <div className="reservation_sec">
            <div className="main_res_sec">
        <DayPicker onDayClick={handleClick} name="date" month={new Date()} selectedDays={select}
                fromMonth={new Date()}
                toMonth={new Date(2022, 5)}
                value={formdata.date}
                fixedWeeks
                disabledDays={[
                    {
                        after: new Date(2021, 8, 0),
                        before: new Date(),
                    },
                ]}
            />

            <div className="calenderinputs">
                <div className="timepicker">
                    <TimePickerComponent id="timepicker" placeholder="Select a Time" 
                    onChange={getTime} value={formdata.time}
                        min={(new Date(' 9/6/2021 9:00 AM'))} max={(new Date('9/6/2021 11:00 PM'))} name="time"/>
                </div>
                <div className="peoplesize">
                    <input type="text" placeholder="select people" name="people" onChange={getpeople} value={peoplevalue}></input>
                    <i class="fas fa-users" aria-hidden="true"></i>
                </div>
                <div className="peoplesize"> 
                <input type="text" placeholder="enter your mail" name="email" onChange={getEmail} value={formdata.email}></input>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </div>
            </div>

            <div className="confirm_button" onClick={sendEmail}>Confirm reservation</div>

            </div>
            <ToastContainer />
        </div>
        <br></br>
        </>
    )
}

export default Reservation

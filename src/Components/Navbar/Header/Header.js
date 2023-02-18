import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { MdHotel, MdLocalTaxi } from "react-icons/md";
import { ImAirplane } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";
import { FaCalendarDay } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import "./header.css";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();


  const handleSearch = () => {
    navigate("/hotels", { state:{destination, date, options}});
    
  }

  const handleOptions = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  return (
    <>
      <div className="header">
        <div className= {type=="list" ? "headerContainer listMode" : "headerContainer"} >
          <div className="headerlist">
            <div className="headerListItems active">
              <MdHotel />
              <span>Stays</span>
            </div>
            <div className="headerListItems">
              <ImAirplane />
              <span>Flights</span>
            </div>
            <div className="headerListItems">
              <AiFillCar />
              <span>Car Rentals</span>
            </div>
            <div className="headerListItems">
              <MdLocalTaxi />
              <span>Taxi</span>
            </div>
          </div>

          {type !== 'list' && <>
          <h1 className="headerTitle">Your dreams come true</h1>
          <p className="headerDescription">Good reward for your travel</p>
          <button type="" className="headerBtn">
            <h3>Get Started</h3>
          </button>
          <div className="headerSearch">
            <div className="headerSearchItems">
              <MdHotel className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                name="headerSearchInput"

                defaultValue=""
                onChange={e=>setDestination(e.target.value)}

              />
            </div>
            <div className="headerSearchItems">
              <FaCalendarDay className="headerIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )} `}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="headerSearchItems">
              <GiPerson className="headerIcon" />
              <span onClick={()=>setOpenOption(!openOption)} className="headerSearchText">{`${options.adult} adults . ${options.children} children . ${options.room} room `}</span>
             {openOption && <div className="options">
                <div className="optionItems">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      disabled = {options.adult <= 1}
                      onClick={() => {
                        
                        handleOptions("adult", "d");

                      }}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                     
                      onClick={() => {
                        handleOptions("adult", "i");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItems">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      disabled = {options.children < 1}
                      onClick={() => {
                        handleOptions("children", "d");
                      }}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => {
                        handleOptions("children", "i");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItems">
                  <span className="optionText">Rooms</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      disabled = {options.room <= 1}
                      onClick={() => {
                        handleOptions("room", "d");
                      }}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterButton"
                     

                      onClick={() => {
                        handleOptions("room", "i");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>}
            </div>
            <div className="headerSearchItems">
              <button type="" onClick={handleSearch} className="headerBtn">
                Search
              </button>
            </div>
          </div>
          </>
}
        </div>
      </div>
    </>
  );
};

export default Header;

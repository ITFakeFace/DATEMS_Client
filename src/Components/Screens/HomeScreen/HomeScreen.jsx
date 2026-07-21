import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faWind,
  faBolt,
  faCloud,
  faDollarSign,
  faLeaf,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import "./HomeScreen.scss";

const HomeScreen = () => {
  return (
    <div className="DAT_HomeScreen">
      {/* Top Section: Sites Capacity & Weather */}
      <div className="DAT_HomeScreen_Top">
        {/* Sites Capacity Card */}
        <div className="DAT_HomeScreen_Top_Card DAT_HomeScreen_Top_Sites">
          <div className="DAT_HomeScreen_Top_Sites_Info">
            <span className="DAT_HomeScreen_Label">Total Sites</span>
            <h2 className="DAT_HomeScreen_Val">16</h2>
            <div className="DAT_HomeScreen_Top_Sites_Status">
              <div>
                <span className="DAT_HomeScreen_Dot DAT_HomeScreen_Dot_Active" />
                <span className="DAT_HomeScreen_SubText">Active Sites</span>
                <p className="DAT_HomeScreen_SubVal">10</p>
              </div>
              <div>
                <span className="DAT_HomeScreen_Dot DAT_HomeScreen_Dot_Idle" />
                <span className="DAT_HomeScreen_SubText">Idle Sites</span>
                <p className="DAT_HomeScreen_SubVal">10</p>
              </div>
            </div>
          </div>
          {/* Circular Capacity Donut Chart */}
          <div className="DAT_HomeScreen_Top_Sites_Chart">
            <svg viewBox="0 0 100 100" className="DAT_HomeScreen_Top_Donut">
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
              </defs>
              <circle
                className="DAT_HomeScreen_Top_Donut_Bg"
                cx="50"
                cy="50"
                r="42"
              />
              <circle
                className="DAT_HomeScreen_Top_Donut_Fg"
                cx="50"
                cy="50"
                r="42"
                stroke="url(#blueGradient)"
                strokeDasharray="263.8"
                strokeDashoffset="66"
              />
            </svg>
            <div className="DAT_HomeScreen_Top_Sites_Chart_Label">
              <span className="DAT_HomeScreen_Top_Sites_Chart_Label_Sub">Total Capacity</span>
              <span className="DAT_HomeScreen_Top_Sites_Chart_Label_Val">2.54
                <small className="DAT_HomeScreen_Top_Sites_Chart_Label_Val_Unit">MWp</small>
              </span>
            </div>
          </div>
        </div>

        {/* Weather Card */}
        <div className="DAT_HomeScreen_Top_Card DAT_HomeScreen_Top_Weather">
          <div className="DAT_HomeScreen_Top_Weather_Header">
            <span className="DAT_HomeScreen_Top_Date">May 20, 2024 · Monday</span>
          </div>
          <div className="DAT_HomeScreen_Top_Weather_Body">
            <div className="DAT_HomeScreen_Top_Weather_Temp">
              <FontAwesomeIcon icon={faSun} className="DAT_HomeScreen_Top_WeatherIcon" />
              <div>
                <h2>24°C</h2>
                <span>Sunny</span>
              </div>
            </div>
            <div className="DAT_HomeScreen_Top_Weather_Stats">
              <div className="DAT_HomeScreen_Top_Weather_Item">
                <span className="DAT_HomeScreen_Top_Weather_Label">Irradiance</span>
                <span className="DAT_HomeScreen_Top_Weather_Val">850 W/m²</span>
              </div>
              <div className="DAT_HomeScreen_Top_Weather_Item">
                <span className="DAT_HomeScreen_Top_Weather_Label">Wind Speed</span>
                <span className="DAT_HomeScreen_Top_Weather_Val">12 km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row of 4 Core Metrics Cards */}
      <div className="DAT_HomeScreen_Metrics">
        {/* Metric 1 */}
        <div className="DAT_HomeScreen_MetricCard">
          <div className="DAT_HomeScreen_MetricCard_Header">
            <div className="DAT_HomeScreen_MetricCard_Icon DAT_HomeScreen_Icon_Power">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <div className="DAT_HomeScreen_MetricCard_Info">
              <span className="DAT_HomeScreen_Label">Current Power</span>
              <h3 className="DAT_HomeScreen_MetricVal">5.62 MW</h3>
              <span className="DAT_HomeScreen_SubLabel">Live Output</span>
            </div>
          </div>
          {/* Mini Sparkline Chart */}
          <div className="DAT_HomeScreen_Sparkline">
            <svg viewBox="0 0 100 20" className="DAT_HomeScreen_Sparkline_Svg">
              <path
                d="M0,15 Q15,5 30,12 T60,8 T90,14 T100,10"
                fill="none"
                stroke="#0c6dfd"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="DAT_HomeScreen_MetricCard">
          <div className="DAT_HomeScreen_MetricCard_Header">
            <div className="DAT_HomeScreen_MetricCard_Icon DAT_HomeScreen_Icon_Energy">
              <FontAwesomeIcon icon={faSun} />
            </div>
            <div className="DAT_HomeScreen_MetricCard_Info">
              <span className="DAT_HomeScreen_Label">Energy Today</span>
              <h3 className="DAT_HomeScreen_MetricVal">28.74 MWh</h3>
              <span className="DAT_HomeScreen_Trend DAT_HomeScreen_Trend_Up">
                +12.5% <span className="DAT_HomeScreen_Trend_Text">vs last month</span>
              </span>
            </div>
          </div>
          <div className="DAT_HomeScreen_Sparkline">
            <svg viewBox="0 0 100 20" className="DAT_HomeScreen_Sparkline_Svg">
              <path
                d="M0,12 Q20,16 40,8 T80,14 T100,6"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="DAT_HomeScreen_MetricCard">
          <div className="DAT_HomeScreen_MetricCard_Header">
            <div className="DAT_HomeScreen_MetricCard_Icon DAT_HomeScreen_Icon_CO2">
              <FontAwesomeIcon icon={faCloud} />
            </div>
            <div className="DAT_HomeScreen_MetricCard_Info">
              <span className="DAT_HomeScreen_Label">CO₂ Offset</span>
              <h3 className="DAT_HomeScreen_MetricVal">428.6 Tons</h3>
              <span className="DAT_HomeScreen_Trend DAT_HomeScreen_Trend_Up">
                +11.2% <span className="DAT_HomeScreen_Trend_Text">vs last month</span>
              </span>
            </div>
          </div>
          <div className="DAT_HomeScreen_Sparkline">
            <svg viewBox="0 0 100 20" className="DAT_HomeScreen_Sparkline_Svg">
              <path
                d="M0,14 Q25,6 50,12 T80,7 T100,10"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="DAT_HomeScreen_MetricCard">
          <div className="DAT_HomeScreen_MetricCard_Header">
            <div className="DAT_HomeScreen_MetricCard_Icon DAT_HomeScreen_Icon_Revenue">
              <FontAwesomeIcon icon={faDollarSign} />
            </div>
            <div className="DAT_HomeScreen_MetricCard_Info">
              <span className="DAT_HomeScreen_Label">Total Revenue</span>
              <h3 className="DAT_HomeScreen_MetricVal">$126,560</h3>
              <span className="DAT_HomeScreen_Trend DAT_HomeScreen_Trend_Up">
                +7.5% <span className="DAT_HomeScreen_Trend_Text">vs last month</span>
              </span>
            </div>
          </div>
          <div className="DAT_HomeScreen_Sparkline">
            <svg viewBox="0 0 100 20" className="DAT_HomeScreen_Sparkline_Svg">
              <path
                d="M0,15 Q30,10 50,13 T85,7 T100,9"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

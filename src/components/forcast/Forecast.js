import React from "react";
import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forcastDay = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, indx) => {
          return (
            <AccordionItem key={indx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      alt="weather"
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="day">{forcastDay[indx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C /
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-detals-grid">
                  <div className="daily-detals-grid-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure}pha</label>
                  </div>
                  <div className="daily-detals-grid-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-detals-grid-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-detals-grid-item">
                    <label>Wind Speed</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-detals-grid-item">
                    <label>Sea Level</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                  <div className="daily-detals-grid-item">
                    <label>Feels Likes</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
        ;
      </Accordion>
    </>
  );
};

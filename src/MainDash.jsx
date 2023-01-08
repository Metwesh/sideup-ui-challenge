import "./MainDash.css";
import BigCardwGraph from "./components/BigCardwGraph";
import FullRadialChart from "./components/FullRadialChart";
import LongCard from "./components/LongCard";
import PieChartSmall from "./components/PieChartSmall";
import RadialChart from "./components/RadialChart";
import WideCard from "./components/WideCard";
import SmallCard from "./containers/SmallCard";
import downwardArrow from "./images/Downward-Arrow-Red.svg";
import giftBox from "./images/Gift-Box.svg";
import greenLineChart from "./images/Line chart mini green.svg";
import redLineChart from "./images/Line chart mini red.svg";
import upwardArrow from "./images/Upward-Arrow-Green.svg";
import formatter from "./utilities/numberFormatter";

export default function MainDash() {
  const increase = true;
  const money = 2755890;
  const pendingDelta = 15;
  const actions = 10;
  const giftPercentage = 70;
  return (
    <div className="main-dash">
      <BigCardwGraph money={money} />
      <SmallCard gridAreaName="small-card1" title="Pending">
        <div id="hide-for-desktop-3">
          <h3 className="small-card-money">{`${formatter(money)} LE`}</h3>
          <div className="bottom-row-smt-1 flex ai-c">
            {/*
          If value is negative will show red graph with red text
          If value is positive will show green graph with green text
          */}
            <h3
              className={`percentage-delta ${
                pendingDelta > 0 ? "green-text" : "red-text"
              }`}>
              {Math.abs(pendingDelta)}%
            </h3>
            <img
              className="small-line-graph"
              src={pendingDelta > 0 ? greenLineChart : redLineChart}
              alt={pendingDelta > 0 ? "Green line" : "Red line"}
            />
            <h3 className="small-card-subtle-text">Compared to Last Week</h3>
          </div>
        </div>
        {window.matchMedia("(max-width: 992px)").matches && (
          <div className="flex flex-column large-margin-top">
            <div className="flex ai-c">
              <div className="total-attempts-container flex jc-c ai-c">
                <h3 className="total-attempts-value">30</h3>
              </div>
              <div className="flex flex-column jc-c small-margin-left">
                <div className="flex">
                  <h3 className="thin-font-percentage">30%</h3>
                  <img
                    className={`small-card-arrow ${
                      increase ? "" : "flip-arrow"
                    }`}
                    src={increase ? upwardArrow : downwardArrow}
                    alt={increase ? "Upward Arrow" : "Downward Arrow"}
                  />
                </div>
                <h3 className="small-card-subtle-text">
                  Compared to Last Week
                </h3>
              </div>
            </div>
          </div>
        )}
      </SmallCard>
      <SmallCard gridAreaName="small-card2" title="Actions">
        <div
          className="small-card-blue-box flex jc-sb ai-c"
          id="hide-for-desktop-3">
          <h3 className="small-card-number red">{actions}</h3>
          <h3 className="small-card-link pointer">Take Action</h3>
        </div>
        {window.matchMedia("(max-width: 992px)").matches && (
          <div className="flex flex-column large-margin-top">
            <div className="flex ai-c">
              <div className="total-attempts-container flex jc-c ai-c">
                <h3 className="total-attempts-value">30</h3>
              </div>
              <div className="flex flex-column jc-c small-margin-left">
                <div className="flex">
                  <h3 className="thin-font-percentage">30%</h3>
                  <img
                    className={`small-card-arrow ${
                      increase ? "" : "flip-arrow"
                    }`}
                    src={increase ? upwardArrow : downwardArrow}
                    alt={increase ? "Upward Arrow" : "Downward Arrow"}
                  />
                </div>
                <h3 className="small-card-subtle-text">
                  Compared to Last Week
                </h3>
              </div>
            </div>
          </div>
        )}
      </SmallCard>
      {/* 
      The elements appear in order of placement as it is looped over.
      They also appear with the name they are given in the props object. 
      Camel-case will be converted to a sentence.
      */}
      <WideCard ToBePicked={45} Picked={45} Delivered={45} Returned={45} />

      <SmallCard gridAreaName="small-card3" title="Daily Orders">
        <FullRadialChart />
      </SmallCard>

      <SmallCard gridAreaName="small-card4" title="Success Rate">
        <PieChartSmall />
      </SmallCard>

      <SmallCard gridAreaName="small-card5 p-relative" title="New Customers">
        <div className="flex jc-c ai-c large-margin-top">
          <RadialChart />
        </div>
      </SmallCard>

      <SmallCard gridAreaName="small-card6" title="Gifts">
        <div className="flex jc-c ai-c" id="hide-for-desktop-3">
          <div className="small-card-blue-box flex ai-c w-100 jc-sb-desktop-2">
            <h3 className="small-card-number green">{actions}</h3>
            <img className="gift-box-icon" src={giftBox} alt="Gift Box Icon" />
          </div>
          {/* Dynamic progress bar */}
          <div
            className="flex flex-column jc-c progress-bar-container"
            id="hide-for-desktop-2">
            <div className="progress-bar-gray">
              <div
                className="progress-bar-colored"
                style={{ width: giftPercentage + "%" }}></div>
            </div>
            <h3 className="small-card-subtle-text small-margin-top">
              Compared to Last Week
            </h3>
          </div>
        </div>
        {window.matchMedia("(max-width: 992px)").matches && (
          <div className="flex jc-c ai-c medium-margin-top">
            <div className="flex flex-column large-margin-top">
              <div className="flex ai-c small-margin-top">
                <div className="total-attempts-container flex jc-c ai-c">
                  <h3 className="total-attempts-value">30</h3>
                </div>
                <div className="flex flex-column jc-c small-margin-left">
                  <div className="flex">
                    <h3 className="thin-font-percentage">30%</h3>
                    <img
                      className={`small-card-arrow ${
                        increase ? "" : "flip-arrow"
                      }`}
                      src={increase ? upwardArrow : downwardArrow}
                      alt={increase ? "Upward Arrow" : "Downward Arrow"}
                    />
                  </div>
                  <h3 className="small-card-subtle-text">
                    Compared to Last Week
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </SmallCard>

      <LongCard />
    </div>
  );
}

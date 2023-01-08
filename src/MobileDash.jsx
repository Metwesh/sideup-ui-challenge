import { Pie, PieChart, RadialBar, RadialBarChart } from "recharts";
import "./MobileDash.css";
import LongCard from "./components/LongCard";
import MobileChart from "./components/MobileChart";
import PopOutButtons from "./components/PopOutButtons";
import WideCard from "./components/WideCard";
import Card from "./containers/Card";
import SmallCard from "./containers/SmallCard";
import avatar from "./images/Avatar.svg";
import cashIcon from "./images/Cash.svg";
import downwardArrow from "./images/Downward-Arrow-Red.svg";
import giftBox from "./images/Gift-Box.svg";
import hamburger from "./images/Hamburger.svg";
import netSalesIcon from "./images/Net Sales Icon.svg";
import profileIconFallback from "./images/Profile-Icon.png";
import profileIcon from "./images/Profile-Icon.webp";
import sideupSm from "./images/Sideup Logo Sm.svg";
import sprite1FB from "./images/Sprite-1.png";
import sprite1 from "./images/Sprite-1.webp";
import sprite2FB from "./images/Sprite-2.png";
import sprite2 from "./images/Sprite-2.webp";
import sprite3FB from "./images/Sprite-3.png";
import sprite3 from "./images/Sprite-3.webp";
import sprite4FB from "./images/Sprite-4.png";
import sprite4 from "./images/Sprite-4.webp";
import truck from "./images/Truck.svg";
import upwardArrow from "./images/Upward-Arrow-Green.svg";
import formatter from "./utilities/numberFormatter";

export default function MobileDash() {
  // If values are negative, everything will change from green to red.
  const increase = 10;
  const cashDelta = 15;
  const user = "John Doe";
  const money = 2755890;
  const data = [
    {
      do: 100,
      fill: "#FDFEF9",
      visibility: "hidden",
    },
    {
      do: 63,
      fill: increase ? "#17A21A" : "#ed3237",
    },
  ];
  const data02 = [
    {
      name: "Net Sales",
      value: 70,
      fill: "#17A21A",
    },
    {
      name: "Total Cash",
      value: 30,
      fill: "#EDD329",
    },
  ];
  const sprites = [
    { webp: sprite1, png: sprite1FB },
    { webp: sprite2, png: sprite2FB },
    { webp: sprite3, png: sprite3FB },
    { webp: sprite4, png: sprite4FB },
  ];
  return (
    <>
      <PopOutButtons />
      <nav className="mobile-nav flex jc-sb ai-fe">
        <img className="avatar" src={avatar} alt="Avatar" />
        <img className="sideup-logo-sm" src={sideupSm} alt="SideUp logo" />
        <img src={hamburger} alt="Hamburger" />
      </nav>
      <div className="second-row">
        <Card class="mobile-profile-card-container pointer">
          <div className="flex jc-s ai-c mobile-profile-card">
            <img
              className="profile-icon"
              src={profileIcon}
              onError={() => (this.src = profileIconFallback)}
              alt="Profile Icon"
            />
            <h2 className="header-text mobile">Welcome Back, {user}</h2>
          </div>
        </Card>
        <div className="mobile-productivity-icons flex jc-c ai-c">
          {sprites.map(({ webp, png }, index) => (
            <img
              key={index}
              className="mobile-sprites"
              src={webp}
              onError={() => (this.src = png)}
              alt="Sprite 1"
            />
          ))}
        </div>
        <WideCard ToBePicked={45} Picked={45} Delivered={45} Returned={45} />
      </div>
      <Card class="third-row">
        <div className="flex title-money-wrapper">
          <div className="title-logo-container1 flex ai-c">
            <img src={netSalesIcon} alt="Net Sales Icon" />
            <h3 className="card-title">Net Sales</h3>
          </div>
          <div className="money-value-container flex ai-c jc-c">
            <h3 className="money-blue flex jc-c ai-c">
              {`${formatter(money)} LE`}
            </h3>
          </div>
        </div>

        <div className="flex">
          <div className="mini-card1">
            <div className="title-logo-container flex ai-c">
              <img src={cashIcon} alt="Truck logo" />
              <h3 className="mini-card-title">Total Cash</h3>
            </div>
            <h3 className="mini-card-money">{`${formatter(money)} LE`}</h3>
            <div className="sm-graph flex jc-c ai-c">
              {/* If change is positive will display text in green & an upward green bar */}
              <h3
                className={`percentage-delta ${
                  cashDelta > 0 ? "green-text" : "red-text"
                }`}>{`${Math.abs(cashDelta)}%`}</h3>
              <img
                className="mini-bar-graph"
                src={cashDelta > 0 ? upwardArrow : downwardArrow}
                alt="Task Sheet Icon"
              />
              <h3 className="mini-card-subtle-text">Compared to Last Week</h3>
            </div>
          </div>
          <div className="mini-card1">
            <div className="title-logo-container flex ai-c">
              <img src={truck} alt="Truck logo" />
              <h3 className="mini-card-title">Delivery Fees</h3>
            </div>
            <h3 className="mini-card-money">{`${formatter(money)} LE`}</h3>
            <div className="sm-graph flex jc-c ai-c">
              {/* If change is positive will display text in green & an upward green bar */}
              <h3
                className={`percentage-delta ${
                  cashDelta > 0 ? "green-text" : "red-text"
                }`}>{`${Math.abs(cashDelta)}%`}</h3>
              <img
                className="mini-bar-graph"
                src={cashDelta > 0 ? upwardArrow : downwardArrow}
                alt="Task Sheet Icon"
              />
              <h3 className="mini-card-subtle-text">Compared to Last Week</h3>
            </div>
          </div>
          <div className="flex flex-column ai-c mobile-legend-container">
            <div className="flex jc-c ai-c colored-text-box red">
              Delivery Fees
            </div>
            <div className="flex jc-c ai-c colored-text-box green">
              Net Sales
            </div>
            <div className="flex jc-c ai-c colored-text-box yellow">
              Total Cash
            </div>
          </div>
        </div>
        <MobileChart />
      </Card>
      <SmallCard
        gridAreaName="small-card1 mobile"
        title="Pending"
        mobile={true}>
        <h3 className="small-card-money mobile">{`${formatter(money)} LE`}</h3>
        {/*
          If value is negative will show red graph with red text
          If value is positive will show green graph with green text
          */}

        <div className="flex flex-column large-margin-top">
          <div className="flex ai-c">
            <div className="flex flex-column jc-c">
              <div className="flex ai-c">
                <h3 className="thin-font-percentage">30%</h3>
                <img
                  className={`small-card-arrow mobile ${
                    increase ? "" : "flip-arrow"
                  }`}
                  src={increase ? upwardArrow : downwardArrow}
                  alt={increase ? "Upward Arrow" : "Downward Arrow"}
                />
                <h3 className="small-card-subtle-text">
                  Compared to Last Week
                </h3>
              </div>
            </div>
          </div>
        </div>
      </SmallCard>
      <SmallCard
        gridAreaName="small-card2 mobile"
        title="Actions"
        mobile={true}>
        <div className="small-card-blue-box flex jc-sb ai-c mobile-custom-margin-top">
          <h3 className="small-card-number">10</h3>
          <h3 className="small-card-link pointer mobile-custom-margin-right">
            Take Action
          </h3>
        </div>
      </SmallCard>

      <SmallCard
        gridAreaName="small-card3 mobile"
        title="Daily Orders"
        mobile={true}>
        <h3 className="small-card-money mobile small-margins">{`${formatter(
          money
        )} LE`}</h3>
        <div className="flex jc-c ai-c small-margin-top p-relative">
          <RadialBarChart
            width={55}
            height={55}
            innerRadius="60%"
            outerRadius="100%"
            data={data}
            startAngle={360}
            endAngle={0}>
            <RadialBar background clockWise={true} dataKey="do" />
          </RadialBarChart>
          <h3 className="number-value mobile">50</h3>
          <div className="flex flex-column">
            <div className="flex ai-c">
              <h3 className="thin-font-percentage">{data[1].do}%</h3>
              <img
                className={`small-card-arrow ${increase ? "" : "flip-arrow"}`}
                src={increase ? upwardArrow : downwardArrow}
                alt={increase ? "Upward Arrow" : "Downward Arrow"}
              />
            </div>
            <h3 className="small-card-subtle-text">Compared to Last Week</h3>
          </div>
        </div>
      </SmallCard>

      <SmallCard
        gridAreaName="small-card4 mobile"
        title="Success Rate"
        mobile={true}>
        <div className="flex xlarge-margin-top">
          {/* I had to remove the number beside the Pie chart because the chart cannot shrink any further */}
          <PieChart width={60} height={60}>
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={30}
            />
          </PieChart>
          {/* Custom legend */}
          {/* Could be turned into a loop if more data & space is provided */}
          <div className="flex flex-column ai-c mobile-legend-container">
            <div className="flex jc-c ai-c colored-text-box green">
              Net Sales
            </div>
            <div className="flex jc-c ai-c colored-text-box yellow">
              Total Cash
            </div>
          </div>
        </div>
      </SmallCard>

      <SmallCard
        gridAreaName="small-card5 mobile"
        title="Actions"
        mobile={true}>
        <div className="flex flex-column large-margin-top mobile-custom-margin-top">
          <div className="flex ai-c">
            <div className="total-attempts-container flex jc-c ai-c">
              <h3 className="total-attempts-value">10</h3>
            </div>
            <div className="flex flex-column jc-c small-margin-left">
              <div className="flex">
                <h3 className="thin-font-percentage">63%</h3>
                <img
                  className={`small-card-arrow ${increase ? "" : "flip-arrow"}`}
                  src={increase ? upwardArrow : downwardArrow}
                  alt={increase ? "Upward Arrow" : "Downward Arrow"}
                />
              </div>
              <h3 className="small-card-subtle-text">Compared to Last Week</h3>
            </div>
          </div>
        </div>
      </SmallCard>
      <SmallCard gridAreaName="small-card6 mobile" title="Gifts" mobile={true}>
        <div className="flex jc-c ai-c">
          <div className="small-card-blue-box flex ai-c w-100 jc-sb-desktop-2 mobile">
            <h3 className="small-card-number green">10</h3>
            <img className="gift-box-icon" src={giftBox} alt="Gift Box Icon" />
          </div>
        </div>
      </SmallCard>
      <LongCard mobile={true} />
    </>
  );
}

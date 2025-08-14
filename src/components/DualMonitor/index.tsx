import { Container } from "./styles";

import { useMonitoring } from "hooks";

import { FiCpu as CpuIcon } from "react-icons/fi";
import { BsGpuCard as GpuIcon } from "react-icons/bs";
import { FaTemperatureLow as TempIcon } from "react-icons/fa";
import { VscPulse as LoadIcon } from "react-icons/vsc";

import { Progress } from "components/Progress";

import gif from "../../assets/bgGif.gif";

export const DualMonitor = () => {
  const { cpu, gpu } = useMonitoring();

  const CpuInfo = () => (
    <div className="info-container">
      <div className="info-title">
        <CpuIcon opacity="0" />
        <span
          style={{
            fontSize: "5vw",
            color: "#f09d28",
            opacity: 1,
          }}
        >
          {cpu?.name?.replace(/(core|ryzen \d)/gi, '').trim() ?? 'i9 11900K'}
        </span>
      </div>
      <div
        className="info-data"
        style={{ fontSize: "8vw" }}
      >
        <div className="info-icon temperature">
          <TempIcon color="#00e5ff"/>
        </div>
        <div className="data">{cpu?.temperature ?? 42}°</div>
      </div>
      <div
        className="info-data"
        style={{ fontSize: "8vw" }}
      >
        <div className="info-icon load">
          <LoadIcon color="#00e5ff"/>
        </div>
        <div className="data">
          {cpu?.load ?? 3}
          <span>%</span>
        </div>
      </div>
    </div>
  );

  const GpuInfo = () => (
    <div className="info-container">
      <div className="info-title">
        <GpuIcon opacity="0" />
        <span
          style={{
            fontSize: "5vw",
            color: "#65cc2e",
            opacity: 1,
          }}
        >
          {gpu?.name?.replace(/nvidia geforce/gi, '').replace(/amd radeon/gi, '') ??
            'RTX 3080 Ti'}
        </span>
      </div>
      <div
        className="info-data"
        style={{ fontSize: "8vw" }}
      >
        <div className="info-icon temperature">
          <TempIcon
            color="#00e5ff"
            opacity="1"
          />
        </div>
        <div className="data">{gpu?.temperature ?? 45}°</div>
      </div>
      <div
        className="info-data"
        style={{ fontSize: "8vw" }}
      >
        <div className="info-icon load">
          <LoadIcon
            color="#00e5ff"
            opacity="1"
          />
        </div>
        <div className="data">
          {gpu?.load ?? 12}
          <span>%</span>
        </div>
      </div>
    </div>
  );

  return (
    <Container style={{ fontFamily: "Staatliches", backgroundColor: "#000000" }}>
      <video autoPlay loop muted src={gif} poster={gif} width="110%" /> 
      {/* width gif size (0-1) * 500*/}
      <Progress leftValue={cpu?.temperature} rightValue={gpu?.temperature}>
        <div className="monitoring" style={{color: "#ffffff"}}>
          <CpuInfo/>
          <div className="info-separator" style={{borderColor: "#ffffff", opacity: "0"}}></div>
          <GpuInfo/>
        </div>
      </Progress>
    </Container>
  );
}
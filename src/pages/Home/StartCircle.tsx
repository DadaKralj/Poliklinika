import React from "react";
import "./StartCircle.css";
import { useLanguage } from "../../Context/LanguageContext";

interface StatCircleProps {
  to: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatCircle: React.FC<StatCircleProps> = ({
  to,
  label,
  suffix = "+",
  duration = 2000,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    let start: number | null = null;
    let raf = 0;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const cur = Math.floor(progress * to);
      setVal(cur);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          raf = requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) io.observe(ref.current);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to, duration]);

  return (
    <div ref={ref} className="stat-circle">
      <div className="stat-inner">
        <div className="stat-number">
          {val.toLocaleString("sr-RS")}
          {suffix}
        </div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};

export default StatCircle;

export const StatistikaSekcija: React.FC = () => {
  const { language } = useLanguage();
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <div className="stat-section">
      <StatCircle to={100} label={t("Godine rada", "Years of experience")} />
      <StatCircle to={10000} label={t("Zadovoljnih pacijenata", "Satisfied patients")} />
      <StatCircle to={10} label={t("Usluga koje pružamo", "Services we provide")} />
    </div>
  );
};

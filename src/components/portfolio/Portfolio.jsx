import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import{
  educationPortfolio,
  internshipPortfolio,
  experiencePortfolio,
  volunteerPortfolio,
  projectsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list =[
    {
      id: "education",
      title: "Education",
    },
    {
      id: "internships",
      title: "Internships",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "volunteer",
      title: "Volunteer",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "education":
        setData(educationPortfolio);
        break;
      case "internships":
        setData(internshipPortfolio);
        break;
      case "experience":
        setData(experiencePortfolio);
        break;
      case "volunteer":
        setData(volunteerPortfolio);
        break;
      case "projects":
        setData(projectsPortfolio);
        break;
      default:
        setData(educationPortfolio);
    }
  }, [selected]);

  return (
    <div className= "portfolio" id="portfolio">
      <h1>History</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList
            title={item.title}
            subtitle={item.subtitle}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
            <div className="item">
              <img
                src={d.img}
                alt=""
              />
            <h3>{d.title}</h3> 
            <h2>{d.subtitle}</h2>

          </div>
        ))}
      </div>
    </div>
  )
}

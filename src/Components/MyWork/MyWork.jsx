import React from 'react'
import "./MyWork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => (
                <div key={index} className="mywork-item">
                  <div>
                   <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                    <img src={work.w_img} alt={work.w_name} />
                    </a>
                    </div>
                    <div className="mywork-content">
                        <h2>{work.w_name}</h2>
                        <p>{work.w_desc}</p>
                    </div>
                </div>
            ))}
        </div>

        <a className='a-showmore' href="https://github.com/singhxmandeep" target="_blank" rel="noopener noreferrer">
        <div className="mywork-showmore">
            <p>Show More</p>
            <img className='arrow-showmore' src={arrow_icon} alt="Show more" />
            <img className='git' src="https://tse3.mm.bing.net/th?id=OIP.9B4NoA0XTQUhk62iCKkCdQHaH7&pid=Api&P=0&h=180" alt="GitHub Icon" />
        </div>
        </a>
    </div>
  )
}

export default MyWork

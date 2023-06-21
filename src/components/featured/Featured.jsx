import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
          <h1 className="title">Total Ravenue</h1>
          <MoreVertIcon fontSize='small'/>
      </div>

      <div className="bottom">
          <div className="featuredChart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
          </div>

          <p className="title">Total sales made today</p>
          <p className="amount">$420</p>
          <p className="desc">Previous transactions processing. Last payments may not be included.</p>

          <div className="summary">

            <div className="item">
              <div className="itemTitle">Target</div>
                <div className="itemResult negativer">
                    <KeyboardArrowDownIcon fontSize='small'/>
                    <div className="resultAmout">$12.4k</div>
                </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last week</div>
                <div className="itemResult posiitive">
                    <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                    <div className="resultAmout">$2.8k</div>
                </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last month</div>
                <div className="itemResult posiitive">
                    <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                    <div className="resultAmout ">$7.9k</div>
                </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Featured
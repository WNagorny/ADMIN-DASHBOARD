import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import ListTable from '../../components/table/Table'

const Single = () => {
	return (
		<div className='single'>
			<Sidebar />
			<div className='singleContainer'>
				<Navbar />

				<div className='top'>
					<div className='left'>
						<div className='editButton'>Edit</div>

						<h1 className='title'>Information</h1>
						<div className='item'>
							<img
								src='https://images.pexels.com/photos/16381763/pexels-photo-16381763.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
								alt=''
								className='itemImg'
							/>

							<div className='details'>
								<h1 className='itemTitle'>Jane Doe</h1>
								<div className='detailItem'>
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
								<div className='detailItem'>
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+48 738 527 471</span>
                </div>
								<div className='detailItem'>
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Rue rasson 1</span>
                </div>
								<div className='detailItem'>
                  <span className="itemKey">County:</span>
                  <span className="itemValue">Belgium</span>
                </div>
							</div>
						</div>
					</div>

					<div className='right'>
            <Chart aspect={8/1} title="User Spending( Last 6 Months)"/>
          </div>
				</div>

				<div className='bottom'>
						<h1 className='title'>Last Transactions</h1>
             <ListTable/>
        </div>
			</div>
		</div>
	)
}

export default Single

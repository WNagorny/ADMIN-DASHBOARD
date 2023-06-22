import './datatable.scss'
import {Link} from 'react-router-dom'

import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userRows } from '../../datatablesource'

const Datatable = () => {
	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: () => {
				return (
					<div className='cellAction'>
						<Link to='/users/test' style={{ textDecoration: 'none' }}>
							<div className='viewButton'>View</div>
						</Link>
						<div className='deleteButton'>Delete</div>
					</div>
				)
			},
		},
	]
	return (
		<div className='datatable'>
      <div className="datatableTitle">
        All Users List
        <Link to='/users/new' style={{ textDecoration: 'none' }} className='link'>
          Add New User
        </Link>
      </div>
			<DataGrid
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 8 },
					},
				}}
				pageSizeOptions={[4, 4]}
				checkboxSelection
			/>
		</div>
	)
}

export default Datatable

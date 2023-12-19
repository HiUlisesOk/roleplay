import React, { useEffect, useState } from 'react'
import ActivityTable from '../dashboard/ActivityTable'
import UserCardInfo from './UserCardInfo'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import { getLastActivitySelector } from '../../redux/selector/activitySelector';
import { getLastActivity } from '../../redux/actions/activityActions';
import getTimeDifferenceString from '../../utils/TimeAgo';

const ProfileFeed = () => {
	const dispatch = useDispatch()

	const { id } = useParams()

	const [info, setInfo] = useState([])

	const { getLastActivityState } = useSelector(getLastActivitySelector)


	useEffect(() => {
		!getLastActivityState.length && dispatch(getLastActivity())

		if (getLastActivityState.length > 0) {
			const mapInfo = getLastActivityState?.map((item, index) => {
				return {
					ID: item.user_id,
					avatar: item?.avatar,
					action: item?.action_desc,
					username: item.name || 'unknown',
					preview: item.info,
					timeAgo: getTimeDifferenceString(item.createdAt),
					topics: "60 Topics"
				}
			})

			const filterInfo = mapInfo.filter((item) => id == item.ID && item)
			// console.log(getLastActivityState)
			setInfo(filterInfo)
		}
	}, [getLastActivityState])





	return (
		<Box sx={{ display: 'flex', flexDirection: 'row' }}>
			<ActivityTable rows={info} />
			<UserCardInfo />

		</Box>
	)
}

export default ProfileFeed
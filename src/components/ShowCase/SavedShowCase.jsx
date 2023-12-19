import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

import { Formik, Form, Field } from "formik";
import {
	Select,

	MenuItem,

} from "@mui/material";
import SimpleCard from '../UiKit/SimpleCard';
import { getMyInfo, getUserById } from '../../redux/actions/userActions';


import { useDispatch, useSelector } from 'react-redux';
import { getTopicByUserId } from '../../redux/actions/topicActions'
import { getTopicByUserIdSelector } from '../../redux/selector/topicSelector'
import { useParams } from 'react-router-dom';

const SavedShowCase = () => {
	const dispatch = useDispatch();

	const { id } = useParams();

	const [userTopics, setUserTopics] = useState([])
	const { topicByUserIdState } = useSelector(getTopicByUserIdSelector)


	useEffect(() => {
		dispatch(getUserById(id));

	}, [id]);

	useEffect(() => {

		id && topicByUserIdState.length <= 0 && dispatch(getTopicByUserId(id))
		console.log(topicByUserIdState)

		const newTopicsList = topicByUserIdState?.map((item) => {
			return {
				...item,
				avatar: item?.avatar,
				action: item?.title,
				username: item?.author,
				preview: 'They lean in, eager to learn...',
				timeAgo: item?.updatedAt

			}
		}) || []



		topicByUserIdState && topicByUserIdState?.length > 0 && newTopicsList && setUserTopics(newTopicsList)


	}, [id, topicByUserIdState.length])

	console.log(userTopics)

	return (
		<>
			<Box id="RolePlay-Cat-Titles" sx={{ width: '98%', margin: 'auto', marginTop: '5vh', display: 'flex', justifyContent: 'space-between' }}>


				<Box>
					<Typography variant="Poppins36px" sx={{ marginLeft: 0, textAlign: "Left", }} component="div" >{userTopics?.Title || ' '}</Typography>
					<Typography variant="Quicksand24px" sx={{ marginLeft: 0 }} component="div" >{userTopics?.subTitle || ' '}</Typography>
				</Box>

				<Box sx={{ display: 'flex', AlignContent: 'center' }}>
					<Formik
						initialValues={{
							search: 0,
						}}
						onSubmit={(values, actions) => {
							alert("values:" + JSON.stringify(values));
						}}
					>
						{({ values, setFieldValue }) => (
							<Form>
								<Select
									name={'SearchFilter'}
									value={values.search}
									onChange={e => {
										setFieldValue('search', e.target.value);
									}}
								>
									<MenuItem value={0}>Asc</MenuItem>
									<MenuItem value={1}>Desc</MenuItem>
									<MenuItem value={2}>Top Rated</MenuItem>
									<MenuItem value={3}>Oldest</MenuItem>
									<MenuItem value={4}>Group by Character</MenuItem>
								</Select>
							</Form>
						)}
					</Formik>
				</Box>

			</Box >
			<Box id="userBadgeContainer" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', width: '100%', gap: 1 }}>
				{userTopics[0] && userTopics[0].ID && userTopics?.map((item) => {
					return (
						<SimpleCard key={`${item?.ID} SavedShowCase`} info={item} />
					)
				})}
			</Box>
		</>
	)
}

export default SavedShowCase
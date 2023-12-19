import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { CategoryFeedMostPopular } from '../../utils/Dictionary'
import { Formik, Form, Field } from "formik";
import {
	Select,
	InputLabel,
	MenuItem,
	FormControl,
	Button
} from "@mui/material";
import SimpleCard from '../UiKit/SimpleCard';

const SearchGroup = ({ info }) => {

	const [showMore, setShowMore] = useState(false)


	return (
		<>
			<Box id="RolePlay-Cat-Titles" sx={{ width: '98%', margin: 'auto', marginTop: '5vh', display: 'flex', justifyContent: 'space-between' }}>


				<Box>
					<Typography variant="Poppins36px" sx={{ marginLeft: 0, textAlign: "Left", }} component="div" >{info?.Title || ' '}</Typography>
					<Typography variant="Quicksand24px" sx={{ marginLeft: 0 }} component="div" >{info?.subTitle || ' '}</Typography>
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
									<MenuItem value={0}>Most Popular</MenuItem>
									<MenuItem value={1}>Most Recent</MenuItem>
									<MenuItem value={2}>Top Rated</MenuItem>
									<MenuItem value={3}>Oldest</MenuItem>
									<MenuItem value={4}>Character Search</MenuItem>
								</Select>
							</Form>
						)}
					</Formik>
				</Box>

			</Box >
			<Box id="userBadgeContainer" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '98%', gap: 1, flexWrap: 'wrap' }}>

				{info.length > 0 && info?.map((item, index) => {
					return (
						showMore ? <SimpleCard key={`Card` + item?.ID} info={item} /> : index < 4 && <SimpleCard key={`Card` + item?.ID} info={item} />
					)
				})}
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '98%', gap: 1 }}>	{!showMore ? <Button variant='outline' onClick={() => setShowMore(true)}>Show More</Button> : <Button variant='outline' onClick={() => setShowMore(false)}>Show Less</Button>}</Box>
		</>
	)
}

export default SearchGroup
import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { Form, redirect } from 'react-router-dom';

const Create = () => {
	return (
		<Box maxW="480px">
			<Form action="/create" method="post">
				<FormControl isRequired mb="40px">
					<FormLabel>Task Name</FormLabel>
					<Input type="text" name="title" />
					<FormHelperText>Enter a descriptive task name</FormHelperText>
				</FormControl>
				<FormControl isRequired mb="40px">
					<FormLabel>Task Description</FormLabel>
					<Textarea placeholder="Enter a detailed description for the task" name="description" />
					<FormHelperText>Enter a descriptive task name</FormHelperText>
				</FormControl>
				<FormControl display="flex" alignItems="center" mb="40px">
					<Checkbox name="isPriority" size="lg" colorScheme="purple" />
					<FormLabel ml="10px" mb="0">
						Make this a priority task
					</FormLabel>
				</FormControl>
				<Button type="submit">Submit</Button>
			</Form>
		</Box>
	);
};

export const createAction = async ({ request }) => {
	const data = await request.formData();

	const task = {
		title: data.get('title'),
		description: data.get('description'),
		isPriority: data.get('isPriority') === ''
	};

	console.log(task);

	return redirect('/');
};

export default Create;

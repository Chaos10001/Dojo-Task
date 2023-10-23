import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

const Profile = () => {
	return (
		<Tabs mt="20px" p="20px" colorScheme="purple" variant="enclosed">
			<TabList>
				<Tab _selected={{ color: 'white', bg: 'purple.400' }}>Acount Info</Tab>
				<Tab _selected={{ color: 'white', bg: 'purple.400' }}>Task HIstory</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={EmailIcon} />
							Email: gabriel@gmail.com
						</ListItem>
						<ListItem>
							<ListIcon as={ChatIcon} />
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</ListItem>
						<ListItem>
							<ListIcon as={StarIcon} />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
					</List>
				</TabPanel>
				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa quae repellendus!
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa quae repellendus!
						</ListItem>
						<ListItem>
							<ListIcon as={WarningIcon} color="red.400" />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa quae repellendus!
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa quae repellendus!
						</ListItem>
						<ListItem>
							<ListIcon as={WarningIcon} color="red.400" />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa quae repellendus!
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa quae repellendus!
						</ListItem>
					</List>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default Profile;

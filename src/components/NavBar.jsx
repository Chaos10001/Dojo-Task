import { UnlockIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Button, Flex, HStack, Heading, Spacer, Text, useToast } from '@chakra-ui/react';

const NavBar = () => {
	const toast = useToast();

	const showToast = () => {
		toast({
			title: 'Logged Out',
			description: 'Successfully Logged Out',
			duration: 5000,
			isClosable: true,
			status: 'success',
			position: 'top',
			icon: <UnlockIcon />
		});
	};

	return (
		<Flex as="nav" p="10px" mb="40px" alignItems="center">
			<Heading as="h1">Dojo Task</Heading>
			<Spacer />

			<HStack spacing="10px">
				<Avatar name="mario" bg="purple" src="./img/mario.png">
					<AvatarBadge width="1.3em" bg="teal.500">
						<Text fontSize="xs" color="white">
							3
						</Text>
					</AvatarBadge>
				</Avatar>
				<Text>gabriel@gmail.com</Text>
				<Button colorScheme="purple" onClick={showToast}>
					Logout
				</Button>
			</HStack>
		</Flex>
	);
};

export default NavBar;

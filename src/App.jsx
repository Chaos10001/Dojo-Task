import './App.css';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import RootLayouts from './layouts/RootLayouts';
import DashBoard, { tasksLoader } from './pages/DashBoard';
import Create, { createAction } from './pages/Create';
import Profile from './pages/Profile';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayouts />}>
			<Route index element={<DashBoard />} loader={tasksLoader} />
			<Route path="create" element={<Create />} action={createAction}/>
			<Route path="profile" element={<Profile />} />
		</Route>
	)
);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

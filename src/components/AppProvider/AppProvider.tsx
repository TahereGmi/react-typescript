import React from 'react';
import { OrderedMap } from 'immutable';
import { AppState } from 'types/app';
import { AddTaskFormContent, EditTaskFormContent } from 'types/formContent';
import { addTask, AddTaskAction, editTask, EditTaskAction } from './actions';
import { AppActionsContext, AppStateContext } from './context';
import { TaskRecord, TaskStatus } from 'types/task';

export interface AppProviderProps {
	initialData?: AppState;
	children: React.ReactNode;
}

function appReducer(state: AppState, action: AddTaskAction | EditTaskAction) {
	switch (action.type) {
		case 'addTask': {
			const taskId = state.size + 1;
			const task: TaskRecord = {
				...action.payload,
				id: taskId,
				status: TaskStatus.ToDo,
				changeStatusHistory: [],
			};
			return OrderedMap([
				[taskId, task] as [TaskRecord['id'], TaskRecord],
			]).merge(state);
		}
		case 'editTask':
      // ------- Should Change ASAP
			const taskId = state.size + 1;
			const task: TaskRecord = {
				...action.payload,
				id: taskId,
				status: TaskStatus.ToDo,
				changeStatusHistory: [],
			};
			return OrderedMap([
				[taskId, task] as [TaskRecord['id'], TaskRecord],
			]).merge(state);
		default:
			throw new Error('Invalid action is dispatched to the appReducer');
	}
}

const defaultInitialData = OrderedMap<TaskRecord['id'], TaskRecord>();

function AppProvider({
	initialData = defaultInitialData,
	children,
}: AppProviderProps) {
	const [data, dispatch] = React.useReducer(appReducer, initialData);

	const actions = React.useMemo(
		() => ({
			addTask: (formContent: AddTaskFormContent) =>
				dispatch(addTask(formContent)),
			updateTask: (taskId: number, formContent: EditTaskFormContent) =>
				dispatch(editTask(taskId, formContent)),
		}),
		[]
	);

	return (
		<AppActionsContext.Provider value={actions}>
			<AppStateContext.Provider value={data}>
				{children}
			</AppStateContext.Provider>
		</AppActionsContext.Provider>
	);
}

export default AppProvider;

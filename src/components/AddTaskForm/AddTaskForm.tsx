import React from 'react';
import Form, { FormProps } from 'components/Form';
import FormTextField from 'components/FormTextField';
import type { AddTaskFormContent } from 'types/formContent';
import useAppActions from 'components/useAppActions';

export type AddTaskFormProps = Pick<FormProps<AddTaskFormContent>, 'className'>;

function AddTaskForm({ className }: AddTaskFormProps) {
	const { addTask } = useAppActions();
    console.log('add task form');
	return (
		<Form<AddTaskFormContent>
			title="Add a new Task"
			className={className}
			onSubmit={addTask}
			clearAfterSubmission
		>
			<FormTextField name="title" />
			<FormTextField name="description" />
			<button type="submit">Add</button>
		</Form>
	);
}

export default AddTaskForm;

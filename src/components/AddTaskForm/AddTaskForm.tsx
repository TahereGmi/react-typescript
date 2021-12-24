import React from 'react';
import Form, { FormProps } from 'components/Form';
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
import FormTextField from 'components/FormTextField';
import type { AddTaskFormContent } from 'types/formContent';
import useAppActions from 'components/useAppActions';

export type AddTaskFormProps = Pick<FormProps<AddTaskFormContent>, 'className'>;

function AddTaskForm({ className }: AddTaskFormProps) {
	const { addTask } = useAppActions();
	return (
		<Form<AddTaskFormContent>
			title="Add a new Task"
			className={className}
			onSubmit={addTask}
			clearAfterSubmission
		>
			<FormTextField name="title" label="Title" autoFocus id="title-field" />
			<FormTextField
				name="description"
				label="Description"
				multiline
				rows={4}
				id="description-field"
			/>
			<button type="submit">Add</button>
		</Form>
	);
}

export default AddTaskForm;

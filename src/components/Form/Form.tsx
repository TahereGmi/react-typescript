import React from 'react';
import {
	useForm,
	FormProvider,
	FieldValues,
	SubmitHandler,
	DefaultValues,
} from 'react-hook-form';

export interface FormProps<T> {
	className?: string;
	title: string;
	onSubmit: SubmitHandler<T>;
	defaultValues?: DefaultValues<T>;
	context?: object;
	children: React.ReactNode;
	clearAfterSubmission?: boolean;
}

function Form<T extends FieldValues>({
	title,
	onSubmit,
	defaultValues,
	context,
	children,
	clearAfterSubmission = false,
}: FormProps<T>) {
	const { handleSubmit, reset, ...formProps } = useForm<T>({
		context,
		defaultValues,
	});

	const handleSuccessSubmit: SubmitHandler<T> = (onValid) => {
		onSubmit(onValid);
		if (clearAfterSubmission) {
			reset();
		}
	};

	return (
		<form onSubmit={handleSubmit(handleSuccessSubmit)}>
			<h4>{title}</h4>
			<FormProvider<T> {...formProps} handleSubmit={handleSubmit} reset={reset}>
				{children}
			</FormProvider>
		</form>
	);
}

export default Form;

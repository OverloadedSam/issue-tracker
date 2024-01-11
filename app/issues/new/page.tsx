'use client';
import { Button, Callout, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import SimpleMDE from 'react-simplemde-editor';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IssueForm {
  title: string;
  description: string;
}

interface ApiRes {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  updateAt: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState<null | string>(null);

  const submitHandler = async (data: IssueForm) => {
    try {
      await axios.post<ApiRes>('/api/issues/', data);
      router.push('/issues');
    } catch (error) {
      setError('An unexpected error occurred!');
    }
  };

  return (
    <div className='max-w-xl'>
      {error && (
        <Callout.Root color='red' className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className='space-y-3' onSubmit={handleSubmit(submitHandler)}>
        <TextField.Root>
          <TextField.Input {...register('title')} placeholder='Title' />
        </TextField.Root>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder='Description' {...field} />
          )}
        />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;

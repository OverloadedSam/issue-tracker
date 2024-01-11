'use client';
import { Button, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import SimpleMDE from 'react-simplemde-editor';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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

  const submitHandler = async (data: IssueForm) => {
    await axios.post<ApiRes>('/api/issues/', data);
    router.push('/issues');
  };

  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(submitHandler)}>
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
  );
};

export default NewIssuePage;

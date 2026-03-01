'use client';

import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { FormContact } from '@/templates/projects/t1/schemas/formSchema';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(FormContact),
    defaultValues: {
      fullName: '',
      willCome: true,
      willBeChildren: false,
      personsNumber: '0',
      comment: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormContact>> = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto mt-10 px-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" {...register('fullName')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="willCome">Will you come?</Label>
          <Controller
            name="willCome"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value === true ? 'yes' : 'no'}
                onValueChange={(v) => field.onChange(v === 'yes')}
                id="willCome"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2">No</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="willBeChildren">Will you come with children?</Label>
          <Controller
            name="willBeChildren"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value === true ? 'yes' : 'no'}
                onValueChange={(v) => field.onChange(v === 'yes')}
                id="willBeChildren"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2">No</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="personsNumber">How many persons will come?</Label>
          <Input
            id="personsNumber"
            {...register('personsNumber')}
            type="number"
            min={0}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="comment">Comment</Label>
          <Textarea id="comment" {...register('comment')} />
        </div>
        <Button type="submit" size={'lg'} className="block mx-auto">
          Submit
        </Button>
      </form>
    </div>
  );
}

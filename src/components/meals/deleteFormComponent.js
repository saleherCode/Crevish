"use client";
import DeleteButton from './deleteButton';
import { deleteMealAction } from '@/src/lib/action';
import { useFormState } from 'react-dom';


export default function DeleteFormComponent({slug}){

    const [state, fromAction] = useFormState(deleteMealAction, {message: null});
    return (
        <>
        <form action={fromAction} method="POST" onSubmit={(e) => {
            if (!confirm('Are you sure you want to delete this meal?')) {
            e.preventDefault();
            }
        }}>
            <DeleteButton slug={slug} />
          </form>
          </>
    )
}
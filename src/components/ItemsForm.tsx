import {useForm} from 'react-hook-form';
import {FieldValues} from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
    description: z.string().min(3, {message: 'Please add more words to decribe the item'}),
    amount: z.number({invalid_type_error: 'Must enter amount'}).min(1, {message: '<Must have at least 1 item'}),
    category: z.string().min(1, {message: 'Please select a Category'})
})

type FormData = z.infer<typeof schema>;

const ItemsForm = () => {

    const {register, formState: {errors}, handleSubmit} = useForm<FormData>({resolver: zodResolver(schema)});
    const onSubmit = (data: FieldValues) =>{console.log(data)};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input {...register('description')} type="text" className="form-control" />
            {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input {...register('amount', {valueAsNumber: true})} type="number" className="form-control" />
            {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select {...register('category')} id="inputState" className="form-control">
                <option>Grocery</option>
                <option>Utility</option>
                <option>Entertainment</option>
            </select>
            {errors.category && <p className='text-danger'>{errors.category.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default ItemsForm
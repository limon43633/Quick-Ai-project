import { Scissors, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

const RemoveObject = () => {

    const [input, setInput] = useState('');
    const [object, setObject] = useState('');
        
        const onSubmitHandler = async (e) => {
                e.preventDefault();
            }

    return (
        <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
            {/* left col */}

            <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>

                <div className='flex items-center gap-3'>
                    <Sparkles className='w-6 text-[#4A7AFF]'/>
                    <h1 className='text-xl font-semibold'>Object Removal</h1>
                </div>
                <p className='mt-6 text-sm font-medium'>Upload Image</p>

                <input onChange={(e)=>setInput(e.target.files[0])} type='file' accept='image/*' className='outline-none border border-gray-300 rounded-md text-sm mt-2 px-3 p-2 w-full text-gray-600' required  />

                 <p className='mt-6 text-sm font-medium'>Describe object name to remove</p>

                <textarea onChange={(e)=>setObject(e.target.value)} value={object} rows={4}  className='outline-none border border-gray-300 rounded-md text-sm mt-2 px-3 p-2 w-full' placeholder='e.g., watch or spoon, Only single object name' required  />

                    
                <button className='flex justify-center items-center gap-2 w-full bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
                    <Scissors className='w-5' />
                        Remove Object
                </button>



            </form>

            {/* right col */}

            <div className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 flex flex-col min-h-96'>
                <div className='flex items-center gap-3'>
                    <Scissors className='w-5 h-5 text-[#4A7AFF]'/>
                    <h1 className='text-xl font-semibold'>Processed Image</h1>
                </div>

                <div className='flex-1 flex justify-center items-center'>
                    <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                        <Scissors className='w-9 h-9 ' />
                        <p>Upload an image and click “Remove Object” to see the result</p>

                    </div>
                </div>

                
            </div>
            
        </div>
    );
};

export default RemoveObject;
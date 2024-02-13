'use client'

import { useState } from 'react';
import { Input,Button } from '@nextui-org/react';
import { useSession } from 'next-auth/react';

export default function Home() {
    const [name, setName] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const session=useSession();

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!session.data?.user){
            return alert("Please login/signup first before uploading your image!!");
        }
        if (!file){
            alert('please select some file before uploading!')
            return
        };
        console.log(file)

        const formData = new FormData();
        formData.set('file',file);
        

        try {
            const response = await fetch('api/upload', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    
        
    return ( <div>
    <h1 className='text-center m-2 font-medium text-blue-600'>Upload Image</h1>
    <form onSubmit={handleSubmit} className='flex flex-col container items-center ml-10'>
        <Input className='m-2 w-45 ' color='success'
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <Button type="submit" color='primary' variant='ghost' size='sm'>Upload</Button>
    </form>
</div>
    )
        

        
    
}


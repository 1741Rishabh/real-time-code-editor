import React from 'react';
import { useRouter } from 'next/router';
const Id = () => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <div>
            {id}
        </div>
    );
}

export default Id;

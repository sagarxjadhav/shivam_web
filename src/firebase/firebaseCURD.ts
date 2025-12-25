import { db } from './firebaseConfig';
import { collection, addDoc,getDocs,getDoc,updateDoc,deleteDoc,doc,serverTimestamp,query,orderBy } from 'firebase/firestore';

const collectionName = 'blogs';

const createBlog = async(blogData: any)=>{
    console.log('data:', blogData);
    try{
        const createBlog = await addDoc(collection(db,collectionName),{
            ...blogData,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });
        console.log('Blog created successfully with id: ', createBlog.id);
        return createBlog.id;

    }catch(error){
        console.error('Error creating blog: ', error);
        throw error; // Re-throw error so it can be caught by the calling function
    }

}
const getAllBlogs = async()=>{
    try{
        const blogs = await getDocs(query(collection(db,collectionName),orderBy('createdAt','desc')));
        const blogsData = blogs.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
        }));
        return blogsData;
    }catch(error){
        console.error('Error getting blogs: ', error);
        throw error;
    }
}

const getBlogById = async(id: any)=>{
    try{
        const blog = await getDoc(doc(db,collectionName,id));
        if(!blog.exists()){
            throw new Error('Blog not found');
        }
        return {
            id: blog.id,
            ...blog.data(),
        };
    }catch(error){
        console.error('Error getting blog by id: ', error);
        throw error;
    }
}

const updateBlog = async(id: any,blogData: any)=>{
    try{
        await updateDoc(doc(db,collectionName,id),{
            ...blogData,
            updatedAt: serverTimestamp(),
        });
        console.log('Blog updated successfully with id: ', id);
    }catch(error){
        console.error('Error updating blog: ', error);
        throw error;
    }
}

const deleteBlog = async(id: any)=>{
    try{
        await deleteDoc(doc(db,collectionName,id));
        console.log('Blog deleted successfully with id: ', id);
    }catch(error){
        console.error('Error deleting blog: ', error);
        throw error;
    }
}

export { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
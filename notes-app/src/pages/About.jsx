import { NotebookPen, ShieldCheck, Cloud } from "lucide-react";


const About = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">About NoteApp</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <NotebookPen className="mx-auto text-indigo-600" size={40}/>
          <h3 className="font-bold mt-2">Easy Notes</h3>
          <p>Create and manage notes easily</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl text-center">
          <ShieldCheck className="mx-auto text-indigo-600" size={40}/>
          <h3 className="font-bold mt-2">Secure</h3>
          <p>JWT & cookie based auth</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl text-center">
          <Cloud className="mx-auto text-indigo-600" size={40}/>
          <h3 className="font-bold mt-2">Cloud</h3>
          <p>MongoDB Atlas powered</p>
        </div>
      </div>
      <div className="bg-indigo-50 p-6 rounded-xl text-center">
       
  <h2 className="text-xl font-bold mb-2"> E-Note <span className="text-indigo-400">Web</span> is used in my life</h2>
  <p className="text-gray-600">
   I love you so much, I will write a story about the beautiful memories we share.”
  </p>
</div>
</div>

 </>
   
    
  );
};

export default About;

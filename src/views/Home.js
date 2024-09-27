import React, { useState } from 'react';

// Component Imports
import MatrixRainingCode from '../components/MatrixEffect';

//Icon Imports 
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdClear } from "react-icons/md";



const Home = () => {
    const [minLength, setMinLength] = useState(8);
    const [maxLength, setMaxLength] = useState(12);
    const [characters, setCharacters] = useState("");
    const [passwords, setPasswords] = useState([]);
    const [numPasswords, setNumPasswords] = useState(10); // Set a default value

    const generatePassword = (e) => {
        e.preventDefault(); // Prevent form submission

        // Ensure minLength is less than maxLength
        if (minLength > maxLength) {
            alert("Minimum length should be less than maximum length.");
            return;
        }

        // Ensure characters are provided
        if (characters.length === 0) {
            alert("Please provide characters for password generation.");
            return;
        }

        const newPasswords = [];
        for (let j = 0; j < numPasswords; j++) {
            let length = Math.floor(
                Math.random() * (maxLength - minLength + 1) + minLength
            );
            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                password += characters[randomIndex];
            }
            newPasswords.push(password);
        }

        // Use functional update to set passwords
        setPasswords(newPasswords);
    };

    const downloadPasswords = () => {
        const element = document.createElement("a");
        const file = new Blob([passwords.join("\n")], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "passwords.txt";
        document.body.appendChild(element);
        element.click();
    };

    const clearEverything = (e) => {
        e.preventDefault();
        setCharacters('');
        setPasswords([]);
    }

    return (
        <div>
            <MatrixRainingCode className='absolute inset' />
            <div className='w-screen h-screen p-10 md:p-0 flex flex-row justify-center items-center'>
                <div className='w-full h-full md:w-1/2 md:h-3/4 flex flex-col items-center p-10 bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-purple-500'>
                    <h1 className='text-3xl uppercase font-bold text-purple-500'>PWD <span className='text-3xl uppercase font-bold text-white '>GEN</span></h1>

                    <form className='mt-10'>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input 
                                        type="number" name="min" id="min" placeholder="Minimum Characters"
                                        className="w-full rounded-md border border-purple-500 bg-black py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-400 focus:shadow-md"
                                        value={minLength}
                                        onChange={(e) => setMinLength(e.target.value)}
                                        min="1" 
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input 
                                        type="number" name="max" id="max" placeholder="Maximum Characters"
                                        className="w-full rounded-md border border-purple-500 bg-black py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-400 focus:shadow-md" 
                                        value={maxLength}
                                        onChange={(e) => setMaxLength(e.target.value)}
                                        min="1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <input 
                                type="text" name="pwd" id="pwd" placeholder=" e.g. abcd1234@?" 
                                className="w-full appearance-none rounded-md border border-purple-500 bg-black py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-400 focus:shadow-md" 
                                value={characters}
                                onChange={(e) => setCharacters(e.target.value)}
                            />
                        </div>
                        
                        <div className="mb-5">
                            <label className="text-white font-mono">Number of Passwords: {numPasswords}</label>
                            <input 
                                type="range" 
                                min="1" 
                                max="1000" 
                                value={numPasswords} 
                                onChange={(e) => setNumPasswords(e.target.value)}
                                 className="w-full h-2 cursor-pointer appearance-none"
                            />
                        </div>

                        <div className='w-full flex flex-row justify-center mt-5'>
                            <button
                                onClick={generatePassword}
                                className="hover:shadow-form rounded-full bg-purple-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Generate
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 mb-5 bg-none border border-purple-500 text-white font-mono font-extralight  p-4 rounded-md w-full h-40 overflow-y-scroll">
                        {passwords.map((pw, index) => (
                            <div key={index} className=" text-sm mb-1">
                                {pw}
                            </div>
                        ))}
                       
                    </div>

                    <div className=' w-full  flex flex-row gap-6 items-end justify-end'>
                        <IoCloudDownloadOutline onClick={downloadPasswords} className='cursor-pointer text-purple-500' />
                        <MdClear onClick={clearEverything} className='cursor-pointer text-purple-500'/>
                    </div>

                    <div className='text-white font-mono mt-10'>
                        Made with 💗 By <a href='https://github.com/themiya-420'>Themiya | View my Github</a>
                    </div>

                    <div className='text-gray-400 text-sm font-mono mt-5'>
                        Passwords DO NOT Save on the Backend.
                    </div>
                </div>
            </div>

           
        </div>
    );
}

export default Home;

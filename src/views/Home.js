import React from 'react'

//Component Imports
import MatrixRainingCode from '../components/MatrixEffect'

const Home = () => {
  return (
    <div className=''>
        <MatrixRainingCode/>
        <div className='w-screen h-screen flex flex-row justify-center items-center'>
            <div className='w-1/2 h-3/4 flex flex-col items-center p-10 bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-purple-500 '>

            <h1 className='text-3xl uppercase font-bold text-purple-500'>PWD <span className='text-3xl uppercase font-bold text-white '>GEN</span></h1>
           
            <form className='mt-10'>
                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                
                                <input type="number" name="min" id="min" placeholder="Minimun Characters"
                                    class="w-full rounded-md border border-purple-500 bg-black py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-400 focus:shadow-md" />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                
                                <input type="number" name="max" id="max" placeholder="Maximum Characters"
                                    class="w-full rounded-md border border-purple-500 bg-black py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-400 focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        
                        <input type="text" name="pwd" id="pwd" placeholder="Input Characters" 
                            class="w-full appearance-none rounded-md border border-purple-500 bg-black py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-400 focus:shadow-md" />
                    </div>

                    
                    <div className='w-full flex flex-row justify-center mt-5'>
                        <button
                            class="hover:shadow-form rounded-full bg-purple-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Generate
                        </button>
                    </div>
                </form>
    

            </div>
        </div>
    </div>
  )
}

export default Home